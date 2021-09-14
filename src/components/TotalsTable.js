import React from 'react';
import { Table } from 'antd';
import { useSelector, useDispatch } from 'react-redux'


const TotalsTable = () => {

  const BauEmbTotal = useSelector(state => state.BauEmbTotal);
  const DesignEmbTotal = useSelector(state => state.DesignEmbTotal);

  const BauOpTotal = useSelector(state => state.BauOpTotal);
  const DesignOpEnergyFromGrid = useSelector(state => state.DesignOpEnergyFromGrid);

  const DesignOpGreenPower = useSelector(state => state.DesignOpGreenPower);
  const DesignTotalOffsetsNetZeroCost = useSelector(state => state.DesignTotalOffsetsNetZeroCost);

  const data = [
    {
      name: 'BAU total embodied carbon',
      value: BauEmbTotal.toFixed(1),
      unit: 'kg/m2/y',
      key: 1
    },
    {
      name: 'Design proposal embodied carbon',
      value: DesignEmbTotal.toFixed(1),
      unit: 'kg/m2/y',
      key: 2
    },
    {
      name: 'Embodied carbon reduction',
      value: (1 - (DesignEmbTotal / BauEmbTotal)).toFixed(1) * 100,
      unit: '%',
      key: 3
    },
    {
      name: 'BAU total energy carbon (without Green Power)',
      value: BauOpTotal.toFixed(1),
      unit: 'kg/m2/y',
      key: 4
    },
    {
      name: 'Design total energy carbon (without Green Power)',
      value: DesignOpEnergyFromGrid.toFixed(1),
      unit: 'kg/m2/y',
      key: 5
    },
    {
      name: 'Total op carbon reduction (without Green Power)',
      value: (1 - (DesignOpEnergyFromGrid / BauOpTotal)).toFixed(1) * 100,
      unit: '%',
      key: 6
    },
    {
      name: 'Total carbon reduction (without Green Power)',
      value: (1 - (DesignEmbTotal + DesignOpEnergyFromGrid)/(BauEmbTotal + BauOpTotal)).toFixed(1) * 100,
      unit: '%',
      key: 7
    },
    {
      name: 'Total carbon reduction (with Green Power)',
      value: (1 - (DesignEmbTotal + DesignOpEnergyFromGrid + DesignOpGreenPower)/(BauEmbTotal + BauOpTotal)).toFixed(1) * 100,
      unit: '%',
      key: 8
    },
    {
      name: 'Offset required to Net Zero',
      value: DesignTotalOffsetsNetZeroCost.toFixed(1),
      unit: '$',
      key: 9
    },
  ];



  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Value',
      dataIndex: 'value',
      key: 'value',
      align: 'right',
    },
    {
      title: 'Unit',
      dataIndex: 'unit',
      key: 'unit',
    }
  ];


  var config = {
    pagination: false,
    showHeader: false,
    size: 'small',
  }

  return (
    <Table {...config} columns={columns} dataSource={data} />
  );
}

export default TotalsTable;