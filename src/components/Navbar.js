import React, { useRef } from "react";
import { FaBars, FaTimes, FaReact } from "react-icons/fa";
import "./styles/navbar.css";

function Navbar() {
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
      <FaReact size={40} />
      {/* Sets the navRef as a reference to the nav element */}
      <nav ref={navRef}>
        <a href="/#">HOME</a>
        <a href="/#">ABOUT US</a>
        <a href="/#">PRODUCTS & SOLUTIONS</a>
        <a href="/#">CONTACT US</a>
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