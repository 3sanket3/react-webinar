import React, { useState, useEffect } from "react";
import "./App.css";

import CricketerCard from "./components/CricketerCard";
import axios from "axios";
import AdditionalCricketer from "./components/AdditionalCricketers";

function App() {
  const [showCSK, setShowCSK] = useState(true); //csk / mi / both
  const [showMI, setShowMI] = useState(true); //csk / mi / both
  const [chennaiCricketers, setChennaiCricketers] = useState([]);
  const [mumbaiCricketers, setMumbaiCricketers] = useState([]);

  useEffect(() => {
    getCSK();
    getMI();
  }, []);

  function getMI() {
    axios.get("http://localhost:3001/mi").then((response) => {
      setMumbaiCricketers(response.data);
    });
  }

  function getCSK() {
    axios.get("http://localhost:3001/csk").then((response) => {
      setChennaiCricketers(response.data);
    });
  }
  function toggleShowCSKValue() {
    setShowCSK(!showCSK);
  }

  function toggleShowMIValue() {
    setShowMI(!showMI);
  }

  return (
    <div>
      <strong>Show :</strong>{" "}
      <button href="#" onClick={toggleShowCSKValue}>
        {showCSK ? "Hide CSK" : "Show CSK"}
      </button>{" "}
      |{" "}
      <button href="#" onClick={toggleShowMIValue}>
        {showMI ? "Hide MI" : "Show MI"}
      </button>{" "}
      {/* {showCSK.toString()} | {showMI.toString()} */}
      {showCSK && (
        <>
          <h1>Chennai Super Kings</h1>
          <div className="team-container">
            {chennaiCricketers.map((cricketer) => (
              <CricketerCard key={cricketer.id} cricketer={cricketer} />
            ))}
          </div>
        </>
      )}
      {showMI && (
        <>
          {" "}
          <h1>Mumbai Indians</h1>
          <div className="team-container">
            {mumbaiCricketers.map((cricketer) => (
              <CricketerCard key={cricketer.id} cricketer={cricketer} />
            ))}
          </div>
        </>
      )}
      <AdditionalCricketer refreshCSK={getCSK} refreshMI={getMI} />
    </div>
  );
}

export default App;
