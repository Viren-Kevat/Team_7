import React from "react";
import { useEffect,useRef } from "react";
import "./imgslider.css"
import {Box} from "../box"
import Women from "../../img/women_2.jpeg"
import Watch from "../../img/watch_2.jpg"
import Watch2 from "../../img/watch_3.jpeg"
import Shoe from "../../img/nike.jpeg"

const  imgslider=()=>{

    return(<>
        <div className="slider"  >
            <div className="slides" >
                <div className="slide">
                    <Box
                    src={Women}/>                    
                </div>
                <div className="slide" >
                    <Box 
                        src={Watch}
                    />
                </div> 
                <div className="slide">
                    <Box
                        src={Shoe}
                    />
                </div> 
                <div className="slide">
                    <Box 
                        src={Watch2}
                    />
                </div>
                {/* //duplicate */}
                <div className="slide">
                    
                    <Box 
                        src={Women}
                    />
                </div>
                <div className="slide" >
                    <Box 
                        src={Watch}
                    />
                </div> 
                    <div className="slide">
                    <Box 
                        src={Shoe}/>
                    </div> 
                    <div className="slide">
                    <Box 
                        src={Watch2}
                    />
                    </div>
            </div>
        </div>
    
    </>);
}

export default imgslider;