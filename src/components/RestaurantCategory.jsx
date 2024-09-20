import { useState } from 'react'
import Itemlist from './ItemList'

const RestaurantCategory = ({ showItems, data, setShowIndex1 }) => {
    // const [showItems, setShowItems] = useState(false)

    const handleClick = () => {
        setShowIndex1()
    }
    console.log('showItems', showItems)

    return (
        <div className="w-6/12 bg-gray-100 shadow-lg p-4 mx-auto my-4 ">
            <div
                className="flex justify-between cursor-pointer"
                onClick={handleClick}
            >
                <span className="text-lg font-bold">
                    {data.title} ({data.itemCards.length})
                </span>
                <span>⏬</span>
            </div>

            {showItems && <Itemlist items={data.itemCards} />}
        </div>
    )
}

export default RestaurantCategory
