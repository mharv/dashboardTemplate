import React from 'react';
import { Row, Col, Divider, Space } from 'antd';
import DemoWaterfall from './waterfall';
import EmbodiedCarbonPie from './EmbodiedCarbonPie';
import EnergyCarbonPie from './EnergyCarbonPie';
import NZCTabs from './NZCTabs';
import TotalsTable from './TotalsTable';


const NZCInputView = () => (
    <>

    <Row>
      <Col span={8}>
      <NZCTabs></NZCTabs>
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
  
  export default NZCInputView;