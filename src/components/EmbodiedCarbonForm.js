import React from 'react';
import {  Input, Row, Col, Typography, Space } from 'antd';


const { Text } = Typography;


const EmbodiedCarbonForm = () => {
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
              <Input size="small" placeholder="percentage" />
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
              <Input size="small" placeholder="percentage" />
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
              <Input size="small" placeholder="percentage" />
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
              <Input size="small" placeholder="percentage" />
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
              <Input size="small" placeholder="percentage" />
            </Text>
          </Col>
        </Row>
      </Space>
    </>
  );
};

export default EmbodiedCarbonForm;