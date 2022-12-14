import React from 'react'
import { TbTrashX, TbMinus, TbPlus } from "react-icons/tb";

const CartItem = (props) => {

  const {image, description, price} = props;
  return (
    <div className='cartItem flex my-2 shadow relative'>
        <div className="image flex justify-center items-center">
            <img className='shadow' src={image} alt={description} />
        </div>
        <div className="itemDescription flex items-start justify-between flex-col px-2">
            <div className="description">{description}</div>
            <div className="price">REF. {price}</div>
            <div className="itemTotal">
            <div className="totalContainer flex items-center">
                <TbMinus className='minus shadow'/>
                <div className="total mx-1">2</div>
                <TbPlus className='plus shadow'/>
            </div>
            <div className="removeButton absolute bottom-4 right-4 z-30"><TbTrashX className='text-xl z-30 cursor-pointer'/></div>
        </div>
      </div>
    </div>
  )
}

export default CartItem
