import React from 'react';
import { HeaderPage } from "../../Components/HeaderPage/HeaderPage";
import styled from "styled-components";
import { BonusCardEditItem } from "./BonusCardEditItem";
import { apiController } from "../../api/api";

const CardsWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 43px 40px
`;

const BonusCardPage = () => {
    const [statuses, setStatuses] = React.useState([])
    React.useEffect(() => {
        apiController.getCardStatuses().then(res => setStatuses(res.data))
    }, [])
    return (
        <>
            <div style={{ backgroundColor: "#FFF", marginTop: -48, marginBottom: 24 }}>
                <HeaderPage title="Карты лояльности" />
            </div>

            <CardsWrapper>
                {statuses.map((i, idx) => <BonusCardEditItem item={i} key={idx} />)}
            </CardsWrapper>

        </>
    );
};

export { BonusCardPage };
