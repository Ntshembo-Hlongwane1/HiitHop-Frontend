import Home from "./Pages/Home";
import Signup from "./Pages/Signup";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Signin from "./Pages/Signin";
import Member from "./Pages/Member";
import PaymentSuccess from "./Pages/PaymentSuccess";
import Workoutvideos from "./Pages/Workoutvideos";
import About from "./Pages/About";
import InstructorPage from "./Pages/InstructorPage";
import Contact from "./Pages/Contact";
import Playlist from "./Pages/Playlist";
import MicroCalculator from "./Pages/MicroCalculator";
import Recipes from "./Pages/Recipes";
import { NotFound } from "./Pages/404.page";

function App() {
  return (
    <Router>
      <Switch>
        <Route component={Recipes} path="/recipes" exact />
        <Route component={MicroCalculator} path="/micro-calculator" exact />
        <Route component={Playlist} path="/playlist" exact />
        <Route component={Contact} path="/contact" exact />
        <Route component={InstructorPage} path="/instructors" exact />
        <Route component={About} path="/about" exact />
        <Route component={Workoutvideos} path="/workout-videos" exact />
        <Route component={PaymentSuccess} path="/payment-success" exact />
        <Route component={Member} path="/membership" exact />
        <Route component={Signin} path="/signin" exact />
        <Route component={Signup} path="/signup" exact />
        <Route component={Home} path="/" exact />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
