import React, { useState } from 'react';
import { Form, Input } from 'antd';


const layout = {
  labelCol: { span: 12 },
  wrapperCol: { span: 12 },
};

const longLabel = {
  whiteSpace: 'normal',
  // height: 'auto'
};

const FormLayoutDemo = () => {
  return (
    <>
      <Form {...layout} style={longLabel} >
        <Form.Item  label="Field AField AField AField AField AField AField AField AField AField A" >
          <Input placeholder="input placeholder" />
        </Form.Item>
        <Form.Item label="Field B">
          <Input placeholder="input placeholder" />
        </Form.Item>
      </Form>
    </>
  );
};

export default FormLayoutDemo;