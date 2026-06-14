import React from 'react'
import {toast} from 'react-toastify'
import { useContext } from 'react'
import { contexttodo } from '../Wrapper.jsx'


const Read = () => {
    const [todos,settodos] = useContext(contexttodo);

    
    // const todos = props.todos;
    // const settodos = props.settodos;


  const deletehandler  = (id) =>{
    
    
    const filtertodos = todos.filter((todo) => todo.id != id);
    
    settodos(filtertodos);

    toast.error("todo deleted successfully");

     
  };
    
    const rendertodos = todos.map((todo)=>{
         return <li key = {todo.id} className='bg-gray-900 rounded px-10 py-5 flex justify-between items-center' >
          <span className='flex text-xl font-thin'>{todo.title} </span> {""}<span className='font-thin text-sm text-red-400 cursor-pointer ' onClick={() =>deletehandler(todo.id)}>Delete</span> </li>

    })



  return (
    <div className="w-[40%] p-20 m-10  ">
       
       <h1 className="text-5xl text-red-500 font-thin mb-15"> <span className='text-pink-400'>Pending </span> Todos</h1>
       <ol> {rendertodos}</ol>
    </div>
  )
}

export default Read
