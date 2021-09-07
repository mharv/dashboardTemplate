import React from 'react';
import { Row, Col, Divider, Space } from 'antd';
import DemoWaterfall from './waterfall';
import EmbodiedCarbonPie from './EmbodiedCarbonPie';
import EnergyCarbonPie from './EnergyCarbonPie';
import InputTabs from './tabs';
import TotalsTable from './TotalsTable';


const InputView = () => (
    <>
      
          <Row>
            <Col span={8}>
            <Space direction="vertical" size={150}>
              <Row justify="space-around" align="top">
                <Col flex='auto'>
                  <InputTabs></InputTabs>
                </Col>
              </Row>
              {/* <Row>
                <Col offset={1} span={22}>
                  <Divider />
                </Col>
              </Row> */}
              <Row justify="space-between" align="bottom">
                <Col flex='auto'>
                  <TotalsTable></TotalsTable>
                </Col>
              </Row>
              </Space>
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
                <Col offset={2} span={10}>
                  <EmbodiedCarbonPie></EmbodiedCarbonPie>
                </Col>
                <Col offset={2} span={10}>
                  <EnergyCarbonPie></EnergyCarbonPie>
                </Col>
              </Row>
            </Col>
          </Row>
        
    </>
  );
  
  export default InputView;