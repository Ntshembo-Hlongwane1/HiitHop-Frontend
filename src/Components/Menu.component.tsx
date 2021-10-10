import React from "react";
import { useHistory } from "react-router-dom";

const Menu = () => {
  const [token, setToken] = React.useState<string | null>("");
  const history = useHistory();
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
  return (
    <div>
      <p
        onClick={() => route("/about")}
        style={styles}
        className="nav__right-link"
      >
        About
      </p>
      <p
        onClick={() => route("/workout-videos")}
        style={styles}
        className="nav__right-link"
      >
        Workout Videos
      </p>
      <p
        onClick={() => route("/instructors")}
        style={styles}
        className="nav__right-link"
      >
        Insructor Training
      </p>
      <p
        onClick={() => route("/membership")}
        style={styles}
        className="nav__right-link"
      >
        Membership
      </p>
      <p
        onClick={() => route("/contact")}
        style={styles}
        className="nav__right-link"
      >
        Contact Us
      </p>
      {token === "" || token === null ? (
        <p onClick={() => route("/signup")} className="nav__right-link">
          Signup / Signin
        </p>
      ) : (
        <p onClick={logout} className="nav__right-link">
          Logout
        </p>
      )}
    </div>
  );
};

const styles = {
  borderBottom: "1px solid black",
  fontSize: "1.5rem",
};
export default Menu;
