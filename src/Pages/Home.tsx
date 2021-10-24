import Banner from "../Components/Banner.component";
import Footer from "../Components/Footer.component";
import Navigation from "../Components/Navigation.component";
import "../Stylesheet/Pages/Home.scss";
import { useHistory } from "react-router-dom";

const Home = () => {
  const history = useHistory();

  const redirect = () => {
    history.push("/membership");
  };
  return (
    <div>
      <Navigation />
      <Banner />
      <main id="main">
        <div id="main__services">
          <div id="services__container">
            <h3 id="services__header">What we do</h3>
            <div id="service__info">
              <div data-aos="fade-in">
                <h3>Lorem ipsum</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Atque, officia ex
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Ipsa, illo pariatur?{" "}
                </p>
              </div>

              <video controls autoPlay muted width="250" height="250">
                <source src="https://res.cloudinary.com/juniorwebprojects/video/upload/v1633880524/vid_i91i3q.mp4" />
              </video>
            </div>
          </div>
          <div id="main__be-member">
            <div>
              <h3>Want Perfect Body Shape</h3>
              <p id="member-secondary-text">
                Hiit Hop is the training. It's high intensity interval training
                to music. Kind of like choreographical boot camp. It's its own
                style of workout
              </p>
            </div>
            <button onClick={redirect} id="btn-become-member">
              Be A Member
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
