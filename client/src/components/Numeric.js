import React, { useState } from "react";
import "./numeric.css";
const Numeric = () => {
  const [hour, setHour] = useState(0);

  const changeHour = (event) => {
    event.preventDefault();
    setHour(event.target.value);
  };

  return (
    <div className="numeric">
      <label>Hour :</label>

      <input
        className="numericInput"
        type="number"
        id="tasks"
        name="tasks"
        min="0"
        max="23"
        onChange={(e) => changeHour(e)}
      ></input>
    </div>
  );
};

export default Numeric;
