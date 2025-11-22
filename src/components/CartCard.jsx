import React from 'react'
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch } from 'react-redux';
import { decrementItem, incrementItem, removeItem } from '../store/cartSlice';

function CartCard({ id, name, price, qty, image }) {
    const dispatch = useDispatch();

    return (
        <div className='w-full h-[120px] p-2 shadow-lg flex justify-between'>
            <div className='w-[60%] h-full flex gap-5'>
                <div className='w-[60%] h-full overflow-hidden rounded-lg'>
                    <img src={image} alt='' className='object-cover' />
                </div>
                <div className='w-[40%] h-full flex flex-col gap-3'>
                    <div className=''>{name}</div>
                    <div className='w-[110px] h-[50px] bg-slate-400 flex rounded-lg overflow-hidden shadow-lg font-semibold border-2 border-green-400 text-green-400 text-xl'>
                        <button
                            className='w-[30%] h-full bg-white flex justify-center items-center hover:bg-gray-200 cursor-pointer'
                            onClick={() => dispatch(qty === 1 ? removeItem(id) : decrementItem(id))}
                        >
                            -
                        </button>
                        <span className='w-[40%] h-full bg-slate-200 flex justify-center items-center'>
                            {qty}
                        </span>
                        <button className='w-[30%] h-full bg-white flex justify-center items-center hover:bg-gray-200 cursor-pointer' onClick={() => dispatch(incrementItem(id))}>
                            +
                        </button>
                    </div>
                </div>
            </div>
            <div className='flex flex-col items-end gap-6'>
                <span className='text-xl text-green-400 font-semibold'>Rs {price}/-</span>
                <RiDeleteBin6Line
                    className='w-[30px] h-[30px] text-red-400 cursor-pointer'
                    onClick={() => dispatch(removeItem(id))}
                />
            </div>
        </div>
    )
}

export default CartCard