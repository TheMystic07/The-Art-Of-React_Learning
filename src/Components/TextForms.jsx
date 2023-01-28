import React from "react";

export default function TextForms(props) {
    return (
        <>
            <div className="mb-3  container" >
                <label htmlFor="exampleFormControlTextarea1" className="form-label">
                    {props.textTitle}
                </label>
                <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                ></textarea>
                <button className="btn btn-primary my-3">Convert to UPPERCASE</button>
            </div>
        </>
    );
}
TextForms.defaultProps={
    textTitle:"Enter a text to analize "
}