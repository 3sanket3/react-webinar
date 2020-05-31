import React, { useState, useEffect } from "react";
import "./App.css";

import CricketerCard from "./components/CricketerCard";
import AdditionalCricketers from "./components/AdditionalCricketers";
import axios from "axios";

function App() {
  const [showCSK, setShowCSK] = useState(true);

  const [showMI, setShowMI] = useState(true);

  const [chennaiCricketers, setChennaiCricketers] = useState([]);
  const [mumbaiCricketers, setMumbaiCricketers] = useState([]);

  useEffect(() => {
    getCSK();

    getMI();
  }, []);

  function toggleCSK() {
    setShowCSK(!showCSK);
  }

  function toggleMI() {
    setShowMI(!showMI);
  }

  function getCSK() {
    axios.get("http://localhost:3001/csk").then((response) => {
      setChennaiCricketers(response.data);
    });
  }

  function getMI() {
    axios.get("http://localhost:3001/mi").then((response) => {
      setMumbaiCricketers(response.data);
    });
  }
  return (
    <div>
      <button onClick={toggleCSK}> {showCSK ? "Hide" : "Show"} CSK</button> |{" "}
      <button onClick={toggleMI}> {showMI ? "Hide" : "Show"} MI</button>
      {showCSK ? (
        <>
          <h1>Chennai Super Kings</h1>
          <div className="team-container">
            {chennaiCricketers.map((cricketer) => (
              <CricketerCard key={cricketer.id} cricketer={cricketer} />
            ))}
          </div>
        </>
      ) : null}
      {showMI ? (
        <>
          <h1>Mumbai Indians</h1>
          <div className="team-container">
            {mumbaiCricketers.map((cricketer) => (
              <CricketerCard key={cricketer.id} cricketer={cricketer} />
            ))}
          </div>
        </>
      ) : null}
      <AdditionalCricketers refreshCSK={getCSK} refreshMI={getMI} />
    </div>
  );
}

export default App;
