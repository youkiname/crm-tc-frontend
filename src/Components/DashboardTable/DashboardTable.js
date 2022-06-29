import React from 'react';
import {Row, Space, Table, Tabs, Tag, Radio, Col, DatePicker, Typography, Divider} from "antd";
import {BasicColumnPlot} from "../BasicColumnPlot/BasicColumnPlot";
const {Text} = Typography

const {RangePicker} = DatePicker;
const {TabPane} = Tabs;

const transactionsColumns = [
    {
        title: '№',
        dataIndex: 'num',
        key: 'num',
        render: text => <div className='transactions-table__round'>{text}</div>
    },
    {
        title: 'Последние транзакции',
        dataIndex: 'last',
        key: 'last',
    },
    {
        title: 'Сумма',
        dataIndex: 'sum',
        key: 'sum',
    }
]

const transactionsData = [
    {
        key: 1,
        num: 1,
        last: 'Ромашка',
        sum: '2134'
    },
    {
        key: 2,
        num: 2,
        last: 'Ромашка',
        sum: '2134'
    },
    {
        key: 3,
        num: 3,
        last: 'Ромашка',
        sum: '2134'
    },
    {
        key: 4,
        num: 4,
        last: 'Ромашка',
        sum: '2134'
    },
    {
        key: 5,
        num: 5,
        last: 'Ромашка',
        sum: '2134'
    },
    {
        key: 6,
        num: 6,
        last: 'Ромашка',
        sum: '2134'
    }
]

const DashboardTable = () => {
    return (
        <Row style={{width: '100%'}} gutter={60} align={"top"}>
            <Col span={16}>
                <Tabs defaultActiveKey="1">
                    <TabPane tab="Посетители" key="1">
                        <Row align="middle">
                            <Col span={16}>
                                <Radio.Group defaultValue="week" style={{margin: 15}}>
                                    <Radio.Button value="week">Неделя</Radio.Button>
                                    <Radio.Button value="month">Месяц</Radio.Button>
                                    <Radio.Button value="year">Год</Radio.Button>
                                </Radio.Group>
                            </Col>
                            <Col span={8}>
                                <RangePicker/>
                            </Col>
                        </Row>
                        <BasicColumnPlot/>
                    </TabPane>
                    <TabPane tab="Средняя выручка" key="2">
                        <Row align="middle">
                            <Col span={16}>
                                <Radio.Group defaultValue="week" style={{margin: 15}}>
                                    <Radio.Button value="week">Неделя</Radio.Button>
                                    <Radio.Button value="month">Месяц</Radio.Button>
                                    <Radio.Button value="year">Год</Radio.Button>
                                </Radio.Group>
                            </Col>
                            <Col span={8}>
                                <RangePicker/>
                            </Col>
                        </Row>
                        <BasicColumnPlot/>
                    </TabPane>
                </Tabs>
            </Col>
            <Col span={8} >
                <Text>Последние транзакции</Text>
                <Divider />
                <Table pagination={false} showHeader={false} columns={transactionsColumns}
                       dataSource={transactionsData}/>
            </Col>
        </Row>
    );
};

export {DashboardTable};
