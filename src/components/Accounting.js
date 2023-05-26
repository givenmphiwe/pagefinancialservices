import Footer from "./Footer";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import pageFinancial from "../assets/Page-Financial.jpeg";

export const Accounting = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <div className="container-1">
        <h3>Accounting & Bookkeeping</h3>
        <p>
          Accounting and bookkeeping are crucial elements in the proper
          functioning of a business, that gives you an insight about the
          performance of a company. Accountants manage financial data, ensure
          its accuracy and generate error-free reports, which in turn help in
          making better revenue forecasts for a company.
        </p>
        <p>
          Maintaining an in-house accounting team may not be a feasible option
          for majority of the companies. An outsourced finance department will
          help in reducing your administrative burden and staff costs. Accurate
          and timely reports is something that is ensured, provided its not a
          single person working on the reports, but it passes through multiple
          levels of supervision.
        </p>

        <p>
          Page Financial Services will be updated with the new regulations and
          hence compliance wont be a matter of concern. They give you the
          privilege of focusing on core business activities, rather than
          spending your valuable time on numbers. One can utilize the extra time
          to enhance the business operations, improve marketing efforts and
          customer services.
        </p>

        <p>
          Moreover, a client company just has to pay for the actual work they
          want to get done. Expenses of the accounting department that include
          vacation, sick leaves, payroll taxes, and training are not their
          concern.
        </p>

        <p>
          Moreover, accounting experts will be updated about all the latest
          regulatory requirements. They will have an accurate idea of what is
          happening across the industry and will monitor the relevant laws and
          regulations.
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
