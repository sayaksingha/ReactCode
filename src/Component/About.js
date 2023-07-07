import React, { useState } from "react";
import TextFrom from "./TextFrom";

export default function About() {
    const[state,setState]=useState(
        {
            color:'black',
        backgroundColor:'white'
            
        }
        )
        const[state1,setState1]=useState(
            {
                color:'white',
            backgroundColor:'black'
                
            }
            )

        const[color,setcolor]=useState ("BLACK")  
    function toggle(){
if(state.color=='black'){
    setcolor("WHITE")
    setState({
        color:'white',
            backgroundColor:'black'
    })
    setState1(
        {
            color:'black',
        backgroundColor:'white'
            
        }
        )
}
else{
    setcolor("BLACK")
    setState( {
        color:'black',
        backgroundColor:'white'
    })
    setState1({
        color:'white',
            backgroundColor:'black'
    })
}
    }
  return (
   <div className="container">
        <TextFrom style={state}/>
         <button type="button" style={state1} onClick={toggle}class="btn btn-dark my-3 mx-3">{color}</button>

   </div>
    
  );
}
