import arrowleft from "../../assets/client/arrow-left.png"
import arrowright from "../../assets/client/arrow-right.png"
import arrowdown from "../../assets/client/arrow-down.png"
import logo from "../../assets/client/logo.png"
import friends from "../../assets/client/friends.png"
import notifications from "../../assets/client/notifications.png"
import juxt from "../../assets/client/juxt.png"

import { RiMenu2Line } from "react-icons/ri";

import './Client.css'

const Client = () => {
    return (
        <>
            <section>
                <div className="client-menu">
                    <RiMenu2Line className="client-menu-icon"/>
                </div>
                <div className="client-arrows">
                    <button className="left-arrow">
                        <img src={arrowleft} alt="arrow-left" />
                    </button>
                    <button className="right-arrow">
                        <img src={arrowright} alt="arrow-right" />
                    </button>
                </div>
                <div className="logo">
                    <img src={logo} alt="logo" />
                </div>
                <nav>
                    <div>STORE</div>
                    <div>COMMUNITY</div>
                    <div>LIBRARY</div>
                    <div>DOWNLOADS</div>
                </nav>
                <div className="profile">
                    <button className="friends">
                        <img src={friends} alt="friends" />
                    </button>
                    <button className="notifications">
                        <img src={notifications} alt="notifications" />
                    </button>
                    <div className="user">
                        <img src={juxt} alt="user" />
                        <span className="username">Juxtopposed</span>
                        <span className="balance">$5.25</span>
                        <span className="arrow-down">
                            <img src={arrowdown} alt="arrow-down" />
                        </span>
                    </div>
                </div>
                <div className="client-user-menu">
                    <img src={juxt} alt="juxt" />
                </div>
            </section>
        </>
    )
}

export default Client