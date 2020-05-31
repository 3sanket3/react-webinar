import React from "react";

function CricketerCard(props) {
  return (
    <div className="card">
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
        {props.cricketer.score} {props.cricketer.out === false ? "*" : null}
      </span>
    </div>
  );
}

export default CricketerCard;
