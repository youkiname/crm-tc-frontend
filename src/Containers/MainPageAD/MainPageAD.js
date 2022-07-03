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
import {useDispatch, useSelector} from "react-redux";
import {selectLoading} from "./selectors";
import {getVisitorCountIndicator} from "../../store/slices";


export const MainPageAD = () => {
    const loading = useSelector(selectLoading)
    const dispatch = useDispatch()

    React.useEffect(() => {
        dispatch(getVisitorCountIndicator())
    }, [dispatch])
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
                    <BlockModule fullWidth>
                        <DashboardTable/>
                    </BlockModule>
                </Col>
            </Row>
            <Row style={{marginTop: 24}} gutter={[24, 60]}>
                <Col span={12}>
                    <BlockModule fullWidth>
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
                    <BlockModule fullWidth style={{marginTop: 24}}>
                        <VisitorsDashboardModule/>
                    </BlockModule>
                </Col>
            </Row>
        </>
    );
};


