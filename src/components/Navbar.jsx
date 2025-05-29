import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import SearchBar from './SearchBar'

const Navbar = ({ searchValue, setSearchValue, onClearSearch, handleSearch }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <nav className='bg-amber-300 p-3 rounded-2xl m-3'>
        <div className="flex justify-between items-center">
          <Link className='font-bold text-2xl' to={"/"}>
            <span className='text-white'>Ecommerce </span><span className='text-black'>Store</span>
          </Link>
          {/* Hamburger Button */}
          <button
            className="sm:hidden flex flex-col justify-center items-center w-10 h-10"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation"
          >
            <span className={`block h-1 w-6 bg-black mb-1 transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block h-1 w-6 bg-black mb-1 transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block h-1 w-6 bg-black transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
          {/* Desktop Nav */}
          <div className="hidden sm:flex items-center gap-4">
            <SearchBar
              value={searchValue}
              onChange={e => setSearchValue(e.target.value)}
              onClearSearch={onClearSearch}
              handleSearch={handleSearch}
            />
            <button className='border p-2 px-3 rounded-2xl cursor-pointer text-white shadow-2xl text-xl bg-amber-500 hover:bg-amber-600 transition-colors'>Sign In</button>
          </div>
        </div>
        {/* Mobile Nav */}
        {isOpen && (
          <div className="flex flex-col sm:hidden mt-3 gap-3">
            <SearchBar
              value={searchValue}
              onChange={e => setSearchValue(e.target.value)}
              onClearSearch={onClearSearch}
              handleSearch={handleSearch}
            />
            <button className='border p-2 px-3 rounded-2xl cursor-pointer text-white shadow-2xl text-xl bg-amber-500 hover:bg-amber-600 transition-colors'>Sign In</button>
          </div>
        )}
      </nav>
    </div>
  )
}

export default Navbar
