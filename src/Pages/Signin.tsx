import React from "react";
import Navigation from "../Components/Navigation.component";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "../Stylesheet/Pages/Signup.scss";

const Signin = () => {
  const history = useHistory();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const signIn = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    const form_data = new FormData();

    form_data.append("email", email);
    form_data.append("password", password);

    const base = {
      dev: "http://localhost:5000/api/signin",
      prod: "https://hiithop-server.herokuapp.com/api/signin",
    };
    const url = process.env.NODE_ENV === "production" ? base.prod : base.dev;

    axios
      .post(url, form_data)
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        history.push("/");
      })
      .catch((error) => {
        alert("Network Error: Failed create account pleae try again later");
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
      default:
        break;
    }
  };
  return (
    <div>
      <Navigation />
      <h2 id="áuth__header">Sign In</h2>
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
        <button onClick={(e) => signIn(e)}>SIGN IN</button>
        <p onClick={() => history.push("/signup")} id="auth-redirect">
          Don't have an account? Create Account.
        </p>
      </form>
    </div>
  );
};

export default Signin;
