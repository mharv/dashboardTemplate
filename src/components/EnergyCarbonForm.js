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

const EnergyCarbonForm = () => {
  return (
    <>
      <Form {...layout} style={longLabel} size="small" labelAlign="left">
        <Form.Item  label="Embodied carbon reduction in operation (B)" >
          <Input placeholder="percentage" />
        </Form.Item>
        <Form.Item label="End of Life embodied carbon reduction (C)">
          <Input placeholder="percentage" />
        </Form.Item>
        <Form.Item label="Heating, Ventilation and Air Conditioning (B)">
          <Input placeholder="percentage" />
        </Form.Item>
        <Form.Item label="Lighting (B)" tooltip="For Base Building this include only common areas">
          <Input placeholder="percentage" />
        </Form.Item>
        <Form.Item label="Tenant equipment (B)" tooltip="type 0 for BaseBuilding">
          <Input placeholder="percentage" />
        </Form.Item>
        <Form.Item label="Any other energy consumption (B)" >
          <Input placeholder="percentage" />
        </Form.Item>
        <Form.Item label="How much green power will be purchased" tooltip="% of the total energy consumption from grid after on site renewables, the % should exclude the gas component" >
          <Input placeholder="percentage" />
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

export default EnergyCarbonForm;