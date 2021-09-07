import React from 'react';
import { Pie } from '@ant-design/charts';
const EmbodiedCarbonPie = () => {
    var data = [
        {
            name: 'Sup structure reduction',
            value: 27,
        },
        {
            name: 'Int. finishes',
            value: 25,
        },
        {
            name: 'Envelope',
            value: 18,
        },
        {
            name: 'Services',
            value: 15,
        },
        {
            name: 'Substructure',
            value: 10,
        },
        {
            name: 'Super structure',
            value: 5,
        },
        {
            name: 'Substructure reduction',
            value: 10,
        },
        {
            name: 'Int. finishes reduction',
            value: 5,
        },
        {
            name: 'Services reduction',
            value: 5,
        },
        {
            name: 'Envelope reduction',
            value: 5,
        },
    ];
    var config = {
        appendPadding: 10,
        data: data,
        angleField: 'value',
        colorField: 'name',
        color: ({ name }) => {
            let splitString = name.split(' ')
            if(splitString[splitString.length-1] == 'reduction') {
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
    return <><h3>Embodied carbon summary (A)</h3><Pie {...config}/></>;
};
export default EmbodiedCarbonPie;