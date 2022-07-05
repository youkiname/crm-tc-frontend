import React from 'react';
import { Typography, Col, Row, Button, Table, Spin } from "antd";
import Search from "antd/es/input/Search";
import { FileExcelOutlined } from "@ant-design/icons";
import { apiController } from "../../api";

const { Title } = Typography

const columns = [
    {
        title: 'Номер карты',
        dataIndex: 'card_number',
        key: 'card_number'
    },
    {
        title: 'Фамилия Имя Отчество',
        dataIndex: 'name',
        key: 'name'
    },
    {
        title: 'День рождения',
        dataIndex: 'birth_date',
        key: 'birth_date'
    },
    {
        title: 'Кол-во покупок',
        dataIndex: 'purchases_amount',
        key: 'purchases_amount'
    },
    {
        title: 'Сумма покупок',
        dataIndex: 'purchases_sum',
        key: 'purchases_sum'
    }
]

const ClientBaseTable = () => {
    const [loading, setLoading] = React.useState(true)
    const [data, setData] = React.useState([])
    React.useEffect(() => {
        apiController.getCustomerStatistics().then(res => {
            setData(res.data)
            setLoading(false)
        })
    }, [])
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
                        onSearch={() => { }}
                        style={{
                            width: 300,
                        }}
                    />
                    <Button icon={<FileExcelOutlined />}>Выгрузить в Excel</Button>
                    {/*<Button type="primary" icon={<PlusOutlined />}>Добавить арендатора</Button>*/}
                </Col>
            </Row>
            <Spin spinning={loading}>
                <Table columns={columns} dataSource={data} style={{ marginTop: 30 }} />
            </Spin>
        </>
    );
};

export { ClientBaseTable };
