import "./styles/ProductsnSol.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import {
  FaAddressBook,
  FaBuilding,
  FaChartLine,
  FaCode,
  FaDesktop,
  FaGraduationCap,
  FaNewspaper,
  FaPage4,
  FaPagelines,
  FaPager,
  FaPaintBrush,
  FaPaperPlane,
  FaPaperclip,
  FaPercentage,
  FaRegNewspaper,
  FaShare,
  FaSpeakap,
  FaSpeakerDeck,
} from "react-icons/fa";

export const ProductsnSolutions = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <div class="contact-bg">
        <h3>Get in Touch with Us</h3>
        <h2>Products & Solutions</h2>
        <div class="line">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <p class="text">
          We believe that digital transformation has the power to change our
          country, our continent and our world for the better. That is why we
          are constantly driven to innovate and to maintain only the highest
          level of quality in everything we do and everything we provide.
          Because without quality, there can be no greatness!
        </p>
      </div>
      <div className="bodi">
        <div className="services">
          <div className="content">
            <div onClick={() => navigate("/Accounting")} className="card">
              <div className="box">
                <FaRegNewspaper className="i" />
                <h3>Accounting & Bookkeeping</h3>
                <p>
                  Lorem iefnoewijnf wefweiofnieof fewfneof ciwejof cjewcnpe
                  cieoifwojjcew efejoewjfwoefjenefopewfp cewinof evchehoe
                  saoadnowqe ewfiewofjfreww wv
                </p>
                <a>Learn more</a>
              </div>
            </div>

            <div onClick={() => navigate("/Payroll")} className="card">
              <div className="box">
                <FaChartLine className="i" />
                <h3>Payroll Services</h3>
                <p>
                  Lorem iefnoewijnf wefweiofnieof fewfneof ciwejof cjewcnpe
                  cieoifwojjcew efejoewjfwoefjenefopewfp cewinof evchehoe
                  saoadnowqe ewfiewofjfreww wv
                </p>
                <a>Learn more</a>
              </div>
            </div>

            <div onClick={() => navigate("/Webdev")} className="card">
              <div className="box">
                <FaCode className="i" />
                <h3>Web Development</h3>
                <p>
                  Lorem iefnoewijnf wefweiofnieof fewfneof ciwejof cjewcnpe
                  cieoifwojjcew efejoewjfwoefjenefopewfp cewinof evchehoe
                  saoadnowqe ewfiewofjfreww wv
                </p>
                <a>Learn more</a>
              </div>
            </div>
          </div>
        </div>

        {/*second section*/}
        <div className="services-1">
          <div className="content">
            <div onClick={() => navigate("/Tax")} className="card">
              <div className="box">
                <FaDesktop className="i" />
                <h3>Tax & vat Registration</h3>
                <p>
                  Income Tax Number and VAT number are two totally different tax
                  types. Income tax registration is compulsory whereas a VAT
                  registration number depends on quite a few factors. The
                  business must however be registered for income tax before a
                  tax clearance or VAT number can be applied for
                </p>
                <a>Learn more</a>
              </div>
            </div>

            <div onClick={() => navigate("/Financial")} className="card">
              <div className="box">
                <FaPercentage className="i" />
                <h3>Annual Financial Statements</h3>
                <p>
                  Annual Financial Statements refer to the annual presentation
                  of the entity’s financial performance. They comprise a Balance
                  Sheet, Statement of Profit and Loss, Statement of changes in
                  equity , Cash flow statement, and Notes to the financial
                  statements. Annual Financial statements are prepared on a
                  going concern basis unless management intends to wind up the
                  entity’s operations under the accrual basis of accounting.
                </p>
                <a>Learn more</a>
              </div>
            </div>

            <div onClick={() => navigate("/BusinessPlan")} className="card">
              <div className="box">
                <FaBuilding className="i" />
                <h3>Business plan & Consulting</h3>
                <p>
                  Lorem iefnoewijnf wefweiofnieof fewfneof ciwejof cjewcnpe
                  cieoifwojjcew efejoewjfwoefjenefopewfp cewinof evchehoe
                  saoadnowqe ewfiewofjfreww wv
                </p>
                <a>Learn more</a>
              </div>
            </div>
          </div>
        </div>

        {/*Third section*/}
        <div className="services-1">
          <div className="content">
            <div onClick={() => navigate("/Share")} className="card">
              <div className="box">
                <FaShare className="i" />
                <h3>Shareholder Certificates</h3>
                <p>
                  Lorem iefnoewijnf wefweiofnieof fewfneof ciwejof cjewcnpe
                  cieoifwojjcew efejoewjfwoefjenefopewfp cewinof evchehoe
                  saoadnowqe ewfiewofjfreww wv
                </p>
                <a>Learn more</a>
              </div>
            </div>

            <div onClick={() => navigate("/Marketing")} className="card">
              <div className="box">
                <FaAddressBook className="i" />
                <h3>Company Profiles,Branding, Logo</h3>
                <p>
                  Lorem iefnoewijnf wefweiofnieof fewfneof ciwejof cjewcnpe
                  cieoifwojjcew efejoewjfwoefjenefopewfp cewinof evchehoe
                  saoadnowqe ewfiewofjfreww wv
                </p>
                <a>Learn more</a>
              </div>
            </div>

            <div onClick={() => navigate("/Letter")} className="card">
              <div className="box">
                <FaGraduationCap className="i" />
                <h3>Letter of Good Standing</h3>
                <p>
                  Lorem iefnoewijnf wefweiofnieof fewfneof ciwejof cjewcnpe
                  cieoifwojjcew efejoewjfwoefjenefopewfp cewinof evchehoe
                  saoadnowqe ewfiewofjfreww wv
                </p>
                <a>Learn more</a>
              </div>
            </div>
          </div>
        </div>

        <div className="container-consult-1">
          <button onClick={() => navigate("/ContactUs")}>Talk to us</button>
        </div>
      </div>
      <Footer />
    </>
  );
};
