import React from 'react';
import {TinyColumnPlot} from "../TinyColumnPlot/TinyColumnPlot";
import {Divider, Statistic} from "antd";
import {Typography} from "antd";

const {Text} = Typography

const AverageCheckIndicator = () => {
    return (
        <div>
            <Statistic title="Средний чек по ТЦ за месяц" value={'6 560₽'} />
            <TinyColumnPlot />
            <Divider style={{margin: '8px 0'}} />
            <div className="total-sales-ind__row">
                <Text>Средний чек за сегодня 2 433₽</Text>
            </div>
        </div>
    );
};

export {AverageCheckIndicator};
