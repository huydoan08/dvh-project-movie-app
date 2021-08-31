import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./styles/tailwind.css";
import { Header } from "./components/header/header";
import { routesConfig } from "./routes-config";
import { Footer } from "./components/footer/footer";
import firebase from "./firebase";
import { useEffect } from "react";


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
