import React, { useState } from "react";
import { Button } from "antd";
import { Input } from "antd";
import "./todo.css";

const Todo = ({ title, completed, removeTaskItemProp, editTaskPropItem }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [value, setValue] = useState(title);
  const [valueOption, setValueOption] = useState(title);
  const [complete, setComplete] = useState(completed);

  const handleDiv = () => {
    setIsEdit(true);
  };

  const handleOnKeyDown = (e) => {
    const key = e.keyCode;
    if (key === 13) {
      editTaskPropItem({ title: valueOption });
      setValue(valueOption);
      setIsEdit(false);
    } else if (key === 27) {
      setValueOption(value);
      setIsEdit(false);
    }
  };
  const handleOnChange = (e) => {
    setValueOption(e.target.value);
  };
  const handleButtonClick = () => {
    setComplete((prevComplete) => {
      const newState = !prevComplete;
      editTaskPropItem({ completed: newState });
      return newState;
    });
  };

  return isEdit ? (
    <div className="col-sm-4" onDoubleClick={handleDiv}>
      <div>
        <Input
          onChange={handleOnChange}
          onKeyDown={handleOnKeyDown}
          placeholder="Edit a task..."
          autoFocus={true}
          value={valueOption}
        />
      </div>
    </div>
  ) : (
    <>
      <div className="col-sm-4" onDoubleClick={handleDiv}>
        <h2 className={complete ? "completedColor" : ""}>{value}</h2>
      </div>
      <div className="col-sm-1">
        <Button
          className="todoButton"
          onClick={handleButtonClick}
          type="primary"
        >
          ✔
        </Button>
      </div>
      <div className="col-sm-1">
        <Button
          className="todoButton"
          type="primary"
          onClick={removeTaskItemProp}
        >
          ❌
        </Button>
      </div>
    </>
  );
};

export default Todo;
