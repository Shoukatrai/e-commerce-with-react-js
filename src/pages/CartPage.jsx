import React from 'react'
import CartProducts from '../components/CartProducts'
import { useNavigate } from 'react-router-dom'

const CartPage = ({ cartProducts, setCartProducts }) => {
  const navigate = useNavigate();

  // Remove item by filtering out the product with the same id
  const removeItem = (productToRemove) => {
    setCartProducts(prev =>
      prev.filter(product => product.id !== productToRemove.id)
    );
  };

  return (
    <div className='grid gap-3 mx-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-5 '>
      {cartProducts.length === 0 ? (
        <div className="bg-yellow-100 text-yellow-800 px-4 py-3 rounded-lg shadow flex flex-col items-center gap-3 mt-8 max-w-md mx-auto">
          <span>Your cart is empty!</span>
          <button
            className="bg-amber-500 text-white px-4 py-2 rounded-2xl hover:bg-amber-600 transition-colors"
            onClick={() => navigate('/')}
          >
            Go to Home
          </button>
        </div>
      ) : (
        cartProducts.map((product, idx) => (
          <CartProducts key={idx} product={product} removeItem={removeItem} />
        ))
      )}
    </div>
  )
}

export default CartPage
