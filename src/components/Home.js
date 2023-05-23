import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles/home.css";
import LandingImg from "../assets/LandingImg.jpg";
import Navbar from "./Navbar";

export const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar/>
      <div>
        <img  className="Landing-img" src={LandingImg}/>
      </div>
    </>
  );
};
