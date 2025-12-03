import { useState } from "react";
import DeleteIcon from "./assets/icon/deleteIcon.svg";

function Calculator() {

    const [display, setDisplay] = useState("0");
    const [prevValue, setPrevValue] = useState(null);
    const [operation, setOperation] = useState(null);
    const [reset, setReset] = useState(false);

    const numberClick = (num) => {
        if (display === "0" || reset) {
            setDisplay(String(num));
            setReset(false);
        } else {
            setDisplay(display + String(num));
        }
    };

    const dotClick = () => {
        if (reset) {
            setDisplay("0.");
            setReset(false);
            return;
        }
        if (!display.includes(".")) {
            setDisplay(display + ".");
        }
    };

    const clear = () => {
        setDisplay("0");
        setPrevValue(null);
        setOperation(null);
        setReset(false);
    };

    const operatorClick = (op) => {
        if (prevValue === null) {
        setPrevValue(parseFloat(display));
        } else if (!reset) {
        const result = calculate(prevValue, parseFloat(display), operation);
        setPrevValue(result);
        setDisplay(String(result));
        }
        setOperation(op);
        setReset(true);
    };

    const equal = () => {
        if (prevValue !== null && operation !== null) {
        const result = calculate(prevValue, parseFloat(display), operation);
        setDisplay(String(result));
        setPrevValue(null);
        setOperation(null);
        setReset(true);
        }
    };

    const calculate = (num1, num2, op) => {
        switch (op) {
            case "+": return num1 + num2;
            case "-": return num1 - num2;
            case "×": return num1 * num2;
            case "÷": return num2 !== 0 ? num1 / num2 : 0;
            case "%": return num1 / 100;
            default: return num2;
        }
    };

    return (
        <div className="calculator">
            <div className="calculator-display">
                {display}
            </div>

            <div className="calculator-btn">
                <button className="btn btn-func" onClick={clear}>C</button>
                <button className="btn btn-func" onClick={() => operatorClick("%")}>%</button>
                <button className="btn btn-op" onClick={() => operatorClick("÷")}>÷</button>
                <button className="btn btn-func" onClick={() => {
                    setDisplay(display.slice(0, -1) || "0");
                }}>
                    <img src={DeleteIcon} alt="deleteIcon" width={30} />
                </button>

                <button className="btn" onClick={() => numberClick(7)}>7</button>
                <button className="btn" onClick={() => numberClick(8)}>8</button>
                <button className="btn" onClick={() => numberClick(9)}>9</button>
                <button className="btn btn-op" onClick={() => operatorClick("×")}>×</button>

                <button className="btn" onClick={() => numberClick(4)}>4</button>
                <button className="btn" onClick={() => numberClick(5)}>5</button>
                <button className="btn" onClick={() => numberClick(6)}>6</button>
                <button className="btn btn-op" onClick={() => operatorClick("-")}>−</button>

                <button className="btn" onClick={() => numberClick(1)}>1</button>
                <button className="btn" onClick={() => numberClick(2)}>2</button>
                <button className="btn" onClick={() => numberClick(3)}>3</button>
                <button className="btn btn-op" onClick={() => operatorClick("+")}>+</button>

                <button className="btn btn-zero" onClick={() => numberClick(0)}>0</button>
                <button className="btn" onClick={dotClick}>.</button>
                <button className="btn btn-op" onClick={equal}>=</button>
            </div>
        </div>
    );
}

export default Calculator;