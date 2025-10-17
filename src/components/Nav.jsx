import React from 'react'
import { MdFastfood } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { LuShoppingBag } from "react-icons/lu";

function Nav() {
	return (
		<div className='w-full h-[100px] flex justify-between items-center px-5 md:px-8'>
			<div className='w-[60px] h-[60px] bg-white flex justify-center items-center rounded-md shadow-xl'>
				<MdFastfood className='w-[30px] h-[30px] text-green-500' />
			</div>
			<form className='bg-white w-[50%] md:w-[70%] h-[60px] flex items-center px-5 gap-5 rounded-md shadow-md'>
				<IoSearch className='text-green-500 w-[20px] h-[20px]' />
				<input
					type='text'
					placeholder='Search Items...'
					className='w-[100%] outline-none text-[16px] md:text-[20px]'
				/>
			</form>
			<div className='w-[60px] h-[60px] bg-white flex justify-center items-center rounded-md shadow-xl relative'>
				<span className='absolute top-0 right-2 text-green-500 font-bold text-[18px]'>0</span>
				<LuShoppingBag className='w-[30px] h-[30px] text-green-500' />
			</div>
		</div>
	)
}

export default Nav