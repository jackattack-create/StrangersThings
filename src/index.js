import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, BrowserRouter } from 'react-router-dom';
import {
    AccountLogin,
    Posts,
    SiteHeader
    } from "./components"

const App = (props) => {
    return <>
    <BrowserRouter>
        <Route path="/posts">
            <SiteHeader />
            <Posts />
        </Route>
        <Route path="/signIn">
            <AccountLogin />
        </Route>
    </BrowserRouter>
    </>

}

ReactDOM.render(
        <App />,
    document.getElementById('app'),
  );