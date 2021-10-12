import React from 'react';
import { InputNumber, Row, Col, Typography, Space, Tooltip } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux'
import YesNoRadioGroup from './YesNoRadioGroup';

const { Text } = Typography;

const RisksForm = () => {
  // dispatch actions with this function
  const dispatch = useDispatch();
  // save current global state to local state to be used in component
  const ProjectClimateChangeRiskReviewComplete = useSelector(state => state.ProjectClimateChangeRiskReviewComplete);
  const MajorRisksNotMitigatedFor2050 = useSelector(state => state.MajorRisksNotMitigatedFor2050);
  const MajorRisksNotMitigatedFor2070 = useSelector(state => state.MajorRisksNotMitigatedFor2070);

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
            Climate Change risk review completed?
            </Text>
            {/* <Tooltip title="% of the total carbon after renewables and green power">
              <QuestionCircleOutlined />
            </Tooltip> */}
          </Space>
        </Col>
        <Col span={6}>
          <Text>
          <YesNoRadioGroup></YesNoRadioGroup>
          </Text>
        </Col>
      </Row>

      <Row >
        <Col span={18}>
          <Space style={{ width: '100%', justifyContent: 'left' }}>
            <Text>
            How many major risks have not been mitigated for 2050?
            </Text>
            <Tooltip title="If not known or the review has not been completed select 5">
              <QuestionCircleOutlined />
            </Tooltip>
          </Space>
        </Col>
        <Col span={6}>
          <Text>
          <InputNumber max={5} min={0}  style={{ width: '100%' }} size="small" value={MajorRisksNotMitigatedFor2050} id='MajorRisksNotMitigatedFor2050' onChange={handleNumberChange('MajorRisksNotMitigatedFor2050')} />
          </Text>
        </Col>
      </Row>

<Row >
  <Col span={18}>
    <Space style={{ width: '100%', justifyContent: 'left' }}>
      <Text>
      How many major risks have not been mitigated for 2070?
      </Text>
      <Tooltip title="If not known or the review has not been completed select 5">
        <QuestionCircleOutlined />
      </Tooltip>
    </Space>
  </Col>
  <Col span={6}>
    <Text>
    <InputNumber max={5} min={0}  style={{ width: '100%' }} size="small"  value={MajorRisksNotMitigatedFor2070} id='MajorRisksNotMitigatedFor2070' onChange={handleNumberChange('MajorRisksNotMitigatedFor2070')} />
    </Text>
  </Col>
</Row>


      </Space>
    </>
  );
};

export default RisksForm;