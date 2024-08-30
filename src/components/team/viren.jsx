import React from "react";
import "./viren.css"
// import Viren from "../../img/profile.jpg";
import Viren2 from "../../img/viren_2.jpg"
import {Card,Minicard} from "../cards"
import {Member} from "../about";
import CodeIcon from '@mui/icons-material/Code';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
// import {Card} from "./cards"
// import Member from "./components/about/member.jsx";
// import Minicard from "./minicard.jsx";

const viren =()=>{
    return(
        <>
           <div className="herov">
            <div className="textcontainerv">
            <span><h1>HEY THERE!!!</h1></span>                
                <span><h1>I'M VIREN</h1></span>
                <p>Web-Developer</p>
                <p>
                Attended Government Engineering College,Modasa 
                <br /><br />
                <span>Code is like humor. When you have to explain it, it’s bad.</span>
                </p>
            </div>
            </div>
            <div className="maincard">

                <Card  h1={"Web Design"}  p={"I believe in design that tells a story and guides users through a journey. "}/>
                <Card  h1={"Development"}  p={"Proficient in JavaScript, React, Node.js, and other modern web technologies."}/>
                <Card  h1={"Creative Thinker"}  p={"Turning visions into reality with a blend of creativity and technical expertise."}/>         
            </div>
            <div className="contentv">
            <Member h3={"Virenkumar Vijay Kevat"} p={"Founder & CEO"} src={Viren2} url={"/viren"}/>
            <div className="contentv2">
                <Minicard 
                    symb={<CodeIcon  sx={{fontSize:60}}/>}
                    h5={"Programmer"}
                    p={"Worked with Java | Javascript | C | Python"}
                />
                <Minicard 
                    symb={<MusicNoteIcon  sx={{fontSize:60}}/>}
                    h5={"Melophile"}
                    p={"Love and appreciate the timeless melodies and classic tunes from the golden era of Bollywood"}
                />
                  <Minicard 
                    symb={<LaptopMacIcon  sx={{fontSize:60}}/>}
                    h5={"Web-Developer"}
                    p={"The function of good software is to make the complex appear to be simple."}
                />
                </div>
            </div>
 </>

    )
}

export default viren;