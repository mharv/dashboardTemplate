import React from 'react';
import { InputNumber, Row, Col, Typography, Space, Tooltip } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux'

const { Text } = Typography;

const OffsetsForm = () => {
  // dispatch actions with this function
  const dispatch = useDispatch();
  // save current global state to local state to be used in component
  const ProjectOffsetTarget = useSelector(state => state.ProjectOffsetTarget);
  const ProjectOffsetCost = useSelector(state => state.ProjectOffsetCost);


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
              How much of the remaining carbon footprint will be offset
            </Text>
            <Tooltip title="% of the total carbon after renewables and green power">
              <QuestionCircleOutlined />
            </Tooltip>
          </Space>
        </Col>
        <Col span={6}>
          <Text>
          <InputNumber max={1} min={0}  style={{ width: '100%' }} size="small" placeholder="e.g. 12345600" value={ProjectOffsetTarget} id='ProjectOffsetTarget' onChange={handleNumberChange('ProjectOffsetTarget')} />
          </Text>
        </Col>
      </Row>

      <Row >
        <Col span={18}>
          <Space style={{ width: '100%', justifyContent: 'left' }}>
            <Text>
            What is the reference cost of carbon offsets in $/tonne
            </Text>
            <Tooltip title="If not known, type 50">
              <QuestionCircleOutlined />
            </Tooltip>
          </Space>
        </Col>
        <Col span={6}>
          <Text>
          <InputNumber style={{ width: '100%' }} size="small" placeholder="e.g. 12345600" value={ProjectOffsetCost} id='ProjectOffsetCost' onChange={handleNumberChange('ProjectOffsetCost')} />
          </Text>
        </Col>

      </Row>
      </Space>
    </>
  );
};

export default OffsetsForm;