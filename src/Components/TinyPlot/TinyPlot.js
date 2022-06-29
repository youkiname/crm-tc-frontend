import React from 'react';
import {TinyArea} from '@ant-design/plots';

export const TinyPlot = () => {
    const data = [
        264, 417, 438, 887, 309, 397, 550, 575, 563, 430, 525, 592, 492, 467, 513, 546, 983, 340, 539, 243, 226, 192,
    ];
    const config = {
        height: 60,
        width: 230,
        autoFit: false,
        line: {
            color: '#975FE4',
        },
        areaStyle: {
            fill: '#975FE4',

        },
        data,
        smooth: true,

    };
    return <TinyArea {...config} />;
};