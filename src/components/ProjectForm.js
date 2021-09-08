import React, { useState } from 'react';
import { Input, Row, Col, Typography, Space, Tooltip } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';

import { useSelector, useDispatch } from 'react-redux'
import { set } from '../features/counter/counterSlice'
const { Text } = Typography;


const selectedText = state => state.input.value;


const ProjectForm = () => {
  const dispatch = useDispatch()
  
  const [text, setText] = useState(useSelector(selectedText))
  
  const handleChange = e => {
    setText(e.target.value)
    dispatch(set(e.target.value) )
  }

  return (
    <>
      <Space direction="vertical">
        <Row>
          <Col span={18}>
            <Space style={{ width: '100%', justifyContent: 'left' }}>
              <Text>
                Job Number (27346700 format)
              </Text>
              {/* <Tooltip visible={false} title="Job Number (27346700 format)">
              <QuestionCircleOutlined />
            </Tooltip> */}
            </Space>
          </Col>
          <Col span={6}>
            <Text>
              <Input size="small" placeholder="e.g. 12345600" value={text} onChange={handleChange} />
            </Text>
          </Col>
        </Row>

        <Row >
          <Col span={18}>
            <Space style={{ width: '100%', justifyContent: 'left' }}>
              <Text>
                Project name
              </Text>
              {/* <Tooltip title="If not known, type 50">
              <QuestionCircleOutlined />
            </Tooltip> */}
            </Space>
          </Col>
          <Col span={6}>
            <Text>
              <Input size="small" placeholder="Project A" />
            </Text>
          </Col>
        </Row>

        <Row >
          <Col span={18}>
            <Space style={{ width: '100%', justifyContent: 'left' }}>
              <Text>
                Who is the sustainability champion for the project
              </Text>
              {/* <Tooltip title="If not known, type 50">
              <QuestionCircleOutlined />
            </Tooltip> */}
            </Space>
          </Col>
          <Col span={6}>
            <Text>
              <Input size="small" placeholder="Arup Staff" />
            </Text>
          </Col>
        </Row>

        <Row >
          <Col span={18}>
            <Space style={{ width: '100%', justifyContent: 'left' }}>
              <Text>
                What is the most relevant building type from the list below
              </Text>
              {/* <Tooltip title="If not known, type 50">
              <QuestionCircleOutlined />
            </Tooltip> */}
            </Space>
          </Col>
          <Col span={6}>
            <Text>
              <Input size="small" placeholder="dropdown?" />
            </Text>
          </Col>
        </Row>

        <Row >
          <Col span={18}>
            <Space style={{ width: '100%', justifyContent: 'left' }}>
              <Text>
                What is the most relevant sector from the list below
              </Text>
              {/* <Tooltip title="">
              <QuestionCircleOutlined />
            </Tooltip> */}
            </Space>
          </Col>
          <Col span={6}>
            <Text>
              <Input size="small" placeholder="dropdown?" />
            </Text>
          </Col>
        </Row>

        <Row >
          <Col span={18}>
            <Space style={{ width: '100%', justifyContent: 'left' }}>
              <Text>
                Where is the project located
              </Text>
              <Tooltip title="e.g. Sydney, Australia">
                <QuestionCircleOutlined />
              </Tooltip>
            </Space>
          </Col>
          <Col span={6}>
            <Text>
              <Input size="small" placeholder="dropdown?" />
            </Text>
          </Col>
        </Row>

        <Row >
          <Col span={18}>
            <Space style={{ width: '100%', justifyContent: 'left' }}>
              <Text>
                What is the project total gross floor area in m2
              </Text>
              <Tooltip title="e.g. 10000">
                <QuestionCircleOutlined />
              </Tooltip>
            </Space>
          </Col>
          <Col span={6}>
            <Text>
              <Input size="small" placeholder="dropdown?" />
            </Text>
          </Col>
        </Row>

        <Row >
          <Col span={18}>
            <Space style={{ width: '100%', justifyContent: 'left' }}>
              <Text>
                Select the reference Business As Usual baseline
              </Text>
              <Tooltip title="Please contact us if a new BAU is needed">
                <QuestionCircleOutlined />
              </Tooltip>
            </Space>
          </Col>
          <Col span={6}>
            <Text>
              <Input size="small" placeholder="e.g. BAU_01" />
            </Text>
          </Col>
        </Row>

        <Row >
          <Col span={18}>
            <Space style={{ width: '100%', justifyContent: 'left' }}>
              <Text>
                What is the expected service life for the building structure in years
              </Text>
              {/* <Tooltip title="Please contact us if a new BAU is needed">
                <QuestionCircleOutlined />
              </Tooltip> */}
            </Space>
          </Col>
          <Col span={6}>
            <Text>
              <Input size="small" placeholder="e.g. 60" />
            </Text>
          </Col>
        </Row>
      </Space>
    </>
  );
};

export default ProjectForm;