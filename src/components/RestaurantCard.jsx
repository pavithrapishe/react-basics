import { CDN_URL } from '../utils/constants'

const RestaurantCard = (props) => {
    const { resData } = props
    const { name, cuisines, avgRating, sla } = resData?.info

    /// destructuring props on the fly
    return (
        <div className="restaurant-card" style={{ backgroundColor: '#f0f0f0' }}>
            {/* inline styling takes object with {{}} */}
            <img
                className="restaurant-image"
                src={CDN_URL + resData.info.cloudinaryImageId}
                alt="res-logo"
            />
            <h3>{name}</h3>
            <h4>{cuisines.join(', ')}</h4>
            <h5>{avgRating} stars</h5>
            <h5>{sla.slaString}</h5>
        </div>
    )
}

export default RestaurantCard
