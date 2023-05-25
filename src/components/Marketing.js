import Footer from "./Footer";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import taxImg from "../assets/Tax.jpg";

export const Marketing = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <div className="container-1">
        <h3>Marketing</h3>
        <p>
          We have the team of software developers and web designers,Who are
          always motivated to produce quality software which is maintainable,We
          prode ourselves with the great softwares we have developed so far
        </p>
        <img src={taxImg} alt="tax.png" />
      </div>

      <div className="container-consult-1">
        <button onClick={() => navigate("/ContactUs")}>Talk to us</button>
      </div>
      <Footer />
    </>
  );
};
