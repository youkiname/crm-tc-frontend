import React from 'react';
import { HeaderPage } from "../../Components/HeaderPage/HeaderPage";
import { Spin } from "antd";
import styled from "styled-components";
import { BonusCardEditItem } from "./BonusCardEditItem";
import { cardLoyaltyController } from "../../api";

const CardsWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 43px 40px
`;

const BonusCardPage = () => {
    const [loading, setLoading] = React.useState(true)
    const [statuses, setStatuses] = React.useState([])
    React.useEffect(() => {
        cardLoyaltyController.getCardStatuses().then(res => {
            setStatuses(res.data)
            setLoading(false)
        })
    }, [])
    return (
        <>
            <div style={{ backgroundColor: "#FFF", marginTop: -48, marginBottom: 24 }}>
                <HeaderPage title="Карты лояльности" />
            </div>
            <Spin spinning={loading}>
                <CardsWrapper>
                    {statuses.map((i, idx) => <BonusCardEditItem item={i} key={idx} />)}
                </CardsWrapper>
            </Spin>
        </>
    );
};

export { BonusCardPage };
