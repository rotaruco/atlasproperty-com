import "babel-polyfill";
import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { ApolloProvider } from "react-apollo";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Style from "./style.css";
import { AuthService, apolloClient } from "./services";
import {
  Dashboard,
  Login,
  Tenants,
  Management,
  Development,
  Properties,
  Property,
  Team,
  Contact,
  Home,
  Header,
  RentReceipt,
  Inquiry,
} from "./components";
import { config } from "./config";

function App() {
  const auth = new AuthService();
  return (
    <ApolloProvider client={apolloClient}>
      <BrowserRouter>
        <div className={Style.container}>
          <Switch key="switch">
            <Redirect
              from="/login"
              exact
              to={`/${config.models.auth.name}/login`}
            />
            <Redirect
              from="/admin"
              exact
              to={auth.isLoggedIn() ? "/" : `/${config.models.auth.name}/login`}
            />
            {auth.isLoggedIn() ? (
              <Fragment>
                <Header key="header" />
                <Route
                  path={`/${config.models.rentReceipts.name}/:id?`}
                  exact
                  component={RentReceipt}
                />
                <Route path="/" exact component={Dashboard} />
              </Fragment>
            ) : (
              <Fragment>
                <Header key="header" />
                <Route
                  path={`/${config.models.auth.name}/login`}
                  exact
                  component={Login}
                />
                <Route path="/properties" exact component={Properties} />
                <Route
                  path="/properties/:id/:unitId"
                  exact
                  component={Property}
                />
                <Route path="/management" exact component={Management} />
                <Route path="/development" exact component={Development} />
                <Route path="/team" exact component={Team} />
                <Route path="/contact" exact component={Contact} />
                <Route path="/tenants" exact component={Tenants} />
                <Route
                  path={`/${config.models.rentReceipts.name}`}
                  exact
                  component={RentReceipt}
                />
                <Route
                  path={`/${config.models.inquiries.name}`}
                  exact
                  component={Inquiry}
                />
                <Route path="/" exact component={Home} />
              </Fragment>
            )}
          </Switch>
        </div>
      </BrowserRouter>
    </ApolloProvider>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
