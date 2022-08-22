import React from 'react';
import { HeaderPage } from "../../Components/HeaderPage/HeaderPage";
import styled from "styled-components";
import { Tabs } from "antd";
import {ArendatorRateTable} from "../../Components/ArendatorRateTable/ArendatorRateTable";
import {CheckTable} from "../../Components/CheckTable/CheckTable";

const { TabPane } = Tabs

const TableDiv = styled.div`
  padding: 24px;
  background-color: #fff;
`;

export const CheckDisplay = () => {
    return (
        <>
            <div style={{ backgroundColor: "#FFF", marginTop: -48, marginBottom: 24 }}>
                <HeaderPage title="Рейтинг арендаторов" />
            </div>

            <TableDiv>
                <Tabs
                    defaultActiveKey="1"
                    size="large"
                    centered
                    style={{
                        marginBottom: 32,
                    }}
                >
                    <TabPane key="1">
                        <CheckTable />
                    </TabPane>

                </Tabs>
            </TableDiv>
        </>
    );
};

