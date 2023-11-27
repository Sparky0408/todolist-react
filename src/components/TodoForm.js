import React, { useState } from "react";

const TodoForm = ({addTodo}) => {
  const [value, setValue] = useState("");

  const handleSumbit = (e) => {
    e.preventDefault();
    if (value) {
       
        addTodo(value);
       
        setValue('');
      }
  };

  return (
    <form className="TodoForm" onSubmit={handleSumbit}>
      <input
        type="text"
        className="todo-input"
        placeholder="What is The Task Today?"
        onChange={(e) => setValue(e.target.value)}
      />

      <button type="submit" className="todo-btn">
        Add Task
      </button>
    </form>
  );
};

export default TodoForm;
