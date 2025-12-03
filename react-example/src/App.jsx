import Navbar from "./navbar.jsx";
import "./navbar.css";
import Footer from "./footer.jsx";
import "./Footer.css";
import Calculator from "./Calculator";
import "./Calculator.css";
import InAndEx from "./InAndEx.jsx";

import { Routes, Route } from "react-router-dom";

function HomePage() {
  return (
    <div style={{ padding: "40px", textAlign: "center", color: "#fff", fontSize: "24px", fontWeight: "bold"  }}>
      <h1>Home Page</h1>
      <p>Example React Test</p>
    </div>
  );
}

function CalculatorPage() {
  return (
    <>
      <div style={{ textAlign: "center", padding: "20px", background: "#222", color: "#fff", fontSize: "24px", fontWeight: "bold" }}>
        Basic Calculator
      </div>
      <div style={{ minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center"}}>
        <Calculator />
      </div>
    </>
  );
}

function InAndExPage() {
  return (
    <>
      <div style={{ textAlign: "center", padding: "20px", background: "#222", color: "#fff", fontSize: "24px", fontWeight: "bold" }}>
        Income and Expenses
      </div>
      <div style={{ minHeight: "100vh" }}>
        <InAndEx />
      </div>
    </>
  );
}

function App() {
  return (
    <div style={{ background: "#121212", minHeight: "100vh" }}>
      <div>
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/calculator" element={<CalculatorPage />} />
        <Route path="/inandex" element={<InAndExPage />} />
      </Routes>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;