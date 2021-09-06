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

const ProjectForm = () => {
  return (
    <>
      <Form {...layout} style={longLabel} size="small" labelAlign="left">
        <Form.Item  label="Job Number (27346700 format)" >
          <Input placeholder="e.g. 12345600" />
        </Form.Item>
        <Form.Item label="Project name">
          <Input placeholder="Project A" />
        </Form.Item>
        <Form.Item label="Who is the sustainability champion for the project">
          <Input placeholder="Arup Staff" />
        </Form.Item>
        <Form.Item label="What is the most relevant building type from the list below">
          <Input placeholder="dropdown?" />
        </Form.Item>
        <Form.Item label="What is the most relevant sector from the list below">
          <Input placeholder="dropdown?" />
        </Form.Item>
        <Form.Item  label="Where is the project located" >
          <Input placeholder="e.g. Sydney, Australia" />
        </Form.Item>
        <Form.Item label="What is the project total gross floor area in m2">
          <Input placeholder="e.g. 10000" />
        </Form.Item>
        <Form.Item label="Select the reference Business As Usual baseline" tooltip="Please contact us if a new BAU is needed">
          <Input placeholder="e.g. BAU_01" />
        </Form.Item>
        <Form.Item label="What is the expected service life for the building structure in years">
          <Input placeholder="e.g. 60" />
        </Form.Item>
      </Form>
    </>
  );
};

export default ProjectForm;