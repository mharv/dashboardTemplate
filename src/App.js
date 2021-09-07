import React, { useState } from 'react';
import { Button, Layout } from 'antd';
import './App.css';
import InputView from './components/InputView';
import MainMenu from './components/menu';
import {
  BrowserRouter as Router,
  Switch, Route
} from "react-router-dom"
import { bindActionCreators, createStore } from 'redux'

const appState = {
  value: "",
  numberTest: 0
}

function counterReducer(state = appState, action) {
  switch (action.type) {
    case 'counter/incremented':
      if (state.value == "testpayload") {
        action.payload = "huh";
      }
      return { 
        ...state,
        value: action.payload,
       }
    case 'counter/decremented':
      state.value.concat("test")
      return state
    default:
      return state
  }
}

const { Header, Content, Footer } = Layout;

let store = createStore(counterReducer);

store.subscribe(() => console.log(store.getState()))

const handler = (val) => {
  store.dispatch({ type: 'counter/incremented',
                  payload: val })
}

const val = store.getState();

const App = () => (
  
  <div className="App">
    <Router>
    <Layout>
      <Header theme={"light"} style={{ position: 'fixed', zIndex: 1, width: '100%', background: '#fff' }}>
        <MainMenu></MainMenu> 
      </Header>
      <Content style={{ padding: '0 50px', marginTop: 80 }}>
        <Switch>
        <Route path="/admin">
            <div>Admin page </div>
          </Route>
          <Route path="/input">
            <InputView></InputView>
          </Route>
          <Route path="/compare">
          <div>Compare page</div>
          </Route>
          <Route path="/">
            <div> {val.value} Home page <Button onClick={() => handler("testpayload")} type="primary">test state</Button></div>
          </Route>
        </Switch>
      </Content>
    </Layout>
    </Router>
  </div>
);

export default App;