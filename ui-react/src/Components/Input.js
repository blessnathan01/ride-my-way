import React from "react";

function Input(props) {
  return (
    <div className="input">
      <h3 className="input-username">{props.item.username}</h3>
    </div>
  );
}

export default Input;
