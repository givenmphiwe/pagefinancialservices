import "./styles/ProductsnSol.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { FaChartLine, FaCode, FaDesktop, FaPaintBrush } from "react-icons/fa";

export const ProductsnSolutions = () => {
  return (
    <>
      <Navbar />
      <div className="bodi">
        <div className="services">
          <h1>Products & Solutions.</h1>
          <div className="content">
            <div className="card">
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

            <div className="card">
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

            <div className="card">
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
