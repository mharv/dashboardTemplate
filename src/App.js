import React from 'react';
import { Button, Space, Row, Col, Divider, Layout, Card } from 'antd';
import './App.css';
import MainMenu from './components/menu';
import DemoWaterfall from './components/waterfall';
import EmbodiedCarbonPie from './components/EmbodiedCarbonPie';
import EnergyCarbonPie from './components/EnergyCarbonPie';
import InputTabs from './components/tabs';
import TotalsTable from './components/TotalsTable';

const { Header, Content, Footer } = Layout;

const onCLickHandler = () => {
  console.log("test")
}

const centerStyle = {
  // position: 'relative',
  display: 'flex',
  justifyContent: 'center'
};

const App = () => (
  <div className="App">
    <Layout>
      <Header theme={"light"} style={{ position: 'fixed', zIndex: 1, width: '100%', background: '#fff' }}>
        <MainMenu></MainMenu>
      </Header>
      <Content style={{ padding: '0 50px', marginTop: 80 }}>
        <Row>
          <Col span={8}>
            <Row justify="space-around" align="top">
              <Col flex='auto'>
                <InputTabs></InputTabs>
              </Col>
            </Row>
            <Row justify="space-between" align="bottom">
            <Col flex='auto'>
            {/* <Card style={centerStyle}> */}
              <TotalsTable></TotalsTable>
              {/* </Card>     */}
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
                <EmbodiedCarbonPie></EmbodiedCarbonPie>
              </Col>
              <Col offset={2} span={10}>
                <EnergyCarbonPie></EnergyCarbonPie>
              </Col>
            </Row>
          </Col>
        </Row>
      </Content>
      {/* <Footer style={{ textAlign: 'center' }}>
        test footer - 2021
      </Footer> */}
      {/* <Button type="primary" onClick={onCLickHandler}>Button</Button> */}
    </Layout>
  </div>
);

export default App;