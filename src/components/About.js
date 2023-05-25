import Footer from "./Footer";
import Navbar from "./Navbar";
import "./styles/About.css"
import { useNavigate } from "react-router-dom";


export const About = () => {
  const navigate = useNavigate();

  return (
    <>
    <Navbar/>
      <div class="about">
        <div class="inner-section">
          <h1>About Us</h1>
          <p class="text-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            velit ducimus, enim inventore earum, eligendi nostrum pariatur
            necessitatibus eius dicta a voluptates sit deleniti autem error eos
            totam nisi neque voluptates sit deleniti autem error eos totam nisi
            neque.
          </p>
          <div class="skills">
            <button onClick={() => navigate("/ContactUs")}>Contact Us</button>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};
