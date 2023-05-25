import Footer from "./Footer";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import "./styles/webdev.css"

export const Webdev = () => {
  const navigate = useNavigate();

  return (
    <>
    <Navbar/>
      <div className="container-1">
        <h3>Web Development and Graphic Design</h3>
        <p>
          Page financial services is a leading tech driven sufficireneojoiejcewd
          fneof fwooief fewfikewnmf eofjeeowi weifjowc coew ewfejweej9efwf
          wefwefewf oewjfioew jewkfnef jefnwkkjfnew efnewfufehu wejfdbkjewjfb
          jefkbewb efjk fewfikrewnmf wefei ewfiewufh fewfhie fjewfbueifiwfvewoc
          edjbcewiu efubuewfge ewfrrr
        </p>
        <img src="" alt="PFS.png" />
      </div>
      <div className="container-consult-1">
        <button onClick={() => navigate("/ContactUs")}>Talk to us</button>
      </div>
      <Footer />
    </>
  );
};
