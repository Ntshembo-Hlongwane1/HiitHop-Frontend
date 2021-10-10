import React from "react";
import Navigation from "../Components/Navigation.component";
import AboutImg from "../Assets/about.jpg";
import "../Stylesheet/Pages/About.scss";
import Footer from "../Components/Footer.component";
import { useHistory } from "react-router-dom";

const About = () => {
  const history = useHistory();
  return (
    <div>
      <Navigation />
      <div id="about">
        <h3 id="about__headerText">
          <span>Abo</span>
          <span id="about__headerTextSecondary">ut</span>
        </h3>
        <div id="about__container">
          <div>
            <img src={AboutImg} alt="About HiitHop services" />
          </div>
          <div id="about__text">
            <p>
              HIIT Hop is a combination of hip hop dance, plyometrics as well as
              some use of weights. This is not your typical dance cardio class.
              Moves such as squats, squat kicks, jump squats, burpees, mountain
              climbers, up/down planks, ab workouts, pushups, etc. are mixed in
              with hip hop and R&B dance. HIIT Hop combines a little boot camp
              with hip hop. It’s challenging, but still fun.
            </p>
            <p>
              The idea for HIIT Hop was born when I was teaching Zumba. I tended
              to teach with high intensity and high cardio. I noticed some
              members were skipping half of their boot camp class to attend the
              last half hour of my class. So, I decided, why not combine the
              two?
            </p>
            <p>
              High intensity interval training has been proven to be more
              effective in fat loss than straight cardio. Cardio burns calories
              only when you are performing the exercise, whereas weight training
              builds muscle. Muscle continues to burn calories long after you've
              finished exercising. Combining cardio, plyometrics (body weight
              exercises) and strength training proves to be more effective in
              fat loss. And, let's face it, hip hop dance is just fun.
            </p>
          </div>
        </div>
        <div id="main__be-member">
          <div>
            <h3>Want Perfect Body Shape</h3>
            <p id="member-secondary-text">
              Hiit Hop is the training. It's high intensity interval training to
              music. Kind of like choreographical boot camp. It's its own style
              of workout
            </p>
          </div>
          <button
            onClick={() => history.push("/membership")}
            id="btn-become-member"
          >
            Be A Member
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
