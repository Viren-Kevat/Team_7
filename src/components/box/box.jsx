import React from "react";
import "./box.css"

const box =({h4,h1,p,src})=>{
    return (
        <>
            <div className="bx">
                <h4>{h4}</h4>
                <h1>{h1}</h1>
                <p>{p}</p>
                <img src={src} alt=""  
                style={{position:"absolute",
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        zIndex: -1,
                        opacity:0.6
                        }}/>
                </div>
        </>
    )
}

export default box ;