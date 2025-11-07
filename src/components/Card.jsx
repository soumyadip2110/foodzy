import { LuLeafyGreen } from "react-icons/lu";
import { GiChickenOven } from "react-icons/gi";
import { useDispatch } from "react-redux";
import { addItem } from "../store/cartSlice";

function Card({ name, image, id, price, type }) {
    const dispatch = useDispatch();

    return (
        <div className='w-[300px] h-[400px] bg-white rounded-lg p-4 flex flex-col gap-3 shadow-lg hover:border-2 border-green-300'>
            <div className='w-[100%] h-[60%] rounded-lg overflow-hidden'>
                <img src={image} alt='image1' className='object-cover' />
            </div>
            <div className='text-2xl font-semibold'>{name}</div>
            <div className='w-full flex justify-between items-center'>
                <div className='text-lg text-green-500 font-bold'>Rs {price}/-</div>
                <div className='flex justify-center items-center gap-2 text-lg text-green-500 font-semibold'>
                    {type === 'veg' ? <LuLeafyGreen /> : <GiChickenOven />}
                    <span>{type}</span>
                </div>
            </div>
            <button
                className='w-full p-3 rounded-lg bg-green-500 text-white hover:bg-green-400 transition-all cursor-pointer'
                // onClick={() => dispatch(addItem({id, name, image, price, qty: 1}))}
                onClick={() => dispatch(addItem(
                    {
                        id,
                        name,
                        image,
                        price,
                        qty: 1
                    }
                ))}
            >
                Add to dish
            </button>
        </div>
    )

}

export default Card