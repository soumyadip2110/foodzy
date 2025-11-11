import React, { useEffect, useState } from 'react'
import { Card, CartCard, Nav } from '../components/index'
import { categories } from '../Categories'
import { food_items } from '../food'
import { useSelector } from 'react-redux'
import { RxCross2 } from "react-icons/rx";
import { useDispatch } from 'react-redux'
import { setShowCart } from '../store/showCartSlice'

function Home() {
    const dispatch = useDispatch();
    const query = useSelector(state => state.search.query.toLowerCase())
    const show = useSelector(state => state.showCart.show)
    const cartItems = useSelector(state => state.cart)

    const [menu, setMenu] = useState(food_items)
    const [isSearching, setIsSearching] = useState(false)

    let subTotal = cartItems.reduce((total, item) => total + item.price, 0);
    let deliveryCharge = 20;
    let taxes = parseFloat((subTotal * 0.05).toFixed(2));
    let total = Math.floor(subTotal + deliveryCharge + taxes);
    // console.log(subTotal);


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
        if (query.trim() === '') {
            setIsSearching(false)
            setMenu(food_items);
        }
        else {
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
                            className='w-[100px] h-[100px] md:w-[140px] md:h-[150px] bg-white flex flex-col items-center gap-3 justify-center text-[15px] md:text-[20px] font-semibold text-gray-600 rounded-lg shadow-xl hover:bg-green-200 cursor-pointer transition-all'
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
                        id={item.id}
                        price={item.price}
                        type={item.food_type}
                    />
                ))}
            </div>

            <div className={`w-full md:w-[40vw] h-[100%] fixed top-0 right-0 bg-white shadow-xl p-6 ${show ? 'translate-x-0' : 'translate-x-full'} transition-all duration-500 overflow-auto flex flex-col items-center`}>
                <header className='w-[100%] flex justify-between items-center'>
                    <span className='text-green-400 font-semibold text-[18px]'>Order items</span>
                    <RxCross2
                        className='w-[30px] h-[30px] text-green-400 font-semibold text-[18px] cursor-pointer hover:text-gray-600'
                        onClick={() => dispatch(setShowCart(false))}
                    />
                </header>
                <div className='w-full mt-9 flex flex-col gap-8'>
                    {cartItems.map(item => (
                        <CartCard
                            key={item.id}
                            id={item.id}
                            name={item.name}
                            price={item.price}
                            qty={item.qty}
                            image={item.image}
                        />
                    ))}
                </div>

                <div className='w-full border-t-2 border-b-2 border-gray-400 mt-7 flex flex-col gap-2 p-5'>
                    <div className='w-full flex justify-between items-center'>
                        <span className='text-md text-gray-600 font-semibold'>Sub total</span>
                        <span className='text-md text-green-400 font-semibold'>Rs {subTotal}/-</span>
                    </div>
                    <div className='w-full flex justify-between items-center'>
                        <span className='text-md text-gray-600 font-semibold'>Delivery charge</span>
                        <span className='text-md text-green-400 font-semibold'>Rs {deliveryCharge}/-</span>
                    </div>
                    <div className='w-full flex justify-between items-center'>
                        <span className='text-md text-gray-600 font-semibold'>Taxes</span>
                        <span className='text-md text-green-400 font-semibold'>Rs {taxes}/-</span>
                    </div>
                </div>
                <div className='w-full flex justify-between items-center p-3'>
                    <span className='text-lg text-gray-600 font-bold'>Total</span>
                    <span className='text-lg text-green-400 font-bold'>Rs {total}/-</span>
                </div>
                <button className='w-[80%] p-3 rounded-lg bg-green-500 text-white hover:bg-green-400 transition-all cursor-pointer'>
                    Place Order
                </button>
            </div>
        </div>
    )
}

export default Home