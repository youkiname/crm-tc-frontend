import React from 'react';
import {Button, Col, Row, Table, Typography} from "antd";
import Search from "antd/es/input/Search";
import {FileExcelOutlined, PlusOutlined} from "@ant-design/icons";

const {Title} = Typography

const dataSource = [
    {
        key: '1',
        num: '234',
        fio: 'Примаков Андрей Андреевич',
        countWeek: '14',
        countMonth: '234',
        takeWeek: '12 234₽',
        takeMonth: '124 453₽',
    },
    {
        key: '2',
        num: '234',
        fio: 'Примаков Андрей Андреевич',
        countWeek: '14',
        countMonth: '234',
        takeWeek: '12 234₽',
        takeMonth: '124 453₽',
    },
    {
        key: '3',
        num: '234',
        fio: 'Примаков Андрей Андреевич',
        countWeek: '14',
        countMonth: '234',
        takeWeek: '12 234₽',
        takeMonth: '124 453₽',
    },
    {
        key: '4',
        num: '234',
        fio: 'Примаков Андрей Андреевич',
        countWeek: '14',
        countMonth: '234',
        takeWeek: '12 234₽',
        takeMonth: '124 453₽',
    },
    {
        key: '5',
        num: '234',
        fio: 'Примаков Андрей Андреевич',
        countWeek: '14',
        countMonth: '234',
        takeWeek: '12 234₽',
        takeMonth: '124 453₽',
    },
    {
        key: '6',
        num: '234',
        fio: 'Примаков Андрей Андреевич',
        countWeek: '14',
        countMonth: '234',
        takeWeek: '12 234₽',
        takeMonth: '124 453₽',
    },
    {
        key: '7',
        num: '234',
        fio: 'Примаков Андрей Андреевич',
        countWeek: '14',
        countMonth: '234',
        takeWeek: '12 234₽',
        takeMonth: '124 453₽',
    },
]

const columns = [
    {
        title: '#',
        dataIndex: 'num',
        key: 'num'
    },
    {
        title: 'Фамилия Имя Отчество',
        dataIndex: 'fio',
        key: 'fio'
    },
    {
        title: 'Кол-во сделок (неделя)',
        dataIndex: 'countWeek',
        key: 'countWeek'
    },
    {
        title: 'Кол-во сделок (месяц)',
        dataIndex: 'countMonth',
        key: 'countMonth'
    },
    {
        title: 'Выручка (неделя)',
        dataIndex: 'takeWeek',
        key: 'takeWeek'
    },
    {
        title: 'Выручка (месяц)',
        dataIndex: 'takeMonth',
        key: 'takeMonth'
    }
]

const ArendatorsBaseTable = () => {
    return (
        <>
            <Row justify="space-between">
                <Col>
                    <Title level={5}>База арендаторов</Title>
                </Col>
                <Col style={{
                    display: 'flex',
                    gap: '16px'
                }}>
                    <Search
                        placeholder="Найти"
                        onSearch={() => {}}
                        style={{
                            width: 300,
                        }}
                    />
                    <Button icon={<FileExcelOutlined />}>Выгрузить в Excel</Button>
                    <Button type="primary" icon={<PlusOutlined />}>Добавить арендатора</Button>
                </Col>
            </Row>
            <Table columns={columns} dataSource={dataSource} style={{marginTop: 30}} />
        </>
    );
};

export {ArendatorsBaseTable};
