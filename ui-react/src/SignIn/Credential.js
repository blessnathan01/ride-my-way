import React from "react";
import "./driver.css";

function Credential(props) {
  return (
    <div className="task" onClick={() => props.onComplete(props.index)}>
      <p className="username">{props.username}</p>
      <p className="password">{props.password}</p>
      <p
        className={props.complete ? "submit-status-complete" : "submit-status"}
      >
        {props.complete ? "Complete" : "Not Complete"}
      </p>
    </div>
  );
}

export default Credential;
