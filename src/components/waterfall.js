import React from 'react';
import { Waterfall } from '@ant-design/charts';
const DemoWaterfall = () => {
    var data = [
        {
            quarter: '第一季度',
            value: 6200000,
        },
        {
            quarter: '第二季度',
            value: -2600000,
        },
        {
            quarter: '第三季度',
            value: 4100000,
        },
        {
            quarter: '第四季度',
            value: 3700000,
        },
    ];
    var formatter = function formatter(v) {
        return ''.concat(v / 10000000, ' 亿');
    };
    var annotations = [];
    data.reduce(function (v, d) {
        annotations.push({
            type: 'text',
            position: function position() {
                var y = v + d.value / 2;
                return [d.quarter, y];
            },
            content: formatter(d.value),
            style: {
                fontSize: 14,
                stroke: '#666',
                fill: '#fff',
                lineWidth: 1,
                textAlign: 'center',
                verticalAlign: 'middle',
            },
        });
        return v + d.value;
    }, 0);
    var config = {
        data: data,
        padding: 'auto',
        appendPadding: [20, 0, 0, 0],
        xField: 'quarter',
        yField: 'value',
        meta: {
            quarter: { alias: '月份' },
            value: {
                alias: '销售量',
                min: 0,
                formatter: formatter,
            },
        },
        total: {
            label: '总计',
            style: { fill: '#96a6a6' },
        },
        labelMode: 'absolute',
        label: { style: { fontSize: 12 } },
        annotations: annotations,
    };
    return <Waterfall {...config}/>;
};
export default DemoWaterfall;