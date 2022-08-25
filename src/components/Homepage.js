import React, { useEffect, useState } from 'react'
import Card from './Card';


const data = require('../services/api.json');


const Homepage = () => {
  useEffect(() => {
    getProduct();
  }, []);

  const [product, setProduct] = useState([]);

  const getProduct = () => {
    setProduct(data);
  }

  return (
    <div className='homeContainer z-0 max-w-screen flex justify-center'>
      <div className="products flex flex-wrap flex-row">
        {product.map(item => (<Card className='card' image={item.image} description={item.description} price={item.price} key={item.id} alt="product"/>))
        }
      </div>
    </div>
  )
}

export default Homepage
