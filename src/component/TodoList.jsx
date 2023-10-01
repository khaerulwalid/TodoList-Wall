import React from "react";

export const TodoList = ({ todoList, toggleCompleted, todoDelete, editToggle }) => {
  return (
    <div className="Todo-List">
      <p onClick={() => toggleCompleted(todoList.id)} className={`${todoList.completed ? "completed" : "incompleted"}`}>
        {todoList.task}
      </p>
      <div>
        <button className="todo-btn" onClick={() => editToggle(todoList.id)}>
          Edit
        </button>
        <button className="todo-btn" onClick={() => todoDelete(todoList.id)}>
          Delete
        </button>
      </div>
    </div>
  );
};
