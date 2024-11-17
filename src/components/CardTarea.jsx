import { useTodoList } from "../hooks/useTodoList"


export const CardTarea = () => {

  const {todos, handleDeleteTodo, handleToggleTodo} = useTodoList()

  return (
    <>
    <article className="">
      <p></p>
      <button >Terminada</button>
      <button>Eliminada</button>
    </article>
    
    </>
  )
}
