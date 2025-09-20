import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(-2);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleReset = () => setCount(0);
  const handleIncrement = () => setCount(count + 1);
  const handleDecrement = () => setCount(count - 1);
  const handleIncrementFive = () => setCount(count + 5);

  // Styles following the same pattern as other practicals
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

  const cardStyle = {
    background: "#fff",
    padding: "40px",
    maxWidth: "400px",
    width: "100%",
    textAlign: "center",
    borderRadius: "12px",
    boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
    border: "1px solid #e9ecef"
  };

  const titleStyle = {
    fontSize: "32px",
    fontWeight: "300",
    color: "#2c3e50",
    marginBottom: "25px",
    letterSpacing: "1px"
  };

  const buttonGroupStyle = {
    display: "flex",
    gap: "12px",
    marginBottom: "35px",
    justifyContent: "center",
    flexWrap: "wrap"
  };

  const buttonStyle = {
    background: "#6c5ce7",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    padding: "10px 18px",
    fontSize: "14px",
    fontWeight: "500",
    cursor: "pointer",
    transition: "all 0.3s ease",
    boxShadow: "0 2px 10px rgba(108, 92, 231, 0.3)"
  };

  const sectionTitleStyle = {
    fontSize: "22px",
    fontWeight: "400",
    color: "#34495e",
    marginBottom: "25px",
    marginTop: "30px",
    position: "relative"
  };

  const formGroupStyle = {
    marginBottom: "20px",
    textAlign: "left"
  };

  const labelStyle = {
    display: "inline-block",
    fontSize: "14px",
    color: "#555",
    marginRight: "15px",
    minWidth: "90px",
    fontWeight: "500"
  };

  const inputStyle = {
    background: "#f8f9fa",
    color: "#333",
    border: "2px solid #e9ecef",
    borderRadius: "6px",
    padding: "10px 15px",
    fontSize: "14px",
    fontWeight: "normal",
    outline: "none",
    width: "200px",
    transition: "all 0.3s ease"
  };

  const outputStyle = {
    marginTop: "25px",
    fontSize: "14px",
    color: "#fff",
    textAlign: "center",
    background: "#fd79a8",
    padding: "15px",
    borderRadius: "8px",
    fontWeight: "500"
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h1 style={titleStyle}>Count: {count}</h1>
        
        <div style={buttonGroupStyle}>
          <button 
            style={buttonStyle}
            onClick={handleReset}
            onMouseEnter={(e) => {
              e.target.style.transform = "translateY(-2px)";
              e.target.style.boxShadow = "0 4px 15px rgba(108, 92, 231, 0.4)";
              e.target.style.background = "#5b4ddb";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "translateY(0)";
              e.target.style.boxShadow = "0 2px 10px rgba(108, 92, 231, 0.3)";
              e.target.style.background = "#6c5ce7";
            }}
          >
            Reset
          </button>
          <button 
            style={buttonStyle}
            onClick={handleIncrement}
            onMouseEnter={(e) => {
              e.target.style.transform = "translateY(-2px)";
              e.target.style.boxShadow = "0 4px 15px rgba(108, 92, 231, 0.4)";
              e.target.style.background = "#5b4ddb";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "translateY(0)";
              e.target.style.boxShadow = "0 2px 10px rgba(108, 92, 231, 0.3)";
              e.target.style.background = "#6c5ce7";
            }}
          >
            Increment
          </button>
          <button 
            style={buttonStyle}
            onClick={handleDecrement}
            onMouseEnter={(e) => {
              e.target.style.transform = "translateY(-2px)";
              e.target.style.boxShadow = "0 4px 15px rgba(108, 92, 231, 0.4)";
              e.target.style.background = "#5b4ddb";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "translateY(0)";
              e.target.style.boxShadow = "0 2px 10px rgba(108, 92, 231, 0.3)";
              e.target.style.background = "#6c5ce7";
            }}
          >
            Decrement
          </button>
          <button 
            style={buttonStyle}
            onClick={handleIncrementFive}
            onMouseEnter={(e) => {
              e.target.style.transform = "translateY(-2px)";
              e.target.style.boxShadow = "0 4px 15px rgba(108, 92, 231, 0.4)";
              e.target.style.background = "#5b4ddb";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "translateY(0)";
              e.target.style.boxShadow = "0 2px 10px rgba(108, 92, 231, 0.3)";
              e.target.style.background = "#6c5ce7";
            }}
          >
            Increment 5
          </button>
        </div>

        <h2 style={sectionTitleStyle}>Welcome to CHARUSAT!!!</h2>
        
        <div style={formGroupStyle}>
          <label style={labelStyle}>First Name:</label>
          <input
            type="text"
            style={inputStyle}
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            onFocus={(e) => {
              e.target.style.borderColor = "#6c5ce7";
              e.target.style.boxShadow = "0 0 0 3px rgba(108, 92, 231, 0.1)";
            }}
            onBlur={(e) => {
              e.target.style.borderColor = "#e9ecef";
              e.target.style.boxShadow = "none";
            }}
            autoComplete="off"
          />
        </div>
        
        <div style={formGroupStyle}>
          <label style={labelStyle}>Last Name:</label>
          <input
            type="text"
            style={inputStyle}
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            onFocus={(e) => {
              e.target.style.borderColor = "#6c5ce7";
              e.target.style.boxShadow = "0 0 0 3px rgba(108, 92, 231, 0.1)";
            }}
            onBlur={(e) => {
              e.target.style.borderColor = "#e9ecef";
              e.target.style.boxShadow = "none";
            }}
            autoComplete="off"
          />
        </div>

        <div style={outputStyle}>
          <div>First Name: {firstName}</div>
          <div>Last Name: {lastName}</div>
        </div>
      </div>
    </div>
  );
}

export default App;
