import axios from "axios";
import React from "react";
import { useHistory } from "react-router-dom";

const PaymentSuccess = () => {
  const history = useHistory();
  React.useEffect(() => {
    const sub_type = localStorage.getItem("muxaka");
    const token = localStorage.getItem("token");

    const base = {
      dev: "http://localhost:5000/api/pay-success",
      prod: "https://hiithop-server.herokuapp.com/api/pay-success",
    };

    const url = process.env.NODE_ENV === "production" ? base.prod : base.dev;

    axios
      .get(url, {
        headers: {
          sub_type: sub_type,
          token: token,
        },
      })
      .then((response) => {
        history.push("/");
      })
      .catch((error) => {
        history.push("/");
      });
  });
  return (
    <div>
      <h3>Payment Success</h3>
    </div>
  );
};

export default PaymentSuccess;
