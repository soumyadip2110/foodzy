import React, { useEffect, useState } from 'react'
import { Card, Nav } from '../components/index'
import { categories } from '../Categories'
import { food_items } from '../food'
import { useSelector } from 'react-redux'

function Home() {
    const query = useSelector(state => state.search.query.toLowerCase())
    const [menu, setMenu] = useState(food_items)
    const [isSearching, setIsSearching] = useState(false)

    const filterMenu = (category) => {
        if (category === 'All') setMenu(food_items);
        else {
            setMenu(
                food_items.filter(item => (
                    item.food_category === category.toLowerCase().replace(' ', '_')
                ))
            )
        }
    }

    useEffect(() => {
        if (query.trim() === ''){
            setIsSearching(false)
            setMenu(food_items);
        }
        else{
            setIsSearching(true)
            setMenu(
                food_items.filter(item => (
                    item.food_name.toLowerCase().includes(query)
                ))
            );
        }
    }, [query])

    return (
        <div className='bg-slate-200 w-full min-h-screen'>
            <Nav />
            {!isSearching ? (
                <div className='flex flex-wrap justify-center items-center gap-6 w-[100%]'>
                    {categories.map(item => (
                        <div
                            key={item.id}
                            className='w-[140px] h-[150px] bg-white flex flex-col items-center gap-5 justify-center text-[20px] font-semibold text-gray-600 rounded-lg shadow-xl hover:bg-green-200 cursor-pointer transition-all'
                            onClick={() => filterMenu(item.name)}
                        >
                            {item.icon}
                            {item.name}
                        </div>
                    ))}
                </div>
                ) : null
            }
            <div className='w-full flex flex-wrap gap-5 px-5 py-8 justify-center items-center'>
                {menu.map(item => (
                    <Card
                        key={item.id}
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