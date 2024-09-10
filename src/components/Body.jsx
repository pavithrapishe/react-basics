import RestaurantCard from './RestaurantCard'
import resList from '../utils/mockData'
import { useState } from 'react' // named export

const Body = () => {
    // create state variable
    const [listOfRestaurants, setListOfRestaurants] = useState(resList)

    return (
        <div className="body">
            <div className="filter">
                <button
                    className="filter-btn"
                    onClick={() => {
                        const filteredRes = listOfRestaurants.filter((res) => {
                            return res.info.avgRating > 4
                        })
                        setListOfRestaurants(filteredRes)
                    }}
                >
                    Top Rated Restaurant
                </button>
            </div>
            <div className="restaurant-container">
                {listOfRestaurants.map((restaurant) => {
                    return (
                        <RestaurantCard
                            key={restaurant?.info.id}
                            resData={restaurant}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default Body
