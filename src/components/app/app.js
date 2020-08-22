import React from "react";
import {Switch, Route} from "react-router-dom";

import {LoginPage} from "../pages";

import "./app.scss";

const App = () => {
    return (
        <main className="app jumbotron">
            <h1>App</h1>
            <Switch>
                <Route component={LoginPage} path="/" exact/>
            </Switch>
        </main>
    );
};

export default App;
