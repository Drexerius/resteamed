import "./Card.css";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import { obj } from "../Store";
import { FaPlus } from "react-icons/fa";

type CardProps = {
  title: string;
  object: obj;
};

const Card = ({ title, object }: CardProps) => {
  return title === "Featured" ? (
    <>
      <div className="banner card">
        <img src={object.image} alt="banner-image" className="banner-image" />
        <div className="info">
          <h2>{object.title}</h2>
          <p>{object.banner?.description}</p>
          <div className="images">
            {object.banner?.images.map((image, i) => {
              return <img key={i} src={image} alt="banner-image" />;
            })}
          </div>
          <div className="tags">
            {object.banner?.tags.map((tag, i) => {
              return (
                <div key={i} className="tag">
                  {tag}
                </div>
              );
            })}
            <div className="add-tag">
              <FaPlus />
            </div>
            <div className="platform">
              <img src="/src/assets/store/windows.png" alt="windows" />
            </div>
          </div>
          <div className="panel">
            <button className="wishlist">
              Wishlist
              <MdFavorite className="heart-full" />
              <MdFavoriteBorder className="heart-empty" />
            </button>
            {object.sale ? (
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
            )}
            <button className="buy">Buy Now</button>
          </div>
        </div>
      </div>
    </>
  ) : title === "Browse Steam" ? (
    <div className="genre-card">
      <img src={object.image} alt="genre-image" />
      <h2>{object.title}</h2>
    </div>
  ) : title == "Recently Updated" ? (
    <div className="card recent-card">
      <img src={object.image} alt="card-image" />
      <h2>{object.title}</h2>
      <p className="description">{object.recent?.description}</p>
      <div className="buttons">
        <button className="status">{object.recent?.status}</button>
        <button className="view">View Updates</button>
      </div>
    </div>
  ) : (
    //otherwise universal cards
    <>
      <div className={title == "Top Sellers" ? "top-seller card" : "card"}>
        {
          // Image
          title == "Games Streaming Now" ? (
            <div className="stream">
              <img src={object.image} alt="card-image" />
              <img
                src="/src/assets/store/stream-live.png"
                alt="live"
                className="live"
              />
              <img
                src="/src/assets/store/stream-play.png"
                alt="play"
                className="pause"
              />
            </div>
          ) : (
            <img
              src={object.image}
              alt="card-image"
              className={title == "Top Sellers" ? "top-seller-image" : ""}
            />
          )
        }
        <div className="info">
          <h2>{object.title}</h2>
          {
            // Info left corner
            title == "Games Streaming Now" ? (
              <div className="views">
                <img src="/src/assets/store/views.png" alt="views" />
                <p>{object.viewers}</p>
              </div>
            ) : (
              <div className="platform">
                <img src="/src/assets/store/windows.png" alt="windows" />
              </div>
            )
          }
          {
            // Price and sale
            object.sale ? (
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
          {
            // Buttons right corner
            object.price == "Free" ? (
              <button className="play">Play Now</button>
            ) : object.price ? (
              <button>
                <MdFavoriteBorder className="heart-empty" />
                <MdFavorite className="heart-full" />
              </button>
            ) : title == "Games Streaming Now" ? (
              <button className="store-page-button">Store Page</button>
            ) : (
              0
            )
          }
        </div>
      </div>
    </>
  );
};

export default Card;
