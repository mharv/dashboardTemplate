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
        colorField: 'type',
        radius: 0.9,
        label: {
            type: 'inner',
            offset: '-30%',
            content: function content(_ref) {
                var percent = _ref.percent;
                return ''.concat((percent * 100).toFixed(0), '%');
            },
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