import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import FullProductCard from '../components/FullProductCard'
import { IoMdClose } from 'react-icons/io'

const Product = ({handleCart}) => {
    const [singleProduct, setSingleProduct] = useState(null)
    const [error, setError] = useState("")
    const params = useParams()
    console.log("params", params.id)
    const navigate = useNavigate()

    useEffect(() => {
        getProduct()
        // eslint-disable-next-line
    }, [])



    const getProduct = async () => {
        try {
            const response = await axios.get(`https://api.escuelajs.co/api/v1/products/${params.id}`)
            console.log("single product response", response.data)
            setSingleProduct(response.data)
            setError("")
        } catch (error) {
            console.log("error", error)
            setError("Product not found.")
            setSingleProduct(null)
        }
    }

    const NavigateHome =()=>{
        navigate("/")
    }
    
    
    return (
        <div className='flex items-center m-3 w-full justify-center'>
            {error ? (
                <div className="bg-red-100 text-red-700 px-4 py-2 rounded-lg shadow my-auto flex gap-2 items-center">
                    {error} <IoMdClose onClick={NavigateHome} className='cursor-pointer'/>
                </div>
            ) : (
                singleProduct && <FullProductCard product={singleProduct} handleCart = {handleCart} />
            )}
        </div>
    )
}

export default Product
