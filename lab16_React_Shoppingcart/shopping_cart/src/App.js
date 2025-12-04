import './App.css';
import React, {useState} from 'react';
import ProductList from './components/productlist';
import Cart from './components/cart';

function App() {
  const [cart, setCart] = useState([])

  /** find if the product already exists in the cart */
  const addToCart = (product)=>{
    const exist = cart.find((item)=>item.id===product.id)

    /** if product exits, exist ==True, increase the quantity */
    if(exist){
      setCart(
        cart.map((item) => {
          if(item.id === product.id){
            return {...item, qty: item.qty + 1}
          }
          else
            return item
        })
      )
    }
    /** if product does not exits, add new item */
    else{
      setCart([...cart, {...product, qty: 1}])
    }
  }

  /** remove item from the cart */
  const removeFromCart = (id)=>{
    setCart(cart.filter((item)=>item.id !==id))
  }

  return (
    <div className="App">
      <h1 className='apptitle'>Welcome to Clifford Odige supermarket</h1>

      <ProductList addToCart = {addToCart} />
      <Cart cart = {cart} removeFromCart = {removeFromCart} />
      
    </div>
  );
}

export default App;