import React from 'react';
import { Input, Row, Col, Typography, Space, Tooltip } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';

const { Text } = Typography;

const EnergyCarbonForm = () => {
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
            <Input size="small" placeholder="percentage" />
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
            <Input size="small" placeholder="percentage" />
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
      <Input size="small" placeholder="percentage" />
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
      <Input size="small" placeholder="percentage" />
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
      <Input size="small" placeholder="percentage" />
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
      <Input size="small" placeholder="percentage" />
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
      <Input size="small" placeholder="percentage" />
    </Text>
  </Col>
</Row>

      </Space>
    </>
  );
};

export default EnergyCarbonForm;