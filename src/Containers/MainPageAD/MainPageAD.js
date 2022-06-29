import React from 'react';
import {TotalSalesIndicator} from "../../Components/TotalSalesIndicator/TotalSalesIndicator";
import {BlockModule} from "../../Components/BlockModule/BlockModule";
import {Col, Row} from "antd";
import {VisitorsCountIndicator} from "../../Components/VisitorsCountIndicator/VisitorsCountIndicator";
import {AverageCheckIndicator} from "../../Components/AverageCheckIndicator/AverageCheckIndicator";
import {DashboardTable} from "../../Components/DashboardTable/DashboardTable";
import {RevenueTenant} from "../../Components/RevenueTenant/RevenueTenant";
import {AdsDashboardModule} from "../../Components/AdsDashboardModule/AdsDashboardModule";
import {VisitorsDashboardModule} from "../../Components/VisitorsDashboardModule/VisitorsDashboardModule";


export const MainPageAD = () => {
    return (
        <>
            <Row justify="start" gutter={[24, 16]}>
                <Col>
                    <BlockModule>
                        <TotalSalesIndicator/>
                    </BlockModule>
                </Col>
                <Col>
                    <BlockModule>
                        <VisitorsCountIndicator/>
                    </BlockModule>
                </Col>
                <Col>
                    <BlockModule>
                        <AverageCheckIndicator/>
                    </BlockModule>
                </Col>
            </Row>

            <Row style={{marginTop: 24}}>
                <Col span={24}>
                    <BlockModule fullWidth={true}>
                        <DashboardTable/>
                    </BlockModule>
                </Col>
            </Row>

            <Row style={{marginTop: 24}} gutter={[24, 60]}>
                <Col span={12}>
                    <BlockModule fullWidth={true}>
                        <RevenueTenant/>
                    </BlockModule>
                </Col>
                <Col span={12}>
                    <BlockModule style={{marginTop: 24}}>
                        <AdsDashboardModule/>
                    </BlockModule>
                </Col>
            </Row>

            <Row style={{marginTop: 24}} gutter={[24, 60]}>
                <Col span={12}>
                    <BlockModule fullWidth={true} style={{marginTop: 24}}>
                        <VisitorsDashboardModule/>
                    </BlockModule>
                </Col>
            </Row>
        </>
    );
};


