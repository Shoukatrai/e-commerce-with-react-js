import React from 'react'

const FullProductCard = ({product}) => {
  return (
    <div>
      <div className='flex flex-col rounded-2xl bg-amber-300 p-3 w-1/2 max-w-xl mx-auto items-center'>
        <img 
          src={product?.category?.image} 
          alt={product?.title} 
          className='w-full h-64 object-cover rounded-2xl mb-4'
        />
        <span className="text-xl font-semibold mb-1">{product?.title}</span>
        <span className="text-md text-gray-700 mb-2">{product?.category?.name}</span>
        <p className='text-center mb-2'>{product?.description}</p>
        <span className="text-2xl font-bold">$ {product?.price}</span>
      </div>
    </div>
  )
}

export default FullProductCard
