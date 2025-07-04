import React, { useState } from 'react'
import { IoMdClose } from "react-icons/io";
import ItemCart from './ItemCart';
import { useSelector } from 'react-redux';
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom"


const Cart = () => {

    const [activeCart, setActiveCart] = useState(false);

    const cartItems = useSelector((state) => state.cart.cart);
    // console.log(cartItems);

    const totalQty = cartItems.reduce((totalQty, item) => totalQty + item.qty, 0);

    const totalPrice = cartItems.reduce((total, item) => total + item.qty * item.price, 0);

    const navigate = useNavigate();

    return (
        <>

            <div className={`fixed right-0 top-0 w-full md:w-[40vw] lg:w-[30vw] h-full p-5 bg-white mb-3 transition-all duration-500 z-50 ${activeCart ? "translate-x-0" : "translate-x-full"}`}>
                <div className='flex justify-between items-center my-3'>
                    <span className='text-xl font-bold text-gray-800 '>
                        My order
                    </span>
                    <IoMdClose onClick={() => setActiveCart(!activeCart)} className='border-1 border-gray-600 text-gray-600 font-bold  text-xl rounded-md hover:text-red-300 hover:border-red-300 cursor-pointer' />
                </div>

                {
                    cartItems.length > 0 ? cartItems.map((food) => {
                        return (<ItemCart key={food.id} id={food.id} name={food.name} price={food.price} img={food.img} qty={food.qty} />);
                    }) : <h2 className='text-center font-semibold text-xl text-gray-800 '>Your Cart is Empty</h2>
                }


                <div className='absolute bottom-2'>
                    <h3 className='font-semibold text-gray-800'>Items : {totalQty}</h3>
                    <h3 className='font-semibold text-gray-800'>Total : {totalPrice}</h3>
                    <hr className='w-[95vw] md:w-[35vw] lg:w-[27vw] my-2' />
                    <button onClick={() => navigate('/success')} className='cursor-pointer bg-green-500 font-bold py-2 px-3 text-white rounded-lg w-[90vw] md:w-[35vw]  lg:w-[27vw] mb-5 mt-2'>Checkout</button>
                </div>
            </div>
            <FaShoppingCart onClick={() => setActiveCart(!activeCart)} className={`border-2 border-white rounded-full bg-white p-3 text-5xl fixed bottom-7 right-7 cursor-pointer ${totalQty > 0 && "animate-bounce delay-500 transition-all"}`} />



        </>
    )
}

export default Cart
