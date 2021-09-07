import React from 'react';
import { Form, Input } from 'antd';


const layout = {
  labelCol: { span: 18 },
  wrapperCol: { span: 6 },
};

const longLabel = {
  whiteSpace: 'normal',
  // height: 'auto'
};

const EmbodiedCarbonForm = () => {
  return (
    <>
      <Form {...layout} style={longLabel} size="small" labelAlign="left">
        <Form.Item  label="Super Structure embodied carbon reduction (A)" >
          <Input placeholder="percentage" />
        </Form.Item>
        <Form.Item label="Sub Structure embodied carbon reduction (A)">
          <Input placeholder="percentage" />
        </Form.Item>
        <Form.Item label="Building Services embodied carbon reduction (A)">
          <Input placeholder="percentage" />
        </Form.Item>
        <Form.Item label="Building Envelope embodied carbon reduction (A)">
          <Input placeholder="percentage" />
        </Form.Item>
        <Form.Item label="Internal finishes embodied carbon reduction (A)">
          <Input placeholder="percentage" />
        </Form.Item>
        <Form.Item label="">
          {/* <Input placeholder="percentage" /> */}
        </Form.Item>
        <Form.Item label="">
          {/* <Input placeholder="percentage" /> */}
        </Form.Item>
        <Form.Item label="">
          {/* <Input placeholder="percentage" /> */}
        </Form.Item>
        <Form.Item label="">
          {/* <Input placeholder="percentage" /> */}
        </Form.Item>
      </Form>
    </>
  );
};

export default EmbodiedCarbonForm;