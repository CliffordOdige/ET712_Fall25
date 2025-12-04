import '../App.css'
import React from 'react'

const Cart = ({cart, removeFromCart})=> {
    return(
        <>
            <h2 className='carttitle'>Your Shopping Cart</h2>
            <section className='cartcontainer'>
                {cart.length === 0 && <p className='emptymsg'>Cart is empty</p>}
                {
                    cart.map(
                        (item)=>(
                            <div key={item.div} className='itemcart'>
                                <img className='cartitemimg' src={item.image} alt={item.name}/>
                                <p className='cartitemname'>{item.name}</p>
                                <p className='cartitemprice'>{item.price}/lb</p>
                                <p className='cartitemquantity'>{item.qty}/lbs</p>
                                <p className='cartitemtotal'>{item.price * item.qty}</p>
                                <p className='btncartremove' onClick={()=>removeFromCart(item.id)}> x Remove</p>
                            </div>
                        )
                    )
                }

            <p className='totalcart'>Total $
                {cart.reduce((total, item)=>total + item.price*item.qty, 0)}
            </p>
            </section>
        </>
    )
}

export default Cart