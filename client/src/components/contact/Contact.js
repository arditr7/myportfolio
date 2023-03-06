import React, { useRef } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_myportfolio",
        "template_myportfolio",
        form.current,
        "0IxelkMGDl07yxXQw"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div id="contact-section">
      <div className="contact-wrapper">
        <div className="contact-container">
          <div className="contact-header" data-aos="fade-down">
            <h1 data-aos="zoom-in">CONTACT</h1>
          </div>
          <div className="contact-content">
            <form ref={form} onSubmit={sendEmail}>
              <input
                type="text"
                placeholder="  Name"
                id="name"
                name="user_name"
                data-aos="zoom-in"
              />
              <input
                type="email"
                placeholder="  Email"
                id="email"
                name="user_name"
                data-aos="zoom-in"
              />
              <input
                type="tel"
                placeholder="  Phone"
                id="name"
                name="user_phone"
                data-aos="zoom-in"
              />
              <textarea
                placeholder="  Message"
                id="name"
                data-aos="zoom-in"
                name="message"
              />
              {/* <button className="contact-button" type="submit">
                SUBMIT
              </button>{" "} */}
              <input type="submit" value="Send" className="contact-button" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
