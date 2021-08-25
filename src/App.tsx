import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useEffect } from "react";
import "./styles/tailwind.css";
import firebase from "firebase";
import { Header } from "./modules/components/header";
import { routesConfig } from "./routes-config";
import { Footer } from "./modules/components/footer";

const config = {
  apiKey: "AIzaSyBQN8yHTvOoMUJO35vHbFotjxCC-LCULOs",
  authDomain: "movie-app-584a5.firebaseapp.com",
};
firebase.initializeApp(config);
export function App() {
  useEffect(() => {
    const unregisterAuthObserver = firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        console.log("user is not logged in");
        return;
      }
      console.log("Log in user: ", user.displayName);
    });
    return () => unregisterAuthObserver();
  }, []);
  return (
    <BrowserRouter>
      <div className="section-color">
        <Header />
        <div>
          <Switch>
            {routesConfig.map(({ path, exact, component: Component }) => (
              <Route key={path} exact={exact} path={path} component={Component} />
            ))}
          </Switch>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
