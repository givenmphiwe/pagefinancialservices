import "./styles/Footer.css";
import {
    FaEnvelope,
    FaFacebook,
    FaInstagram,
    FaLinkedin,
    FaPhone,
    FaTwitter,
  } from "react-icons/fa";
  import { FaWhatsapp } from "react-icons/fa";
  import { useNavigate } from "react-router-dom";


function Footer() {

    const navigate = useNavigate();

    return (
  <footer className="footer-1">
    <div className="row">
      <div className="col">
        <img src="" alt="" />
        <h1>Page Financial Services</h1>
      </div>

      <div className="col">
        <h3>Office</h3>
        <p>325 Rivonia Boulevard,</p>
        <p>Edenburg, Sandton</p>
        <p className="email-id">
          <FaEnvelope /> info@PageFinancialServices.com
        </p>
        <h4>
          <FaPhone /> +27 84 602 3144
        </h4>
      </div>
      <div className="col">
        <h3>Link</h3>
        <ul>
          <li className="link-s">
            <a onClick={() => navigate("Service")}>WHAT WE DO</a>
          </li>
          <li className="link-s">
            <a onClick={() => navigate("About")}>PRODUCTS & SOLUTIONS</a>
          </li>
          <li className="link-s">
            <a onClick={() => navigate("Training")}>CONSULT</a>
          </li>
          <li className="link-s">
            <a onClick={() => navigate("Contact")}>CONTACT US</a>
          </li>
        </ul>
      </div>
      <div className="col">
        <h3>Social media</h3>
        <div className="social-icons">
          <a
            href=""
            className="fab"
          >
            <FaFacebook />
          </a>
          <a
            href=""
            className="fab"
          >
            <FaLinkedin />
          </a>
          <a href="" className="fab">
            <FaInstagram />
          </a>
          <a href="" className="fab">
            <FaTwitter />
          </a>
          {/* <a
            href="https://api.whatsapp.com/send?phone=+27%2084%20602%203144&text=Hi%20STYLES%20SERVICES%20GROUP%20(PTY)%20LTD,%20I%20contacted%20you%20through%20your%20website.%20I%20need"
            className="fab"
          >
            <FaWhatsapp />
          </a> */}
        </div>
      </div>
    </div>
    <hr />
    <p className="copyright">
      Page Financial Services &copy; 2023 - All Rights Reserved | Designed by{" "}
      <a href="">Page Financial Services</a>
    </p>
  </footer>
    )
}
export default Footer