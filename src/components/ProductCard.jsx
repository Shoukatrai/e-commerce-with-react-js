import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = ({ product , handleCart}) => {
    


    return (
        <>

            <div className="flex flex-col rounded-2xl bg-amber-300 p-2 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto transition-transform hover:scale-105 m-3">

                <img
                    src={product?.category?.image}
                    alt={product?.title}
                    className="w-full h-48 sm:h-56 md:h-64 object-cover rounded-2xl mb-2"
                />
                <span className="text-lg font-semibold truncate">{product?.title}</span>
                <span className="text-sm text-gray-700">{product?.category?.name}</span>
                <span className="text-xl font-bold">$ {product?.price}</span>
                <Link to={`/prdouct/${product.id}`}>
                    <span className='font-extralight cursor-pointer pb-10 hover:underline'>See More....</span>
                </Link>

                
                
                <button onClick={()=>{
                    handleCart(product)
                }} className="cursor-pointer border p-2 px-3 rounded-2xl text-white shadow-2xl text-xl bg-amber-500 mt-2 hover:bg-amber-600 transition-colors">
                    Add to Cart
                </button  >
                
            </div>

        </>
    )
}

export default ProductCard
