
import './todo.css';
import React, { useState } from 'react'

const Todo = () => {

  const [inputValue, setInputValue] = useState('');
  const [task, setTask] = useState([]);

  function handleInputValue(value) {
    setInputValue(value)
  }

  function handleForm(e) {
    e.preventDefault();

    if (!inputValue) return;


    if (task.includes(inputValue)) {
      setInputValue('');
      return;
    };



    setTask((prevTask) => [...prevTask, inputValue]);
    console.log(setTask);

    setInputValue('')

  }


  return (
    <>
      <section className='todo-container'>
        <header>
          <h1>TodoList</h1>
        </header>
        <section className='form'>

          <form onSubmit={handleForm}>
            <div>
              <input type="text" className='todo-input' autoComplete='off'
                value={inputValue}
                onChange={(e) => handleInputValue(e.target.value)} />
            </div>
            <div>
              <button type='submit' className='todo-btn'>Add Task</button>
            </div>
          </form>

        </section>
        
        <section className='muUnordlist'>
          <ul>
            {
              task.map((currEle, index)=>{
                return(

                  <li key={index}>
               <span>{currEle}</span>
                </li>
                )
              })
            }
          </ul>

        </section>

      </section>
    </>
  )
}

export default Todo;
