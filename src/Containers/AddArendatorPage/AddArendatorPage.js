import React from 'react';
import {HeaderPage} from "../../Components/HeaderPage/HeaderPage";
import styled from "styled-components";
import {Button, Col, Form, Input, Row, Select, Upload} from "antd";
import {useAddArendator} from "../../Components/hooks/useAddArendator/useAddArendator";
import {UploadOutlined} from "@ant-design/icons";

const {Option} = Select

const TableDiv = styled.div`
  padding: 24px;
  background-color: #fff;
`;


const AddArendatorPage = () => {

    const {propsForLogo} = useAddArendator()

    return (
        <>
            <div style={{backgroundColor: "#FFF", marginTop: -48, marginBottom: 24}}>
                <HeaderPage title="Добавить арендатора"/>
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
                        label="Категория"
                        name="category"
                    >
                        <Select
                            defaultValue="lucy"
                            style={{
                                width: 250,
                            }}
                        >
                            <Option value="jack">Электроника</Option>
                            <Option value="lucy">Одежда</Option>
                            <Option value="Yiminghe">Аксессуары</Option>
                            <Option value="Yiminghe">Косметика</Option>
                            <Option value="Yiminghe">Обувь</Option>
                        </Select>
                    </Form.Item>

                    <Form.Item
                        label="E-mail"
                        name="email"
                        rules={[
                            {
                                required: true,
                                message: 'Введите e-mail',
                            },
                        ]}
                    >
                        <Input placeholder="mail@mail.ru"/>
                    </Form.Item>

                    <Form.Item
                        label="Пароль"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Введите пароль',
                            },
                        ]}
                    >
                        <Input/>
                    </Form.Item>

                    <Row justify="center">
                        <Col span={24}>
                            <Form.Item style={{margin: '0 auto'}}>
                                <Button type="primary" htmlType="submit">
                                    Создать арендатора
                                </Button>
                            </Form.Item>
                        </Col>
                    </Row>

                </Form>
            </TableDiv>
        </>
    );
};

export {AddArendatorPage};
