import React from 'react';
import { HeaderPage } from "../../Components/HeaderPage/HeaderPage";
import {Button, Col, Form, Radio, Row, Select, Typography} from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { AdsBannersTable } from "../../Components/AdsBannersTable/AdsBannersTable";
import styled from "styled-components";
import {Link, useParams} from "react-router-dom";
import {Option} from "antd/es/mentions";
import {bannersController, shopsController} from "../../api";

const { Title } = Typography

const TableDiv = styled.div`
  padding: 24px;
  background-color: #fff;
`;

const AdsBannersPage = () => {

    const [ageRange, setAgeRange] = React.useState("18-24")
    const [data, setData] = React.useState([])
    const [selectType, setSelectType] = React.useState("all")

    // React.useEffect(() => {
    //     bannersController.getBanners().then(res => {
    //         setSelectType(res.data.gender)
    //         setData(res.data)
    //     })
    // }, [])
    return (
        <>
            <div style={{ backgroundColor: "#FFF", marginTop: -48, marginBottom: 24 }}>
                <HeaderPage title="Рекламные баннеры" />
            </div>
            <TableDiv>
                <Row style={{ width: '100%', marginBottom: 16 }} justify="space-between" align="middle">
                    <Col>
                        <Title level={5} style={{ margin: 0 }}>Баннеры</Title>
                    </Col>
                    <Col>
                        <Link to="/add-banner">
                            <Button type="primary" icon={<PlusOutlined />}>Создать</Button>
                        </Link>
                    </Col>
                </Row>
                <Row >
                    {/*<Col>*/}
                    {/*<Form.Item >*/}
                    {/*    <Select*/}
                    {/*        value={selectType}*/}
                    {/*        onChange={e => setSelectType(e)}*/}
                    {/*    >*/}
                    {/*        <Option value="all">Любой</Option>*/}
                    {/*        <Option value="male">Мужской</Option>*/}
                    {/*        <Option value="female">Женский</Option>*/}
                    {/*    </Select>*/}
                    {/*</Form.Item>*/}
                    {/*</Col>*/}

                <Col span={8}>
                    {/*<Form.Item >*/}
                    {/*    <Select defaultValue={ageRange}*/}
                    {/*            value={ageRange}*/}
                    {/*            onChange={e => setAgeRange(e)}*/}
                    {/*    >*/}
                    {/*        <Option value={ageRange} key={ageRange}>{ageRange}</Option>*/}
                    {/*        {*/}
                    {/*            ageRanges.map((age, idx) => (*/}
                    {/*                <Option value={age} key={idx}>{age}</Option>*/}
                    {/*            ))*/}
                    {/*        }*/}
                    {/*    </Select>*/}
                    {/*</Form.Item>*/}
                </Col>
                </Row>

                <Row >
                    <Col span={24}>
                        <AdsBannersTable
                        data={data}
                        selectType={selectType}
                        />
                    </Col>
                </Row>
            </TableDiv>
        </>
    );
};

export { AdsBannersPage };
