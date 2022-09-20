import "./App.css";
import {
  createTheme,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import theme from "../src/components/ui/Theme";
import Header from "./components/ui/Header";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/" component={() => <div>Home</div>} />
            <Route
              exact
              path="/services"
              component={() => <div>Services</div>}
            />
            <Route
              exact
              path="/customsoftware"
              component={() => <div>Custom Software</div>}
            />
            <Route
              exact
              path="/mobileapps"
              component={() => <div>Mobile Apps</div>}
            />
            <Route
              exact
              path="/websites"
              component={() => <div>Websites</div>}
            />
            <Route
              exact
              path="/revolution"
              component={() => <div>Revolution</div>}
            />
            <Route exact path="/about" component={() => <div>About Us</div>} />
            <Route exact path="/contact" component={() => <div>Contact Us</div>} />
            <Route
              exact
              path="/estimate"
              component={() => <div>Estimate</div>}
            />
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
