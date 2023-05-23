import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "../components/styles/navbar.css";

const NavbarPage = () => {
  const navigate = useNavigate();

  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.remove("responsive_nav")
  };

  return (
    <></>
  );
};

export default NavbarPage;
