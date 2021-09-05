import React, { useState } from 'react';
import { Form, Input } from 'antd';


const layout = {
  labelCol: { span: 18 },
  wrapperCol: { span: 6 },
};

const longLabel = {
  whiteSpace: 'normal',
  // height: 'auto'
};

const FormLayoutDemo = () => {
  return (
    <>
      <Form {...layout} style={longLabel} >
        <Form.Item  label="how long can we go ??????????? test test test test test" >
          <Input placeholder="unit" />
        </Form.Item>
        <Form.Item label="Placeholder quetsion title">
          <Input placeholder="unit" />
        </Form.Item>
        <Form.Item label="Placeholder quetsion title">
          <Input placeholder="unit" />
        </Form.Item>
        <Form.Item label="Placeholder quetsion title">
          <Input placeholder="unit" />
        </Form.Item>
        <Form.Item label="Placeholder quetsion title">
          <Input placeholder="unit" />
        </Form.Item>
        <Form.Item  label="how long can we go ??????????? test test test test test" >
          <Input placeholder="unit" />
        </Form.Item>
        <Form.Item label="Placeholder quetsion title">
          <Input placeholder="unit" />
        </Form.Item>
        <Form.Item label="Placeholder quetsion title">
          <Input placeholder="unit" />
        </Form.Item>
        <Form.Item label="Placeholder quetsion title">
          <Input placeholder="unit" />
        </Form.Item>
        <Form.Item label="Placeholder quetsion title">
          <Input placeholder="unit" />
        </Form.Item>
      </Form>
    </>
  );
};

export default FormLayoutDemo;