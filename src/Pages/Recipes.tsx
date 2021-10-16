import React from "react";
import Navigation from "../Components/Navigation.component";
import axios from "axios";
import "../Stylesheet/Pages/recipe.scss";

const Recipes = () => {
  const [show, setShow] = React.useState<boolean>(false);
  const [data, setData] = React.useState([]);
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

    const base1 = {
      dev: "http://localhost:5000/api/recipe",
      prod: "https://hiithop-server.herokuapp.com/api/recipe",
    };
    const url1 = process.env.NODE_ENV === "production" ? base1.prod : base1.dev;

    axios
      .get(url1, {
        headers: {
          token: token,
        },
      })
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      })
      .catch((error) => {
        setShow(false);
      });
  }, []);

  return (
    <div>
      <Navigation />
      {show ? (
        <div>
          <h3 id="recipe-header">Recipes</h3>
          {data && (
            <div id="recipe-container">
              {data.map((recipe: any, idx) => {
                return (
                  <div key={idx}>
                    <h3>{recipe.name}</h3>
                    <a target="_blank" rel="noreferrer" href={recipe.pdf}>
                      {recipe.pdf}
                    </a>
                  </div>
                );
              })}
            </div>
          )}
        </div>
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
          Get Premium plan to view recipes
        </h3>
      )}
    </div>
  );
};

export default Recipes;
