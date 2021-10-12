import React from 'react';
import { InputNumber, Row, Col, Typography, Space, Tooltip, Input } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux'
import TeamEngagementModal from './TeamEngagementModal';
import ClientEngagementDecarbonisationModal from './ClientEngagementDecarbonisationModal';
import ClientEngagementResilienceModal from './ClientEngagementResilienceModal';
import ArupImpactCarbonModal from './ArupImpactCarbonModal';
import ArupImpactResilienceModal from './ArupImpactResilienceModal';

const { Text } = Typography;

const EngagementAndImpactForm = () => {
  // dispatch actions with this function
  const dispatch = useDispatch();
  // save current global state to local state to be used in component

  const SustainabilityChampionEmail = useSelector(state => state.SustainabilityChampionEmail);
  
  const handleStringChange = e => {
    dispatch({type: 'update', key: e.target.getAttribute("id"), payload: e.target.value})
    dispatch({type: 'recalculate' })
  }


  // handle changes depending on field type
  const handleNumberChange = id => e => {
    dispatch({type: 'update', key: [id], payload: e})
    dispatch({type: 'recalculate' })
  }

  return (
    <>
    <Space direction="vertical">

    <Row >
          <Col span={18}>
            <Space style={{ width: '100%', justifyContent: 'left' }}>
              <Text>
                Who is the sustainability champion for the project
              </Text>
              <Tooltip title="Use an arup email">
              <QuestionCircleOutlined />
            </Tooltip>
            </Space>
          </Col>
          <Col span={6}>
            <Text>
            <Input size="small" placeholder="enrico.zara@arup.com"  value={SustainabilityChampionEmail} id='SustainabilityChampionEmail' onChange={handleStringChange} />
            </Text>
          </Col>
        </Row>

<Row >
  <Col span={18}>
    <Space style={{ width: '100%', justifyContent: 'left' }}>
      <Text>
      Team Engagement
      </Text>
      {/* <Tooltip title="For Base Building this include only common areas">
        <QuestionCircleOutlined />
      </Tooltip> */}
    </Space>
  </Col>
  <Col span={6}>
    <Text>
    <TeamEngagementModal></TeamEngagementModal>
    </Text>
  </Col>
</Row>

<Row >
  <Col span={18}>
    <Space style={{ width: '100%', justifyContent: 'left' }}>
      <Text>
      Client Engagement on decarbonisation
      </Text>
      {/* <Tooltip title="type 0 for BaseBuilding">
        <QuestionCircleOutlined />
      </Tooltip> */}
    </Space>
  </Col>
  <Col span={6}>
    <Text>
    <ClientEngagementDecarbonisationModal></ClientEngagementDecarbonisationModal>
    </Text>
  </Col>
</Row>

<Row >
  <Col span={18}>
    <Space style={{ width: '100%', justifyContent: 'left' }}>
      <Text>
      Client Engagement on Climate Change Resilience
      </Text>
      {/* <Tooltip title="type 0 for BaseBuilding">
        <QuestionCircleOutlined />
      </Tooltip> */}
    </Space>
  </Col>
  <Col span={6}>
    <Text>
    <ClientEngagementResilienceModal></ClientEngagementResilienceModal>
    </Text>
  </Col>
</Row>

<Row >
  <Col span={18}>
    <Space style={{ width: '100%', justifyContent: 'left' }}>
      <Text>
      Arup impact on carbon
      </Text>
      {/* <Tooltip title="% of the total energy demand">
        <QuestionCircleOutlined />
      </Tooltip> */}
    </Space>
  </Col>
  <Col span={6}>
    <Text>
    <ArupImpactCarbonModal></ArupImpactCarbonModal>
    </Text>
  </Col>
</Row>

<Row >
  <Col span={18}>
    <Space style={{ width: '100%', justifyContent: 'left' }}>
      <Text>
      Arup impact on climate change resilience
      </Text>
      {/* <Tooltip title="% of the total energy consumption from grid after on site renewables, the % should exclude the gas component">
        <QuestionCircleOutlined />
      </Tooltip> */}
    </Space>
  </Col>
  <Col span={6}>
    <Text>
    <ArupImpactResilienceModal></ArupImpactResilienceModal>
    </Text>
  </Col>
</Row>

      </Space>
    </>
  );
};

export default EngagementAndImpactForm;