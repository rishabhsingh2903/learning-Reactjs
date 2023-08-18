import { useEffect, useState } from "react"
import {FormSub} from "./FormSub"
import { TodoList } from "./TodoList"
import "./style.css"
export default function App (){
  
  const [todos,setTodos]=useState(()=>{
    const localvalue=localStorage.getItem("ITEMS")
    if(localvalue== null) return []
    return JSON.parse(localvalue)
  })
  useEffect(()=>{
    localStorage.setItem("ITEMS",JSON.stringify(todos))
  },[todos])


  function addTodo(title){
            setTodos(currentTodos=>{
          return [...currentTodos,{id:crypto.randomUUID(),
            title,
             completed:false},
            ]
        })
  }

  function toggleTodo(id,completed){
    setTodos(currentTodos=>{
       return currentTodos.map(todo=>{
          if (todo.id===id){
            return {...todo,completed}
          }
          return todo
        })
      }
    )
  }

  function deleteTodo(id){
    setTodos(currentTodos=>{
      return currentTodos.filter(todo=>todo.id!==id)
    })
  }
  return (
  <>
    
    <FormSub onsubmit={addTodo}/>
    <h1 className='header'>TODO LIST</h1>
    <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
  </>
  )
}