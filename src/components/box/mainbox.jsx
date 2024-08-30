import React from "react";
import Box from "./box.jsx"
import "./mainbox.css"
import { colors } from "@mui/material";
import Women from "../../img/womens_fashion.jpeg"
import Lv from "../../img/lv.jpeg"
import Gc from "../../img/adidas.jpeg"
import Wh from "../../img/watch.jpeg"



const mainbox =()=>{
    return(
        <>
        <div className="mainbxdiv">
            <div className="part1">
            <Box
                h4={"New Arival"}
                h1={"Women's Style"}
                p={"upto 70% off"}
                src={Women}/>

            </div>
            
            <div className="part2">
                <div className="part3">
                    <Box h4={"New Arival"}
                        h1={"Watch"}
                        p={"45% off"}
                        src={Wh}
                        />
                    <Box h4={"New Arival"}
                        h1={"Handbags"}
                        p={"25% off"}
                        src={Lv}/>
                </div>
                <div className="part4">
                    <Box h4={"New Arival"}
                        h1={"Sports"}
                        p={"30% off"}
                        src={Gc}
                    />
                </div>
                
            </div>
        </div>
        </>
    )
}

export default mainbox;