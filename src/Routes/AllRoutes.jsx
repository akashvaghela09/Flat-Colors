import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home } from "../Components/Home"

const Allroutes = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
            </Switch>
        </div>
    )
}

export { Allroutes }