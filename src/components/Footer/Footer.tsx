import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="corporation">
          <img src="/src/assets/footer/valve.png" alt="valve" />
          <img src="/src/assets/footer/logo.png" alt="logo" />
          <p>
            © 2023 Valve Corporation. All rights reserved. All trademarks are
            property of their respective owners in the US and other countries.
            VAT included in all prices where applicable.
          </p>
        </div>
        <div className="links">
          <ul>
            <li>
              <a href="#">About Valve</a>
            </li>
            <li>
              <a href="#">Jobs</a>
            </li>
            <li>
              <a href="#">Steamworks</a>
            </li>
            <li>
              <a href="#">Steam Distribution</a>
            </li>
            <li>
              <a href="#">Support</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Legal</a>
            </li>
            <li>
              <a href="#">Steam Subscriber Agreement</a>
            </li>
            <li>
              <a href="#">Refunds</a>
            </li>
            <li>
              <a href="#">Cookies</a>
            </li>
          </ul>
        </div>
        <div className="socials">
          <div>
            <img src="/src/assets/footer/facebook.png" alt="facebook" />
          </div>
          <div>
            <img src="/src/assets/footer/x.png" alt="x" />
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
