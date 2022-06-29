import React from 'react';
import { Pie } from '@ant-design/plots';

export const BasicDonutPlot = () => {
    const data = [
        {
            type: '18-24',
            value: 27,
        },
        {
            type: '25-30',
            value: 25,
        },
        {
            type: '31-35',
            value: 18,
        },
        {
            type: '36-40',
            value: 15,
        },
        {
            type: '41-45',
            value: 10,
        },
        {
            type: '46-50',
            value: 5,
        },
    ];
    const config = {
        appendPadding: 10,
        data,
        angleField: 'value',
        colorField: 'type',
        radius: 1,
        innerRadius: 0.6,
        label: {
            type: 'inner',
            offset: '-50%',
            content: '{value}',
            style: {
                textAlign: 'center',
                fontSize: 14,
            },
        },
        interactions: [
            {
                type: 'element-selected',
            },
            {
                type: 'element-active',
            },
        ],
        statistic: {
            title: false,
            content: {
                style: {
                    whiteSpace: 'pre-wrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                },
                content: ''
            },
        },
    };
    return <Pie {...config} />;
};