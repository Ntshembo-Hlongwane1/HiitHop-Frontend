import React from "react";
import "../Stylesheet/Components/Navigation.scss";
import Menu from "@material-ui/icons/Menu";
import Popup from "reactjs-popup";
import MenuComponent from "./Menu.component";
import { useHistory } from "react-router-dom";
import Logo from "../Assets/mainlogo.jpg";
import "reactjs-popup/dist/index.css";

const Navigation = () => {
  const history = useHistory();
  const [token, setToken] = React.useState<string | null>("");
  const route = (path: string) => {
    history.push(path);
  };

  React.useEffect(() => {
    const savedToken = localStorage.getItem("token");
    setToken(savedToken);
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    history.push("/");
    window.location.reload();
  };

  const macroRoute = (path: string) => {
    const base = {
      dev: `http://localhost:5000/macro-calculator/${token}`,
      prod: `https://hiithop-server.herokuapp.com/macro-calculator/${token}`,
    };
    window.open(
      process.env.NODE_ENV === "production" ? base.prod : base.dev,
      "_blank"
    );
  };
  return (
    <div id="nav">
      <div id="nav__left">
        <img
          onClick={() => route("/")}
          style={{ cursor: "pointer" }}
          src={Logo}
          id="nav__logo"
          alt="Hiit Hop brand logo"
        />
      </div>
      <div id="nav__right">
        <p onClick={() => route("/about")} className="nav__right-link">
          About
        </p>
        <p onClick={() => route("/workout-videos")} className="nav__right-link">
          Videos
        </p>
        <p onClick={() => route("/instructors")} className="nav__right-link">
          Insructor
        </p>
        <p onClick={() => route("/membership")} className="nav__right-link">
          Membership
        </p>
        <p onClick={() => route("/contact")} className="nav__right-link">
          Contact
        </p>
        {token === "" || token === null ? null : (
          <p onClick={() => route("/playlist")} className="nav__right-link">
            Playlist
          </p>
        )}
        {token === "" || token === null ? null : (
          <p
            onClick={() => macroRoute("/micro-calculator")}
            className="nav__right-link"
          >
            Micro Calculator
          </p>
        )}
        {token === "" || token === null ? null : (
          <p onClick={() => route("/recipes")} className="nav__right-link">
            Recipes
          </p>
        )}
        {token === "" || token === null ? (
          <p onClick={() => route("/signup")} className="nav__right-link">
            Signup / Signin
          </p>
        ) : (
          <p onClick={logout} className="nav__right-link">
            Logout
          </p>
        )}

        <Popup
          trigger={<Menu className="nav__right-menu-icon" />}
          position="bottom right"
        >
          <MenuComponent />
        </Popup>
      </div>
    </div>
  );
};

export default Navigation;
