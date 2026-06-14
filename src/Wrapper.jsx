import React from 'react'
import { createContext } from 'react';



    export const contexttodo = createContext(null);

const Wrapper = (props) => {

     const [todos,settodos] = React.useState([
    {
      id:1,
      title:"kaam krr lee",
      iscompleted:false,
    }
  ]);
    

  return (
    <contexttodo.Provider value={[todos,settodos]}>
     {props.children}
     </contexttodo.Provider>
  )
}
export default Wrapper
