import React from "react";
import {Card,Minicard} from "../cards"
import {Member} from "../about";
import "./savan.css"
import Savan2 from "../../img/savan2.jpg"
import CodeIcon from '@mui/icons-material/Code';
import PersonIcon from '@mui/icons-material/Person';import LaptopMacIcon from '@mui/icons-material/LaptopMac';


const savan =()=>{
    return(
        <>
           <div className="hero">
            <div className="textcontainers">
            <span><h1>Aspiring </h1></span>                
                <span><h1>IT Engineer'26</h1></span>
                <p>
                C | PYTHON | JAVA | HTML | CSS | CYBER SECURITY | Experienced Leader & Manager | Bridging Business & Tech | Proficient in Programming
                </p>
            </div>
            </div>
            <div className="maincard" >
                <Card h1={"Web Design"}  p={"Lorem ipsum dolor sit amet, consectetur adipisicing elit "}/>
                <Card h1={"Experienced Leader & Manager "}  p={"Tempore vero sit velit quae quidem magni iste impedit architecto eos accusantium"}/>
                <Card h1={"Bridging Business & Tech"}  p={"lorem adipisicing elit. Tempore vero sit velit quae quidem magni "}/>         
            </div>
            <div className="contents">
            <Member h3={"Savan Kirtibhai Kansagara"} p={"Lead Developer"} src={Savan2} url={"/savan"}/>
            <div className="contents2">
                <Minicard 
                    symb={<PersonIcon  sx={{fontSize:60}}/>}
                    h5={"Leadership"}
                    p={"Experienced Leader & Manager "}
                />
                <Minicard 
                    symb={<CodeIcon  sx={{fontSize:60}}/>}
                    h5={"Programer"}
                    p={" | C | PYTHON | JAVA | HTML | CSS | CYBER SECURITY | "}
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

export default savan;