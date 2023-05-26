import Footer from "./Footer";
import Navbar from "./Navbar";
import "./styles/About.css";
import { useNavigate } from "react-router-dom";

export const About = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <div class="about">
        <div class="inner-section">
          <h1>About Us</h1>
          <p class="text-1">
            <b>Page Financial Services</b> company with a “service excellence”
            attitude. We aim to CoCreate your Bespoke Application with you our
            customers ensuring we deliver solutions that match your requirements
            both from a business and customer experience perspective. We believe
            that digital transformation has the power to change our country, our
            continent and our world for the better. <br />
            That is why we are constantly driven to innovate and to maintain
            only the highest level of quality in everything we do and everything
            we provide. Because without quality, there can be no greatness! In
            bringing leading-edge technologies to the market, the global leader
            in multi-experience app development & digital banking solutions
            respectively we seek to deliver solutions that give our clients the
            competitive advantage.
            <br />
          </p>
          <div class="skills">
            <button onClick={() => navigate("/ContactUs")}>Contact Us</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
