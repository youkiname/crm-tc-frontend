import React from 'react';
import {Divider, Statistic, Typography} from "antd";
import '../../Containers/MainPageAD/MainPageAd.css'
import {CaretDownFilled, CaretUpOutlined} from "@ant-design/icons";

const {Text} = Typography

const TotalSalesIndicator = () => {
    return (
        <div>
            <Statistic title="Всего продаж" value={'126 560₽'} />
            <div className="total-sales-ind__row">
                <Text>В прошлом месяце 12%</Text>
                <CaretUpOutlined style={{color: '#52c41a'}} />
            </div>
            <div className="total-sales-ind__row">
                <Text>Год назад 9%</Text>
                <CaretDownFilled style={{color: '#eb2f96'}} />
            </div>
            <Divider style={{margin: '8px 0'}} />
            <div className="total-sales-ind__row">
                <Text>Продажи за сегодня 23 234₽</Text>
            </div>
        </div>
    );
};

export {TotalSalesIndicator};
