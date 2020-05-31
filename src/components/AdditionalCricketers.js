import React, { useState, useEffect } from "react";
import axios from "axios";
import CricketerCard from "./CricketerCard";

function AdditionalCricketer(props) {
  const [additionalCricketers, setAdditionalCricketers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/additional").then((response) => {
      setAdditionalCricketers(response.data);
    });
  }, []);

  return (
    <div>
      <h1>Additional Cricketers</h1>
      <div className="team-container">
        {additionalCricketers.map((cricketer) => (
          <div key={cricketer.id} className="additional-cricketer-wrapper">
            <CricketerCard cricketer={cricketer} />
            <div>
              <button>Add To CSK </button> | <button>Add To MI </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdditionalCricketer;
