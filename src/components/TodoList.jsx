
import React, { useReducer } from 'react'
import { todoRreducer } from '../reducer'
import { useTodoList } from '../hooks/useTodoList'
import { Card } from 'react-bootstrap'
import { CardTarea } from './CardTarea'
   
   export const TodoList = () => {
   
    const {todos, handleDeleteTodo, handleToggleTodo} = useTodoList()
    console.log(todos)

       return (
        <>


          <section>
               <h2>Mostrar Tareas</h2>
              <code><pre>{JSON.stringify(todos)}</pre></code>
                  {todos.map((todo)=>(
                    <CardTarea key={todo.id} {...todo} handleDeleteTodo={handleDeleteTodo} handleToggleTodo={handleToggleTodo}/> 
                  ))}
   
          </section>
          </>
       )
   }
   
   