import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [todo, setTodo] = useState({desc:'', date:''});
  const [todos, setTodos] = useState([]);

  const addTodo = (event) => {
    event.preventDefault();
    setTodos([...todos, todo]);
  }

  const inputChanged =(event) => {
    setTodo({...todo, [event.target.name]: event.target.value});
  }

  const handleDelete = (index) => {
    setTodos(todos.filter((todo, i) => i !== index))
  };


  return ( 
    <div className='App'>
      <h3>Add to do</h3>
      <form onSubmit={addTodo}>
        <span>Description: </span>
        <input type="text" name='desc' value={todo.desc} onChange={inputChanged} />
        <span>Date:</span>
        <input type="date" name='date' value={todo.date} onChange={inputChanged} />
        <input type="submit" value="Add" />
      </form>

      <table className='table'>
        <tbody>
          <tr>
            <td><b>Date</b></td>
            <td><b>Description</b></td>
          </tr>
          {
            todos.map((todo, index) => 
            <tr key={index}>
              <td className='item'>{todo.date}</td>
              <td className='item'>{todo.desc}</td>
              <td><button onClick={() => handleDelete(index)}>Delete</button></td>
            </tr> 
            )
          }


        </tbody>
      </table>

    </div>
  );
}

export default App;
