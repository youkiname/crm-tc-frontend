import React from 'react';
import { Typography, Col, Row, Button, Table, Spin } from "antd";
import Search from "antd/es/input/Search";
import { FileExcelOutlined } from "@ant-design/icons";
import { CSV } from 'csv/csv';
import {apiController, shopsController} from "../../api";

const { Title } = Typography

const columns = [
    {
        title: 'Клиент',
        dataIndex: 'name',
        key: 'name'
    },
    {
        title: 'Арендатор',
        dataIndex: '',
        key: ''
    },
    {
        title: 'Информация',
        dataIndex: '',
        key: ''
    },
    {
        title: 'Сумма чека',
        dataIndex: 'purchases_sum',
        key: 'purchases_sum'
    },

]

export const CheckTable = () => {
    const [loading, setLoading] = React.useState(true)
    const [allCustomers, setAllCustomers] = React.useState([])
    const [searchedCustomers, setSearchedCustomers] = React.useState([])

    React.useEffect(() => {
        apiController.getCustomerStatistics().then(res => {
            setAllCustomers(res.data)
            setSearchedCustomers(res.data)
            setLoading(false)
        })

    }, [])

    const onSearch = (e) => {
        setLoading(true)
        const query = e
        function isIncludes(customer) {
            return customer.card_number.toLowerCase().includes(query) ||
                customer.name.toLowerCase().includes(query)
        }
        setSearchedCustomers(allCustomers.filter(isIncludes))
        setLoading(false)
    }

    const downloadExcel = () => {
        CSV.download(columns, searchedCustomers)
    }

    return (
        <>
            <Row justify="space-between">
                <Col>
                    <Title level={5}>Покупки</Title>
                </Col>
                {/*<Col style={{*/}
                {/*    display: 'flex',*/}
                {/*    gap: '16px'*/}
                {/*}}>*/}
                {/*    <Search*/}
                {/*        placeholder="Найти"*/}
                {/*        onSearch={onSearch}*/}
                {/*        style={{*/}
                {/*            width: 300,*/}
                {/*        }}*/}
                {/*    />*/}
                {/*    <Button icon={<FileExcelOutlined />}*/}
                {/*            onClick={downloadExcel}*/}
                {/*    >Выгрузить в Excel</Button>*/}
                {/*</Col>*/}
            </Row>
            <Spin spinning={loading}>
                <Table
                    rowKey="card_number"
                    locale={{ emptyText: 'Ничего не найдено' }}
                    columns={columns}
                    dataSource={searchedCustomers}
                    style={{ marginTop: 30 }} />
            </Spin>
        </>
    );
};

