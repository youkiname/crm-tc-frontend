import React from 'react';
import {Button, Table} from "antd";

const columns = [
    {
        title: 'Арендатор',
        dataIndex: 'arendator',
        key: 'arendator',
    },
    {
        title: 'Имя',
        dataIndex: 'name',
        key: 'name',
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
    },
    {
        title: 'Дата создания',
        dataIndex: 'date',
        key: 'date',
    },
    {
        title: 'Действия',
        dataIndex: 'action',
        key: 'action',
        render: () => (
            <>
                <Button type="link">Редактировать</Button>
                <Button danger type="link">Запустить</Button>
            </>
        )
    },
]

const dataSource = [
    {
        key: 1,
        arendator: 'Арендатор 1',
        name: 'Наименование рекламного баннера',
        comment: 'Комментарий к рекламному баннеру',
        status: 'Опубликовано',
        date: '12.12.2021',
    },
    {
        key: 6,
        arendator: 'Арендатор 1',
        name: 'Наименование рекламного баннера',
        comment: 'Комментарий к рекламному баннеру',
        status: 'Опубликовано',
        date: '12.12.2021',
    },
    {
        key: 5,
        arendator: 'Арендатор 1',
        name: 'Наименование рекламного баннера',
        comment: 'Комментарий к рекламному баннеру',
        status: 'Опубликовано',
        date: '12.12.2021',
    },
    {
        key: 4,
        arendator: 'Арендатор 1',
        name: 'Наименование рекламного баннера',
        comment: 'Комментарий к рекламному баннеру',
        status: 'Опубликовано',
        date: '12.12.2021',
    },
    {
        key: 3,
        arendator: 'Арендатор 1',
        name: 'Наименование рекламного баннера',
        comment: 'Комментарий к рекламному баннеру',
        status: 'Опубликовано',
        date: '12.12.2021',
    },
    {
        key: 2,
        arendator: 'Арендатор 1',
        name: 'Наименование рекламного баннера',
        comment: 'Комментарий к рекламному баннеру',
        status: 'Опубликовано',
        date: '12.12.2021',
    },
]

const AdsBannersTable = () => {
    return (
        <>
            <Table columns={columns} dataSource={dataSource} />
        </>
    );
};

export {AdsBannersTable};
