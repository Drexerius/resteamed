import "./Client.css";
import { RiMenu2Line } from "react-icons/ri";

const Client = () => {
  return (
    <>
      <section>
        <div className="client-menu">
          <RiMenu2Line className="client-menu-icon" />
        </div>
        <div className="client-arrows">
          <button className="left-arrow">
            <img src="/src/assets/client/arrow-left.png" alt="arrow-left" />
          </button>
          <button className="right-arrow">
            <img src="/src/assets/client/arrow-right.png" alt="arrow-right" />
          </button>
        </div>
        <div className="logo">
          <img src="src/assets/client/logo.png" alt="logo" />
        </div>
        <nav>
          <div>STORE</div>
          <div>COMMUNITY</div>
          <div>LIBRARY</div>
          <div>DOWNLOADS</div>
        </nav>
        <div className="profile">
          <button className="friends">
            <img src="src/assets/client/friends.png" alt="friends" />
          </button>
          <button className="notifications">
            <img
              src="src/assets/client/notifications.png"
              alt="notifications"
            />
          </button>
          <button className="user">
            <img src="src/assets/client/juxt.png" alt="user" />
            <span className="username">Juxtopposed</span>
            <span className="balance">$5.25</span>
            <span className="arrow-down">
              <img src="src/assets/client/arrow-down.png" alt="arrow-down" />
            </span>
          </button>
        </div>
        <div className="client-user-menu">
          <img src="src/assets/client/juxt.png" alt="juxt" />
        </div>
      </section>
    </>
  );
};

export default Client;
