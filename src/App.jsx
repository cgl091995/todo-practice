import { useState } from 'react'
import './App.css'
import { TodoList } from './components/TodoList'
import { Todo } from './components/Todo'

function App() {
  

  return (
    <>
    <header>
      <h1>Práctica To Do List</h1>
    </header>

    <main>
    <h2>Lista de tareas</h2>
    
    <Todo />

    <TodoList />
    
    </main>

    <footer>
      <p>Práctica To Do List</p>
    </footer>
      
    </>
  )
}

export default App
