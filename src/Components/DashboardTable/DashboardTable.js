import React from 'react';
import {Row, Table, Tabs, Radio, Col, DatePicker, Typography, Divider} from "antd";
import {apiController} from "../../api/api";
import {Column} from "@ant-design/plots";

const {Text} = Typography


const {RangePicker} = DatePicker;
const {TabPane} = Tabs;

const transactionsColumns = [
    {
        title: '№',
        dataIndex: 'shop',
        key: 'shop',
        render: shop => {
            return (
                <img src={shop.avatar_link} alt="аватар"></img>
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
const radioButtons = [
    {
        type: "week",
        text: "Неделя"

    },
    {
        type: "month",
        text: "Месяц"
    },
    {
        type: "year",
        text: "Год"
    }
]

export const DashboardTable = () => {
    const [data, setData] = React.useState([])
    const [visitorTable, setVisitorTable] = React.useState({
        type: "week",
        dates: null,
        data: []
    })

    React.useEffect(() => {
        apiController.getLastTransaction(7).then(res => setData(res.data))
    }, [])

    const handleVisitorRadioButton = (event) => {
        const type = event.target.value
        if (type !== visitorTable.type) {
            setVisitorTable(prev => ({...prev, type}))
        }

    }
    const onCalendarChange = (dates) => {
        const [startDate, endDate] = dates;
        setVisitorTable(prev => ({
            ...prev,
            dates
        }))
        if (startDate || endDate) {
            apiController.getColumnPlot(visitorTable.dates).then(({data}) =>
                setVisitorTable({...visitorTable, data}))
        }
    }

    const visitorsColumns = visitorTable?.data?.map(item => {
        const date = new Date(item?.date)
        return {
            type: `${date.getDate()}.${date.getMonth()}`,
            sales: item?.amount

        }
    })
    return (
        <Row style={{width: '100%'}} gutter={60} align={"top"}>
            <Col span={16}>
                <Tabs defaultActiveKey="1">
                    <TabPane tab="Посетители" key="1">
                        <Row align="middle">
                            <Col span={16}>
                                <Radio.Group defaultValue="week" style={{margin: 15}}>
                                    {
                                        radioButtons.map(radio => (
                                            <Radio.Button
                                                key={radio.type}
                                                onClick={handleVisitorRadioButton}
                                                value={radio.type}>
                                                {radio.text}

                                            </Radio.Button>
                                        ))
                                    }
                                </Radio.Group>
                            </Col>
                            <Col span={8}>
                                <RangePicker value={visitorTable?.dates}
                                             onChange={onCalendarChange}/>
                            </Col>
                        </Row>
                        <Column data={visitorsColumns}
                                xField="type"
                                yField="sales"
                                label={{
                                    position: 'middle',
                                    style: {
                                        fill: '#FFFFFF',
                                        opacity: 0.6,
                                    },
                                }}
                                xAxis={{
                                    label: {
                                        autoHide: true,
                                        autoRotate: false,
                                    },
                                }}
                                meta={{
                                    type: {
                                        alias: 'Количество посетителей',
                                    },
                                    sales: {
                                        alias: 'Посетители',
                                    },
                                }}
                        />
                    </TabPane>
                    <TabPane tab="Средняя выручка" key="2">
                        <Row align="middle">
                            <Col span={16}>
                                <Radio.Group defaultValue="week" style={{margin: 15}}>
                                    {
                                        radioButtons.map(radio => (
                                            <Radio.Button
                                                key={radio.type}
                                                onClick={handleVisitorRadioButton}
                                                value={radio.type}>
                                                {radio.text}
                                            </Radio.Button>
                                        ))
                                    }
                                </Radio.Group>
                            </Col>
                            <Col span={8}>
                                <RangePicker/>
                            </Col>
                        </Row>
                        <Column data={visitorTable?.data.map(item => item.amount)}
                                xField="type"
                                yField="sales"
                                label={{
                                    position: 'middle',
                                    style: {
                                        fill: '#FFFFFF',
                                        opacity: 0.6,
                                    },
                                }}
                                xAxis={{
                                    label: {
                                        autoHide: true,
                                        autoRotate: false,
                                    },
                                }}
                                meta={{
                                    type: {
                                        alias: 'Количество посетителей',
                                    },
                                    sales: {
                                        alias: 'Посетители',
                                    },
                                }}
                        />
                    </TabPane>
                </Tabs>
            </Col>
            <Col span={8}>
                <Text>Последние транзакции</Text>
                <Divider/>
                <Table pagination={false} showHeader={false} columns={transactionsColumns}
                       dataSource={data}/>
            </Col>
        </Row>
    );
};

