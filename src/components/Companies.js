import Footer from "./Footer";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import pageFinancial from "../assets/Page-Financial.jpeg";

export const Companies = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <div className="container-1">
        <h3>Company Profiles, Branding, Logo</h3>
        <p>
          Next to your logo and company stationary, your company profile design
          is vitally important. This document needs to put it's best foot
          forward in representing your brand as it serves two purposes: This
          document introduces your company and services/products to potential
          clients. It serves as a reference for employees on company and product
          knowledge. Your company profile doesn't have to look dull! With
          imaginative use of colour, infographics and interesting fonts, we will
          transform your company profile into an interesting read.
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
