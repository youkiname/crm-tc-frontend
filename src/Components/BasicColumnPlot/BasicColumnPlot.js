import React from 'react';
import {Column} from "@ant-design/plots";

const BasicColumnPlot = () => {
    const data = [
        {
            type: '26.05',
            sales: 800,
        },
        {
            type: '27.05',
            sales: 1200,
        },
        {
            type: '28.05',
            sales: 610,
        },
        {
            type: '29.05',
            sales: 1450,
        },
        {
            type: '30.05',
            sales: 480,
        },
        {
            type: '31.05',
            sales: 380,
        },
        {
            type: '01.06',
            sales: 1900,
        },
        {
            type: '02.06',
            sales: 383,
        },
    ];
    const config = {
        data,
        xField: 'type',
        yField: 'sales',
        label: {
            position: 'middle',
            style: {
                fill: '#FFFFFF',
                opacity: 0.6,
            },
        },
        xAxis: {
            label: {
                autoHide: true,
                autoRotate: false,
            },
        },
        meta: {
            type: {
                alias: 'Количество посетителей',
            },
            sales: {
                alias: 'Посетители',
            },
        },
    };
    return <Column {...config} />;
};

export {BasicColumnPlot};
