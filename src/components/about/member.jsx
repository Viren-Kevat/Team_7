import React from "react";
import "./member.css"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";
import ShareModal from "../general/sharemodel";
const member =({h3,p,src,url})=>{
 
    return(

        
        <Card sx={{ minWidth: 345 ,maxWidth:345 , minHeight:345}}>
        <CardMedia
          component="img"
          alt="image"
          height="300"
          image={src}
         
        />
        <CardContent sx={{ backgroundColor: "#1c1b1bff",color:"#fff" }} className="card-content">
          <Typography gutterBottom variant="h5" component="div" >
            <h5>{h3}</h5>
          </Typography>
          <Typography variant="body2" color="#fff">
            <h5>{p}</h5>
          </Typography>
        </CardContent>
        <CardActions sx={{ backgroundColor: "#1c1b1bff",color:"#fff"}}>
          <Button size="small">
            <ShareModal/>
          </Button>
          
          <Link to={url}>
            <Button size="small" >
                    Learn More
            </Button>
                    
          </Link>
          
        </CardActions>
      </Card>
      
    )
       
}

export default member;