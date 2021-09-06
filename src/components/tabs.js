import React from 'react';
import ProjectForm from './ProjectForm';
import EmbodiedCarbonForm from './EmbodiedCarbonForm';
import EnergyCarbonForm from './EnergyCarbonForm';
import OffsetsForm from './OffsetsForm';
import { Tabs, Radio } from 'antd';

const { TabPane } = Tabs;

class InputTabs extends React.Component {
  state = { size: 'small' };


  render() {
    const { size } = this.state;
    return (
      <div>
        <Tabs tabPosition='top' defaultActiveKey="1" type="card" size={size} centered="true">
          <TabPane tab="Project specifics" key="1">
            <ProjectForm></ProjectForm>
          </TabPane>
          <TabPane tab="Embodied carbon" key="2">
            <EmbodiedCarbonForm></EmbodiedCarbonForm>
          </TabPane>
          <TabPane tab="Energy carbon" key="3">
              <EnergyCarbonForm></EnergyCarbonForm>
          </TabPane>
          <TabPane tab="Offsets" key="4">
            <OffsetsForm></OffsetsForm>
          </TabPane>
        </Tabs>
      </div>
    );
  }
}

export default InputTabs;