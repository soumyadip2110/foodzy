import React from 'react'
import { Nav } from '../components/index'
import { categories } from '../Categories'

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
        </div>
    )
}

export default Home