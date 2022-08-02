import React from 'react';
import { HeaderPage } from "../../Components/HeaderPage/HeaderPage";
import styled from "styled-components";
import { Tabs } from "antd";
import { useSearchParams } from 'react-router-dom';
import { ClientBaseTable } from "../../Components/ClientBaseTable/ClientBaseTable";
import { ArendatorsBaseTable } from "../../Components/ArendatorsBaseTable/ArendatorsBaseTable";

const { TabPane } = Tabs

const TableDiv = styled.div`
  padding: 24px;
  background-color: #fff;
`;

const BaseTCPage = () => {
    const [queryParams, setQueryParams] = useSearchParams();
    const [activeTab, setActiveTab] = React.useState(queryParams.get('active_tab'))
    return (
        <>
            <div style={{ backgroundColor: "#FFF", marginTop: -48, marginBottom: 24 }}>
                <HeaderPage title="База ТЦ" />
            </div>

            <TableDiv>
                <Tabs
                    defaultActiveKey={activeTab}
                    size="large"
                    centered
                    style={{
                        marginBottom: 32,
                    }}
                >
                    <TabPane tab="Клиентская база" key="clients">
                        <ClientBaseTable />
                    </TabPane>
                    <TabPane tab="База арендаторов" key="arendators">
                        <ArendatorsBaseTable />
                    </TabPane>
                </Tabs>
            </TableDiv>
        </>
    );
};

export { BaseTCPage };
