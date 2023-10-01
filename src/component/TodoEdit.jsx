import React from "react";
import { useState } from "react";

export const TodoEdit = ({ editTodos, data }) => {
  const [task, setTask] = useState(data.task);

  const handleSubmit = (e) => {
    e.preventDefault();
    editTodos(task, data.id);

    setTask("");
  };

  return (
    <div className="Todo-Form">
      <form onSubmit={handleSubmit}>
        <input className="todo-input" type="text" placeholder="fill your todo" onChange={(e) => setTask(e.target.value)} value={task} />
        <button className="todo-btn">Edit Todo</button>
      </form>
    </div>
  );
};
