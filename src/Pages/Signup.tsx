import React from "react";
import Navigation from "../Components/Navigation.component";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "../Stylesheet/Pages/Signup.scss";

const Signup = () => {
  const history = useHistory();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");

  const createAcc = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    if (confirmPassword !== password) {
      alert("Passwords do not match");
      return;
    }

    const form_data = new FormData();

    form_data.append("email", email);
    form_data.append("password", password);
    form_data.append("confirmPassword", confirmPassword);

    const base = {
      dev: "http://localhost:5000/api/signup",
      prod: "https://hiithop-server.herokuapp.com/api/signup",
    };
    const url = process.env.NODE_ENV === "production" ? base.prod : base.dev;

    axios
      .post(url, form_data)
      .then((response) => {
        history.push("/signin");
      })
      .catch((error) => {
        alert("Network Error: Failed create account pleae try again later");
        console.log(error.response);
      });
  };

  const handleForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    switch (e.target.id) {
      case "email":
        setEmail(e.target.value);
        break;
      case "password":
        setPassword(e.target.value);
        break;
      case "confirmPassword":
        setConfirmPassword(e.target.value);
        break;
      default:
        break;
    }
  };
  return (
    <div>
      <Navigation />
      <h2 id="áuth__header">Create Account</h2>
      <form id="auth">
        <label>Email</label>
        <input
          id="email"
          onChange={(e) => handleForm(e)}
          type="email"
          placeholder="Énter your email"
        />
        <label>Password</label>
        <input
          id="password"
          onChange={(e) => handleForm(e)}
          type="password"
          placeholder="Enter your password"
        />
        <label>Confirm Password</label>
        <input
          id="confirmPassword"
          onChange={(e) => handleForm(e)}
          type="password"
          placeholder="Çonfirm your password"
        />
        <button onClick={(e) => createAcc(e)}>Create Account</button>
        <p onClick={() => history.push("/signin")} id="auth-redirect">
          Already have an account? Signin.
        </p>
      </form>
    </div>
  );
};

export default Signup;
