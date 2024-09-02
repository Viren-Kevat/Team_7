import React, { useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {Box,Mainbox,Mainservice,AboutUs,Ridhi,Savan,Viren,Base,Cart,Footer,Header,Hero,ContactUs,SignIn,Thankyou,ScrollTop,EasterEgg} from "./components"
import Productsection from './productsection.jsx';
import Brands from "./img/famous_brands_3.jpeg"
import State from './state.jsx';
import "./App.css"
import Wm from "./img/women_2.jpeg"
import { Switch } from '@mui/material';
// import Header from './components/general/Header.jsx';
// import Cart from './components/general/Cart_component.jsx';
// import ImageSlider from "./imgslider.jsx"
// import Mainservice from './components/serv/mainservice.jsx';
// import Mainbox from "./components/mainbox.jsx"
// import Box from "./components/box.jsx"
// import AboutUs from './components/about/aboutus.jsx';
// import Ridhi from "./ridhi.jsx"
// import Savan from './savan.jsx';
// import Viren from './viren.jsx';
// import Base from "./components/general/base.jsx"
// import Footer from './components/general/footer.jsx';
// import ContactUs from './components/about/contactus.jsx';
// import Hero from "./hero.jsx"
// import SignIn from './components/about/signin.jsx';


function App() {
  
  const [products] = State();
 
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
    alert("Your Cart has been Updated")
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };
  return (
    <Router>
      <ScrollTop/>
      <div className="header">
        <Header />
      </div>
      <Routes>
        <Route
          path="/"
          element={
          <>
            <div className="imgslider">
                <Hero/>
            </div>
            <div className="mainservice"><Mainservice/></div>
            <div className="mainbx">
            <Mainbox/>
            </div>
            <div className="basebx">
              <Base products={products} addToCart={addToCart}/>
            </div>
            <div className="basebx2">
            <Box
                h4={"New Arival"}
                h1={"Women's Style"}
                p={"upto 70% off"}
                src={Wm}/>

            <Box h4={"New Arival"}
                    h1={"Famous Brands"}
                    p={"25% off"}
                    src={Brands}/>
            </div>
            <EasterEgg/>
            
            <Footer/>
          </>
          }
        />
       
        <Route
          path="/products"
          element={
            <>
            <Productsection products={products} addToCart={addToCart}/>
            <Footer/>
            <EasterEgg/>
             
            </>
          }
        />
         <Route
          path="/aboutus"
          element={
            <>
              <AboutUs/>
              <Footer/>
              <EasterEgg/>
              
            </>
          }
        />
        <Route
          path="/cart"
          element={
          <>
          <Cart cartItems={cart} removeFromCart={removeFromCart} />
          <Footer/>
          <EasterEgg/>
          
          </>
          }
        />
        <Route
          path="/contactus"
          element={
          <>
          <ContactUs/>
          <Footer/>
          <EasterEgg/>
          
          </>
          }
        />
        <Route path="/thankyou" element={<ThankYou />} />
        <Route
          path="/signin"
          element={
          <>
          <SignIn/>
          <Footer/>
          <EasterEgg/>
          
          </>
          }
        />
        {/* team memebers data pages */}
         <Route
          path="/viren"
          element={
          <>
          <Viren/>
          <Footer/>
          <EasterEgg/>
          
          </>
          }
          />
           <Route
          path="/ridhi"
          element={
          <>
          <Ridhi/>
          <Footer/>
          <EasterEgg/>
          
          </>
          }
          />
          <Route
          path="/savan"
          element={
          <>
          <Savan/>
          <Footer/>
          <EasterEgg/>
          
          </>
          }
          />
      </Routes>
    </Router>
  );
}

export default App;
