import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Signup from './pages/Signup'
import Login from './pages/Login'
import CartPage from './pages/CartPage'
import axios from 'axios'
import Product from './pages/product'

const App = () => {
  const [products, setProducts] = useState([])
  const [searchValue, setSearchValue] = useState("");
  let [data, setData] = useState([])
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    getProducts()
  }, [])

  const getProducts = async () => {
    const response = await axios.get("https://api.escuelajs.co/api/v1/products")
    setProducts(response.data)
  }


  const onClearSearch = () => {
    setSearchValue("");
    setFilteredData([]);
  };



  const handleSearch = () => {
    if (!searchValue) {
      setFilteredData([])
      return
    }
    const value = searchValue.trim().toLowerCase();
    const dataRes = products.filter(item =>
      item.title.toLowerCase().includes(value) || item.category.name.toLowerCase().includes(value)
    )
    if (dataRes.length == 0) {
      alert("No Product Found")
      return
    }
    setFilteredData(dataRes)
  };


  return (
    <div>
      <Navbar searchValue={searchValue} setSearchValue={setSearchValue} onClearSearch={onClearSearch} handleSearch={handleSearch}  />


      <Routes>
        <Route path='/' element={<Home products={products} filteredData = {filteredData} />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/addtocart' element={<CartPage />} />
        <Route path='/prdouct/:id' element={<Product />} />
      </Routes>




    </div>
  )
}

export default App
