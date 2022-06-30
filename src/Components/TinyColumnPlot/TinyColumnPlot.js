import React from 'react';
import { TinyColumn } from '@ant-design/plots';

export const TinyColumnPlot = () => {
    const data = [];
    const config = {
        height: 64,
        width: 230,
        autoFit: false,
        data,
        tooltip: {
            customContent: function (x, data) {
                return `Средний чек ${x}: ${data[0]?.data?.y.toFixed(2)}`;
            },
        },
    };
    return <TinyColumn {...config} />;
};