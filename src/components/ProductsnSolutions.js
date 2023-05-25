import "./styles/ProductsnSol.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import { FaChartLine, FaCode, FaDesktop, FaPaintBrush } from "react-icons/fa";

export const ProductsnSolutions = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <div className="bodi">
        <div className="services">
          <h1>Products & Solutions.</h1>
          <div className="content">
            <div onClick={() => navigate("/Webdev")}  className="card">
              <div className="box">
                <FaDesktop className="i"/>
                <h3>Web Design</h3>
                <p>
                  Lorem iefnoewijnf wefweiofnieof fewfneof ciwejof cjewcnpe
                  cieoifwojjcew efejoewjfwoefjenefopewfp cewinof evchehoe
                  saoadnowqe ewfiewofjfreww wv
                </p>
                <a>Learn more</a>
              </div>
            </div>

            <div onClick={() => navigate("/Marketing")} className="card">
              <div className="box">
                <FaChartLine className="i" />
                <h3>Marketing</h3>
                <p>
                  Lorem iefnoewijnf wefweiofnieof fewfneof ciwejof cjewcnpe
                  cieoifwojjcew efejoewjfwoefjenefopewfp cewinof evchehoe
                  saoadnowqe ewfiewofjfreww wv
                </p>
                <a>Learn more</a>
              </div>
            </div>

            <div onClick={() => navigate("/Webdev")} className="card">
              <div className="box">
                <FaCode className="i"/>
                <h3>Web Development</h3>
                <p>
                  Lorem iefnoewijnf wefweiofnieof fewfneof ciwejof cjewcnpe
                  cieoifwojjcew efejoewjfwoefjenefopewfp cewinof evchehoe
                  saoadnowqe ewfiewofjfreww wv
                </p>
                <a>Learn more</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
