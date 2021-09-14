import React from 'react';
import { Pie } from '@ant-design/charts';
import { useSelector, useDispatch } from 'react-redux'

const EnergyCarbonPie = () => {
    // reductions
    const DesignOpHvacReduction = useSelector(state => state.DesignOpHvacReduction);
    const DesignOpLightingReduction = useSelector(state => state.DesignOpLightingReduction);
    const DesignOpEquTenReduction = useSelector(state => state.DesignOpEquTenReduction);
    const DesignOpOthersReduction = useSelector(state => state.DesignOpOthersReduction);
    
    // embodied carbon
    const DesignOpHvac = useSelector(state => state.DesignOpHvac);
    const DesignOpLighting = useSelector(state => state.DesignOpLighting);
    const DesignOpEquTen = useSelector(state => state.DesignOpEquTen);
    const DesignOpOthers = useSelector(state => state.DesignOpOthers);

    var data = [
        {
            name: 'HVAC reduction',
            value: DesignOpHvacReduction,
            type: 'reduction'
        },
        {
            name: 'Others reduction',
            value: DesignOpOthersReduction,
            type: 'reduction'
        },
        {
            name: 'Equ. Ten. reduction',
            value: DesignOpEquTenReduction,
            type: 'reduction'
        },
        {
            name: 'Lighting reduction',
            value: DesignOpLightingReduction,
            type: 'reduction'
        },
        {
            name: 'Op. others',
            value: DesignOpOthers,
            type: 'increase'
        },
        {
            name: 'Op. Equ. Ten. Lighting',
            value: DesignOpLighting + DesignOpEquTen,
            type: 'increase'
        },
        {
            name: 'HVAC',
            value: DesignOpHvac,
            type: 'increase'
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