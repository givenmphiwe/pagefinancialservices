import Footer from "./Footer";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import pageFinancial from "../assets/Page-Financial.jpeg";

export const Tax = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <div className="container-1">
        <h3>Tax & vat Registration</h3>
        <p>
          Submitting your tax return is not enough. We submit and do a
          professional tax structuring and financial need analysis for you. With
          this holistic approach, we can reduce your tax burden and ensure you
          utilise all your tax benefits. This also allows us to save you money
          on your insurance, taxes and give you peace of mind that your
          financial needs are addressed when planned or unexpected life events
          occur.
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
