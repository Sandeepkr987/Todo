import React from 'react'

const Form = ({ setInputText, todos, setTodos, inputText }) => {
//events
    const inputTexthandler =(event) => {
      setInputText(event.target.value)
     console.log(event.target.value)
    };
    const SubmitHandler = (event) => {
        event.preventDefault()           //with event default is prevented to be removed
       setTodos([
           ...todos,
           { text: inputText , completed: false , id: Math.random() * 1000 + 1}
       ])   
       setInputText(" ");                                //reset inputText                                  
    };

    return (
        <form>
        <input value={inputText} onChange={inputTexthandler} type="text" className="todo-input" />
        <button onClick={SubmitHandler} className="todo-button" type="submit">
          <i className="fas fa-plus-square"></i>
        </button>
        <div className="select">
          <select name="todos" className="filter-todo">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </form>
    );
};

export default Form;