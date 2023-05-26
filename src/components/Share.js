import Footer from "./Footer";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import pageFinancial from "../assets/Page-Financial.jpeg";

export const Share = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <div className="container-1">
        <h3>Shareholder Certificates</h3>
        <p>
          Director changes are required to be lodged with CIPC to ensure that
          their records are up to date. Shareholder changes are the
          responsibility of the Directors and are NOT required to be lodged with
          CIPC. We offer both services and can do them simultaneously. The
          Directors run the company and Shareholders own the company.
        </p>
        <img src={pageFinancial} alt="tax.png" />
      </div>

      <div className="container-consult-1">
        <button onClick={() => navigate("/ContactUs")}>Talk to us</button>
      </div>
      <Footer />
    </>
  );
};
