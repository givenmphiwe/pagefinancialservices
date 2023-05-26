import Footer from "./Footer";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import pageFinancial from "../assets/Page-Financial.jpeg";

export const Letter = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <div className="container-1">
        <h3>Letter of Good Standing</h3>
        <p>
          All companies should ensure a valid letter of good standing is on file
          at all times. A letter of good standing will be issued by the
          Compensation Commissioner provided there is no funds owing to the
          commission and all return of earnings (ROE) returns have been filed
        </p>
        <p>
          <b>Documentary/Info requirements</b><br/>
          Company registration certificate (CoR14.3 or CK1) <br/>
          Copy of previous ROE assessment (where applicable) <br/> 
          Payroll declaration (prior year actuals + current year provision) <br/>
          Cost = R950.00 (3 working days)
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
