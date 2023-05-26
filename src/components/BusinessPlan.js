import Footer from "./Footer";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import pageFinancial from "../assets/Page-Financial.jpeg";

export const BusinessPlan = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <div className="container-1">
        <h3>Business plan & Consulting</h3>
        <p>
          Our Business Plans comply with SEDA, SEFA, Dti, NEF, IDC, Private
          Financial Institutes and Bank Requirements in SA.
        </p>
        <p>
          <b>What is the purpose of a Business Plan?</b> <br />A business plan
          is a document that outlines and summarises the financial and
          operational objectives in the company and practically describes the
          manner in which the company will achieve its goals.
        </p>

        <p>
          <b>Do I really need a Business Plan?</b> <br />
          In simple terms, yes. Not considering the compliance aspect and
          funding opportunities. The process of the business plan will allow you
          to have a better understanding of exactly how you are going to start
          and grow your company to be successful.
        </p>

        <p>
          <b>What are the Advantages of a Business Plan?</b><br />
          A game plan. A business plan can be considered to be a roadmap for the
          company. It will allow for focus and direction towards one goal,
          although things may change in the first few months – the end goal will
          be known.<br />
          
          Compliance. Depending on what your company will be supplying, be it
          service or product, many governmental regulating bodies will request a
          formal business plan for the specific industry.
          <br />
          Financing & Funding. To be eligible for funding, investors will want
          to know all about your company. They will look for things such as who
          your target market is and, ultimately, whether your business is
          profitable. A business plan outlines all these points.
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
