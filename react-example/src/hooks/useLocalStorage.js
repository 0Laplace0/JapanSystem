import { useState, useEffect } from "react";

export default function useLocalStorage(key, initialValue) {
  const [updatedAt, setUpdatedAt] = useState(null);

  const [value, setValue] = useState(() => {
    try {
      const jsonValue = localStorage.getItem(key);

      if (jsonValue != null) {
        return JSON.parse(jsonValue);
      }

      // รองรับ initialValue เป็น function เช่น () => []
      return typeof initialValue === "function"? initialValue() : initialValue;

    } catch (err) {
      console.error("Error reading localStorage:", err);
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      setUpdatedAt(new Date());
    } catch (err) {
      console.error("Error saving to localStorage:", err);
    }
  }, [key, value]);

  function remove() {
    localStorage.removeItem(key);
    setValue(initialValue);
  }

  return { value, setValue, remove, updatedAt };
}
