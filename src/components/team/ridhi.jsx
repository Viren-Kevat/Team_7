import React from "react";
// import {Card} from "../cards"
// import Minicard from "./minicard.jsx";
// import Member from "./components/about/member.jsx";
import {Card,Minicard} from "../cards"
import Ridhi2 from "../../img/ridhi2.jpg"
import {Member} from "../about";
import "./ridhi.css"
import CodeIcon from '@mui/icons-material/Code';
import PersonIcon from '@mui/icons-material/Person';import LaptopMacIcon from '@mui/icons-material/LaptopMac';


const ridhi =()=>{
    return(
        <>
           <div className="heror">
            <div className="textcontainerr">
            <span><h1>Chief Marketing Manager</h1></span>                
                
                
            </div>
            </div>
            <div className="maincard">
                <Card h1={"Python"}  p={"Lorem ipsum dolor sit amet, consectetur adipisicing elit "}/>
                <Card h1={"UI/UX Designer"}  p={"Tempore vero sit velit quae quidem magni iste impedit architecto eos accusantium"}/>
                <Card h1={"Content Creator"}  p={"lorem adipisicing elit. Tempore vero sit velit quae quidem magni "}/>         
            </div>
            <div className="contentR">
            <Member h3={"Ridhdhi Ghanshyambhai Jogani"} p={"Chief Marketing Officer"} src={Ridhi2} url={"/ridhi"}/>
            <div className="contentR2">
                
                <Minicard 
                    symb={<CodeIcon  sx={{fontSize:{
                        xs: '60px', 
                        sm: '2rem',   
                        md: '2.5rem' 
                        }
                        }}/>}
                    h5={"Programer"}
                    p={" | C | PYTHON | JAVA | HTML | CSS | CYBER SECURITY | "}
                />
                  <Minicard 
                    symb={<LaptopMacIcon  sx={{ fontSize:{
                        xs: '60px', 
                        sm: '2rem',   
                        md: '2.5rem' 
                        }
                        }}/>}
                    h5={"Web-Developer"}
                    p={"The function of good software is to make the complex appear to be simple."}
                />
                <Minicard 
                    symb={<PersonIcon  sx={{fontSize:{
                        xs: '2rem', 
                        sm: '2rem',   
                        md: '2.5rem' 
                        }
                    }}/>}
                    h5={"Leadership"}
                    p={"Experienced Leader & Manager "}
                />
                
                </div>
            </div>

 </>

    )
}

export default ridhi;