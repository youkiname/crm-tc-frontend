import React from 'react';
import { HeaderPage } from "../../Components/HeaderPage/HeaderPage";
import styled from "styled-components";
import { Tabs } from "antd";
import {ArendatorRateTable} from "../../Components/ArendatorRateTable/ArendatorRateTable";

const { TabPane } = Tabs

const TableDiv = styled.div`
  padding: 24px;
  background-color: #fff;
`;

export const ArendatorRate = () => {
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
                        <ArendatorRateTable />
                    </TabPane>

                </Tabs>
            </TableDiv>
        </>
    );
};

