import { useHistory } from "react-router-dom";
import Footer from "../Components/Footer.component";
import Navigation from "../Components/Navigation.component";
import "../Stylesheet/Pages/Instructor.scss";

const InstructorPage = () => {
  const history = useHistory();
  return (
    <div>
      <Navigation />
      <div id="instructor__container">
        <div id="instructor__mainContent">
          <h3>
            <span id="mainContent__header">Instructor</span>
            <span id="mainContent__subHeader">Training</span>
          </h3>
          <p>
            What sets HIIT Hop® apart from other fitness programs? A unique
            combination of plyometrics, isometrics and light weights. Dance is
            integrated into each workout for lots of fun - with moves that
            anyone can do!
          </p>
          <p>
            HIIT Hop® provides maximum fat loss as well as overall body
            conditioning, strength and endurance.
          </p>
          <p>
            HIIT Hop is for everyone – any age, any fitness level. If you want
            to see the results you've always dreamed about, HIIT Hop is your
            workout to finally turn that dream into reality!
          </p>
          <p>
            <span
              style={{
                cursor: "pointer",
                color: "blue",
                width: "fit-content",
                borderBottom: "1px solid blue",
              }}
              onClick={() => history.push("/contact")}
            >
              Contact
            </span>{" "}
            us for trainer opportunities.
          </p>
        </div>
        <div className="sub_container" id="main__be-member">
          <div>
            <h3>Want Perfect Body Shape</h3>
            <p id="member-secondary-text">
              Hiit Hop is the training. It's high intensity interval training to
              music. Kind of like choreographical boot camp. It's its own style
              of workout
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default InstructorPage;
