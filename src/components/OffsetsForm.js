import React from 'react';
import { Input, Row, Col, Typography, Space, Tooltip } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';

const { Text } = Typography;

const OffsetsForm = () => {
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
            <Input size="small" placeholder="small size" />
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
            <Input size="small" placeholder="small size" />
          </Text>
        </Col>

      </Row>
      </Space>
    </>
  );
};

export default OffsetsForm;