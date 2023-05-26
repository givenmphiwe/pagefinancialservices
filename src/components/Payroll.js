import Footer from "./Footer";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import pageFinancial from "../assets/Page-Financial.jpeg";

export const Payroll = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <div className="container-1">
        <h3>Payroll Services</h3>
        <p>
          Outsourced payroll companies have a habit of luring clients in with
          low costs, but then add on the hidden charges whenever a client needs
          help. At Page Financial Services Outsourcing we develop relationships
          for the long term. This means transparent costs, a professional,
          personalised service and a commitment to your business success. We
          have over twenty years payroll experience in South Africa. If you need
          help with any of your payroll requirements please contact us and we
          will tailor a solution to meet your requirements.
        </p>

        <p>
          Business owners face a decision: Do they devote time and energy to
          developing manpower and know-how to keep up with payroll legislative
          changes and all the administration and queries that go with it, or do
          they focus on managing their businesses, generating sales and
          achieving revenue growth?
        </p>

        <p>
          Running a legally compliant payroll department has become an
          increasingly difficult and time-consuming task for companies of all
          sizes, as mushrooming legislative requirements have resulted in a
          confusing heap of legal requirements contained in multiple Acts
          governing tax, HR and payroll.
        </p>

        <p>
          Payroll Administrators can no longer just be on top of changes from a
          payroll software and legislation point of view. They also have to keep
          up with changes that are implemented in the SARS e@syFile and eFiling
          electronic submission systems and all the acts that govern the paying
          of employees
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
