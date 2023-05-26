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
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda
          iste facilis quos impedit fuga nobis modi debitis laboriosam velit
          reiciendis quisquam alias corporis, maxime enim, optio ab dolorum
          sequi qui.
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
