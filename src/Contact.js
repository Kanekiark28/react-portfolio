import React, { Component } from "react";
import "./Contact.css";

class Contact extends Component {
  render() {
    return (
      <section id="contactme" className="section">
        <div className="container3">
          <div className="row">
            <div className="headline">
              <h2 className="section-title">Let's get in touch</h2>
            </div>
          </div>
          <div className="row contact-content">
            <div className="contact-row">
              <div className="contactme">
                <p>
                  Want to work on exciting projects together, or simply want to
                  have a chat? Drop me an e-mail at konarkrajmishra@gmail.com or
                  simply fill out the form below and I will reply to you soon!
                </p>
              </div>
              <div className="form-contact-container">
                <div className="contact-info">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Name"
                  ></input>
                </div>
                <div className="contact-info">
                  <input
                    type="text"
                    name="email"
                    id="email"
                    placeholder="E-mail address"
                  ></input>
                </div>
                <div className="contact-info">
                  <textarea
                    name="message"
                    id="message"
                    rows="4"
                    placeholder="Your message"
                  ></textarea>
                </div>
                <div className="contact-info">
                  <button className="buttonsend" data-style="expand-right">
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default Contact;
