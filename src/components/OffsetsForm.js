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

const OffsetsForm = () => {
  return (
    <>
      <Form {...layout} style={longLabel} size="small" labelAlign="left">
        <Form.Item  label="How much of the remaining carbon footprint will be offset" tooltip="% of the total carbon after renewables and green power" >
          <Input placeholder="percentage" />
        </Form.Item>
        <Form.Item label="What is the reference cost of carbon offsets in $/tonne" tooltip="If not known, type 50">
          <Input placeholder="$/tonne" />
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

export default OffsetsForm;