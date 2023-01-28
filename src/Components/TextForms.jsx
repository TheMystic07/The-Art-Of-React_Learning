import React from "react";
import { useState } from "react";

export default function TextForms(props) {
    

    const handelClick = ()=>{
        console.log("Clicked "+ text.toUpperCase())
        setText(text.toUpperCase())
    }
    const handelOnChange = (e)=>{
        console.log(e);
        setText(e.target.value)
    }


    const [text,setText] = useState("Enetr text here(Default value)");
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
                ></textarea>
                <button className="btn btn-primary my-3" onClick={handelClick}>Convert to UPPERCASE</button>
            </div>
        </>
    );
}
TextForms.defaultProps={
    textTitle:"Enter a text to analize "
}