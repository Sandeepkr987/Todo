import React from 'react'
// import components
import Todo from './Todo';

const TodoList =({ todos, setTodos, filteredTodos}) => {
   
    return(
        <div className='todo-container'>
           <ul className='todo-list'>
               {  filteredTodos.map ((todo) => (
                   <Todo 
                   todos={todos} 
                   todo={todo}
                   text={todo.text} 
                   key={todo.id}
                   setTodos={setTodos} 
                   filteredTodos={filteredTodos} 
                   />
               ))}     
           </ul>
        </div>
    );
};

export default TodoList;