import React from 'react';
import { Divider, Radio, Table, Typography } from "antd";
import { apiController } from "../../api/api";

const { Title } = Typography

const columns = [
    {
        title: 'Арендатор',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Выручка',
        dataIndex: 'income_per_week',
        key: 'income_per_week',
    },
];

const RevenueTenant = () => {
    const [data, setData] = React.useState([])
    React.useEffect(() => {
        apiController.getShopsIncomeStatistics().then(res => setData(res.data))
    }, [])
    return (
        <div style={{ width: '100%' }}>
            <Title level={5}>Выручка по арендаторам</Title>
            <Radio.Group defaultValue="week" style={{ margin: 15 }}>
                <Radio.Button value="week">Неделя</Radio.Button>
                <Radio.Button value="month">Месяц</Radio.Button>
                <Radio.Button value="year">Год</Radio.Button>
            </Radio.Group>
            <Divider style={{ margin: '10px 0' }} />
            <Table size='small' pagination={{ defaultPageSize: 5 }} dataSource={data} columns={columns} />
        </div>
    );
};

export { RevenueTenant };
