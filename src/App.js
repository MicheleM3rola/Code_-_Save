import React from "react";
import { Route, Switch } from "react-router-dom";
import Homepage from "./pages/hompage";
import "./App.css";
import SignUpPage from "./pages/SignUpPage.js";
import Resources from "./pages/resources";
import SnippetContextProvider from "./globalContext/SnippetsContext";
import ProfileContextProvider from "./globalContext/profileContext";
import EditPage from "./pages/editPage";
import ReadMorePage from "./pages/readMorePage";
import ResourceContextProvider from "./globalContext/resourcesContext";
import PrivateRoute from "./components/routeType/PrivateRoute";

const App = () => {
  let token = localStorage.getItem("auth-token");

  return (
    <Switch>
      <SnippetContextProvider>
        <ProfileContextProvider>
          <ResourceContextProvider>
            <Route exact path="/" component={SignUpPage} />

            <PrivateRoute
              exact
              path="/home"
              component={Homepage}
              token={token}
            />
            <PrivateRoute
              exact
              path="/edit/:id"
              component={EditPage}
              token={token}
            />
            <PrivateRoute
              exact
              path="/readmore/:id"
              component={ReadMorePage}
              token={token}
            />
            <PrivateRoute
              exact
              path="/resources"
              component={Resources}
              token={token}
            />
          </ResourceContextProvider>
        </ProfileContextProvider>
      </SnippetContextProvider>
    </Switch>
  );
};

export default App;
