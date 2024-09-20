import { CDN_URL } from '../utils/constants'

const RestaurantCard = (props) => {
    const { resData } = props
    const { name, cuisines, avgRating, sla } = resData?.info

    /// destructuring props on the fly
    return (
        <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200">
            {/* inline styling takes object with {{}} */}
            <img
                className="rounded-lg"
                src={CDN_URL + resData.info.cloudinaryImageId}
                alt="res-logo"
            />
            <h3 className="font-bold py-4">{name}</h3>
            <h4>{cuisines.join(', ')}</h4>
            <h5>{avgRating} stars</h5>
            <h5>{sla.slaString}</h5>
        </div>
    )
}

// Higher Order Component

// input - RestaurantCard
// output - RestaurantCardPromoted. \

export const withPromotedLabel = (RestaurantCard) => {
    return (props) => {
        return (
            <div>
                <label className="absolute bg-black text-white m-2 p-2 rounded-md">
                    Im Open!
                </label>
                <RestaurantCard {...props} />
            </div>
        )
    }
}

export default RestaurantCard
