import React from 'react';
import { Input, InputNumber, Row, Col, Typography, Space, Tooltip } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux'
import SelectBauModal from './SelectBauModal';

const { Text } = Typography;

const ProjectForm = () => {
  // dispatch actions with this function
  const dispatch = useDispatch();
  // save current global state to local state to be used in component
  const JobNumber = useSelector(state => state.JobNumber);
  const ProjectName = useSelector(state => state.ProjectName);
  const SustainabilityChampionEmail = useSelector(state => state.SustainabilityChampionEmail);
  const ProjectLocation = useSelector(state => state.ProjectLocation);
  const Sector = useSelector(state => state.Sector);
  const BuildingType = useSelector(state => state.BuildingType);
  const ProjectGFA = useSelector(state => state.ProjectGFA);
  const ProjectBauBaseline = useSelector(state => state.ProjectBauBaseline);
  const ServiceLifeBuildingStructureYears = useSelector(state => state.ServiceLifeBuildingStructureYears);


  // handle changes depending on field type
  const handleNumberChange = id => e => {
    dispatch({type: 'update', key: [id], payload: e})
    dispatch({type: 'recalculate' })
  }
  const handleStringChange = e => {
    dispatch({type: 'update', key: e.target.getAttribute("id"), payload: e.target.value})
    dispatch({type: 'recalculate' })
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
            <InputNumber disabled style={{ width: '100%' }} size="small" placeholder="e.g. 12345600" value={JobNumber} id='JobNumber' onChange={handleNumberChange('JobNumber')} />  
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
              <Input disabled size="small" placeholder="Project A"  value={ProjectName} id='ProjectName' onChange={handleStringChange} />
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
            <Input size="small" placeholder="Project A"  value={SustainabilityChampionEmail} id='SustainabilityChampionEmail' onChange={handleStringChange} />
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
            <Input disabled size="small" placeholder="data center"  value={BuildingType} id='BuildingType' onChange={handleStringChange} />
            
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
            <Input disabled size="small" placeholder="education"  value={Sector} id='Sector' onChange={handleStringChange} />
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
            <Input disabled size="small" placeholder="Sydney, Aus"  value={ProjectLocation} id='ProjectLocation' onChange={handleStringChange} />
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
            <InputNumber style={{ width: '100%' }} size="small" placeholder="" value={ProjectGFA} id='ProjectGFA' onChange={handleNumberChange('ProjectGFA')} />  
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
              <SelectBauModal></SelectBauModal>
            {/* <InputNumber style={{ width: '100%' }} size="small" placeholder="e.g. BAU_01" value={ProjectBauBaseline} id='ProjectBauBaseline' onChange={handleNumberChange('ProjectBauBaseline')} />  */}
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
            <InputNumber style={{ width: '100%' }} size="small" placeholder="e.g. 60" value={ServiceLifeBuildingStructureYears} id='ServiceLifeBuildingStructureYears' onChange={handleNumberChange('ServiceLifeBuildingStructureYears')} /> 
            </Text>
          </Col>
        </Row>
      </Space>
    </>
  );
};

export default ProjectForm;