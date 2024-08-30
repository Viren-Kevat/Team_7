import Service from "./service";
import "./mainservice.css"
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import PaymentOutlinedIcon from '@mui/icons-material/PaymentOutlined';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';

const mainService = ()=>{
    return(
        <>
        <div className="box">
            <div className="service1">
                <div className="service"><Service symb={<LocalShippingOutlinedIcon sx={{ fontSize: 40 }}/>} h1={"Free Shipping"} h3={"Hello World!"}/></div>
                <div className="service"><Service symb={<PaymentOutlinedIcon sx={{ fontSize: 40 }}/>} h1={"Secure Payment"} h3={"We asure you acurate payment"}/></div>
           </div>
           <div className="service2">
                   <div className="service"><Service symb={<PaidOutlinedIcon sx={{ fontSize: 40 }}/>} h1={"100% Cash Back"} h3={"30 Days Replacement Policy"}/></div>
                   <div className="service"><Service symb={<ChatBubbleOutlineOutlinedIcon sx={{ fontSize: 40 }}/>} h1={"Online Support"} h3={"24/7 Customer Support "}/></div>
           </div>
             
        </div>
        
        </>
    )

}

export default mainService;