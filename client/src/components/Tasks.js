import React, { useState, useEffect } from "react";
import axios from "axios";
import "antd/dist/antd.css";
import Form from "./Form";
import Section from "./Section";
import List from "./List";
import Select from "./Select";
import "./tasks.css";

// const list = [
//   { id: 1, title: "perueba 1 ", completed: false },
//   { id: 2, title: "perueba 2 ", completed: false },
//   { id: 3, title: "perueba 3 ", completed: false },
//   { id: 4, title: "perueba 4 ", completed: false },
// ];

const Tasks = () => {
  const [todolist, setTodoList] = useState([]);
  const title = "CRUD APPLICATION";

  useEffect(() => {
    async function fechData() {
      const { data } = await axios.get(
        "https://crudcrud.com/api/7d16698915b44aa0b7f084d0aa8c0b42/todo/"
        // "https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8"
      );
      setTodoList(data);
    }
    fechData();
  }, []);
  console.log(todolist);
  const addTask = async (item) => {
    const { data } = await axios.post(
      "https://crudcrud.com/api/7d16698915b44aa0b7f084d0aa8c0b42/todo/",
      item
    );
    setTodoList((ant) => [...ant, data]);
  };

  const removeTask = async (id) => {
    await axios.delete(
      `https://crudcrud.com/api/7d16698915b44aa0b7f084d0aa8c0b42/todo/${id}`
    );
    setTodoList((prevList) => prevList.filter((item) => item._id !== id));
    console.log(id);
  };

  const editTask = async (id, item) => {
    await axios.put(
      `https://crudcrud.com/api/7d16698915b44aa0b7f084d0aa8c0b42/todo/${id}`,
      item
    );
  };
  return (
    <div className="container-fluid">
      <Section>
        <h1>{title}</h1>
      </Section>
      <Section>
        <Select />
      </Section>

      <Section>
        <Form addTask={addTask} />
      </Section>

      <Section>
        <List
          removeTaskProp={removeTask}
          list={todolist}
          editTaskprop={editTask}
        />
      </Section>
    </div>
  );
};

export default Tasks;
