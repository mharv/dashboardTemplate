import React from 'react';
import EngagementAndImpactForm from './EngagementAndImpactForm'
import { Tabs } from 'antd';
import RisksForm from './RisksForm';

const { TabPane } = Tabs;

class KPITabs extends React.Component {

  render() {
    return (
      <>
        <Tabs tabPosition='top' defaultActiveKey="1" type="card" size='small' centered="true">
          <TabPane tab="Engagement & Impact" key="1">
            <EngagementAndImpactForm></EngagementAndImpactForm>
          </TabPane>
          <TabPane tab="Risks" key="2">
            <RisksForm></RisksForm>
          </TabPane>
        </Tabs>
      </>
    );
  }
}

export default KPITabs;