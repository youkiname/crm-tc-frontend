import React from 'react';
import {TinyPlot} from "../TinyPlot/TinyPlot";
import {Divider, Statistic} from "antd";
import {CaretUpOutlined} from "@ant-design/icons";
import {Typography} from "antd";

const {Text} = Typography

const VisitorsCountIndicator = () => {
    return (
        <div>
            <Statistic title="Посетители за месяц" value={'8 846'} />
            <TinyPlot />
            <Divider style={{margin: '8px 0'}} />
            <div className="total-sales-ind__row">
                <Text>Посетители сегодня 1 256</Text>
                <CaretUpOutlined style={{color: '#52c41a'}} />
            </div>
        </div>
    );
};

export {VisitorsCountIndicator};
