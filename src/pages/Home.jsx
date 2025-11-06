import React, { useEffect, useState } from 'react'
import { Card, Nav } from '../components/index'
import { categories } from '../Categories'
import { food_items } from '../food'
import { useSelector } from 'react-redux'
import { RxCross2 } from "react-icons/rx";
import { useDispatch } from 'react-redux'
import { setShowCart } from '../store/showCartSlice'

function Home() {
    const dispatch = useDispatch();
    const query = useSelector(state => state.search.query.toLowerCase())
    const show = useSelector(state => state.cart.show)
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
            
            <div className={`w-[40vw] h-[100%] fixed top-0 right-0 bg-white shadow-xl p-6 ${show ? 'translate-x-0' : 'translate-x-full'} transition-all duration-500`}>
                <header className='w-[100%] flex justify-between items-center'>
                    <span className='text-green-400 font-semibold text-[18px]'>Order items</span>
                    <RxCross2
                        className='w-[30px] h-[30px] text-green-400 font-semibold text-[18px] cursor-pointer hover:text-gray-600'
                        onClick={() => dispatch(setShowCart(false))}
                    />
                </header>
            </div>
        </div>
    )
}

export default Home