import React from 'react';
import { Table, Tag, Space } from 'antd';


const data = [
    {
      name: 'BAU total embodied carbon',
      value: 24.7,
      unit: 'kg/m2/y',
      key: 1
    },
    {
        name: 'Design proposal embodied carbon',
        value: 22.22,
        unit: 'kg/m2/y',
        key: 2
      },
      {
        name: 'Embodied carbon reduction',
        value: 10,
        unit: '%',
        key: 3
      },
      {
        name: 'BAU total energy carbon (without Green Power)',
        value: 80,
        unit: 'kg/m2/y',
        key: 4
      },
      {
          name: 'Design total energy carbon (without Green Power)',
          value: 62.1,
          unit: 'kg/m2/y',
          key: 5
        },
        {
          name: 'Total carbon reduction (without Green Power)',
          value: 19.5,
          unit: '%',
          key: 6
        },
        {
          name: 'Total carbon reduction (with Green Power)',
          value: 78.8,
          unit: '%',
          key: 7
        },
        {
          name: 'Offset required to Net Zero',
          value: 3000000,
          unit: '$',
          key: 8
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
  

class TotalsTable extends React.Component {
    config = {
        pagination: false,
         showHeader: false,
         size: 'small',
        //  bordered: true
    }

  render() {
    return (
        <Table {...this.config} columns={columns} dataSource={data} />
    );
  }
}

export default TotalsTable;