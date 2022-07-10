import React from 'react';
import { Button, Col, Row, Table, Typography, Spin } from "antd";
import Search from "antd/es/input/Search";
import { FileExcelOutlined, PlusOutlined } from "@ant-design/icons";
import { shopsController } from "../../api";
import { useNavigate } from "react-router-dom";
import { CSV } from 'csv/csv';

const { Title } = Typography

const columns = [
    {
        title: 'Номер',
        dataIndex: 'id',
        key: 'id'
    },
    {
        title: 'Фирма',
        dataIndex: 'name',
        key: 'name'
    },
    {
        title: 'Фамилия Имя Отчество',
        dataIndex: 'renter_name',
        key: 'renter_name'
    },
    {
        title: 'Кол-во сделок (неделя)',
        dataIndex: 'transactions_per_week',
        key: 'transactions_per_week'
    },
    {
        title: 'Кол-во сделок (месяц)',
        dataIndex: 'transactions_per_month',
        key: 'transactions_per_month'
    },
    {
        title: 'Выручка (неделя)',
        dataIndex: 'income_per_week',
        key: 'income_per_week'
    },
    {
        title: 'Выручка (месяц)',
        dataIndex: 'income_per_month',
        key: 'income_per_month'
    }
]

const ArendatorsBaseTable = () => {
    const navigate = useNavigate()
    const [loading, setLoading] = React.useState(true)
    const [allShops, setAllShops] = React.useState([])
    const [searchedShops, setSearchedShops] = React.useState([])

    React.useEffect(() => {
        shopsController.getShopsIncomeStatistics().then(res => {
            setAllShops(res.data)
            setSearchedShops(res.data)
            setLoading(false)
        })
    }, [])

    const onSearch = (e) => {
        setLoading(true)
        const query = e
        function isIncludes(shop) {
            return shop.renter_name.toLowerCase().includes(query) ||
                shop.name.toLowerCase().includes(query)
        }
        setSearchedShops(allShops.filter(isIncludes))
        setLoading(false)
    }

    const downloadExcel = () => {
        CSV.download(columns, searchedShops)
    }

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
                        onSearch={onSearch}
                        style={{
                            width: 300,
                        }}
                    />
                    <Button icon={<FileExcelOutlined />} onClick={downloadExcel}>Выгрузить в Excel</Button>
                    <Button type="primary" icon={<PlusOutlined />}
                        onClick={() => { navigate('/add-arendator') }}
                    >Добавить арендатора</Button>
                </Col>
            </Row>
            <Spin spinning={loading}>
                <Table columns={columns} dataSource={searchedShops} style={{ marginTop: 30 }} />
            </Spin>
        </>
    );
};

export { ArendatorsBaseTable };
