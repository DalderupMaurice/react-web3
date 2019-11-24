import React, { PureComponent } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

// Routing
import DefaultRoute from './DefaultRoute';
// import PrivateRoute from "./PrivateRoute";

// Pages
import { HomePage, PageNotFound } from '../../containers';

class Routing extends PureComponent {
  render() {
    const { appState } = this.props;

    return (
      <Switch>
        <DefaultRoute exact path="/" component={HomePage} appState={appState} />
        {/* <PrivateRoute */}
        {/* exact */}
        {/* path="/dashboard" */}
        {/* component={DashboardPage} */}
        {/* appState={appState} */}
        {/* /> */}
        <Route component={PageNotFound} />
      </Switch>
    );
  }
}

Routing.propTypes = {
  appState: PropTypes.object
};

Routing.defaultProps = {
  appState: {}
};

export default withRouter(Routing);
