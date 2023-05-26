import Footer from "./Footer";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import "./styles/webdev.css";
import webImg from "../assets/Web-dev.jpg";

export const Webdev = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <div className="container-1">
        <h3>Web Development and Graphic Design</h3>
        <p>
          We have the team of software developers and web designers,Who are
          always motivated to produce quality software which is maintainable,We
          proud ourselves with the great quality software we have developed.
          <br />
          <br />
          <b>Page financial services</b> will be at your service not from
          developing/building Software. We go all out for our Clients from
          hosting the website to providing your web with business email, We
          don't stop there once you are with us you are family, we gonna be your
          support and always make sure your website works very even after being
          developed
        </p>
        <img src={webImg} alt="wb-dev.png" />
      </div>
      <div className="container-consult-1">
        <button onClick={() => navigate("/ContactUs")}>Talk to us</button>
      </div>
      <Footer />
    </>
  );
};
