import React from 'react';
import {Button, Input, InputNumber, Typography} from "antd";
import {BlockModule} from "../../Components/BlockModule/BlockModule";
import {SaveOutlined} from "@ant-design/icons";

const {Title} = Typography
const {TextArea} = Input



const BonusCardEditItem = ({item}) => {
    console.log(item)
    return (
        <div style={{display: 'flex', backgroundColor: '#fff', flexFlow: 'column', gap: '15px', padding: 24}}>
            <Title level={5}>
                {item.title} карта
            </Title>
            <InputNumber
                style={{display: 'block'}}
                value={+item.percent}
                min={0}
                max={100}
                formatter={(value) => `${value}%`}
                parser={(value) => value.replace('%', '')}
            />
            <InputNumber min={0} value={item.sum} placeholder="Требуемая сумма накоплений" style={{width: '100%'}}/>
            <TextArea rows={4} placeholder={item.desc} maxLength={6}/>
            <Button type="primary" icon={<SaveOutlined/>}>Сохранить</Button>
        </div>
    );
};

export {BonusCardEditItem};
