import RestaurantCard, { withPromotedLabel } from './RestaurantCard'
import { useState, useEffect, useContext } from 'react' // named export
import Shimmer from './Shimmer'
import { Link } from 'react-router-dom'
import useOnlineStatus from '../utils/useOnlineStatus'
import UserContext from '../utils/UserContext'

const Body = () => {
    // create state variable
    const [listOfRestaurants, setListOfRestaurants] = useState([])
    const [filteredRestaurants, setFilteredRestaurants] = useState([])

    const [searchText, setSearchText] = useState('')

    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard)

    const onlineStatus = useOnlineStatus()

    const { loggedInUser, setUserName } = useContext(UserContext)

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        const data = await fetch(
            'https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.956924&lng=77.701127&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'
        )
        const json = await data.json()

        const swiggyRestaurants =
            json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
                ?.restaurants

        setListOfRestaurants(swiggyRestaurants)
        setFilteredRestaurants(swiggyRestaurants)
    }

    if (!onlineStatus) return <h1> You are offline!!</h1>

    console.log('list ', listOfRestaurants)

    return listOfRestaurants.length === 0 ? (
        <Shimmer></Shimmer>
    ) : (
        <div className="body">
            <div className="filter flex">
                <div className="search m-4 p-4">
                    <input
                        type="text"
                        className=" border border-solid border-black"
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                    />
                    <button
                        className="px-4 py-2 bg-green-100 m-4 rounded-lg"
                        onClick={() => {
                            const filteredRest = listOfRestaurants.filter(
                                (res) =>
                                    res.info.name
                                        .toLowerCase()
                                        .includes(searchText.toLowerCase())
                            )
                            setFilteredRestaurants(filteredRest)
                        }}
                    >
                        Search
                    </button>
                </div>
                <div className="search m-4 p-4 flex items-center">
                    <button
                        className="px-4 py-2 bg-gray-100 rounded-lg"
                        onClick={() => {
                            const filteredRes = listOfRestaurants.filter(
                                (res) => {
                                    return res.info.avgRating > 4.5
                                }
                            )
                            setListOfRestaurants(filteredRes)
                        }}
                    >
                        Top Rated Restaurant
                    </button>
                </div>
                <div className="search m-4 p-4 flex items-center">
                    <label>User Name :</label>
                    <input
                        className="border border-black p-2"
                        onChange={(e) => setUserName(e.target.value)}
                        value={loggedInUser}
                    />
                </div>
            </div>
            <div className="flex flex-wrap">
                {filteredRestaurants.map((restaurant) => {
                    return (
                        <Link
                            to={'/restaurants/' + restaurant?.info.id}
                            key={restaurant?.info.id}
                        >
                            {restaurant?.info?.isOpen ? (
                                <RestaurantCardPromoted resData={restaurant} />
                            ) : (
                                <RestaurantCard resData={restaurant} />
                            )}
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}

export default Body
