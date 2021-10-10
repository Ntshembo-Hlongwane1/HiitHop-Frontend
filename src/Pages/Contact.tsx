import axios from "axios";
import React from "react";
import Footer from "../Components/Footer.component";
import Navigation from "../Components/Navigation.component";
import { useHistory } from "react-router";
import "../Stylesheet/Pages/Contact.scss";

const Contact = () => {
  const [email, setEmail] = React.useState<string>("");
  const [subject, setSubject] = React.useState<string>("");
  const [message, setMessage] = React.useState<string>("");
  const history = useHistory();

  const handleForm = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    switch (e.target.id) {
      case "email":
        setEmail(e.target.value);
        break;
      case "subject":
        setSubject(e.target.value);
        break;
      case "message":
        setMessage(e.target.value);
        break;
      default:
        break;
    }
  };

  const submit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    const form_data = new FormData();
    form_data.append("email", email);
    form_data.append("subject", subject);
    form_data.append("message", message);

    const base = {
      dev: "http://localhost:5000/api/email",
      prod: "https://hiithop-server.herokuapp.com/api/email",
    };
    const url = process.env.NODE_ENV === "production" ? base.prod : base.dev;

    axios
      .post(url, form_data)
      .then((response) => {
        alert("Message sent, will get back to you soon.");
        history.push("/");
      })
      .catch((error) => {
        alert("Network Error: Failed to send mail please try again later");
      });
  };
  return (
    <div>
      <Navigation />
      <h3 id="contact__header">Contact Us</h3>
      <form id="contact__form">
        <label>Email</label>
        <input
          value={email}
          id="email"
          onChange={(e) => handleForm(e)}
          type="email"
          placeholder="Enter your email"
        />
        <label>Subject</label>
        <input
          value={subject}
          id="subject"
          onChange={(e) => handleForm(e)}
          type="text"
          placeholder="Email subject"
        />
        <label>Message</label>
        <textarea
          value={message}
          onChange={(e) => handleForm(e)}
          id="message"
          cols={30}
          rows={20}
        ></textarea>
        <button onClick={(e) => submit(e)}>Send Message</button>
      </form>
      <Footer />
    </div>
  );
};

export default Contact;
