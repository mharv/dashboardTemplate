import React, { useState, useEffect } from 'react';
import { Bar } from '@ant-design/charts';
import { useSelector, useDispatch } from 'react-redux'

const KPIBarChart = () => {
    const ProjectTeamEngagement = useSelector(state => state.ProjectTeamEngagement);
    const ProjectClientEngagementDecarbonisation = useSelector(state => state.ProjectClientEngagementDecarbonisation);
    const ProjectClientEngagementResilience = useSelector(state => state.ProjectClientEngagementResilience);
    const ProjectArupImpactCarbon = useSelector(state => state.ProjectArupImpactCarbon);
    const ProjectArupImpactResilience = useSelector(state => state.ProjectArupImpactResilience);

  var data = [
    {
      label: 'KPI impact on resilience',
      value: ProjectArupImpactResilience,
    },
    {
      label: 'KPI impact on carbon',
      value: ProjectArupImpactCarbon,
    },
    {
      label: 'KPI client engagement on resilience',
      value: ProjectClientEngagementResilience,
    },
    {
      label: 'KPI client engagement on carbon',
      value: ProjectClientEngagementDecarbonisation,
    },
    {
      label: 'KPI team engagement',
      value: ProjectTeamEngagement,
    },
  ];

  var config = {
    data: data,
    // isGroup: true,
    xField: 'value',
    yField: 'label',
    // autoFit: false,
    // dodgePadding: 4,
    // intervalPadding: 20,
    barWidthRatio: 0.5,
    meta: {
        range: [0, 3],
        
    },
    label: {
      position: 'middle',
      layout: [
        { type: 'interval-adjust-position' },
        { type: 'interval-hide-overlap' },
        { type: 'adjust-color' },
      ],
    },
  };
  return <Bar {...config} />;
};

export default KPIBarChart;