import { useNavigate } from "react-router-dom";
import "./styles/Contact-us.css";
import contactbckg from "../assets/contact-png.png";
import Footer from "./Footer";
import { FaClock } from "react-icons/fa";

export const ContactUs = () => {
  const navigate = useNavigate();

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
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda
            iste facilis quos impedit fuga nobis modi debitis laboriosam velit
            reiciendis quisquam alias corporis, maxime enim, optio ab dolorum
            sequi qui.
          </p>
        </div>

        <div class="contact-body">
          <div class="contact-info">
          
            <div>
              <span>
                <FaClock/>
              </span>
              <span>Opening Hours</span>
              <span class="text">Monday - Friday (9:00 AM to 5:00 PM)</span>
            </div>
          </div>

          <div class="contact-form">
            <form>
              <div>
                <input
                  type="text"
                  class="form-control"
                  placeholder="First Name"
                />
                <input
                  type="text"
                  class="form-control"
                  placeholder="Last Name"
                />
              </div>
              <div>
                <input type="email" class="form-control" placeholder="E-mail" />
                <input type="text" class="form-control" placeholder="Phone" />
              </div>
              <textarea
                rows="5"
                placeholder="Message"
                class="form-control"
              ></textarea>
              <input type="submit" class="send-btn" value="send message" />
            </form>

            <div>
              <img src={contactbckg} alt="" />
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
//src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3584.1511295821992!2d28.05744057636762!3d-26.061316858171693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e9573abdc3b8723%3A0x90d8bb20b221f788!2s325%20Rivonia%20Blvd%2C%20Edenburg%2C%20Sandton%2C%202128!5e0!3m2!1sen!2sza!4v1684925515630!5m2!1sen!2sza"