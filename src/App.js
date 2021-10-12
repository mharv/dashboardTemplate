import React, {Component} from 'react';
import { Button, Layout } from 'antd';
import './App.css';
import NZCInputView from './components/NZCInputView';
import KPIInputView from './components/KPIInputView';
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
  console.log(process.env.REACT_APP_SECRET_NAME)
  
  const isAuthenticated = useIsAuthenticated();

  return (
    <div className="App">
      <Router>
        <Layout style={{height:"100vh"}}>
          <Header theme={"light"} style={{ position: 'fixed', zIndex: 1, width: '100%', background: '#fff' }}>
            <AuthenticatedTemplate>
              <MainMenu token={process.env.BACKEND_TOKEN}></MainMenu>
            </AuthenticatedTemplate>
          </Header>
          <Content style={{ padding: '0 50px', marginTop: 80 }}>
            <Switch>
            <Route path="/admin">
            <div>Admin page </div>
              </Route>
              
              <Route path="/NZCinput">
                <NZCInputView></NZCInputView>
              </Route>
              <Route path="/KPIinput">
              <KPIInputView></KPIInputView>
              </Route>
              <Route path="/compare">
                <div>Compare page</div>
              </Route>
              <Route path="/">
                <HomeView token={process.env.BACKEND_TOKEN}></HomeView>
              </Route>
            </Switch>
          </Content>
        </Layout>
      </Router>
    </div>
  )
}



export default App;