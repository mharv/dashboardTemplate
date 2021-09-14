import React from 'react';
import { InputNumber, Row, Col, Typography, Space } from 'antd';
import { useSelector, useDispatch } from 'react-redux'

const { Text } = Typography;

const EmbodiedCarbonForm = () => {
  // dispatch actions with this function
  const dispatch = useDispatch();
  // save current global state to local state to be used in component
  const ProjectEmbSupStructure = useSelector(state => state.ProjectEmbSupStructure);
  const ProjectEmbSubStructure = useSelector(state => state.ProjectEmbSubStructure);
  const ProjectEmbServices = useSelector(state => state.ProjectEmbServices);
  const ProjectEmbEnvelope = useSelector(state => state.ProjectEmbEnvelope);
  const ProjectEmbIntFinishes = useSelector(state => state.ProjectEmbIntFinishes);


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
                Super Structure embodied carbon reduction (A)
              </Text>
              {/* <Tooltip title="% of the total carbon after renewables and green power">
              <QuestionCircleOutlined />
            </Tooltip> */}
            </Space>
          </Col>
          <Col span={6}>
            <Text>
            <InputNumber style={{ width: '100%' }} size="small" placeholder="e.g. 12345600" value={ProjectEmbSupStructure} id='ProjectEmbSupStructure' onChange={handleNumberChange('ProjectEmbSupStructure')} />  
            </Text>
          </Col>
        </Row>

        <Row >
          <Col span={18}>
            <Space style={{ width: '100%', justifyContent: 'left' }}>
              <Text>
                Sub Structure embodied carbon reduction (A)
              </Text>
              {/* <Tooltip title="If not known, type 50">
              <QuestionCircleOutlined />
            </Tooltip> */}
            </Space>
          </Col>
          <Col span={6}>
            <Text>
            <InputNumber style={{ width: '100%' }} size="small" placeholder="e.g. 12345600" value={ProjectEmbSubStructure} id='ProjectEmbSubStructure' onChange={handleNumberChange('ProjectEmbSubStructure')} />
            </Text>
          </Col>
        </Row>

        <Row >
          <Col span={18}>
            <Space style={{ width: '100%', justifyContent: 'left' }}>
              <Text>
                Building Services embodied carbon reduction (A)
              </Text>
              {/* <Tooltip title="If not known, type 50">
        <QuestionCircleOutlined />
      </Tooltip> */}
            </Space>
          </Col>
          <Col span={6}>
            <Text>
            <InputNumber style={{ width: '100%' }} size="small" placeholder="e.g. 12345600" value={ProjectEmbServices} id='ProjectEmbServices' onChange={handleNumberChange('ProjectEmbServices')} />  
            </Text>
          </Col>
        </Row>

        <Row >
          <Col span={18}>
            <Space style={{ width: '100%', justifyContent: 'left' }}>
              <Text>
                Building Envelope embodied carbon reduction (A)
              </Text>
              {/* <Tooltip title="If not known, type 50">
        <QuestionCircleOutlined />
      </Tooltip> */}
            </Space>
          </Col>
          <Col span={6}>
            <Text>
            <InputNumber style={{ width: '100%' }} size="small" placeholder="e.g. 12345600" value={ProjectEmbEnvelope} id='ProjectEmbEnvelope' onChange={handleNumberChange('ProjectEmbEnvelope')} />  
            </Text>
          </Col>
        </Row>

        <Row >
          <Col span={18}>
            <Space style={{ width: '100%', justifyContent: 'left' }}>
              <Text>
                Internal finishes embodied carbon reduction (A)
              </Text>
              {/* <Tooltip title="If not known, type 50">
        <QuestionCircleOutlined />
      </Tooltip> */}
            </Space>
          </Col>
          <Col span={6}>
            <Text>
            <InputNumber style={{ width: '100%' }} size="small" placeholder="e.g. 12345600" value={ProjectEmbIntFinishes} id='ProjectEmbIntFinishes' onChange={handleNumberChange('ProjectEmbIntFinishes')} />  
            </Text>
          </Col>
        </Row>
      </Space>
    </>
  );
};

export default EmbodiedCarbonForm;