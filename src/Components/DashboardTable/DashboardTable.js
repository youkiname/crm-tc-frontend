import React from 'react';
import { Row, Table, Tabs, Radio, Col, DatePicker, Typography, Divider } from "antd";
import { apiController } from "../../api/api";
import { BasicColumnPlot } from "../BasicColumnPlot/BasicColumnPlot";
const { Text } = Typography


const { RangePicker } = DatePicker;
const { TabPane } = Tabs;

const transactionsColumns = [
    {
        title: '№',
        dataIndex: 'shop',
        key: 'shop',
        render: shop => {
            return (
                <img src={shop.avatar_link}></img >
            )
        }
    },
    {
        title: 'Последние транзакции',
        dataIndex: 'shop',
        key: 'shop',
        render: shop => {
            return (
                <div>{shop?.name}</div>
            )
        }

    },
    {
        title: 'Сумма',
        dataIndex: 'amount',
        key: 'amount',
    }
]



const DashboardTable = () => {
    const [data, setData] = React.useState([])
    React.useEffect(() => {
        apiController.getLastTransaction(7).then(res => setData(res.data))
    }, [])

    return (
        <Row style={{ width: '100%' }} gutter={60} align={"top"}>
            <Col span={16}>
                <Tabs defaultActiveKey="1">
                    <TabPane tab="Посетители" key="1">
                        <Row align="middle">
                            <Col span={16}>
                                <Radio.Group defaultValue="week" style={{ margin: 15 }}>
                                    <Radio.Button value="week">Неделя</Radio.Button>
                                    <Radio.Button value="month">Месяц</Radio.Button>
                                    <Radio.Button value="year">Год</Radio.Button>
                                </Radio.Group>
                            </Col>
                            <Col span={8}>
                                <RangePicker />
                            </Col>
                        </Row>
                        <BasicColumnPlot />
                    </TabPane>
                    <TabPane tab="Средняя выручка" key="2">
                        <Row align="middle">
                            <Col span={16}>
                                <Radio.Group defaultValue="week" style={{ margin: 15 }}>
                                    <Radio.Button value="week">Неделя</Radio.Button>
                                    <Radio.Button value="month">Месяц</Radio.Button>
                                    <Radio.Button value="year">Год</Radio.Button>
                                </Radio.Group>
                            </Col>
                            <Col span={8}>
                                <RangePicker />
                            </Col>
                        </Row>
                        <BasicColumnPlot />
                    </TabPane>
                </Tabs>
            </Col>
            <Col span={8} >
                <Text>Последние транзакции</Text>
                <Divider />
                <Table pagination={false} showHeader={false} columns={transactionsColumns}
                    dataSource={data} />
            </Col>
        </Row>
    );
};

export { DashboardTable };
