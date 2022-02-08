import logo from './logo.svg';
import './App.css';
import React,{ useState } from 'react';
// import components 

import Form from './Components/From';
import TodoList from './Components/TodoList';

function App() {
  const [inputText , setInputText] = useState("");
  const [todos , setTodos] = useState([]);
  
  return (
    <div className="App">
      <header><h3>My Todo List !</h3></header>
     <Form  inputText={inputText} todos={todos} setTodos={setTodos} setInputText={setInputText}/>
     <TodoList  setTodos={setTodos} todos={todos}/>
    </div>
  );
}

export default App;
