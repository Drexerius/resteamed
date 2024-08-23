import valve from '../../assets/footer/valve.png'
import logo from '../../assets/footer/logo.png'
import facebook from '../../assets/footer/facebook.png'
import x from '../../assets/footer/x.png'

import './Footer.css'
const Footer = () => {
    return (
        <>
            <footer>
                <div className="corporation">
                    <img src={valve} alt="valve" />
                    <img src={logo} alt="logo" />
                    <p>
                        © 2023 Valve Corporation. All rights reserved. All trademarks are property of their respective owners in the US and other countries.
                        VAT included in all prices where applicable.
                    </p>
                </div>
                <div className="links">
                    <ul>
                        <li><a href="#">About Valve</a></li>
                        <li><a href="#">Jobs</a></li>
                        <li><a href="#">Steamworks</a></li>
                        <li><a href="#">Steam Distribution</a></li>
                        <li><a href="#">Support</a></li>
                    </ul>                    
                    <ul>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Legal</a></li>
                        <li><a href="#">Steam Subscriber Agreement</a></li>
                        <li><a href="#">Refunds</a></li>
                        <li><a href="#">Cookies</a></li>
                    </ul>
                </div>
                <div className="socials">
                    <div>
                        <img src={facebook} alt="facebook" />
                    </div>
                    <div>
                        <img src={x} alt="x" />
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer