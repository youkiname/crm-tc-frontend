import React from 'react';
import {HeaderPage} from "../../Components/HeaderPage/HeaderPage";
import styled from "styled-components";
import {BonusCardEditItem} from "./BonusCardEditItem";

const CardsWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 43px 40px
`;

const dataCards = [
    {
        title: 'Бронзовая',
        sum: 1233,
        percent: 12,
        desc: '',
        id: '1'
    },
    {
        title: 'Серебряная',
        sum: 1233,
        percent: 12,
        desc: '',
        id: '1'
    },
    {
        title: 'Золотая',
        sum: 1233,
        percent: 12,
        desc: '',
        id: '1'
    },
    {
        title: 'Платиновая',
        sum: 1233,
        percent: 12,
        desc: '',
        id: '1'
    },
    {
        title: 'VIP',
        sum: 1233,
        percent: 12,
        desc: '',
        id: '1'
    },
]

const BonusCardPage = () => {
    return (
        <>
            <div style={{backgroundColor: "#FFF", marginTop: -48, marginBottom: 24}}>
                <HeaderPage title="Карты лояльности"/>
            </div>

        <CardsWrapper>
            {dataCards.map((i, idx) => <BonusCardEditItem item={i} key={idx} />)}
        </CardsWrapper>

        </>
    );
};

export {BonusCardPage};
