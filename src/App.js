import "./App.css";
import Sessions from "./Components/Sessions";
import Home from "./Components/Home";
import Organization from "./Components/Organization";
import IssueFullPage from "./Components/IssueFullPage";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import TeamContainer from "./Components/Team/TeamContainer";
import SponsorsContainer from "./Components/Sponsors/SponsorsContainer";
import { useEffect } from "react";
import MentorCard from "./Components/Panel/MentorCard";
import Panel from "./Components/Panel/Panel";
import Particles from "./Components/Particles";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Particles/>
                <Switch>
                    <Route exact path="/">
                        <Home />
                        <SponsorsContainer/>
                        <Sessions />
                        <Organization />
                        <TeamContainer/>
                    </Route>

                    <Route exact path="/issue">
                        <IssueFullPage />
                    </Route>
                    <Route exact path="/panel">
                        <Panel />
                    </Route>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
