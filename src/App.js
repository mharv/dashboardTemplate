import React from 'react';
import { Button, Layout } from 'antd';
import './App.css';
import InputView from './components/InputView';
import MainMenu from './components/menu';
import {
  BrowserRouter as Router,
  Switch, Route
} from "react-router-dom"

import { useSelector, useDispatch } from 'react-redux'
import { set } from './features/counter/counterSlice'


const { Header, Content } = Layout;

const App = () => {

  const count = useSelector(state => state.input.value)
  const dispatch = useDispatch()
  return (
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
                <div>
                  {count} Home page <Button onClick={() => dispatch(set("cleared"))} type="primary"> testing redux </Button>
                </div>
              </Route>
            </Switch>
          </Content>
        </Layout>
      </Router>
    </div>
  )
}



export default App;