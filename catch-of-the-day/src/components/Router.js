import { BrowserRouter, Route, Switch } from "react-router-dom";
import StorePicker from "./Storepicker";
import NotFound from "./NotFound";
import React from "react";
import App from "./App";

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={StorePicker} />
            <Route path="/store/:storeId" component={App} />
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
)

export default Router;