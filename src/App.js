import React from 'react';
import { Button } from 'antd';
import './App.css';
import Page from './components/chart';
import MainMenu from './components/menu';
import { Row, Col, Divider } from 'antd';
import DemoWaterfall from './components/waterfall';
import DemoPie from './components/pie';

const onCLickHandler = () => {
  console.log("test")
}

const App = () => (
  <div className="App">
    <MainMenu></MainMenu>
    <Row>
    <Col span={6}>


      

    </Col>
      <Col span={18}>
    <Row>
      <Col offset={1} span={22}>
        <DemoWaterfall></DemoWaterfall>
      </Col>
    </Row>
    <Row>
      <Col offset={1} span={22}>
        <Divider />
      </Col>
    </Row>

    <Row>
      <Col offset={1} span={10}>
        <DemoPie></DemoPie>
      </Col>
      <Col offset={2} span={10}>
        <DemoPie></DemoPie>
      </Col>
    </Row>
    </Col>
    </Row>
    {/* <Button type="primary" onClick={onCLickHandler}>Button</Button> */}
  </div>
);

export default App;