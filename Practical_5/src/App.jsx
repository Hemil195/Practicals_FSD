import React, { useState, useEffect } from "react";

const operators = ["/", "*", "+", "-", "C", "DEL"];
const numbers = [
  ["1", "2", "3"],
  ["4", "5", "6"],
  ["7", "8", "9"],
  ["0", ".", "="],
];

function App() {
  const [expression, setExpression] = useState("");
  const [result, setResult] = useState("");

  // Add keyboard support
  useEffect(() => {
    const handleKeyPress = (event) => {
      const key = event.key;
      
      if (/[0-9.]/.test(key)) {
        handleButtonClick(key);
      } else if (["+", "-", "*", "/"].includes(key)) {
        handleButtonClick(key);
      } else if (key === "Enter" || key === "=") {
        event.preventDefault();
        handleButtonClick("=");
      } else if (key === "Backspace") {
        event.preventDefault();
        handleButtonClick("DEL");
      } else if (key === "Escape" || key.toLowerCase() === "c") {
        event.preventDefault();
        handleButtonClick("C");
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [expression, result]);

  const handleButtonClick = (value) => {
    if (value === "C") {
      // Clear all - reset everything
      setExpression("");
      setResult("");
    } else if (value === "DEL") {
      // Delete last character
      setExpression(expression.slice(0, -1));
      setResult("");
    } else if (value === "=") {
      if (expression.trim() === "") {
        setResult("0");
        return;
      }
      try {
        // Replace common mathematical symbols for eval
        const processedExpression = expression
          .replace(/×/g, "*")
          .replace(/÷/g, "/");
        
        // eslint-disable-next-line no-eval
        const evalResult = eval(processedExpression);
        
        if (!isFinite(evalResult)) {
          setResult("Error");
        } else {
          // Format result to avoid very long decimals
          const formattedResult = Number(evalResult.toFixed(10)).toString();
          setResult(formattedResult);
        }
      } catch {
        setResult("Error");
      }
    } else if (["+", "-", "*", "/"].includes(value)) {
      // Handle operators
      if (expression === "" && value === "-") {
        // Allow negative numbers
        setExpression(value);
      } else if (expression !== "") {
        // Prevent multiple consecutive operators
        const lastChar = expression.slice(-1);
        if (!["+", "-", "*", "/"].includes(lastChar)) {
          setExpression(expression + value);
        } else {
          // Replace last operator with new one
          setExpression(expression.slice(0, -1) + value);
        }
      }
      setResult("");
    } else {
      // Handle numbers and decimal point
      if (result && result !== "Error" && /[0-9.]/.test(value)) {
        // If we just calculated a result, start fresh with new number
        setExpression(value);
        setResult("");
      } else {
        // Prevent multiple decimal points in the same number
        if (value === ".") {
          const parts = expression.split(/[+\-*/]/);
          const currentNumber = parts[parts.length - 1];
          if (currentNumber.includes(".")) {
            return; // Don't add another decimal point
          }
        }
        setExpression(expression + value);
        setResult("");
      }
    }
  };

  // Consistent styling with other practicals
  const containerStyle = {
    minHeight: "100vh",
    background: "#f5f5f5",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Arial, sans-serif",
    margin: "0",
    padding: "20px"
  };

  const calculatorStyle = {
    background: "#fff",
    borderRadius: "12px",
    boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
    border: "1px solid #e9ecef",
    width: "340px",
    padding: "0",
    overflow: "hidden"
  };

  const displayStyle = {
    background: "#f8f9fa",
    color: "#333",
    minHeight: "100px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    padding: "20px",
    fontSize: "24px",
    fontWeight: "300",
    position: "relative",
    borderBottom: "1px solid #e9ecef"
  };

  const resultStyle = {
    color: "#666",
    fontSize: "16px",
    position: "absolute",
    top: "15px",
    right: "20px",
    fontWeight: "normal"
  };

  const expressionStyle = {
    fontSize: "28px",
    color: "#333",
    fontWeight: "300",
    wordBreak: "break-all",
    minHeight: "35px",
    display: "flex",
    alignItems: "flex-end"
  };

  const operatorRowStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(6, 1fr)",
    background: "#fff",
    borderBottom: "1px solid #e9ecef",
    gap: "1px",
    background: "#e9ecef"
  };

  const operatorButtonStyle = {
    background: "#28a745",
    color: "#fff",
    border: "none",
    fontSize: "16px",
    fontWeight: "500",
    padding: "15px 0",
    cursor: "pointer",
    transition: "all 0.2s ease"
  };

  const clearButtonStyle = {
    ...operatorButtonStyle,
    background: "#ffc107",
    color: "#212529",
    fontWeight: "600"
  };

  const deleteButtonStyle = {
    ...operatorButtonStyle,
    background: "#dc3545"
  };

  const numpadStyle = {
    padding: "15px"
  };

  const rowStyle = {
    display: "flex",
    gap: "10px",
    marginBottom: "10px"
  };

  const numberButtonStyle = {
    background: "#fff",
    color: "#333",
    border: "1px solid #ddd",
    borderRadius: "6px",
    flex: 1,
    fontSize: "18px",
    fontWeight: "normal",
    padding: "15px 0",
    margin: "0",
    cursor: "pointer",
    transition: "all 0.2s ease"
  };

  const equalsButtonStyle = {
    ...numberButtonStyle,
    background: "#007bff",
    color: "#fff",
    border: "1px solid #007bff"
  };

  return (
    <div style={containerStyle}>
      <div style={calculatorStyle}>
        <div style={displayStyle}>
          {result !== "" && <span style={resultStyle}>= {result}</span>}
          <span style={expressionStyle}>{expression || "0"}</span>
        </div>
        
        <div style={operatorRowStyle}>
          {operators.map((op) => (
            <button
              key={op}
              style={
                op === "C" 
                  ? clearButtonStyle 
                  : op === "DEL" 
                    ? deleteButtonStyle 
                    : operatorButtonStyle
              }
              onClick={() => handleButtonClick(op)}
              onMouseEnter={(e) => {
                if (op === "C") {
                  e.target.style.background = "#e0a800";
                } else if (op === "DEL") {
                  e.target.style.background = "#c82333";
                } else {
                  e.target.style.background = "#218838";
                }
              }}
              onMouseLeave={(e) => {
                if (op === "C") {
                  e.target.style.background = "#ffc107";
                } else if (op === "DEL") {
                  e.target.style.background = "#dc3545";
                } else {
                  e.target.style.background = "#28a745";
                }
              }}
              type="button"
            >
              {op}
            </button>
          ))}
        </div>
        
        <div style={numpadStyle}>
          {numbers.map((row, i) => (
            <div style={rowStyle} key={i}>
              {row.map((num) => (
                <button
                  key={num}
                  style={num === "=" ? equalsButtonStyle : numberButtonStyle}
                  onClick={() => handleButtonClick(num)}
                  onMouseEnter={(e) => {
                    if (num === "=") {
                      e.target.style.background = "#0056b3";
                    } else {
                      e.target.style.background = "#f8f9fa";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (num === "=") {
                      e.target.style.background = "#007bff";
                    } else {
                      e.target.style.background = "#fff";
                    }
                  }}
                  type="button"
                >
                  {num}
                </button>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;