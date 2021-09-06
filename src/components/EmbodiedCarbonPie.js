import React from 'react';
import { Pie } from '@ant-design/charts';
const EmbodiedCarbonPie = () => {
    var data = [
        {
            type: 'Sup structure - reduction',
            value: 27,
        },
        {
            type: 'Int. finishes',
            value: 25,
        },
        {
            type: 'Envelope',
            value: 18,
        },
        {
            type: 'Services',
            value: 15,
        },
        {
            type: 'Substructure',
            value: 10,
        },
        {
            type: 'Super structure',
            value: 5,
        },
        {
            type: 'Substructure - reduction',
            value: 10,
        },
        {
            type: 'Int. finishes - reduction',
            value: 5,
        },
        {
            type: 'Services - reduction',
            value: 5,
        },
        {
            type: 'Envelope - reduction',
            value: 5,
        },
    ];
    var config = {
        appendPadding: 10,
        data: data,
        angleField: 'value',
        colorField: 'type',
        radius: 0.8,
        legend: false,
        label: {
            type: 'outer',
            content: '{name}',
        },
        interactions: [{ type: 'pie-legend-active' }, { type: 'element-active' }],
    };
    return <><h3>Embodied carbon summary (A)</h3><Pie {...config}/></>;
};
export default EmbodiedCarbonPie;