import React from 'react';
import { Divider, Statistic, Typography } from "antd";
import '../../Containers/MainPageAD/MainPageAd.css'
import { CaretDownFilled, CaretUpOutlined } from "@ant-design/icons";
import { transactionsController } from "../../api";

const { Text } = Typography


const TotalSalesIndicator = () => {
    const [totalAmount, setTotalAmount] = React.useState()
    const [dayAmount, setDayAmount] = React.useState()
    const [salesRate, setSalesRate] = React.useState({})
    React.useEffect(() => {
        transactionsController.getTransactionsSum().then(res => setTotalAmount(res.data))
        transactionsController.getStatisticTransactionToday().then(res => setDayAmount(res.data))
        transactionsController.getSalesRate().then(res => setSalesRate(res.data))
    }, [])

    const getRateArrow = (rate) => {
        if (rate > 0) {
            return <CaretUpOutlined style={{ color: '#52c41a' }} />
        }
        return <CaretDownFilled style={{ color: '#eb2f96' }} />
    }

    return (
        <div>
            <Statistic title="Всего продаж" value={`${totalAmount?.amount} ₽`} />
            <div className="total-sales-ind__row">
                <Text>В прошлом месяце {salesRate.month_rate}%</Text>
                {getRateArrow(salesRate.month_rate)}
            </div>
            <div className="total-sales-ind__row">
                <Text>Год назад {salesRate.year_rate}%</Text>
                {getRateArrow(salesRate.year_rate)}
            </div>
            <Divider style={{ margin: '8px 0' }} />
            <div className="total-sales-ind__row">
                <Text>Продажи за сегодня {dayAmount?.amount}₽</Text>
            </div>
        </div>
    );
};

export { TotalSalesIndicator };
