import Shimmer from './Shimmer'
import { useParams } from 'react-router-dom'

import RestaurantCategory from './RestaurantCategory'

import useRestaurantMenu from '../utils/useRestaurantMenu'
import { useState } from 'react'

const RestaurantMenu = () => {
    // const [restInfo, setRestInfo] = useState(null)

    const [showIndex, setShowIndex] = useState(0)
    const [showIndexBool, setShowIndexBool] = useState(true)

    const { resId } = useParams()

    // Moving this to custom hook - useRestaurantMenu
    // useEffect(() => {
    //     fetchMenu()
    // }, []) // using empty dependency array since i dont want to call useeffect every render.

    // const fetchMenu = async () => {
    //     console.log(resId)
    //     const data = await fetch(MENU_API + resId)
    //     const json = await data.json()
    //     console.log('hello', json)
    //     setRestInfo(json.data)
    // }

    const restInfo = useRestaurantMenu(resId)

    if (restInfo === null) return <Shimmer />

    const { name, cuisines, costForTwoMessage } =
        restInfo?.cards[2]?.card?.card?.info

    const { itemCards } =
        restInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card
            .card

    const categories =
        restInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
            (cd) =>
                cd.card?.card?.['@type'] ===
                'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory'
        )

    console.log('hey', restInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR)
    return (
        <div className="text-center">
            <h1 className="font-bold my-10 text-2xl">{name}</h1>
            <p className="font-semibold">
                {cuisines.join(', ')} - {costForTwoMessage}
            </p>

            {/* accordian */}
            {categories.map((category, index) => (
                <RestaurantCategory
                    key={category.card.card.title}
                    data={category?.card?.card}
                    showItems={
                        // index === showIndex ? showIndexBool : !showIndexBool
                        index === showIndex ? true : false
                    }
                    setShowIndex1={() => {
                        // if (index === showIndex) {
                        //     setShowIndexBool(!showIndexBool)
                        // }
                        setShowIndex(index)
                    }}
                />
            ))}
        </div>
    )
}

export default RestaurantMenu
