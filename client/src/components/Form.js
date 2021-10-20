import React, { useState } from "react";
import "./form.css";
import { Button } from "antd";
import { Input } from "antd";

const Form = ({ addTask }) => {
  const [inputValue, setInputValue] = useState("");
  const [checked, setChecked] = useState(false);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleFormSub = (e) => {
    e.preventDefault();
    if (inputValue.trim() === "") return;

    addTask({ title: inputValue, completed: false, priority: checked });
    setInputValue("");
  };

  const handleChange = () => {
    setChecked(!checked);
  };
  return (
    <form onSubmit={handleFormSub}>
      <div className="row">
        <div className="col-sm-2"></div>

        <div className="col-sm-6">
          <Input
            value={inputValue}
            onChange={handleInputChange}
            className="todoInput"
            placeholder="Enter a task..."
          />
          <div>
            <label className="priority">
              <input
                type="checkbox"
                checked={checked}
                onChange={handleChange}
              />
              <span> PRIORITY</span>
            </label>

            {/* <p>Is priority checked? {checked.toString()}</p> */}
          </div>
        </div>
        <div className="col-sm-4 todoButton2">
          <Button className="todoButton" type="primary" htmlType="submit">
            Add
          </Button>
        </div>
      </div>
    </form>
  );
};

export default Form;
