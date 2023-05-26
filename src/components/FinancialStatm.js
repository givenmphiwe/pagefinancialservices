import Footer from "./Footer";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import pageFinancial from "../assets/Page-Financial.jpeg";

export const Financial = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <div className="container-1">
        <h3>Annual Financial Statements</h3>
        <p>
          We offer a high-quality service that takes care of all your compliance
          and provides you with all the advice and support you need to take your
          business to the next level. Thanks to our proprietary technology and
          world-class staff, we offer unmatched value for money, making it
          impossible for others to compete with us.
        </p>
        <p>
          Our highly qualified and experienced accountants will provide you with
          services that assist you in keeping control over your local accounting
          obligations, ensuring compliance across all regulations, standards and
          reporting requirements. Our team of accounting and tax advisory
          experts is ready to be an integral partner to your internal finance
          department, bringing the required expertise, functionality and
          benefits of a dedicated accounting service provider. Our accounting,
          reporting and tax compliance services can cover:
        </p>

        <p>
          Maintaining statutory accounting general and subsidiary ledgers<br/>
          Bookkeeping of all primary documents in compliance with statutory<br/>
          requirements Accounts Payable and Accounts Receivable services Cash<br/>
          management and bank payment administration Inventory services, fixed<br/>
          asset, leases and loans Stock management consultancy services Monthly<br/>
          closing of accounts, reports on profit and loss, balance sheet, cash<br/>
          flow Preparation of all required statutory reporting and submission to<br/>
          local authorities Tailored management reports Consolidated reporting,<br/>
          reconciliation between statutory and management reports Preparation of<br/>
          Annual Financial Statements in accordance with IFRS standards VAT<br/>
          compliance and consultancy, VAT registrations and returns filings Any<br/>
          other tax consultancy associated with local taxes Assistance during<br/>
          audits, representation during inspections and tax controls<br/>
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
