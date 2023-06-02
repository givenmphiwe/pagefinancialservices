import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles/home.css";
import LandingImg from "../assets/Landing-Img.jpg";
import Services from "../assets/Services.jpg";
import Navbar from "./Navbar";
import Footer from "./Footer";
import bookkeeping from "../assets/Bookkeeping.jpg";
import payroll from "../assets/Payroll.jpg";
import incometax from "../assets/incomeTax_.jpg";
import financialSta from "../assets/financialStament.jpg";
import developer from "../assets/developer_.jpg";

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

        <button onClick={() => navigate("/ContactUs")} className="btn-in-touch">
          Get in Touch
        </button>
      </div>

      <div className="container-1">
        <h3>Who we are and what we do</h3>
        <p>
          Page financial services is a leading tech driven company, Our mindset
          of always aiming high at achieving what hasn't been done before
          without fail through pragmatic but fresh mindsets combined with
          dynamic staff members who operate not just as employees but partners
          too
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
        <div onClick={() => navigate("/Accounting")} className="card">
          <div className="imgbox">
            <img src={bookkeeping} alt="Png.png" />
          </div>
          <div className="content">
            <p>
              <h3>Accounting & Bookkeeping</h3>
              The purpose of bookkeeping is to maintain a systematic record of
              financial activities and transactions chronologically. The purpose
              of accounting is to report the financial strength and obtain the
              results of the operating activity of a business
            </p>
          </div>
        </div>

        <div onClick={() => navigate("/Payroll")} className="card">
          <div className="imgbox">
            <img src={payroll} alt="Png.png" />
          </div>
          <div className="content">
            <p>
              <h3>Payroll Services</h3>
              In South Africa, there is no set payroll cycle. The payroll cycle
              is typically stipulated in the employment contract, which is to be
              agreed upon by the employee and employer. The payroll cycle can
              run monthly, weekly, or bi-weekly.
            </p>
          </div>
        </div>

        <div className="card">
          <div className="imgbox">
            <img src={developer} alt="Png.png" />
          </div>
          <div onClick={() => navigate("/Webdev")} className="content">
            <p>
              <h3>Web Development</h3>A more comprehensive list of tasks to
              which Web development commonly refers, may include Web
              engineering, Web design, Web content development, client liaison,
              client-side/server-side scripting, Web server and network security
              configuration, and e-commerce development.
            </p>
          </div>
        </div>

        <div onClick={() => navigate("/Tax")} className="card">
          <div className="imgbox">
            <img src={incometax} alt="Png.png" />
          </div>
          <div className="content">
            <p>
              <h3>Tax & vat</h3>
              Income Tax Number and VAT number are two totally different tax
              types. Income tax registration is compulsory whereas a VAT
              registration number depends on quite a few factors. The business
              must however be registered for income tax before a tax clearance
              or VAT number can be applied for
            </p>
          </div>
        </div>
        <div onClick={() => navigate("/Financial")} className="card">
          <div className="imgbox">
            <img src={financialSta} alt="Png.png" />
          </div>
          <div className="content">
            <p>
              <h3>Financial Statements</h3>
              Refer to the annual presentation of
              the entity’s financial performance.They comprise a Balance Sheet,
              Statement of Profit and Loss, Statement of changes in equity,
              Cash flow statement, and Notes to the financial statements.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};
