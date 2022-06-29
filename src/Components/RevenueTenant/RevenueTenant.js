import React from 'react';
import {Divider, Radio, Table, Typography} from "antd";

const {Title} = Typography

const dataSource = [
    {
        key: '1',
        name: 'Арендатор 10',
        sum: 3223,
    },
    {
        key: '2',
        name: 'Арендатор 11',
        sum: 4234,
    },
    {
        key: '3',
        name: 'Арендатор 11',
        sum: 4234,
    },
    {
        key: '4',
        name: 'Арендатор 11',
        sum: 4234,
    },
    {
        key: '5',
        name: 'Арендатор 11',
        sum: 4234,
    },
    {
        key: '6',
        name: 'Арендатор 11',
        sum: 4234,
    },
    {
        key: '7',
        name: 'Арендатор 11',
        sum: 4234,
    },
];

const columns = [
    {
        title: 'Арендатор',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Выручка',
        dataIndex: 'sum',
        key: 'sum',
    },
];

const RevenueTenant = () => {
    return (
        <div style={{width: '100%'}}>
            <Title level={5}>Выручка по арендаторам</Title>
            <Radio.Group defaultValue="week" style={{margin: 15}}>
                <Radio.Button value="week">Неделя</Radio.Button>
                <Radio.Button value="month">Месяц</Radio.Button>
                <Radio.Button value="year">Год</Radio.Button>
            </Radio.Group>
            <Divider style={{margin: '10px 0'}} />
            <Table size='small' pagination={{defaultPageSize: 5}} dataSource={dataSource} columns={columns} />
        </div>
    );
};

export {RevenueTenant};
