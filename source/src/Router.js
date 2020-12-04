import React from "react";
import {Switch, Route,} from "react-router-dom";
import AboutPage from "./containers/about";
import HomePage from "./containers/home/page";

export default () =>
    <Switch>

        <Route path="/about">
            <AboutPage/>
        </Route>
        <Route path="/">
            <HomePage/>
        </Route>
    </Switch>
