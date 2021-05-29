import React from "react"
import { BrowserRouter, Route, Router, Switch } from "react-router-dom"
import Layout from "./pages/layout/Layout"
import Main from "./pages/main/Main"
import NewBadge from "./pages/NewBadge/NewBadge"
import login from"./components/Login"
import error from "./components/error"
import sign from "./components/Sign"

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Main}></Route>
          <Route exact path="/new" component={NewBadge}></Route>
          <Route exact path="/404_error" component={error}></Route>
          <Route exact path="/login" component={login}></Route>
          <Route exact path="/signup" component={sign}></Route>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
