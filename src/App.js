import React from "react";
import "./App.css";
import ms from "./ms.json";
import chennaiCricketers from "./chennai.json";
import mumbaiCricketers from "./mumbai.json";

function CricketerCard(props) {
  return (
    <div className="card" key={props.key}>
      <img
        className="profile-pic"
        src={props.cricketer.picture}
        alt="profile pic"
      ></img>

      <span className="name">
        {props.cricketer.name.first + " " + props.cricketer.name.last}{" "}
      </span>
      <span className="score">
        {" "}
        {props.cricketer.score} {props.cricketer.out ? null : "*"}{" "}
      </span>
    </div>
  );
}

function App() {
  console.log(ms);
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
