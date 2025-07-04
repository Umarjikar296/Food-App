import React from 'react'
import { GoPlus } from "react-icons/go";
import { HiMinus } from "react-icons/hi";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { decrementQty, increadementQty, removeFromCart } from '../Redux/Slices/CartSlice';

import toast, { Toaster } from 'react-hot-toast';



const ItemCart = ({ id, name, qty, price, img }) => {
    const dispatch = useDispatch();

    return (
        <div className='flex gap-2 shadow-md rounded-lg p-2 mb-3'>

            <MdDelete onClick={() => {
                dispatch(removeFromCart({ id, img, name, price, qty })),
                    toast(`${name} Removed!`, {
                        icon: '👋',
                    });
            }} className='absolute right-7 text-gray-600 cursor-pointer' />


            <img className='w-[50px] h-[50px]' src={img} alt="" />

            <div className='leading-5'>

                <h2 className='font-bold text-gray-800'>{name}</h2>

                <div className='flex justify-between items-center'>

                    <span className='text-green-500 font-bold'>{price}</span>

                    <div className='flex justify-center items-center gap-2 absolute right-7'>
                        <HiMinus onClick={() => qty > 1 ? dispatch(decrementQty({ id })) : qty = 0} className='border-2 border-gray-600 text-gray-600 hover:bg-green-500 hover:text-white hover:border-none rounded-md transition-all ease-linear cursor-pointer' />

                        <span>{qty}</span>

                        <GoPlus onClick={() => qty >= 1 ? dispatch(increadementQty({ id })) : qty = +1} className='border-2 border-gray-600 text-gray-600 hover:bg-green-500 hover:text-white hover:border-none rounded-md transition-all ease-linear cursor-pointer' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemCart
