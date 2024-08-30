import React from "react";
import "./service.css"

const service = ({symb,h1,h3})=>{
    return(
        <>
            <div className="mainservicediv">
                <div className="symb">{symb}</div>
                <div className="context">
                    <h2>{h1}</h2>
                    <p>{h3}</p>
                </div>
            </div>
        </>
    )
}

export default service;