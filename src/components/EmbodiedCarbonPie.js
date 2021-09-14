import React from 'react';
import { Pie } from '@ant-design/charts';
import { useSelector, useDispatch } from 'react-redux'

const EmbodiedCarbonPie = () => {
    // reductions
    const DesignEmbSupStructureReduction = useSelector(state => state.DesignEmbSupStructureReduction);
    const DesignEmbSubStructureReduction = useSelector(state => state.DesignEmbSubStructureReduction);
    const DesignEmbServicesReduction = useSelector(state => state.DesignEmbServicesReduction);
    const DesignEmbEnvelopeReduction = useSelector(state => state.DesignEmbEnvelopeReduction);
    const DesignEmbIntFinishesReduction = useSelector(state => state.DesignEmbIntFinishesReduction);
    
    // embodied carbon

    const DesignEmbSupStructure = useSelector(state => state.DesignEmbSupStructure);
    const DesignEmbSubStructure = useSelector(state => state.DesignEmbSubStructure);
    const DesignEmbServices = useSelector(state => state.DesignEmbServices);
    const DesignEmbEnvelope = useSelector(state => state.DesignEmbEnvelope);
    const DesignEmbIntFinishes = useSelector(state => state.DesignEmbIntFinishes);

    var data = [
        {
            name: 'Sup structure reduction',
            value: DesignEmbSupStructureReduction,
        },
        {
            name: 'Substructure reduction',
            value: DesignEmbSubStructureReduction,
        },
        {
            name: 'Int. finishes reduction',
            value: DesignEmbIntFinishesReduction,
        },
        {
            name: 'Services reduction',
            value: DesignEmbServicesReduction,
        },
        {
            name: 'Envelope reduction',
            value: DesignEmbEnvelopeReduction,
        },
        {
            name: 'Int. finishes',
            value: DesignEmbIntFinishes,
        },
        {
            name: 'Envelope',
            value: DesignEmbEnvelope,
        },
        {
            name: 'Services',
            value: DesignEmbServices,
        },
        {
            name: 'Substructure',
            value: DesignEmbSubStructure,
        },
        {
            name: 'Super structure',
            value: DesignEmbSupStructure,
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
    return <><h3>Embodied carbon summary (A)</h3><Pie {...config}/></>;
};
export default EmbodiedCarbonPie;