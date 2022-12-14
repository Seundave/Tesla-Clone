import React, {useState, useEffect, useContext} from 'react'
import menWears from "../../Components/Apparel/wears/men"
import { useNavigate } from 'react-router-dom'
import womenWears from "../../Components//Apparel/wears/women"
import kidWears from "../../Components//Apparel/wears/kids"
import './cart.css'
import {CartContext} from "../../App"
import ShopNavbar from '../../Components/ShopNavbar/ShopNavbar'
import Footer from '../../Components/Footer/Footer'
import {AiFillDelete} from 'react-icons/ai'

const Cart = () => {
    const CartItem = useContext(CartContext);
    const navigate = useNavigate();
    const [price, setPrice] = useState(0);
    const {myCart, handleChange, handleRemove} = CartItem;
    useEffect(()=>{
        if(!localStorage.getItem("authenticated")){
             navigate("/sign-in")
        }
    }, [navigate])
    useEffect(() => {
        let ans = 0;
        if(myCart[0] !== {} || myCart[0] !== undefined){
            myCart.map((item) => (ans += item.quantity * item.price));
        }
        setPrice(ans);
    }, [myCart,handleRemove])
    
    return (
        <article>
            <ShopNavbar/>
            <div className='cart-title'>
             <h1>Cart</h1>
            </div>
            <div className='cart-products'>
                {myCart[0] === {} || myCart[0] === undefined  ? 
                <p>Nothing in Cart</p> : 
                myCart.map((item, index)=>{
                    return (
                        <div className="cart-box" key={index+1}>
                            <div className="cart-img">
                                <img 
                                src={item.apparel === "men-apparel"? menWears[item.id-1].image
                                        : item.apparel === "women-apparel" ? womenWears[item.id-1].image
                                            : kidWears[item.id-1].image} 
                                alt="img"
                                />
                            </div>

                            <div className='price-change-button'>
                                <p>{item.name}</p>
                                <div className="price-change">
                                    <div className="Price-change">
                                        <span className='total-price'>${item.price}</span>
                                    </div>
                                    <div className='price-change-btn'>
                                        <div className="price-change-btns">
                                            <button onClick={() => handleChange(item, 1)} className="increment">+</button>
                                            <button className='item-price'>${item.price * item.quantity}</button>
                                            <button onClick={() => handleChange(item, -1)} className="decrement">-</button>
                                        </div>
                                        <div className="remove-button">
                                            <AiFillDelete onClick={() => handleRemove(item.id)}/>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                    </div>
                    )}
                )}
                <div className="total">
                <span>Total Price of your Cart is</span>
                <span> ${price}</span>
            </div>
            </div>
            
            <Footer/>
        </article>
       
  )
}

export default Cart