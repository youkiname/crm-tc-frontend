import React from 'react';
import {Col, Divider, Radio, Row, Typography} from "antd";
import {BasicDonutPlot} from "./BasicDonutPlot";

const {Title, Text} = Typography

const VisitorsDashboardModule = () => {
    return (
        <div style={{width: '100%'}}>
            <Title level={5}>Посетители</Title>
            <Radio.Group defaultValue="week" style={{margin: 15}}>
                <Radio.Button value="week">Неделя</Radio.Button>
                <Radio.Button value="month">Месяц</Radio.Button>
                <Radio.Button value="year">Год</Radio.Button>
            </Radio.Group>
            <Divider style={{margin: '10px 0'}} />
            <BasicDonutPlot />
            <Row style={{marginTop: 35}} gutter={[20, 20]} >
                <Col>
                    <Text strong>Пол посетителей</Text>
                </Col>
                <Col>
                    <Text>Женщины – 67%</Text>
                </Col>
                <Col>
                    <Text>Мужчины – 33%</Text>
                </Col>
            </Row>
            <Row style={{marginTop: 15}} gutter={[20, 20]} >
                <Col>
                    <Text strong>Средний чек</Text>
                </Col>
                <Col>
                    <Text>6 560₽</Text>
                </Col>

            </Row>
        </div>
    );
};

export {VisitorsDashboardModule};
