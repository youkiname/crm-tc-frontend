import React from 'react';
import {Button, Input, InputNumber, Typography} from "antd";
import {SaveOutlined} from "@ant-design/icons";
import {apiController, cardLoyaltyController} from "../../api";

const {Title} = Typography
const {TextArea} = Input


const BonusCardEditItem = ({item}) => {
    const {name, created_at, updated_at, id, ...props} = item
    const [card, setCard] = React.useState(props)
    const handleCashback = (cashback) => setCard({...card, cashback})
    const handleThreshold = (threshold) => setCard({...card, threshold})

    const onSave = async () => {
        try {
            await cardLoyaltyController.updateCardStatus(id,card)
        } catch (e) {
            console.error(e)
        }
    }

    return (
        <div style={{display: 'flex', backgroundColor: '#fff', flexFlow: 'column', gap: '15px', padding: 24}}>
            <Title level={5}>
                {name} карта
            </Title>
            <InputNumber
                style={{display: 'block'}}
                value={card?.cashback}
                min={0}
                max={100}
                onChange={handleCashback}
                formatter={(value) => `${value}%`}
                parser={(value) => value.replace('%', '')}
            />
            <InputNumber min={0} value={card?.threshold} onChange={handleThreshold} placeholder="Требуемая сумма накоплений"
                         style={{width: '100%'}}/>
            <TextArea rows={4} maxLength={6}/>
            <Button onClick={onSave} type="primary" icon={<SaveOutlined/>}>Сохранить</Button>
        </div>
    );
};

export {BonusCardEditItem};
