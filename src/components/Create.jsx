import React from 'react'
import { useState } from 'react'
import { nanoid} from 'nanoid'
import { useForm } from 'react-hook-form'
import {toast} from 'react-toastify'
import { useContext } from 'react'
import { contexttodo } from '../Wrapper.jsx'

const Create = () => {
  const [todos,settodos] = useContext(contexttodo);
   

        
    


    // const todos = props.todos;
    // const settodos = props.settodos;
    const {
      register,
      handleSubmit,
      reset,
      formState:{errors},

    } = useForm();



      // const [title,settitle] = useState("");
      //  const [iscompleted,setiscompleted] = useState();
      const submithandler = (data) => {
              
            data.iscompleted = false;
            data.id = nanoid();
            

            const copytodos = [...todos];
            copytodos.push(data);
            settodos(copytodos);

               toast.success("todo created successfully");

            reset();
          // let copytodos= [...todos];
          // copytodos.push(newtodos);
          // settodos(copytodos);

          // settitle("");
          // setiscompleted(false);
            
          };
        
   


  return (
    <div className='w-[60%]  p-20 m-10 '>
         <h1 className='text-6xl font-thin ' >Set <span className='text-red-500' > Reminder</span> for <br /> {" "}Tasks</h1> 
            <form  onSubmit={handleSubmit(submithandler)}>
              
                <input 
                {...register("title", {required: "title is required"})}
                className='p-2 border-b outline-0 py-1 mt-15 font-thin w-full text-3xl' type="text" placeholder="title"/>
                 <small className='text-red-400'>{errors?.title?.message}</small>
               
                <br/>
               <br/>
                


                             
                              
                             

                <button className="border text-xl rounded px-10 py-2 mt-10 ">create todo</button>
                <br/>
                <br/>


                
            </form>
    </div>
  )
}

export default Create
