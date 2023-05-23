import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles/home.css";
import LandingImg from "../assets/Landing-Img.jpg";
import Navbar from "./Navbar";

export const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <div>
        <img className="Landing-img" src={LandingImg} />
        <h3 className="top-left">Grow Your business Today</h3>
        <h2 className="top-left-2">With our powerful tools</h2>
        <p className="top-left-3">
          Page financial services is designed in a way that grows your business
          in all aspects <br />
        </p>

        <button className="btn-in-touch">Get in touch</button>
      </div>

      <div className="container-1">
        <h3>Who we are and what we do</h3>
        <p>
          Page financial services is a leading tech driven sufficireneojoiejcewd fneof fwooief fewfikewnmf
          eofjeeowi weifjowc coew
          ewfejweej9efwf
          wefwefewf oewjfioew jewkfnef jefnwkkjfnew efnewfufehu wejfdbkjewjfb jefkbewb efjk
           fewfikrewnmf wefei ewfiewufh fewfhie fjewfbueifiwfvewoc edjbcewiu efubuewfge
          ewfrrr
        </p>
      </div>
    </>
  );
};
