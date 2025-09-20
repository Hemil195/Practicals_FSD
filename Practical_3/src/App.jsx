import React, { useEffect, useState } from "react";

function App() {
  const [date, setDate] = useState(new Date());
  const [greeting, setGreeting] = useState("");
  const [timeZone, setTimeZone] = useState("local");

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const hour = date.getHours();
    if (hour < 12) {
      setGreeting("Good Morning");
    } else if (hour < 17) {
      setGreeting("Good Afternoon");
    } else {
      setGreeting("Good Evening");
    }
  }, [date]);

  const getDisplayTime = () => {
    if (timeZone === "local") {
      return date;
    } else if (timeZone === "utc") {
      return new Date(date.getTime() + (date.getTimezoneOffset() * 60000));
    }
    return date;
  };

  const displayDate = getDisplayTime();
  
  const formattedDate = displayDate.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  
  const formattedTime = displayDate.toLocaleTimeString('en-US', {
    hour12: true,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });

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
    maxWidth: "500px",
    width: "100%",
    textAlign: "center",
    borderRadius: "8px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)"
  };

  const titleStyle = {
    fontSize: "28px",
    fontWeight: "normal",
    color: "#333",
    marginBottom: "30px",
    letterSpacing: "1px"
  };

  const greetingStyle = {
    fontSize: "20px",
    color: "#666",
    marginBottom: "20px",
    fontWeight: "300"
  };

  const dateStyle = {
    fontSize: "18px",
    color: "#333",
    marginBottom: "10px",
    fontWeight: "normal"
  };

  const timeStyle = {
    fontSize: "24px",
    color: "#555",
    fontWeight: "300",
    letterSpacing: "2px",
    marginBottom: "20px"
  };

  const buttonGroupStyle = {
    display: "flex",
    gap: "10px",
    justifyContent: "center",
    marginTop: "20px"
  };

  const buttonStyle = {
    background: "#fff",
    color: "#333",
    border: "1px solid #ddd",
    borderRadius: "4px",
    padding: "8px 16px",
    fontSize: "14px",
    fontWeight: "normal",
    cursor: "pointer",
    transition: "background-color 0.2s ease"
  };

  const activeButtonStyle = {
    ...buttonStyle,
    background: "#f8f8f8"
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h1 style={titleStyle}>Welcome to Charusat!!</h1>
        <div style={greetingStyle}>{greeting}!</div>
        <div style={dateStyle}>{formattedDate}</div>
        <div style={timeStyle}>{formattedTime}</div>
        <div style={buttonGroupStyle}>
          <button 
            style={timeZone === "local" ? activeButtonStyle : buttonStyle}
            onClick={() => setTimeZone("local")}
            onMouseEnter={(e) => e.target.style.background = "#f8f8f8"}
            onMouseLeave={(e) => e.target.style.background = timeZone === "local" ? "#f8f8f8" : "#fff"}
          >
            Local Time
          </button>
          <button 
            style={timeZone === "utc" ? activeButtonStyle : buttonStyle}
            onClick={() => setTimeZone("utc")}
            onMouseEnter={(e) => e.target.style.background = "#f8f8f8"}
            onMouseLeave={(e) => e.target.style.background = timeZone === "utc" ? "#f8f8f8" : "#fff"}
          >
            UTC Time
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
