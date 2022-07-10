import React from 'react';
import { Row, Table, Tabs, Radio, Col, DatePicker, Typography, Divider } from "antd";
import { apiController, transactionsController, visitorsController } from "../..//api";
import { Column } from "@ant-design/plots";

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
                <img src={shop?.avatar_link} width={20} height={20} alt="ava"></img>
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
        text: "Неделя",
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

    const [averageTable, setAverageTable] = React.useState({
        type: "average",
        dates: [],
        data: []
    })
    const [visitorTable, setVisitorTable] = React.useState({
        type: "week",
        dates: [],
        data: []
    })
    const averageColumns = visitorTable?.data?.map(item => {
        const date = new Date(item?.date)
        return {
            type: `${date.getDate()}.${date.getMonth()}`,
            sales: item?.amount

        }
    })

    const onAverageChangeGraph = (dates) => {
        const [startDate, endDate] = dates;
        setAverageTable(prev => ({
            ...prev,
            dates
        }))
        if (startDate || endDate) {
            transactionsController.getTransactionsSumGraph(startDate?.format(), endDate?.format()).then(({ data }) =>
                setAverageTable({ ...averageTable, data }))
        }

    }

    React.useEffect(() => {
        transactionsController.getLastTransaction(7).then(res => setData(res.data))
        const current = new Date()
        const month = new Date(current.setDate(current.getDate() - 30))
        visitorsController.getVisitorsGraph(month).then(({ data }) =>
            setVisitorTable({ ...visitorTable, data }))
    }, [])
    const handleVisitorRadioButton = (event) => {
        const type = event.target.value
        const current = new Date()
        const week = new Date(current.setDate(current.getDate() - 7))
        const month = new Date(current.setDate(current.getDate() - 30))
        const year = new Date(current.setDate(current.getDate() - 365))

        if (type === "week") {
            visitorsController.getVisitorsGraph(week).then(({ data }) =>
                setVisitorTable({ ...visitorTable, data }))
        }
        if (type === "month") {
            visitorsController.getVisitorsGraph(month).then(({ data }) =>
                setVisitorTable({ ...visitorTable, data }))
        }
        if (type === "year") {
            visitorsController.getColumnPlnot(year).then(({ data }) =>
                setVisitorTable({ ...visitorTable, data }))
        }
        if (type !== visitorTable.type) {
            setVisitorTable(prev => ({ ...prev, type }))
        }

    }
    const handleAverageRadioButton = (moment) => {
        const type = moment.target.value
        const current = new Date()
        const week = new Date(current.setDate(current.getDate() - 7))
        const month = new Date(current.setDate(current.getDate() - 30))
        const year = new Date(current.setDate(current.getDate() - 365))

        if (type === "week") {
            transactionsController.getTransactionsSumGraph(week).then(({ data }) =>
                setVisitorTable({ ...visitorTable, data }))
        }
        if (type === "month") {
            transactionsController.getTransactionsSumGraph(month).then(({ data }) =>
                setVisitorTable({ ...visitorTable, data }))
        }
        if (type === "year") {
            transactionsController.getTransactionsSumGraph(year).then(({ data }) =>
                setVisitorTable({ ...visitorTable, data }))
        }
        if (type !== visitorTable.type) {
            setVisitorTable(prev => ({ ...prev, type }))
        }

    }
    const onCalendarChange = (dates) => {
        const [startDate, endDate] = dates;
        setVisitorTable(prev => ({
            ...prev,
            dates
        }))
        if (startDate || endDate) {
            visitorsController.getVisitorsGraph(startDate?.format(), endDate?.format()).then(({ data }) =>
                setVisitorTable({ ...visitorTable, data }))
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
        <Row style={{ width: '100%' }} gutter={60} align={"top"}>
            <Col span={16}>
                <Tabs defaultActiveKey="1" >
                    <TabPane tab="Посетители" defaultActiveKey="1" >
                        <Row align="middle">
                            <Col span={16}>
                                <Radio.Group defaultValue="week" style={{ margin: 15 }}>
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
                                    onChange={onCalendarChange} />
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
                                <Radio.Group defaultValue="graph" style={{ margin: 15 }}>
                                    {
                                        radioButtons.map(radio => (
                                            <Radio.Button
                                                key={radio.type}
                                                onClick={handleAverageRadioButton}
                                                value={radio.type}>
                                                {radio.text}
                                            </Radio.Button>
                                        ))
                                    }
                                </Radio.Group>
                            </Col>
                            <Col span={8}>
                                <RangePicker value={averageTable?.dates}
                                    onChange={onAverageChangeGraph} />
                            </Col>
                        </Row>
                        <Column data={averageColumns}
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
                                    alias: 'Выручка',
                                },
                            }}
                        />
                    </TabPane>
                </Tabs>
            </Col>
            <Col span={8}>
                <Text>Последние транзакции</Text>
                <Divider />
                <Table
                    locale={{ emptyText: 'Ничего не найдено' }}
                    pagination={false}
                    showHeader={false}
                    columns={transactionsColumns}
                    dataSource={data} />
            </Col>
        </Row>
    );
};

