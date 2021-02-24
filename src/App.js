import './App.css';
import TodoItem from './components/TodoItem';
import React from 'react';
import todosData from './todosData';

// function App() {
//   const data = TodosData.map((item) => {
//     return (
//       <TodoItem
//         key={item.id}
//         id={item.id}
//         desc={item.text}
//         status={item.completed}
//       />
//     );
//   });

//   return <div className='todo-list'>{data}</div>;
// }

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: todosData,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(id) {
    console.log('Changed: ', id);
    this.setState((prevState) => {
      const updatedTodos = prevState.todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      });
      return {
        todos: updatedTodos,
      };
    });
  }

  render() {
    const data = this.state.todos.map((item) => {
      return <TodoItem handleChange={this.handleChange} item={item} />;
    });
    return <div className='todo-list'>{data}</div>;
  }
}

export default App;

// TO CHECK
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findindex
