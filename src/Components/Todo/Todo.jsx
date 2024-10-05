
import './todo.css';
import React, { useEffect, useState } from 'react'

const Todo = () => {

  const [inputValue, setInputValue] = useState('');
  const [task, setTask] = useState([]);
  const [dateTime, setDateTime] = useState('')


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

    console.log("hey");
  }

  

  // Adding Date & Time in the App... 

  useEffect(()=>{

    const interval = setInterval(()=>{


      const now = new Date();
    const formattedDate = now.toLocaleDateString();
    const formattedTime = now.toLocaleTimeString();
     setDateTime(`${formattedDate} - ${formattedTime}`)
  
  
    },1000);

    return ()=> clearInterval(interval)

  },[])

  // Delete Function...!

  function handleDelete(currEle){
    console.log(task);
    const updatedTask = task.filter((value)=> currEle != value)
    setTask(updatedTask);
    
  }

  // Clear All Function...!

  function handleClearAll(){
    setTask([])
  }


  return (
    <>
      <section className='todo-container'>
        <header>
          <h1>TodoList</h1>
          <h2 className='date-time'>{dateTime}</h2>
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
               <button>Check</button>
               <button onClick={()=>handleDelete(currEle)}>Delete</button>
                </li>
                )
              })
            }
          </ul>
        </section>

       <section>
        <button onClick={handleClearAll}>Clear All</button>
       </section>

      </section>
    </>
  )
}

export default Todo;
