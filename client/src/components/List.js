import React from "react";
import Todo from "./Todo";
import "./list.css";

const List = ({ list, removeTaskProp, editTaskprop }) => {
  const mapedList = list.map((item) => (
    <Todo
      title={item.title}
      completed={item.completed}
      removeTaskItemProp={(e) => removeTaskProp(item._id)}
      editTaskPropItem={(updatedI) => editTaskprop(item._id, updatedI)}
      key={item.title}
    />
  ));
  return (
    <div className="column ">
      <div className="col-sm-2"></div>
      <div className="col-sm-10 textTask">
        <div className="row ">{mapedList}</div>
      </div>
    </div>
  );
};

export default List;
