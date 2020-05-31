import React, { useState, useEffect } from "react";
import axios from "axios";
import CricketerCard from "./CricketerCard";

function AdditionalCricketer(props) {
  const [additionalCricketers, setAdditionalCricketers] = useState([]);

  useEffect(() => {
    getAdditionalCricketers();
  }, []);

  function getAdditionalCricketers() {
    axios.get("http://localhost:3001/additional").then((response) => {
      setAdditionalCricketers(response.data);
    });
  }

  function AddToCSK(cricketer) {
    axios.post("http://localhost:3001/csk", cricketer).then(() => {
      props.refreshCSK();
      axios
        .delete("http://localhost:3001/additional/" + cricketer.id)
        .then(() => {
          getAdditionalCricketers();
        });
    });
  }
  function AddToMI(cricketer) {
    axios.post("http://localhost:3001/mi", cricketer).then(() => {
      props.refreshMI();
      axios
        .delete("http://localhost:3001/additional/" + cricketer.id)
        .then(() => {
          getAdditionalCricketers();
        });
    });
  }
  return (
    <div>
      <h1>Additional Cricketers</h1>
      <div className="team-container">
        {additionalCricketers.map((cricketer) => (
          <div key={cricketer.id} className="additional-cricketer-wrapper">
            <CricketerCard cricketer={cricketer} />
            <div>
              <button onClick={() => AddToCSK(cricketer)}>Add To CSK </button> |{" "}
              <button onClick={() => AddToMI(cricketer)}>Add To MI </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdditionalCricketer;
