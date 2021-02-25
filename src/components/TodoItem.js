import React from 'react';

// function based components
const TodoItem = ({ item, handleChange }) => {
  return (
    <div className='todo-item'>
      <input
        type='checkbox'
        id={item.id}
        checked={item.completed}
        onChange={() => handleChange(item.id)}
      />
      {/* <p >{item.text}</p> */}
      <label className={item.completed ? 'completed-item' : 'false'} htmlFor={item.id}>{item.text}</label>
    </div>
  );
};

export default TodoItem;
