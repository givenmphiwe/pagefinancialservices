import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./styles/home.css";
import LandingImg from "../assets/Landing-Img.jpg";
import Services from "../assets/Services.jpg";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

export const Home = () => {
  const navigate = useNavigate();
  const ref = useRef();

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

        <button onClick={() => navigate("/ContactUs")} className="btn-in-touch">
          Get in Touch
        </button>
      </div>

      <div className="container-1">
        <h3>Who we are and what we do</h3>
        <p>
          Page financial services is a leading tech driven company, Our mindset of always
          aiming high at achieving what hasn't been done before without fail
          through pragmatic but fresh mindsets combined with dynamic staff
          members who operate not just as employees but partners too
        </p>
        <img src={Services} alt="PFS.png" />
      </div>

      <div className="container-consult">
        <button onClick={() => navigate("/ContactUs")}>
          Request Consultation
        </button>
      </div>

      <div className="container-2">
        <h3></h3>
        <div className="card">
          <div className="imgbox">
            <img src={LandingImg} alt="Png.png" />
          </div>
          <div className="content">
            <p>
              Lorem ipsum do sit amet, consectetur adipisicingg elit, sed do
              eiusmod tempor incs ds dsfiewf wef e wf fewfikewnmfefw
            </p>
          </div>
        </div>

        <div className="card">
          <div className="imgbox">
            <img src={LandingImg} alt="Png.png" />
          </div>
          <div className="content">
            <p>
              Lorem ipsum do sit amet, consectetur adipisicingg elit, sed do
              eiusmod tempor incs ds dsfiewf wef e wf fewfikewnmfefw
            </p>
          </div>
        </div>

        <div className="card">
          <div className="imgbox">
            <img src={LandingImg} alt="Png.png" />
          </div>
          <div className="content">
            <p>
              Lorem ipsum do sit amet, consectetur adipisicingg elit, sed do
              eiusmod tempor incs ds dsfiewf wef e wf fewfikewnmfefw
            </p>
          </div>
        </div>

        <div className="card">
          <div className="imgbox">
            <img src={LandingImg} alt="Png.png" />
          </div>
          <div className="content">
            <p>
              Lorem ipsum do sit amet, consectetur adipisicingg elit, sed do
              eiusmod tempor incs ds dsfiewf wef e wf fewfikewnmfefw
            </p>
          </div>
        </div>
        <div className="card">
          <div className="imgbox">
            <img src={LandingImg} alt="Png.png" />
          </div>
          <div className="content">
            <p>
              Lorem ipsum do sit amet, consectetur adipisicingg elit, sed do
              eiusmod tempor incs ds dsfiewf wef e wf fewfikewnmfefw
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};
