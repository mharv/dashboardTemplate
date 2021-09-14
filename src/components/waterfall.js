import React from 'react';
import { Waterfall } from '@ant-design/charts';
import { useSelector, useDispatch } from 'react-redux'


const DemoWaterfall = () => {
    
  const SummaryEnergyDemandInOperation = useSelector(state => state.SummaryEnergyDemandInOperation);
  const SummaryOnSiteRenewables = useSelector(state => state.SummaryOnSiteRenewables);
  const SummaryGreenPower = useSelector(state => state.SummaryGreenPower);
  const SummaryEmbodiedCarbon = useSelector(state => state.SummaryEmbodiedCarbon);
  const SummaryOffsets = useSelector(state => state.SummaryOffsets);

    var data = [
        {
            type: 'Energy demand in operation',
            value: SummaryEnergyDemandInOperation,
        },
        {
            type: 'On-site renewables',
            value: SummaryOnSiteRenewables,
        },
        {
            type: 'Green power',
            value: SummaryGreenPower,
        },
        {
            type: 'Embodied Carbon',
            value: SummaryEmbodiedCarbon,
        },
        {
            type: 'Offsets',
            value: SummaryOffsets,
        },
    ];
    var formatter = function formatter(v) {
        return ''.concat(v, ' KgCO2/m2');
    };

    var setPrecision = function setPrecision(v) {
        return ''.concat(v.value.toFixed(1), ' KgCO2/m2');
    };
    // var annotations = [];
    // data.reduce(function (v, d) {
    //     annotations.push({
    //         type: 'text',
    //         position: function position() {
    //             var y = v + d.value / 2;
    //             return [d.quarter, y];
    //         },
    //         content: formatter(d.value),
    //         offsetY: '190',
    //         rotate: 'true',
    //         style: {
    //             fontSize: 14,
    //             stroke: '#666',
    //             fill: '#fff',
    //             lineWidth: 1,
    //             textAlign: 'center',
    //             verticalAlign: 'middle',
    //         },
    //     });
    //     return v + d.value;
    // }, 0);
    var config = {
        data: data,
        padding: 'auto',
        appendPadding: [20, 0, 0, 0],
        xField: 'type',
        yField: 'value',
        meta: {
            type: { alias: 'test' },
            value: {
                alias: 'total',
                min: 0,
                formatter: formatter,

            },
        },
        total: {
            label: 'Gap to zero',
            style: { fill: '#ADD8E6' },
        },
        labelMode: 'difference',
        label: {
            style: { fontSize: 9 },
            position: "top",
            autoHide: false,
            formatter: setPrecision,
        },

    };
    // return <><h3>Carbon summary</h3><Waterfall {...config} /></>;
    return <Waterfall {...config} />;
};
export default DemoWaterfall;