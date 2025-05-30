import React from 'react'
import { FaMagnifyingGlass } from 'react-icons/fa6'
import { IoMdClose } from 'react-icons/io'
import { IoSearchOutline } from 'react-icons/io5'

const SearchBar = ({ value, onChange, onClearSearch, handleSearch }) => {

    return (
        <div className='max-w-full lg:w-100  flex items-center justify-between px-4 bg-slate-100 rounded-2xl'>
            <input
                type="text"
                placeholder='Search Products...'
                className='w-full  text-xs bg-transparent py-[11px] outline-none'
                value={value}
                onChange={onChange}
            />
            {value && <IoMdClose
                className='text-slate-500 text-xl cursor-pointer hover:text-black mr-3 '
                onClick={onClearSearch}
            />}
            <FaMagnifyingGlass
                className='text-slate-500 text-xl cursor-pointer hover:text-black mr-3'
                onClick={handleSearch}
            />

        </div>
    )
}

export default SearchBar
