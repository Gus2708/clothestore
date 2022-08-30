import React, { useEffect, useState } from 'react'
import { IoIosArrowBack } from "react-icons/io";
import CartItem from './CartItem';

const data = require('../services/api.json');

const Cart = () => {
  useEffect(() => {
    getProduct();
  }, []);

  const [product, setProduct] = useState([]);

  const getProduct = () => {
    setProduct(data);
  }

  return (
    <div className='cartContainer'>
      <div className="cartNavbar grid grid-cols-3 mx-6">
        <div className="backButton col-span-1 flex flex-row items-center justify-start"><IoIosArrowBack className='backIcon'/></div>
        <div className='justify-self-center text-center flex justify-center'>
          <h1>Mis compras</h1>
        </div>
      </div>
      <div className="itemsList flex w-full flex-col justify-between items-center my-6">
      {product.map(item => (<CartItem className='w-full' image={item.image} description={item.description} price={item.price} key={item.id} alt="product"/>))
        }
      </div>
      <div className="buyButton flex justify-center items-center">
        <button className='shadow-md'>Comprar</button>
      </div>
    </div>
  )
}

export default Cart
