import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import SearchBar from './SearchBar'
import { FaShoppingCart } from 'react-icons/fa'

const Navbar = ({ searchValue, setSearchValue, onClearSearch, handleSearch }) => {
  const [isOpen, setIsOpen] = useState(false)
  const navigate = useNavigate()
const navigateToCart = ()=>{
  navigate("/addtocart")
}

  return (
    <div>
      <nav className='bg-amber-300 p-3 rounded-2xl m-3'>
        <div className="flex justify-between items-center gap-4">
          <Link className='font-bold text-2xl whitespace-nowrap' to={"/"}>
            <span className='text-white'>Ecommerce </span><span className='text-black'>Store</span>
          </Link>
          

          <div className="flex-1 hidden sm:flex justify-center">
            <SearchBar
              value={searchValue}
              onChange={e => setSearchValue(e.target.value)}
              onClearSearch={onClearSearch}
              handleSearch={handleSearch}
            />
          </div>
        
          <button
            className="sm:hidden flex flex-col justify-center items-center w-10 h-10 cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation"
          >
            <span className={`block h-1 w-6 bg-black mb-1 transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block h-1 w-6 bg-black mb-1 transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block h-1 w-6 bg-black transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
         
          <div className="hidden sm:flex items-center gap-4">
            <button onClick={navigateToCart} >
              <FaShoppingCart className='cursor-pointer h-8 w-8 text-primary transition-all duration-300 ease-in-out transform hover:scale-120'/>
            </button>
          </div>
        </div>
     
        {isOpen && (
          <div className="flex flex-col sm:hidden mt-3 gap-3">
            <SearchBar
              value={searchValue}
              onChange={e => setSearchValue(e.target.value)}
              onClearSearch={onClearSearch}
              handleSearch={handleSearch}
            />
            <button onClick={navigateToCart}>
              <FaShoppingCart className='h-8 cursor-pointer w-8 text-primary transition-all duration-300 ease-in-out transform hover:scale-120'/>
            </button>
          </div>
        )}
      </nav>
    </div>
  )
}

export default Navbar
