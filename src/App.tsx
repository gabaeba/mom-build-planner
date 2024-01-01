import { Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./pages/components/home";
import { LordKnight, Paladin } from "./pages/swordsman";
import { HighWizard, Professor } from "./pages/mage";
import { Clown, Gypsy, Sniper } from "./pages/archer";
import { Creator, Whitesmith } from "./pages/merchant";
import { AssassinCross, Stalker } from "./pages/thief";
import { Champion, HighPriest } from "./pages/acolyte";
import Navbar from "./pages/components/navbar";
import Footer from "./pages/components/footer";

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 40,
        minHeight: "100vh",
      }}
    >
      <Navbar />
      <div style={{ flexGrow: 1 }}>
        <Switch>
          <Route exact path="/lordKnight">
            <LordKnight />
          </Route>
          <Route path="/paladin">
            <Paladin />
          </Route>
          <Route path="/highWizard">
            <HighWizard />
          </Route>
          <Route path="/professor">
            <Professor />
          </Route>
          <Route path="/sniper">
            <Sniper />
          </Route>
          <Route path="/clown">
            <Clown />
          </Route>
          <Route path="/gypsy">
            <Gypsy />
          </Route>
          <Route path="/whitesmith">
            <Whitesmith />
          </Route>
          <Route path="/creator">
            <Creator />
          </Route>
          <Route path="/assassinCross">
            <AssassinCross />
          </Route>
          <Route path="/stalker">
            <Stalker />
          </Route>
          <Route path="/highPriest">
            <HighPriest />
          </Route>
          <Route path="/champion">
            <Champion />
          </Route>
          {/* If none of the previous routes render anything,
            this route acts as a fallback.

            Important: A route with path="/" will *always* match
            the URL because all URLs begin with a /. So that's
            why we put this one last of all */}
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
