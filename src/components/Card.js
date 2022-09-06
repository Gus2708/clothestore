import React from 'react'

const Card = (props) => {

  const {image, description, price} = props;

  return (
    <div className='card flex shadow basis-1/1 justify-center md:justify-center md:basis-1/5'>
      <img className='flex justify-center items-center w-full h-full' src={image} alt={description}/>
      <div className="text flex items-end justify-between flex-row">
        <p className='description w-2/3'>{description}</p>
        <p className='reference'>REF. {price}</p>
      </div>
    </div>
  )
}

export default Card
