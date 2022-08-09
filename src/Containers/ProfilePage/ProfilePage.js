import React from 'react';
import { HeaderPage } from "../../Components/HeaderPage/HeaderPage";
import styled from "styled-components";
import { Button, Col, Form, Input, Row, Select, message, Spin, Upload, Image } from "antd";
import { setGlobalState } from '../../GlobalState';
import { authController } from "../../api";
import { apiController } from "../../api";
import { UploadOutlined } from "@ant-design/icons";

const { Option } = Select

const TableDiv = styled.div`
  padding: 24px;
  background-color: #fff;
`;

const ProfilePage = () => {
    const [loading, setLoading] = React.useState(true);
    const [form] = Form.useForm()
    const [currentUser, setCurrentUser] = React.useState({ shopping_center: {} })
    const [currentLogoLink, setCurrentLogoLink] = React.useState()
    const [cities, setCities] = React.useState([])
    const [cityId, setCityId] = React.useState()
    const [logo, setLogo] = React.useState(null)
    const [avatar, setAvatar] = React.useState(null)

    const propsAvatarUpload = {
        name: 'image',
        multiple: false,
        onDrop(e) {
            console.log('Dropped files', e.dataTransfer.files);
        },
        beforeUpload(file) {
            const isAllowed = file.type === 'image/jpeg' || file.type === 'image/png';
            if (!isAllowed) {
                message.error('Вы можете загрузить только jpg или png файл.');
                return false;
            }
            setAvatar(file)
            return false;
        }
    };

    const propsLogoUpload = {
        name: 'image',
        multiple: false,
        onDrop(e) {
            console.log('Dropped files', e.dataTransfer.files);
        },
        beforeUpload(file) {
            const isAllowed = file.type === 'image/jpeg' || file.type === 'image/png';
            if (!isAllowed) {
                message.error('Вы можете загрузить только jpg или png файл.');
                return false;
            }
            setLogo(file)
            return false;
        }
    };
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
            const user = res.data;
            const shoppingCenter = user.shopping_center
            form.setFieldsValue({
                shopping_center_name: shoppingCenter.name,
                fio: user.full_name,
                phone: user.mobile,
                city: shoppingCenter.city.id,
                address: shoppingCenter.address,
                description: shoppingCenter.description,

            })
            setCurrentUser(res.data)
            setCityId(res.data.shopping_center.city.id)
            setCurrentLogoLink(res.data.shopping_center.avatar_link)
            setLoading(false)
        })
    }, [form])

    const onSubmit = () => {
        let imageForm = new FormData();
        imageForm.append('logo', logo);
        imageForm.append('avatar', avatar);
        setLoading(true)
        apiController.updateProfile({
            first_name: currentUser.full_name.split(' ')[0],
            last_name: currentUser.full_name.split(' ')[1],
            phone: currentUser.mobile,
            shopping_center_name: currentUser.shopping_center.name,
            address: currentUser.shopping_center.address,
            description: currentUser.shopping_center.description,
            city_id: cityId,

        }, imageForm).then(res => {
            setGlobalState('username', res.data.full_name)
            setGlobalState('avatarLink', res.data.avatar_link)
            setCurrentLogoLink(res.data.shopping_center.avatar_link)
            message.success('Данные успешно обновлены.');
            setLoading(false)
        })
    }


    return (
        <>
            <div style={{ backgroundColor: "#FFF", marginTop: -48, marginBottom: 24 }}>
                <HeaderPage title="Настройки профиля" />
            </div>
            <Spin spinning={loading}>

                <TableDiv>
                    <Form
                        form={form}
                        name="basic"
                        labelCol={{
                            span: 6,
                        }}
                        wrapperCol={{
                            span: 12,
                        }}
                        onFinish={onSubmit}
                        initialValues={{
                            phone: '+7',
                        }}
                    >

                        <Form.Item
                            label="Название организации"
                            name="shopping_center_name"
                            rules={[
                                {
                                    required: true,
                                    message: 'Введите Название организации',
                                },
                            ]}>
                            <Input placeholder="ООО “Иванов”"
                                onChange={e => setShoppingCenterData(e.target.value, 'name')} />
                        </Form.Item>

                        <Form.Item
                            label="Руководитель"
                            name="fio"
                            rules={[
                                {
                                    required: true,
                                    message: 'Введите ФИО',
                                },
                            ]}>
                            <Input placeholder="Иван Иванов Иванович" value={currentUser.full_name} onChange={e => setUserData(e.target.value, 'full_name')} />
                        </Form.Item>

                        <Form.Item
                            label="Телефон для связи"
                            name="phone"
                            rules={[
                                {
                                    required: true,
                                    pattern: new RegExp("^[\+]?[1-9]{1}[0-9]{10,10}$"),
                                    message: "Неверный номер телефона"
                                },
                            ]}
                        >
                            <Input
                                placeholder="+7 999 999 99 99"
                                maxLength={12}
                                        value={currentUser.mobile}
                                onChange={e => setUserData(e.target.value, 'mobile')} />
                        </Form.Item>

                        <Form.Item
                            label="Аватарка"
                            name="avatar"
                        >
                            <Upload {...propsAvatarUpload}>
                                <Button icon={<UploadOutlined />}>Изменить аватарку</Button>
                            </Upload>
                        </Form.Item>

                        <Form.Item
                            label="Логотип"
                            name="logo"
                        >
                            <Upload {...propsLogoUpload}>
                                <Button icon={<UploadOutlined />}>Изменить логотип</Button>
                            </Upload>
                            <Image
                                width={150}
                                src={currentLogoLink}
                            />
                        </Form.Item>

                        <Form.Item
                            label="Город"
                            name="city"
                            rules={[
                                {
                                    required: true,
                                    message: 'Выберите город',
                                },
                            ]}>
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

                        <Form.Item
                            label="Адрес"
                            name="address"
                            rules={[
                                {
                                    required: true,
                                    message: 'Введите адрес',
                                },
                            ]}>
                            <Input placeholder="г. Москва, ул. Ленина, 123, корп. 2"
                                value={currentUser.shopping_center.address}
                                onChange={e => setShoppingCenterData(e.target.value, 'address')} />
                        </Form.Item>

                        <Form.Item
                            label="Описание"
                            name="description"
                        >
                            <Input.TextArea rows={4}
                                value={currentUser.shopping_center.description}
                                onChange={e => setShoppingCenterData(e.target.value, 'description')}
                            />
                        </Form.Item>

                        <Row justify="center">
                            <Col span={24}>
                                <Form.Item style={{ margin: '0 auto' }}>
                                    <Button type="primary" htmlType="submit"
                                    >
                                        Сохранить
                                    </Button>
                                </Form.Item>
                            </Col>
                        </Row>

                    </Form>
                </TableDiv>
            </Spin>
        </>
    );
};

export { ProfilePage };
