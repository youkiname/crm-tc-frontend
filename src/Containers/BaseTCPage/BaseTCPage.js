import React from 'react';
import {HeaderPage} from "../../Components/HeaderPage/HeaderPage";
import styled from "styled-components";
import {Tabs} from "antd";
import {ClientBaseTable} from "../../Components/ClientBaseTable/ClientBaseTable";
import {ArendatorsBaseTable} from "../../Components/ArendatorsBaseTable/ArendatorsBaseTable";

const {TabPane} = Tabs

const TableDiv = styled.div`
  padding: 24px;
  background-color: #fff;
`;

const BaseTCPage = () => {
    return (
        <>
            <div style={{backgroundColor: "#FFF", marginTop: -48, marginBottom: 24}}>
                <HeaderPage title="База ТЦ"/>
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
                    <TabPane tab="Клиентская база" key="1">
                        <ClientBaseTable />
                    </TabPane>
                    <TabPane tab="База арендаторов" key="2">
                        <ArendatorsBaseTable />
                    </TabPane>
                </Tabs>
            </TableDiv>
        </>
    );
};

export {BaseTCPage};
