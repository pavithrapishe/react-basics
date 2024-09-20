import { useDispatch } from 'react-redux'
import { CDN_URL } from '../utils/constants'
import { addItem } from '../utils/cartSlice'

const Itemlist = ({ items }) => {
    const dispatch = useDispatch()

    const handleAddItem = (item) => {
        dispatch(addItem(item)) // param inside addItem goes as an {payload: "param"} and adds as an "action" not state.
    }

    return (
        <div>
            {items.map((item) => (
                <div
                    key={item?.card?.info?.id}
                    className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
                >
                    <div>
                        <div className="py-2">
                            <span>{item.card.info.name}</span>
                            <span>
                                - ₹
                                {item.card.info.price
                                    ? item.card.info.finalPrice / 100
                                    : item.card.info.price / 100}
                            </span>
                        </div>

                        <p className="text-xs">{item.card.info.description}</p>
                    </div>

                    <div>
                        {/* <div className="absolute"> */}
                        <button
                            className="p-2 mx-16 rounded-lg bg-black text-white shadow-lg absolute m-auto"
                            onClick={() => handleAddItem(item)}
                        >
                            Add +
                        </button>
                        {/* </div> */}
                        <img
                            src={CDN_URL + item.card.info.imageId}
                            className="w-[174px]"
                        />
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Itemlist
