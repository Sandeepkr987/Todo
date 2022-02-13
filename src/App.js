import logo from './logo.svg';
import './App.css';
import React,{ useState,useEffect } from 'react';

// import components 
import Form from './Components/From';
import TodoList from './Components/TodoList';

function App() {

  const [inputText , setInputText] = useState("");
  const [todos , setTodos] = useState([]);
  const [status , setStatus] = useState("All");
  const [filteredTodos , setFilteredTodos] = useState([]);
  
  useEffect(() => {
   filterHandler()
  }, [todos, status]);

  const filterHandler = () => {
    switch(status){
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true))
        break;
        case 'uncompleted':
          setFilteredTodos(todos.filter(todo => todo.completed === false))
          break;
          default:
            setFilteredTodos(todos);
    }
  };

  return (
    <div className="App">
      <header><h3>My Todo List !</h3></header>
     <Form  inputText={inputText} 
     todos={todos} setTodos={setTodos} 
     setInputText={setInputText}
     setStatus={setStatus}
     />

     <TodoList filteredTodos={filteredTodos} setTodos={setTodos} todos={todos}/>
    </div>
  );
}

export default App;
