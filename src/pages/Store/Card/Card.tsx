import { MdFavorite, MdFavoriteBorder } from 'react-icons/md'
import windows from '../../../assets/store/windows.png'
import stream_live from '../../../assets/store/stream-live.png'
import stream_play from '../../../assets/store/stream-play.png'
import views from '../../../assets/store/views.png'
import './Card.css'


import { obj } from '../StoreSection/StoreSection'
import { FaPlus } from 'react-icons/fa'
type CardProps = {
    title: string
    object: obj
}
const Card = ({ title, object } : CardProps) => {
    return (title === "Featured") ? (
        <>
            <div className="banner">
                <img src={object.image} alt="banner-image" className='banner-image'/>
                <div className="info">
                    <h2>{object.title}</h2>
                    <p>{object.banner?.description}</p>
                    <div className="images">
                        {
                            object.banner?.images.map((image) => {
                                return (
                                    <img src={image} alt="banner-image"/>
                                )
                            })
                        }
                    </div>
                    <div className="tags">
                        {
                            object.banner?.tags.map((tag) => {
                                return (
                                    <div className="tag">{tag}</div>
                                )
                            })
                        }
                        <div className="add-tag"><FaPlus /></div>
                        <div className="platform"><img src={windows} alt="windows"/></div>
                    </div>
                    <div className="panel">
                        <div className="wishlist">
                            Wishlist
                            <MdFavorite className="heart-full"/>
                            <MdFavoriteBorder className="heart-empty"/>
                        </div>
                        {
                            (object.sale) ? (
                            <>
                                <div className="sale">
                                    <p>{object.sale.date}</p>
                                    <div className="sale-value">{object.sale.value}</div>
                                    <div className="price">
                                        <span className="actual-price">{object.price}</span>
                                        <span className="sale-price">{object.sale.price}</span>
                                    </div>
                                </div>
                            </>
                            ) : (
                            <div className="price">
                                <span className="actual-price">{object.price}</span>
                            </div>
                            )
                        }
                        <div className="buy">Buy Now</div>
                    </div>
                </div>
            </div>
        </>
    ) :
    (title === "Browse Steam") ? (
        <div className="genre-card">
            <img src={object.image} alt="genre-image" />
            <h2>{object.title}</h2>
        </div>
    ) : 
    (title == "Recently Updated") ? 
    (
        <div className="recent-card">
            <img src={object.image} alt="card-image" />
            <h2>{object.title}</h2>
            <p className="description">{object.recent?.description}</p>
            <div className="buttons">
                <div className="status">{object.recent?.status}</div>
                <div className="view">View Updates</div>
            </div>
        </div>
    ) : //otherwise universal cards
    (
        <>
            <div className={title == "Top Sellers" ? "top-seller card" : "card"}>
                { // Image
                    (title == "Games Streaming Now") ? (
                        <div className="stream">
                            <img src={object.image} alt="card-image" />
                            <img src={stream_live} alt="live" className='live'/>
                            <img src={stream_play} alt="play" className='pause'/>
                        </div>
                    ) : (
                        <img src={object.image} alt="card-image" className={title=="Top Sellers" ? "top-seller-image" : ""}/>
                    )
                }
                <div className="info">
                    <h2>{object.title}</h2>
                    { // Info left corner
                        (title == "Games Streaming Now") ? (
                            <div className="views">
                                <img src={views} alt="views"/>
                                <p>{object.viewers}</p>
                                
                            </div>
                        ) : (
                            <div className="platform"><img src={windows} alt="windows"/></div>
                        )
                    }
                    { // Price and sale
                        (object.sale) ? (
                        <>
                            <div className="sale">
                                <p>{object.sale.date}</p>
                                <div className="sale-value">{object.sale.value}</div>
                                <div className="price">
                                    <span className="actual-price">{object.price}</span>
                                    <span className="sale-price">{object.sale.price}</span>
                                </div>
                            </div>
                        </>
                        ) : (
                        <div className="price">
                            <span className="actual-price">{object.price}</span>
                        </div>
                        )
                    }
                    { // Buttons right corner
                        (object.price == "Free") ? (
                            <div className="play">Play Now</div>
                        ) : 
                        (object.price) ? (
                            (                            
                                <button>
                                    <MdFavoriteBorder  className="heart-empty"/>
                                    <MdFavorite  className="heart-full"/>
                                </button>
                            )
                        ) :
                        (title == "Games Streaming Now") ? (
                            <div className="store-page">Store Page</div>
                        ) : 0
                    }
                </div>
            </div>
        </>
    )
}

export default Card