import { useEffect, useReducer } from "react";
import { todoRreducer } from "../reducer";



export const useTodoList = () => {

    const init=()=>{ 
        
        const local = localStorage.getItem("todos")
            if(local){
                return JSON.parse(local)
            }else{
                return []
            }
            
    }    
  
    const [todos, dispatch] = useReducer(todoRreducer, [], init);
    console.log(todos)
    // useEffect(()=>{
    //     const tareasGuardadas = JSON.parse(localStorage.getItem("todos"));
    //     console.log(tareasGuardadas);
    // },[])
    useEffect(()=>{
        localStorage.setItem("todos", JSON.stringify(todos))
    },[todos])
   

    
    const handleNewTodo = (newTodo) => {
       dispatch({
            type: '[TODO] add todo',
            payload: newTodo

       })
    }

    const handleDeleteTodo = (id) => {
        dispatch({
            type: '[TODO] delete todo',
            payload: id
        })
      
    }

    const handleToggleTodo = (id) => {
        dispatch({
            type: '[TODO] toggle todo',
            payload: id
        })
       
    }

  


    return {
        todos,
        handleDeleteTodo,
        handleNewTodo,
        handleToggleTodo
    }
}

