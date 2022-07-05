import React from 'react';
import { Divider, Radio, Table, Typography } from "antd";
import { apiController } from "../../api";

const { Title } = Typography

const columns = [
    {
        title: 'Арендатор',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Выручка',
        dataIndex: 'income',
        key: 'income',
    },
];

const RevenueTenant = () => {
    const [shopStatistic, setShopStatistic] = React.useState([])
    const [data, setData] = React.useState([])
    React.useEffect(() => {
        apiController.getShopsIncomeStatistics().then(res => {
            setShopStatistic(res.data)
            setData(res.data.map((item) => {
                item['income'] = item['income_per_week']
                return item
            }))
        })
    }, [])

    const handleRadioButton = (moment) => {
        const type = moment.target.value
        let incomeField = 'income_per_week';
        if (type === "week") {
            incomeField = 'income_per_week';
        }
        if (type === "month") {
            incomeField = 'income_per_month';
        }
        if (type === "year") {
            incomeField = 'income_per_year';
        }
        apiController.getShopsIncomeStatistics().then(res => {
            setData(res.data.map((item) => {
                item['income'] = item[incomeField]
                return item
            }))
        })
    }
    return (
        <div style={{ width: '100%' }}>
            <Title level={5}>Выручка по арендаторам</Title>
            <Radio.Group defaultValue="week" style={{ margin: 15 }}>
                <Radio.Button value="week" onClick={handleRadioButton}>Неделя</Radio.Button>
                <Radio.Button value="month" onClick={handleRadioButton}>Месяц</Radio.Button>
                <Radio.Button value="year" onClick={handleRadioButton}>Год</Radio.Button>
            </Radio.Group>
            <Divider style={{ margin: '10px 0' }} />
            <Table size='small' pagination={{ defaultPageSize: 5 }} dataSource={data} columns={columns} />
        </div>
    );
};

export { RevenueTenant };
