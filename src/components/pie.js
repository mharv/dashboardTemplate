import React from 'react';
import { Pie } from '@ant-design/charts';
const DemoPie = () => {
    var data = [
        {
            type: 'english somethin',
            value: 27,
        },
        {
            type: '分类二',
            value: 25,
        },
        {
            type: '分类三',
            value: 18,
        },
        {
            type: '分类四',
            value: 15,
        },
        {
            type: '分类五',
            value: 10,
        },
        {
            type: '其他',
            value: 5,
        },
    ];
    var config = {
        appendPadding: 10,
        data: data,
        angleField: 'value',
        
    innerRadius: 0.6,
        colorField: 'type',
        radius: 0.9,
        label: {
            type: 'outer',
            offset: '-30%',
            content: null,
            style: {
                fontSize: 14,
                textAlign: 'center',
            },
        },
        interactions: [{ type: 'element-active' }],
    };
    return <Pie {...config}/>;
};
export default DemoPie;