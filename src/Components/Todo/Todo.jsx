

import React from 'react'

const Todo = () => {
  return (
    <>
      <section className='todo-container'>
        <header>
            <h1>TodoList</h1>
        </header>
        <section className='form'>

            <form>
                <div>
                    <input type="text" className='todo-input' autoComplete='off' />
                </div>
                <div>
                    <button type='submit' className='todo-btn'>Add Task</button>
                </div>
            </form>

        </section>

      </section>
    </>
  )
}

export default Todo
