import React from 'react';
import {Typography, Divider, Radio, Table, Badge} from "antd";

const {Title} = Typography

const dataSource = [
    {
        key: '1',
        name: 'Арендатор 10',
        arendator: 3223,
        comment: 'Комментарий',
        status: 'Запущено'
    },
    {
        key: '2',
        name: 'Арендатор 10',
        arendator: 3223,
        comment: 'Комментарий',
        status: 'Запущено'
    },
    {
        key: '3',
        name: 'Арендатор 10',
        arendator: 3223,
        comment: 'Комментарий',
        status: 'Запущено'
    },
    {
        key: '4',
        name: 'Арендатор 10',
        arendator: 3223,
        comment: 'Комментарий',
        status: 'Запущено'
    },
    {
        key: '5',
        name: 'Арендатор 10',
        arendator: 3223,
        comment: 'Комментарий',
        status: 'Запущено'
    },
    {
        key: '6',
        name: 'Арендатор 10',
        arendator: 3223,
        comment: 'Комментарий',
        status: 'Запущено'
    },
    {
        key: '7',
        name: 'Арендатор 10',
        arendator: 3223,
        comment: 'Комментарий',
        status: 'Запущено'
    },
];

const columns = [
    {
        title: 'Наименование',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Арендатор',
        dataIndex: 'arendator',
        key: 'arendator',
    },
    {
        title: 'Комментарий',
        dataIndex: 'comment',
        key: 'comment',
    },
    {
        title: 'Статус',
        dataIndex: 'status',
        key: 'status',
        render: text => <Badge status="success" text={text} />
    },
];

const AdsDashboardModule = () => {
    return (
        <div style={{width: '100%'}}>
            <Title level={5}>Реклама</Title>
            <Divider style={{margin: '10px 0'}} />
            <Table size='small' pagination={{defaultPageSize: 5}} dataSource={dataSource} columns={columns} />
        </div>
    );
};

export {AdsDashboardModule};
