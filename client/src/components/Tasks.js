import React, { useState, useEffect } from "react";
import axios from "axios";
import "antd/dist/antd.css";
import Form from "./Form";
import Section from "./Section";
import List from "./List";
import Select from "./Select";
import "./tasks.css";

const Tasks = () => {
  const [todolist, setTodoList] = useState([]);
  const title = "CRUD APPLICATION";

  useEffect(() => {
    async function fechData() {
      const { data } = await axios.get(
        "https://crudcrud.com/api/9a63c578d27049459a593c08e64d2bdb/todo/"
      );
      setTodoList(data);
    }
    fechData();
    todolist && localStorage.setItem("todos", JSON.stringify(todolist));
  }, []);

  const addTask = async (item) => {
    const { data } = await axios.post(
      "https://crudcrud.com/api/9a63c578d27049459a593c08e64d2bdb/todo/",
      item
    );
    setTodoList((ant) => [...ant, data]);
  };

  const removeTask = async (id) => {
    await axios.delete(
      `https://crudcrud.com/api/9a63c578d27049459a593c08e64d2bdb/todo/${id}`
    );
    setTodoList((prevList) => prevList.filter((item) => item._id !== id));
    console.log(id);
  };

  const editTask = async (id, item) => {
    await axios.put(
      `https://crudcrud.com/api/9a63c578d27049459a593c08e64d2bdb/todo/${id}`,
      item
    );
  };
  return (
    <div className="container-fluid">
      <Section>
        <img className="blobOneTasks" src="/background-blob-1.png" alt="blob" />
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
