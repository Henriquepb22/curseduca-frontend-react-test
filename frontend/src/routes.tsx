import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";

import Layout from "./components/Layout";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

const Routes = () => {
    return (
        <Router>
            <Layout>
                <Switch>
                    <Route exact path="/" component={Login} />
                    <Route path="/dashboard">
                        {sessionStorage.getItem("token") !== null ? (
                            <Dashboard />
                        ) : (
                            <Redirect to="/" />
                        )}
                    </Route>
                    <Redirect from="*" to="/" />
                </Switch>
            </Layout>
        </Router>
    );
};

export default Routes;
