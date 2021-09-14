import React from 'react';
import { InputNumber, Row, Col, Typography, Space, Tooltip } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux'

const { Text } = Typography;

const EnergyCarbonForm = () => {
  // dispatch actions with this function
  const dispatch = useDispatch();
  // save current global state to local state to be used in component
  const ProjectEmbInOp = useSelector(state => state.ProjectEmbInOp);
  const ProjectEmbEoL = useSelector(state => state.ProjectEmbEoL);
  const ProjectOpHvac = useSelector(state => state.ProjectOpHvac);
  const ProjectOpLighting = useSelector(state => state.ProjectOpLighting);
  const ProjectOpEquTen = useSelector(state => state.ProjectOpEquTen);
  const ProjectOpOthers = useSelector(state => state.ProjectOpOthers);
  const ProjectOpRenewables = useSelector(state => state.ProjectOpRenewables);
  const ProjectOpGreenPower = useSelector(state => state.ProjectOpGreenPower);


  // handle changes depending on field type
  const handleNumberChange = id => e => {
    dispatch({type: 'update', key: [id], payload: e})
    dispatch({type: 'recalculate' })
  }

  return (
    <>
    <Space direction="vertical">
      <Row>
        <Col span={18}>
          <Space style={{ width: '100%', justifyContent: 'left' }}>
            <Text>
            Embodied carbon reduction in operation (B)
            </Text>
            {/* <Tooltip title="% of the total carbon after renewables and green power">
              <QuestionCircleOutlined />
            </Tooltip> */}
          </Space>
        </Col>
        <Col span={6}>
          <Text>
          <InputNumber style={{ width: '100%' }} size="small" placeholder="e.g. 12345600" value={ProjectEmbInOp} id='ProjectEmbInOp' onChange={handleNumberChange('ProjectEmbInOp')} />
          </Text>
        </Col>
      </Row>

      <Row >
        <Col span={18}>
          <Space style={{ width: '100%', justifyContent: 'left' }}>
            <Text>
            End of Life embodied carbon reduction (C)
            </Text>
            {/* <Tooltip title="If not known, type 50">
              <QuestionCircleOutlined />
            </Tooltip> */}
          </Space>
        </Col>
        <Col span={6}>
          <Text>
          <InputNumber style={{ width: '100%' }} size="small" placeholder="e.g. 12345600" value={ProjectEmbEoL} id='ProjectEmbEoL' onChange={handleNumberChange('ProjectEmbEoL')} />
          </Text>
        </Col>
      </Row>

<Row >
  <Col span={18}>
    <Space style={{ width: '100%', justifyContent: 'left' }}>
      <Text>
      Heating, Ventilation and Air Conditioning (B)
      </Text>
      <Tooltip title="If not known, type 50">
        <QuestionCircleOutlined />
      </Tooltip>
    </Space>
  </Col>
  <Col span={6}>
    <Text>
    <InputNumber style={{ width: '100%' }} size="small" placeholder="e.g. 12345600" value={ProjectOpHvac} id='ProjectOpHvac' onChange={handleNumberChange('ProjectOpHvac')} />
    </Text>
  </Col>
</Row>

<Row >
  <Col span={18}>
    <Space style={{ width: '100%', justifyContent: 'left' }}>
      <Text>
      Lighting (B)
      </Text>
      <Tooltip title="For Base Building this include only common areas">
        <QuestionCircleOutlined />
      </Tooltip>
    </Space>
  </Col>
  <Col span={6}>
    <Text>
    <InputNumber style={{ width: '100%' }} size="small" placeholder="e.g. 12345600" value={ProjectOpLighting} id='ProjectOpLighting' onChange={handleNumberChange('ProjectOpLighting')} />
    </Text>
  </Col>
</Row>

<Row >
  <Col span={18}>
    <Space style={{ width: '100%', justifyContent: 'left' }}>
      <Text>
      Tenant equipment (B)
      </Text>
      <Tooltip title="type 0 for BaseBuilding">
        <QuestionCircleOutlined />
      </Tooltip>
    </Space>
  </Col>
  <Col span={6}>
    <Text>
    <InputNumber style={{ width: '100%' }} size="small" placeholder="e.g. 12345600" value={ProjectOpEquTen} id='ProjectOpEquTen' onChange={handleNumberChange('ProjectOpEquTen')} />
    </Text>
  </Col>
</Row>

<Row >
  <Col span={18}>
    <Space style={{ width: '100%', justifyContent: 'left' }}>
      <Text>
      Any other energy consumption (B)
      </Text>
      {/* <Tooltip title="type 0 for BaseBuilding">
        <QuestionCircleOutlined />
      </Tooltip> */}
    </Space>
  </Col>
  <Col span={6}>
    <Text>
    <InputNumber style={{ width: '100%' }} size="small" placeholder="e.g. 12345600" value={ProjectOpOthers} id='ProjectOpOthers' onChange={handleNumberChange('ProjectOpOthers')} />
    </Text>
  </Col>
</Row>

<Row >
  <Col span={18}>
    <Space style={{ width: '100%', justifyContent: 'left' }}>
      <Text>
      How much renewable will be generated on site
      </Text>
      <Tooltip title="% of the total energy demand">
        <QuestionCircleOutlined />
      </Tooltip>
    </Space>
  </Col>
  <Col span={6}>
    <Text>
    <InputNumber style={{ width: '100%' }} size="small" placeholder="e.g. 12345600" value={ProjectOpRenewables} id='ProjectOpRenewables' onChange={handleNumberChange('ProjectOpRenewables')} />
    </Text>
  </Col>
</Row>

<Row >
  <Col span={18}>
    <Space style={{ width: '100%', justifyContent: 'left' }}>
      <Text>
      How much green power will be purchased
      </Text>
      <Tooltip title="% of the total energy consumption from grid after on site renewables, the % should exclude the gas component">
        <QuestionCircleOutlined />
      </Tooltip>
    </Space>
  </Col>
  <Col span={6}>
    <Text>
    <InputNumber style={{ width: '100%' }} size="small" placeholder="e.g. 12345600" value={ProjectOpGreenPower} id='ProjectOpGreenPower' onChange={handleNumberChange('ProjectOpGreenPower')} />
    </Text>
  </Col>
</Row>

      </Space>
    </>
  );
};

export default EnergyCarbonForm;