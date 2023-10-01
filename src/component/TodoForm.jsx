import React from "react";
import { useState } from "react";

export const TodoForm = ({ addTodos }) => {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodos(task);

    setTask("");
  };

  return (
    <div className="Todo-Form">
      <form onSubmit={handleSubmit}>
        <input className="todo-input" type="text" placeholder="fill your todo" onChange={(e) => setTask(e.target.value)} value={task} />
        <button className="todo-btn">Add Todo</button>
      </form>
    </div>
  );
};
