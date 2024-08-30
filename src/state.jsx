import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Men1 from "./img/Boys_Next.jpeg"
import Men2 from "./img/Men_Cotton Letter_Graphic .jpeg"
import Men3 from "./img/Men-T-Shirts.jpeg"
import Men4 from "./img/Men's_Oversized.jpeg"
import Men5 from "./img/Men's_Running.jpeg"
import Men7 from "./img/Men's_Streetwear.jpeg"
import Men8 from "./img/mentshirt1.jpeg"
import Men9 from "./img/mentshirt2.jpeg"
import Men6 from "./img/Men's_Sports_Casual.jpeg"
import Men10 from "./img/T-Shirt_Pack.jpeg"
import women1 from "./img/Calendar Quartz Watch.jpeg"
import women2 from "./img/Casual Solid Patchwork.jpeg"
import women3 from "./img/Exclusively hand painted Red Silk Saree.jpeg"
import women4 from "./img/Festive, Reception Red.jpeg"
import women5 from "./img/Pure Cotton saree.jpeg"
import women6 from "./img/ROTITA Criss Cross .jpeg"
import women7 from "./img/Round Pointer Quartz Watch.jpeg"
import women8 from "./img/Set de 34 brochas.jpeg"
import women9 from "./img/some of my makeup.jpeg"
import women10 from "./img/Women Plain Spring_Fall.jpeg"

const state = () => {
  const [products] = useState([
    { id: uuidv4(), name: 'Boys T-shirts*3', src:Men1, category: 'men', price: '$10' },
    { id: uuidv4(), name: 'Track-Set', src:Men2, category: 'men', price: '$20' },
    { id: uuidv4(), name: 'Casual T-shirt', src:Men3, category: 'men', price: '$20' },
    { id: uuidv4(), name: 'Mens Oversized Hoodie', src:Men4, category: 'men', price: '$20' },
     { id: uuidv4(), name: 'Mens Running Shoes', src:Men5, category: 'men', price: '$20' },
    { id: uuidv4(), name: 'Mens Streetwear', src:Men6, category: 'men', price: '$20' },
    { id: uuidv4(), name: 'Grey Denim', src:Men7, category: 'men', price: '$20' },
    { id: uuidv4(), name: 'Casual Sweeter', src:Men8, category: 'men', price: '$20' },
    { id: uuidv4(), name: 'Roundneck T-shirt', src:Men9, category: 'men', price: '$20' },
    { id: uuidv4(), name: 'T-shirts*6', src:Men10, category: 'men', price: '$20' },
    { id: uuidv4(), name: 'Steel Band Red Womens Watch', src: women1,category: 'women', price: '$20' },
    { id: uuidv4(), name: 'High Waist Straight Solid Color Bottoms', src: women2,category: 'women', price: '$20' },
    { id: uuidv4(), name: 'Hand painted Red Silk Saree in tribal style', src: women3,category: 'women', price: '$20' },
    { id: uuidv4(), name: 'Red fabric Saree', src: women4,category: 'women', price: '$20' },
    { id: uuidv4(), name: 'Pure Cotton Saree', src: women5,category: 'women', price: '$20' },
    { id: uuidv4(), name: 'V Neck T Shirt', src: women6,category: 'women', price: '$20' },
    { id: uuidv4(), name: 'Round Pointer Quartz Watch', src: women7,category: 'women', price: '$20' },
    { id: uuidv4(), name: 'Fibras de nylon hipoalergénicas', src: women8,category: 'women', price: '$20' },
    { id: uuidv4(), name: 'makeup products', src: women9,category: 'women', price: '$20' },
    { id: uuidv4(), name: 'Regular Sleeve Pocket Stitching Jumpsuits', src: women10,category: 'women', price: '$20' },

   
  ]);

  return [products];
};

export default state;
