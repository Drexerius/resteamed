import "./Header.css";
import { FaShoppingCart } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { IoMdArrowDropdownCircle } from "react-icons/io";

const Header = () => {
  return (
    <>
      <header>
        <div className="menu">
          <span>
            <IoMdArrowDropdownCircle className="menu-icon" />
          </span>
          <div>Home</div>
        </div>
        <nav>
          <div>Home</div>
          <div>Browse</div>
          <div>Discover</div>
          <div>Points Shop</div>
          <div>Curators</div>
          <div>Gift Cards</div>
          <div>News</div>
        </nav>
        <form action="#" className="search">
          <input type="search" placeholder="Search..." />
          <button type="submit">
            <img src="/src/assets/header/search.png" alt="search" />
          </button>
        </form>
        <div className="extra-small">
          <button className="wishlist-menu">
            <CiStar className="wishlist-icon" />
          </button>
          <button className="cart-menu">
            <FaShoppingCart className="cart-icon" />
          </button>
          <button className="settings">
            <img src="/src/assets/header/settings.png" alt="settings" />
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
