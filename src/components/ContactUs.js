import "./styles/Contact-us.css";
import contactbckg from "../assets/contact-png.png";
import Footer from "./Footer";
import { FaClock, FaEnvelope, FaLocationArrow } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import React, { useRef } from 'react';



export const ContactUs = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_kw9rb3t", "template_msue9c5", form.current, "2dD7Uf18Hb1ttJUCA")
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
      e.target.reset()
    
  }
  return (
    <>
      <section class="contact-section">
        <div class="contact-bg">
          <h3>Get in Touch with Us</h3>
          <h2>contact us</h2>
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

        <div class="contact-body">
          <div class="contact-info">
            <div>
              <span>
                <FaLocationArrow />
              </span>
              <span>Office</span>
              <span class="text">
                {" "}
                325 Rivonia Boulevard, Edenburg, Sandton
              </span>
            </div>
            <div>
              <span>
                <FaClock />
              </span>
              <span>Opening Hours</span>
              <span class="text">Monday - Friday (9:00 AM to 5:00 PM)</span>
            </div>
            <div>
              <span>
                <FaEnvelope />
              </span>
              <span>Email Address</span>
              <span class="text"> info@pagefinancialservice.com</span>
            </div>
          </div>

          <div class="contact-form">
            <form ref={form} onSubmit={sendEmail} >
              <div>
                <input
                  type="text"
                  class="form-control"
                  name="name"
                  placeholder="First Name*"
                  required
                />
                <input
                  type="text"
                  class="form-control"
                  name="lastname"
                  placeholder="Last Name*"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  name="useremail"
                  class="form-control"
                  placeholder="E-mail*"
                  required
                />
                <input
                  type="number"
                  name="phone"
                  class="form-control"
                  placeholder="Phone*"
                  required
                />
              </div>
              <textarea
                rows="5"
                placeholder="Message*"
                name="message"
                class="form-control"
                required
              ></textarea>
              <h2>Which service are you interested in?</h2>

              <label class="containersss">
                Company Registration
                <input type="checkbox" name="companyRegistration" value="Company Registration"/>
                <span class="checkmark"></span>
              </label>

              <label class="containersss">
                Accounting & Bookkeeping
                <input type="checkbox" name="accounting" value="Accounting & Bookkeeping"/>
                <span class="checkmark"></span>
              </label>

              <label class="containersss">
                Payroll
                <input type="checkbox" name="payroll" value="Payroll"/>
                <span class="checkmark"></span>
              </label>
              <label class="containersss">
                IT Services
                <input type="checkbox" name="ITservices" value="IT services"/>
                <span class="checkmark"></span>
              </label>
              <label class="containersss">
                Tax and Vat Registration
                <input type="checkbox" name="Tax" value="Tax & vat Registration"/>
                <span class="checkmark"></span>
              </label>

              <input type="submit" class="send-btn" value="send message" />
            </form>

            <div>
              <img src={contactbckg} alt="bck.png" />
            </div>
          </div>
        </div>

        <div class="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3584.1511295821992!2d28.05744057636762!3d-26.061316858171693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e9573abdc3b8723%3A0x90d8bb20b221f788!2s325%20Rivonia%20Blvd%2C%20Edenburg%2C%20Sandton%2C%202128!5e0!3m2!1sen!2sza!4v1684925515630!5m2!1sen!2sza"
            width="100%"
            height="450"
            frameborder="0"
            allowfullscreen=""
            aria-hidden="false"
            tabindex="0"
          ></iframe>
        </div>
      </section>
      <Footer />
    </>
  );
};