import React from 'react';
import { Button, Space, Row, Col, Divider, Layout } from 'antd';
import './App.css';
import MainMenu from './components/menu';
import DemoWaterfall from './components/waterfall';
import DemoPie from './components/pie';
import InputTabs from './components/tabs';

const { Header, Content, Footer } = Layout;

const onCLickHandler = () => {
  console.log("test")
}

const App = () => (
  <div className="App">
    <Layout>
      <Header theme={"light"} style={{ position: 'fixed', zIndex: 1, width: '100%', background: '#fff' }}>
        <MainMenu></MainMenu>
      </Header>
      <Content style={{ padding: '0 50px', marginTop: 80 }}>
        <Row>
          <Col span={8}>
            <Row justify="space-around" align="middle">
              <Col>
                <InputTabs></InputTabs>
              </Col>
            </Row>
          </Col>
          <Col span={16}>
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
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        test footer - 2021
      </Footer>
      {/* <Button type="primary" onClick={onCLickHandler}>Button</Button> */}
    </Layout>
  </div>
);

export default App;