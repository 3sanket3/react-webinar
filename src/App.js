import React from "react";
import "./App.css";
import chennaiCricketers from "./chennai.json";
import mumbaiCricketers from "./mumbai.json";
import CricketerCard from "./components/CricketerCard";

function App() {
  return (
    <div>
      <h1>Chennai Super Kings</h1>
      <div className="team-container">
        {chennaiCricketers.map((cricketer) => (
          <CricketerCard key={cricketer.id} cricketer={cricketer} />
        ))}
      </div>
      <h1>Mumbai Indians</h1>
      <div className="team-container">
        {mumbaiCricketers.map((cricketer) => (
          <CricketerCard key={cricketer.id} cricketer={cricketer} />
        ))}
      </div>
    </div>
  );
}

export default App;
