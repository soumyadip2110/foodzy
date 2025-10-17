import React from 'react'
import { Card, Nav } from '../components/index'
import { categories } from '../Categories'
import { food_items } from '../food'

function Home() {
    return (
        <div className='bg-slate-200 w-full min-h-screen'>
            <Nav />
            <div className='flex flex-wrap justify-center items-center gap-6 w-[100%]'>
                {categories.map(item => (
                    <div
                        key={item.id}
                        className='w-[140px] h-[150px] bg-white flex flex-col items-center gap-5 justify-center text-[20px] font-semibold text-gray-600 rounded-lg shadow-xl hover:bg-green-200 cursor-pointer transition-all'
                    >
                        {item.icon}
                        {item.name}
                    </div>
                ))}
            </div>
            <div className='w-full flex flex-wrap gap-5 px-5 py-8 justify-center items-center'>
                {food_items.map(item => (
                    <Card
                        id={item.id}
                        name={item.food_name}
                        image={item.food_image}
                        price={item.price}
                        type={item.food_type}
                    />
                ))}
            </div>
        </div>
    )
}

export default Home