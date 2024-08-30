import Box from "./components/box/box";
import React from "react";
import ProductList from "./components/general/Product_list";
import { Height } from "@mui/icons-material";
import { color } from "@mui/system";
import Bg from "./img/bag.jpeg"
import Women from "./img/womens_fashion.jpeg"
import Bd from "./img/famous_brands_3.jpeg"


const productsection =({products,addToCart})=>{
    return(
        <>
         <div className="mainp">
            <Box h4={"New Arival"}
                    h1={"Bags"}
                    p={"25% off"}
                    src={Bg}
                    />
              <Box
                h4={"New Arival"}
                h1={"Women's Style"}
                p={"upto 70% off"}
                src={Women}/>      
            </div>
            <div className="mainp2">
              <Box
                h4={"New Arival"}
                h1={"Famous Brands"}
                p={"upto 70% off"}
                src={Bd}
                
                />
            </div>
            <h2>Best Seller</h2>
            <ProductList products={products} addToCart={addToCart} />
        </>
    )
}

export default productsection;