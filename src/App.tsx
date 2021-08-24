import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useEffect } from "react";
import "./styles/tailwind.css";
import firebase from "firebase";
import { Header } from "./modules/components/header";
import { Signin } from "./pages/signin";
import { Home } from "./pages/home";
import { routesConfig } from "./routes-config";
import { Footer } from "./modules/components/footer";

// Configure Firebase.
const config = {
  apiKey: "AIzaSyBQN8yHTvOoMUJO35vHbFotjxCC-LCULOs",
  authDomain: "movie-app-584a5.firebaseapp.com",
  // ...
};
firebase.initializeApp(config);
export function App() {
  // Listen to the Firebase Auth state and set the local state.
  useEffect(() => {
    const unregisterAuthObserver = firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        // user logout, handle something here
        console.log("user is not logged in");
        return;
      }
      console.log("Log in user: ", user.displayName);
    });
    return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
  }, []);
  return (
    <Router>
      <div className="section-color">
        <Header />
        <div>
          <Switch>
            {routesConfig.map(({ path, exact }) => (
              <Route key={path} exact={exact} path={path} />
            ))}
          </Switch>
          <Switch>
            <Route path="/signin">
              <Signin />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}
