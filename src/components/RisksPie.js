import React from 'react';
import { Pie } from '@ant-design/charts';
import { useSelector, useDispatch } from 'react-redux'

const RisksPie = () => {
    // reductions
    const MajorRisksNotMitigatedFor2050 = useSelector(state => state.MajorRisksNotMitigatedFor2050);
    const MajorRisksNotMitigatedFor2070 = useSelector(state => state.MajorRisksNotMitigatedFor2070);
    

    var data = [
        {
            name: 'Risks not mitigated for 2050',
            value: MajorRisksNotMitigatedFor2050,
        },
        {
            name: 'Risks not mitigated for 2070',
            value: MajorRisksNotMitigatedFor2070,
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
    return <><Pie {...config}/></>;
};
export default RisksPie;