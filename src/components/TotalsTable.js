import React from 'react';
import { Table, Tag, Space } from 'antd';


const data = [
    {
      name: 'BAU total embodied carbon',
      value: 24.7,
      type: 'kg/m2/y'
    },
    {
        name: 'Design proposal embodied carbon',
        value: 22.22,
        type: 'kg/m2/y'
      },
      {
        name: 'Embodied carbon reduction',
        value: 10,
        type: '%'
      },
      {
        name: 'BAU total energy carbon (without Green Power)',
        value: 80,
        type: 'kg/m2/y'
      },
      {
          name: 'Design total energy carbon (without Green Power)',
          value: 62.1,
          type: 'kg/m2/y'
        },
        {
          name: 'Total carbon reduction (without Green Power)',
          value: 19.5,
          type: '%'
        },
        {
          name: 'Total carbon reduction (with Green Power)',
          value: 78.8,
          type: '%'
        },
        {
          name: 'Offset required to Net Zero',
          value: 3000000,
          type: '$'
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
      dataIndex: 'type',
      key: 'type',
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