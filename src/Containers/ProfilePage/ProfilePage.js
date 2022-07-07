import React from 'react';
import { HeaderPage } from "../../Components/HeaderPage/HeaderPage";
import styled from "styled-components";
import { Button, Col, Form, Input, Row, Select, Upload, message } from "antd";
import { authController } from "../../api";
import { apiController } from "../../api";

const { Option } = Select

const TableDiv = styled.div`
  padding: 24px;
  background-color: #fff;
`;

const ProfilePage = () => {
    const [currentUser, setCurrentUser] = React.useState({ shopping_center: {} })
    const [cities, setCities] = React.useState([])
    const [cityId, setCityId] = React.useState()

    const setUserData = (value, field) => {
        setCurrentUser({
            ...currentUser,
            [field]: value
        })
    }

    const setShoppingCenterData = (value, field) => {
        setCurrentUser({
            ...currentUser,
            shopping_center: { ...currentUser.shopping_center, [field]: value }
        })
    }

    React.useEffect(() => {
        apiController.getCities().then(res => {
            setCities(res.data)
        })
        authController.getMe().then(res => {
            setCurrentUser(res.data)
            setCityId(res.data.shopping_center.city.id)
        })
    }, [])

    const onSubmit = () => {
        apiController.updateProfile({
            first_name: currentUser.full_name.split(' ')[0],
            last_name: currentUser.full_name.split(' ')[1],
            phone: currentUser.mobile,
            shopping_center_name: currentUser.shopping_center.name,
            address: currentUser.shopping_center.address,
            description: currentUser.shopping_center.description,
            city_id: cityId,
        }).then(res => {
            localStorage.setItem('name', res.data.full_name)
            message.success('Данные успешно обновлены.');
        })
    }

    return (
        <>
            <div style={{ backgroundColor: "#FFF", marginTop: -48, marginBottom: 24 }}>
                <HeaderPage title="Настройки профиля" />
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

                    <Form.Item label="Название организации">
                        <Input placeholder="ООО “Иванов”"
                            value={currentUser.shopping_center.name}
                            onChange={e => setShoppingCenterData(e.target.value, 'name')} />
                    </Form.Item>

                    <Form.Item label="Руководитель">
                        <Input placeholder="Иван Иванов Иванович" value={currentUser.full_name} onChange={e => setUserData(e.target.value, 'full_name')} />
                    </Form.Item>

                    <Form.Item label="Телефон для связи" >
                        <Input placeholder="+7 999 999 99 99" value={currentUser.mobile} onChange={e => setUserData(e.target.value, 'mobile')} />
                    </Form.Item>

                    {/* <Form.Item
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
                            <Button icon={<UploadOutlined />}>Добавить логотип</Button>
                        </Upload>
                    </Form.Item> */}

                    <Form.Item label="Город">
                        <Select
                            style={{ width: 250 }}
                            value={cityId}
                            onChange={(e) => setCityId(e)}
                        >
                            {
                                cities.map(city => (
                                    <Option value={city.id} key={city.id}>{city.name}</Option>
                                ))
                            }
                        </Select>
                    </Form.Item>

                    <Form.Item label="Адрес">
                        <Input placeholder="г. Москва, ул. Ленина, 123, корп. 2"
                            value={currentUser.shopping_center.address}
                            onChange={e => setShoppingCenterData(e.target.value, 'address')} />
                    </Form.Item>

                    <Form.Item label="Описание">
                        <Input.TextArea rows={4}
                            value={currentUser.shopping_center.description}
                            onChange={e => setShoppingCenterData(e.target.value, 'description')}
                        />
                    </Form.Item>

                    <Row justify="center">
                        <Col span={24}>
                            <Form.Item style={{ margin: '0 auto' }}>
                                <Button type="primary" htmlType="submit"
                                    onClick={onSubmit}
                                >
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

export { ProfilePage };
