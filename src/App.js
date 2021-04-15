import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";

import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import InitalWeek from "./pages/initalWeek";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Switch>
                    <Route exact path="/dashboard" component={Dashboard} />
                    <Route exact path="/inital-week" component={InitalWeek} />
                    <Route exact path="/" component={Login} />
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
