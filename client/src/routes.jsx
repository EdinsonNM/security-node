import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './components/layouts/login';
import dashboard from './components/layouts/dashboard';

import {
    ROUTE_LOGIN,
    ROUTE_DEFAULT,
    ROUTE_DASHBOARD
} from './constants/routes/routes-ui';

const routes = (
    <Switch>
        <Route exact path={ROUTE_DEFAULT} component={Login} />
        <Route exact path={ROUTE_LOGIN} component={Login} />
        <Route path={ROUTE_DASHBOARD} component={dashboard} />
    </Switch>
);

export default routes;
