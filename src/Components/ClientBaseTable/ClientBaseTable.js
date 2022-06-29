import React from 'react';
import {Typography, Col, Row, Button, Table} from "antd";
import Search from "antd/es/input/Search";
import {FileExcelOutlined, PlusOutlined} from "@ant-design/icons";

const {Title} = Typography

const dataSourse = [
    {
        key: 1,
        num: '243',
        fio: 'Иванов Иван Иванович',
        birth: '02.02.1987',
        purchase: '88',
        sum: '12 439₽',
    },
    {
        key: 2,
        num: '243',
        fio: 'Иванов Иван Иванович',
        birth: '02.02.1987',
        purchase: '88',
        sum: '12 439₽',
    },
    {
        key: 3,
        num: '243',
        fio: 'Иванов Иван Иванович',
        birth: '02.02.1987',
        purchase: '88',
        sum: '12 439₽',
    },
    {
        key: 4,
        num: '243',
        fio: 'Иванов Иван Иванович',
        birth: '02.02.1987',
        purchase: '88',
        sum: '12 439₽',
    },
    {
        key: 5,
        num: '243',
        fio: 'Иванов Иван Иванович',
        birth: '02.02.1987',
        purchase: '88',
        sum: '12 439₽',
    },
    {
        key: 6,
        num: '243',
        fio: 'Иванов Иван Иванович',
        birth: '02.02.1987',
        purchase: '88',
        sum: '12 439₽',
    },
    {
        key: 7,
        num: '243',
        fio: 'Иванов Иван Иванович',
        birth: '02.02.1987',
        purchase: '88',
        sum: '12 439₽',
    },
    {
        key: 8,
        num: '243',
        fio: 'Иванов Иван Иванович',
        birth: '02.02.1987',
        purchase: '88',
        sum: '12 439₽',
    },
    {
        key: 9,
        num: '243',
        fio: 'Иванов Иван Иванович',
        birth: '02.02.1987',
        purchase: '88',
        sum: '12 439₽',
    },
    {
        key: 10,
        num: '243',
        fio: 'Иванов Иван Иванович',
        birth: '02.02.1987',
        purchase: '88',
        sum: '12 439₽',
    },
    {
        key: 11,
        num: '243',
        fio: 'Иванов Иван Иванович',
        birth: '02.02.1987',
        purchase: '88',
        sum: '12 439₽',
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
        title: 'День рождения',
        dataIndex: 'birth',
        key: 'birth'
    },
    {
        title: 'Кол-во покупок',
        dataIndex: 'purchase',
        key: 'purchase'
    },
    {
        title: 'Сумма покупок',
        dataIndex: 'sum',
        key: 'sum'
    }
]

const ClientBaseTable = () => {
    return (
        <>
            <Row justify="space-between">
                <Col>
                    <Title level={5}>Клиентская база</Title>
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
                    {/*<Button type="primary" icon={<PlusOutlined />}>Добавить арендатора</Button>*/}
                </Col>
            </Row>

            <Table columns={columns} dataSource={dataSourse} style={{marginTop: 30}}/>
        </>
    );
};

export {ClientBaseTable};
