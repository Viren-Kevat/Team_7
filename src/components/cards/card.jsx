import React from "react";
import "./card.css"

const card =({h1,p,src})=>{
    return (
        <>
            <div className="card">
                <h1>{h1}</h1>
                <p>{p}</p>
                <div className="img">
                    <img src={src} alt=""
                        style={{
                        position:"relative",
                        objectFit: 'cover',
                        left:0,
                        zIndex: 1,
                        opacity:0.8}} 
                        />       
                </div>
                
                </div>
        </>
    )
}

export default card ;