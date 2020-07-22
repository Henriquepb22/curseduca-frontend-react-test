import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import Layout from "./components/Layout";
import Form from "./components/Form";

const Routes = () => {
    return (
        <Router>
            <Layout>
                <Switch>
                    <Route exact path="/" component={Form} />
                    <Redirect from="*" to="/" />
                </Switch>
            </Layout>
        </Router>
        )
}

export default Routes;