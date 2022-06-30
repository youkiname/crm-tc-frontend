import React from 'react';
import {Divider, Statistic} from "antd";
import {CaretUpOutlined} from "@ant-design/icons";
import {Typography} from "antd";
import {apiController} from "../../api/api";
import {TinyArea} from '@ant-design/plots';

const {Text} = Typography

const VisitorsCountIndicator = () => {

    const [data, setData] = React.useState({})
    const [day, setDay] = React.useState("")
    const [visitors, setVisitors] = React.useState([])

    React.useEffect(() => {
        apiController.getVisitorsCountIndicatorMounth().then(res => setData(res.data))
        apiController.getVisitorCountIndicatorToday().then(res => setDay(res.data))
        apiController.getStatisticUsersGraphMonth().then(res => setVisitors(res.data))

    }, [])
    const visitorAmounts = visitors.map(item => item?.amount)

    return (
        <div>
            <Statistic title="Посетители за месяц" value={data?.amount}/>
            <TinyArea
                height={60}
                width={230}
                smooth
                areaStyle={{fill: "#975FE4"}}
                line={{color: '#975FE4'}}
                autoFit={false}
                data={visitorAmounts}/>
            <Divider style={{margin: '8px 0'}}/>
            <div className="total-sales-ind__row">
                <Text>Посетители сегодня {day?.amount} </Text>
                <CaretUpOutlined style={{color: '#52c41a'}}/>
            </div>
        </div>
    );
};

export {VisitorsCountIndicator};
