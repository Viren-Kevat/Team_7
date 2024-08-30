import React from "react";
import ProductList from "./Product_list";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import './base.css'

const base = ({ products, addToCart }) => {
  const [value, setValue] = React.useState(0);
  const tabsContainerRef = React.useRef(null);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  return (
    <>
      <h1 style={{ textAlign: 'center' }}>Featured Products</h1>
      <div className="navbart">
        <Box sx={{ width: '100%', position: 'relative', overflow: 'hidden' }}>
      
          <ArrowLeftIcon  sx={{
            position:"absolute",
            left:0,
            fontSize: "2rem"
          }}/>

          <Box
            ref={tabsContainerRef}
            sx={{
              display: 'flex',
              overflowX: 'auto',
              whiteSpace: 'nowrap',
              padding: '0 2rem',
              '&::-webkit-scrollbar': { display: 'none' },
              scrollBehavior: 'smooth',
              justifyContent:"center"
            }}
          >
            <Tabs
              value={value}
              onChange={handleChange}
              textColor="primary"
              sx={{
                display: 'flex',
                whiteSpace: 'nowrap',
                '& .MuiTab-root': { color: '#ffffff', fontSize: { xs: '0.75rem', sm: '1rem' } },
                '& .Mui-selected': { color: '#646cff' },
                '& .MuiTabs-indicator': { backgroundColor: '#646cff' },
                
              }}
              variant="scrollable"
              scrollButtons="off"
            >
              <Tab label="All Products" />
              <Tab label="Mens Section" />
              <Tab label="Womens Section" />
            </Tabs>
          </Box>

      
          <ArrowRightIcon sx={{
            position:"absolute",
            right:0,
            top: 0,
            fontSize: "2rem"
          }}/>
        </Box>

        <Box sx={{ p: 2, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          {value === 0 && <ProductList products={products} addToCart={addToCart} />}
          {value === 1 && <ProductList products={products.filter(product => product.category === 'men')} addToCart={addToCart} />}
          {value === 2 && <ProductList products={products.filter(product => product.category === 'women')} addToCart={addToCart} />}
        </Box>
      </div>
    </>
  );
};

export default base;
