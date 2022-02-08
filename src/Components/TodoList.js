import React from 'react'
// import components
import Todo from './Todo';

const TodoList =({ todos, setTodos }) => {
   
    return(
        <div className='todo-container'>
           <ul className='todo-list'>
               {  todos.map ((todo) => (
                   <Todo 
                   todos={todos} 
                   todo={todo}
                   text={todo.text} 
                   key={todo.id}
                   setTodos={setTodos}  
                   />
               ))}     
           </ul>
        </div>
    );
};

export default TodoList;