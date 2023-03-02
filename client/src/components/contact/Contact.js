import React, { Component } from "react";
import "./Contact.css";
import axios from "axios";

class Contact extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    message: "",
    sent: false,
  };

  handleName = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  handleEmail = (e) => {
    this.setState({
      email: e.target.value,
    });
  };

  handlePhone = (e) => {
    this.setState({
      phone: e.target.value,
    });
  };

  handleMessage = (e) => {
    this.setState({
      message: e.target.value,
    });
  };

  formSubmit = (e) => {
    e.preventDefault();

    let data = {
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone,
      message: this.state.message,
    };
    axios
      .post("/api/forma", data)
      .then((res) => {
        this.setState(
          {
            sent: true,
          },
          this.resetForm()
        );
      })
      .catch(() => {
        console.log("message not sent");
      });
  };

  resetForm = () => {
    this.setState({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
    setTimeout(() => {
      this.setState({
        sent: false,
      });
    }, 3000);
  };

  render() {
    return (
      <div id="contact-section">
        <div className="contact-wrapper">
          <div className="contact-container">
            <div className="contact-header" data-aos="fade-down">
              <h1 data-aos="zoom-in">CONTACT</h1>
            </div>
            <div className="contact-content">
              <form onSubmit={this.formSubmit}>
                <input
                  type="text"
                  placeholder="  Name"
                  id="name"
                  data-aos="zoom-in"
                  value={this.state.name}
                  onChange={this.handleName}
                />
                <input
                  type="email"
                  placeholder="  Email"
                  id="email"
                  data-aos="zoom-in"
                  value={this.state.email}
                  onChange={this.handleEmail}
                />
                <input
                  type="tel"
                  placeholder="  Phone"
                  id="name"
                  data-aos="zoom-in"
                  value={this.state.phone}
                  onChange={this.handlePhone}
                />
                <textarea
                  placeholder="  Message"
                  id="name"
                  data-aos="zoom-in"
                  value={this.state.message}
                  onChange={this.handleMessage}
                />
                <button className="contact-button" type="submit">
                  SUBMIT
                </button>{" "}
              </form>
              <div className={this.state.sent ? "msg msgAppear" : "msg"}>
                Message has been sent!
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
