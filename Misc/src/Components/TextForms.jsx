import React from "react";
import { useState } from "react";

export default function TextForms(props) {
    

    const handelUpClick = ()=>{
        
        setText(text.toUpperCase())
    }

    const handelLoClick = ()=>{
        
        setText(text.toLowerCase())
    }

    const handelTriClick = ()=>{
        
        setText(text.trim());
    }

    const handelClrClick = ()=>{
        
        setText("");
    }
    const handelOnChange = (e)=>{
        console.log(e);
        setText(e.target.value)
    }


    const [text,setText] = useState("");
    // setText("New TExt");
    return (
        <>
            <div className="mb-3  container" >
                <h1>
                {props.textTitle} 
                </h1>
                
                <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    value={text}
                    onChange={handelOnChange}
                    placeholder="Enter your Text here"
                ></textarea>
                <button className="btn btn-primary my-3 mx-3" onClick={handelUpClick}>Convert to UPPERCASE</button>
                <button className="btn btn-primary my-3 mx-3" onClick={handelLoClick}>Convert to lowercase</button>
                <button className="btn btn-primary my-3 mx-3" onClick={handelTriClick}>Trim The string </button>
                <button className="btn btn-danger my-3 mx-3" onClick={handelClrClick}>Clear</button>
            </div>
            <div className="container">
                <h1>Your Summary Below</h1>
                   <ul>
                    <li>number of letters : {text.length}</li>
                    <li>Number of Words : {text.trim().split(" ").length  } </li>
                    <li>Avg time to read your text :{0.008 * text.trim().split(" ").length  } Minutes</li>
                   </ul>
                   <h2>Preview : </h2>
                   <p>{text}</p>
            </div>
        </>
    );
}
TextForms.defaultProps={
    textTitle:"Enter a text to analize "
}