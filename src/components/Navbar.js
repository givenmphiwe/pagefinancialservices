import React, { useRef } from "react";
import { FaBars, FaTimes, FaReact } from "react-icons/fa";
import "./styles/navbar.css";
import { useNavigate } from "react-router-dom";
import iconImg from "../assets/Page icon.png"

function Navbar() {
  const navigate = useNavigate();
  /* creates a reference to the nav element in the component. 
    useRef hook is used to create a reference to the element so that it can be accessed and manipulated in the component.*/

  const navRef = useRef();

  /*Below line defines the showNavbar function, which toggles the "responsive" class on the nav element. 
    The classList.toggle method is used to add or remove a class from the element.*/

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive");
  };

  return (
    <div className="container">
      {/* Renders a react icon with the size of 40px */}
      <img onClick={() => navigate("/")} src={iconImg} className="imgIcon" />
      {/* Sets the navRef as a reference to the nav element */}
      <nav ref={navRef}>
        <a onClick={() => navigate("/")}>HOME</a>
        <a onClick={() => navigate("/About")}>ABOUT US</a>
        <a onClick={() => navigate("/ProductsnSolutions")}>PRODUCTS & SOLUTIONS</a>
        <a onClick={() => navigate("/ContactUs")}>CONTACT US</a>
        {/* Renders a button with the class of nav-btn nav-close-btn and an FaTimes icon inside */}
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      {/* Renders a button with the class of nav-btn and an FaBars icon inside */}
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </div>
  );
}

export default Navbar;