import React, {Component} from 'react';
import { Button, Layout } from 'antd';
import './App.css';
import InputView from './components/InputView';
import HomeView from './components/HomeView';
import MainMenu from './components/menu';
import {
  BrowserRouter as Router,
  Switch, Route, Redirect
} from "react-router-dom"

import { useIsAuthenticated, AuthenticatedTemplate, UnauthenticatedTemplate, useMsal } from "@azure/msal-react";

import { useSelector, useDispatch } from 'react-redux'

const { Header, Content } = Layout;

const App = () => {
  
  const dispatch = useDispatch();
  dispatch({type: 'recalculate' })
  
  const isAuthenticated = useIsAuthenticated();

  return (
    <div className="App">
      <Router>
        <Layout>
          <Header theme={"light"} style={{ position: 'fixed', zIndex: 1, width: '100%', background: '#fff' }}>
            <AuthenticatedTemplate>
              <MainMenu></MainMenu>
            </AuthenticatedTemplate>
          </Header>
          <Content style={{ padding: '0 50px', marginTop: 80 }}>
            <Switch>
            <Route path="/admin">
            <div>Admin page </div>
              </Route>
              
              <Route path="/NZCinput">
                <InputView></InputView>
              </Route>
              <Route path="/KPIinput">
              <div>Compare page</div>
              </Route>
              <Route path="/compare">
                <div>Compare page</div>
              </Route>
              <Route path="/">
                <HomeView></HomeView>
              </Route>
            </Switch>
          </Content>
        </Layout>
      </Router>
    </div>
  )
}



export default App;