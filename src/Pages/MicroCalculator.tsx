import axios from "axios";
import React from "react";
import Navigation from "../Components/Navigation.component";

const MicroCalculator = () => {
  const [show, setShow] = React.useState<boolean>(false);
  React.useEffect(() => {
    const base = {
      dev: "http://localhost:5000/api/premium-check",
      prod: "https://hiithop-server.herokuapp.com/api/premium-check",
    };
    const url = process.env.NODE_ENV === "production" ? base.prod : base.dev;
    const token = localStorage.getItem("token");
    axios
      .get(url, {
        headers: {
          token: token,
        },
      })
      .then((response) => {
        setShow(true);
      })
      .catch((error) => {
        setShow(false);
      });
  }, []);

  return (
    <div>
      <Navigation />
      {show ? (
        <div style={{ marginTop: "4rem" }} id="macroTool"></div>
      ) : (
        <h3
          style={{
            textAlign: "center",
            marginTop: "9rem",
            textTransform: "uppercase",
            letterSpacing: "3px",
            fontSize: "2rem",
          }}
        >
          Get Premium plan to use Micro calculator
        </h3>
      )}
    </div>
  );
};

export default MicroCalculator;
