import React from 'react';
import { Pie } from '@ant-design/charts';
const EnergyCarbonPie = () => {
    var data = [
        {
            name: 'Op. others',
            value: 27,
            type: 'increase'
        },
        {
            name: 'Op. Equ. Ten. Lighting',
            value: 25,
            type: 'increase'
        },
        {
            name: 'HVAC',
            value: 18,
            type: 'increase'
        },
        {
            name: 'HVAC reduction',
            value: 15,
            type: 'reduction'
        },
        {
            name: 'Others reduction',
            value: 10,
            type: 'reduction'
        },
        {
            name: 'Equ. Ten. reduction',
            value: 5,
            type: 'reduction'
        },
        {
            name: 'Lighting reduction',
            value: 10,
            type: 'reduction'
        },
    ];
    var config = {
        appendPadding: 10,
        data: data,
        angleField: 'value',
        colorField: 'name',
        color: ({ name }) => {
            let splitString = name.split(' ')
            if(splitString[splitString.length-1] === 'reduction') {
                let original = parseInt('3ac17e', 16);
                let noise = Math.round(Math.random() * 50 + (Math.random() * 5));
                let newColor = (original + noise).toString(16);
                return '#'.concat(newColor);    
            }
            else {
                let original = parseInt('f46d52', 16);
                let noise = Math.round(Math.random() * 50 + (Math.random() * 5));
                let newColor = (original + noise).toString(16);
                return '#'.concat(newColor);
            }
        },
        radius: 0.6,
        legend: false,
        label: {
            type: 'outer',
            content: '{name}',
        },
        interactions: [{ type: 'pie-legend-active' }, { type: 'element-active' }],
    };
    return <><h3>Energy carbon summary (B)</h3><Pie {...config}/></>;
};
export default EnergyCarbonPie;