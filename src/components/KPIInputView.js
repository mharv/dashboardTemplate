import React from 'react';
import { Row, Col, Divider, Space } from 'antd';
import KPIBarChart from './KPIBarChart';
import RisksPie from './RisksPie';
import VerticalSpacer from './VerticalSpacer';
import KPITabs from './KPITabs';


const KPIInputView = () => (
    <>

    <Row>
      <Col span={8}>
      <KPITabs></KPITabs>
      </Col>
      <Col offset={1} span={15}>
        <RisksPie></RisksPie>
      </Col>
    </Row>
    <Divider />
    <Row>
      <Col span={24}>
          <KPIBarChart></KPIBarChart>
      </Col>
    </Row>
    </>
  );
  
  export default KPIInputView;