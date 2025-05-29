import React from 'react'
import ProductCard from '../components/ProductCard'

const Home = ({ products, filteredData }) => {
  const productsToShow = filteredData && filteredData.length > 0 ? filteredData : products;

  return (
    <div className='grid  gap-3 m-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-5'>
      {
        productsToShow.map((product) => {
          return (
            <ProductCard product={product} />
          )
        })
      }
    </div>
  )
}

export default Home
