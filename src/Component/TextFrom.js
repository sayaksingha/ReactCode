import { useState } from "react";
import React  from "react";

export default function TextFrom(props) {
    const [text,setText]=useState("enter any text");
    const [text1,setText1]=useState("TEXT ENTER");
    //1
    function Convert(event){
      
       event.preventDefault();
       let t=text.toUpperCase();
       setText1(t)

    }
    function Change(event){
       setText(event.target.value)

    }
  return (
    
    <div style={props.style}>
      <form className="container my-5">
        <div className="form-group">
          <label className="hellotext my-3" htmlFor="exampleFormControlTextarea1">{text1}</label>
          <textarea
            className="form-control "
            id="exampleFormControlTextarea1"
            rows="6"
            value={text}
            onChange={Change}
          ></textarea>
        </div>
        <button className="btn btn-primary my-2" onClick={Convert}>UpperCase</button>
      </form>
      
    </div>
  );
}
