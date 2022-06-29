import React from 'react';
import {HeaderPage} from "../../Components/HeaderPage/HeaderPage";
import styled from "styled-components";
import {Button, Col, Form, Input, Row, Select, Upload} from "antd";
import {UploadOutlined} from "@ant-design/icons";
import {useAddArendator} from "../../Components/hooks/useAddArendator/useAddArendator";

const {Option} = Select

const TableDiv = styled.div`
  padding: 24px;
  background-color: #fff;
`;

const ProfilePage = () => {

    const {propsForLogo} = useAddArendator()

    return (
        <>
            <div style={{backgroundColor: "#FFF", marginTop: -48, marginBottom: 24}}>
                <HeaderPage title="Настройки профиля"/>
            </div>

            <TableDiv>
                <Form
                    name="basic"
                    labelCol={{
                        span: 6,
                    }}
                    wrapperCol={{
                        span: 12,
                    }}
                    onFinish={() => {
                    }}
                    onFinishFailed={() => {
                    }}
                >

                    <Form.Item
                        label="Название организации"
                        name="organizationName"
                        rules={[
                            {
                                required: true,
                                message: 'Введите название организации',
                            },
                        ]}
                    >
                        <Input placeholder="ООО “Иванов”"/>
                    </Form.Item>

                    <Form.Item
                        label="Руководитель"
                        name="director"
                        rules={[
                            {
                                required: true,
                                message: 'Введите ФИО руководителя',
                            },
                        ]}
                    >
                        <Input placeholder="Иванов Иван Иванович"/>
                    </Form.Item>

                    <Form.Item
                        label="Телефон для связи"
                        name="phone"
                        rules={[
                            {
                                required: true,
                                message: 'Введите номер телефона для связи',
                            },
                        ]}
                    >
                        <Input placeholder="+7 999 999 99 99"/>
                    </Form.Item>

                    <Form.Item
                        label="Логотип"
                        name="logo"
                        rules={[
                            {
                                required: true,
                                message: 'Добавьте ваш логотип',
                            },
                        ]}
                    >
                        <Upload {...propsForLogo}>
                            <Button icon={<UploadOutlined/>}>Добавить логотип</Button>
                        </Upload>
                    </Form.Item>

                    <Form.Item
                        label="Город"
                        name="city"
                    >
                        <Select
                            defaultValue="lucy"
                            style={{
                                width: 250,
                            }}
                        >
                            <Option value="jack">Москва</Option>
                            <Option value="lucy">Тверь</Option>
                            <Option value="Yiminghe">Санкт-Петербург</Option>
                            <Option value="Yiminghe">Воронеж</Option>
                            <Option value="Yiminghe">Волгоград</Option>
                        </Select>
                    </Form.Item>

                    <Form.Item
                        label="Адрес"
                        name="address"
                        rules={[
                            {
                                required: true,
                                message: 'Введите адрес',
                            },
                        ]}
                    >
                        <Input placeholder="г. Москва, ул. Ленина, 123, корп. 2"/>
                    </Form.Item>

                    <Form.Item
                        label="Описание"
                        name="description"
                        rules={[
                            {
                                required: true,
                                message: 'Введите описание торгового центра',
                            },
                        ]}
                    >
                        <Input.TextArea rows={4}/>
                    </Form.Item>

                    <Row justify="center">
                        <Col span={24}>
                            <Form.Item style={{margin: '0 auto'}}>
                                <Button type="primary" htmlType="submit">
                                    Сохранить
                                </Button>
                            </Form.Item>
                        </Col>
                    </Row>

                </Form>
            </TableDiv>
        </>
    );
};

export {ProfilePage};
