
import { useTodoList } from "../hooks/useTodoList"
import { useForm } from "../hooks/useForm"


   
   export const Todo = () => {
   const {todos, handleNewTodo} = useTodoList()
   const {formulario, handlerSubmit, handlerChange} = useForm()

    const handleAdd = (ev) => {
      console.log("entrando en handleAdd")
      handlerSubmit(ev)

      const newTodo = {
        id: Date.now(),
        todo: formulario.tarea,
        descripcion: formulario.descripcion,
        done: false,
        date: new Date()
      }
      
      
     handleNewTodo(newTodo)

    }
     return (
       <>
       <h3>Añadir tarea</h3>

      <form id='crearTarea'
             name='crearTarea'
             className=''
             onSubmit={handleAdd}

      >
        <input type="text" 
              className=''
              id='tarea'
              name='tarea'
              placeholder='tarea'
              value={formulario.tarea}
              //onChange={handlerChange}
              
              
              
        />
        <textarea type="text" 
              className=''
              id='descripcion'
              name='descripcion'
              placeholder='descripcion'
              value={formulario.descripcion}
              //onChange={handlerChange}
              
              
        />
        <button type="submit">Añadir tarea</button>

       </form>
       </>
     )
   }
   