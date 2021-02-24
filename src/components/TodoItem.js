import React from 'react';

const TodoItem = ({ item, handleChange }) => {
  return (
    <div className='todo-item'>
      <input
        type='checkbox'
        id={item.id}
        checked={item.completed}
        onChange={() => handleChange(item.id)}
      />
      <label htmlFor={item.id}>{item.text}</label>
    </div>
  );
};

export default TodoItem;
