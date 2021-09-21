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
      <InputTabs></InputTabs>
      </Col>
      <Col offset={1} span={15}>
        <DemoWaterfall></DemoWaterfall>
      </Col>
    </Row>
    <Divider />
    <Row>
      <Col span={8}>
      <TotalsTable></TotalsTable>
      </Col>
      <Col span={8}>
      <EmbodiedCarbonPie></EmbodiedCarbonPie>
      </Col>
      <Col span={8}>
      <EnergyCarbonPie></EnergyCarbonPie>
      </Col>
    </Row>
    </>
  );
  
  export default InputView;