import React from "react";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
import { TodoEdit } from "./TodoEdit";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);

  // Add the contents of the to-do list
  const addTodos = (task) => {
    setTodos([...todos, { id: uuidv4(), task: task, completed: false, isEditing: false }]);
  };

  // create a toggle for property completed
  const toggleCompleted = (id) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)));
  };

  // Delete the contents of the to-do list
  const todoDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // create a toggle for property isEditing
  const editToggle = (id) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo)));
  };

  // Update the contents of the to-do list
  const editTodos = (task, id) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, task: task, isEditing: !todo.isEditing } : todo)));
  };

  // count how many unfinished to-do lists there are
  const todosCompleted = todos.filter((todo) => todo.completed !== true);
  const count = todosCompleted.length;

  return (
    <div className="Todo-Wrapper">
      <h1>Your Todo List</h1>
      <TodoForm addTodos={addTodos} />
      {todos.map((data) => (data.isEditing ? <TodoEdit key={data.id} editTodos={editTodos} data={data} /> : <TodoList todoList={data} key={data.id} toggleCompleted={toggleCompleted} todoDelete={todoDelete} editToggle={editToggle} />))}

      <h3>{count} unfinished to-do lists</h3>
    </div>
  );
};
