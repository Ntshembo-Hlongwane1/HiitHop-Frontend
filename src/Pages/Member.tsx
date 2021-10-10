import React from "react";
import DoneIcon from "@material-ui/icons/Done";
import CloseIcon from "@material-ui/icons/Close";
import Navigation from "../Components/Navigation.component";
import "../Stylesheet/Pages/Member.scss";
import axios from "axios";
import Footer from "../Components/Footer.component";

const Member = () => {
  const [standardPlans, setStandardPlans] = React.useState({
    text: "$19.95/month",
    priceId: "price_1JTrXlDkDtXXMeQDN91c4Sw4",
  });
  const [premiumPlans, setPremiumPlans] = React.useState({
    text: "$29.96/month",
    priceId: "price_1JTrZXDkDtXXMeQD5F144b8z",
  });

  const subscribe = (price: string, type: string) => {
    const base = {
      dev: "http://localhost:5000/api/subscription",
      prod: "https://hiithop-server.herokuapp.com/api/subscription",
    };
    const url = process.env.NODE_ENV === "production" ? base.prod : base.dev;

    axios
      .get(url, {
        headers: {
          price: price,
        },
      })
      .then((response) => {
        window.location.href = response.data.url;
        localStorage.setItem("muxaka", type);
      })
      .catch((error) => {
        alert(
          "Network Error: Failed to create subscription please try again later"
        );
      });
  };

  const handleStandardPlans = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const arr = e.target.value.split(",");

    switch (e.target.id) {
      case "standard-plan":
        setStandardPlans({ text: arr[1], priceId: arr[0] });
        break;
      case "premium-plan":
        setPremiumPlans({ text: arr[1], priceId: arr[0] });
        break;
      default:
        break;
    }
  };
  return (
    <div>
      <Navigation />
      <div id="membercard-container">
        <div data-aos="fade-zoom-in" className="member-card">
          <h3>Standard</h3>
          <h4>Standard HiitHop Membership access</h4>
          <div>
            <div className="card-benefits-info">
              <DoneIcon style={{ color: "green" }} />
              <p>Workout Videos</p>
            </div>
            <div className="card-benefits-info">
              <CloseIcon style={{ color: "red" }} />
              <p>Create playlist</p>
            </div>
          </div>
          <div className="member-card-prices">
            <button
              onClick={() => subscribe(standardPlans.priceId, "Standard")}
            >
              {standardPlans.text}
            </button>
            <select id="standard-plan" onChange={(e) => handleStandardPlans(e)}>
              <option value="price_1JTrXlDkDtXXMeQDN91c4Sw4, $19.95/month">
                $19.95/month
              </option>
              <option value="price_1JTrXlDkDtXXMeQD7oW9ndF7, $99.99/6months">
                $99.99/6month
              </option>
              <option value="price_1JTrXlDkDtXXMeQDASZoyQFa, $199.99/year">
                $199.99/year
              </option>
            </select>
          </div>
        </div>
        <div className="member-card">
          <h3>Premium</h3>
          <h4>Premium HiitHop Membership access</h4>
          <div>
            <div className="card-benefits-info">
              <DoneIcon style={{ color: "green" }} />
              <p>Workout Videos</p>
            </div>
            <div className="card-benefits-info">
              <DoneIcon style={{ color: "green" }} />
              <p>Create playlist</p>
            </div>
            <div className="card-benefits-info">
              <DoneIcon style={{ color: "green" }} />
              <p>Macro Calculato</p>
            </div>
            <div className="card-benefits-info">
              <DoneIcon style={{ color: "green" }} />
              <p>Food recipes</p>
            </div>
          </div>
          <div className="member-card-prices">
            <button onClick={() => subscribe(premiumPlans.priceId, "Premium")}>
              {premiumPlans.text}
            </button>
            <select onChange={(e) => handleStandardPlans(e)} id="premium-plan">
              <option value="price_1JTrZXDkDtXXMeQD5F144b8z, $29.96/month">
                $29.96/month
              </option>
              <option value="price_1JTtmDDkDtXXMeQDGtUIaU52, $173.99/6months">
                $173.99/6months
              </option>
              <option value="price_1JTrZXDkDtXXMeQDXMLckYVn, $319.99/year">
                $319.99/year
              </option>
            </select>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Member;
