import React from 'react';
import { HeaderPage } from "../../Components/HeaderPage/HeaderPage";
import {
    Select,
    Button,
    Col,
    DatePicker,
    Divider,
    Form,
    Input,
    Row,
    Typography,
    InputNumber,
    Upload,
    message
} from "antd";
import styled from "styled-components";
import { InboxOutlined } from "@ant-design/icons";
import { apiController } from "../..//api";

const { Dragger } = Upload;
const { Text, Title } = Typography
const { RangePicker } = DatePicker
const { Option } = Select

const TableDiv = styled.div`
  padding: 24px;
  background-color: #fff;
`;

const AddBannerPage = () => {
    const [form] = Form.useForm();
    const [shops, setShops] = React.useState([])

    const [name, setName] = React.useState('')
    const [selectedShopId, setSelectedShopId] = React.useState()
    const [dateRange, setDateRange] = React.useState()
    const [gender, setGender] = React.useState('male')
    const [ageRange, setAgeRange] = React.useState('18-24')
    const [minBalance, setMinBalance] = React.useState()
    const [selectedImage, setSelectedImage] = React.useState(null)


    React.useEffect(() => {
        apiController.getShops().then(res => {
            setShops(res.data)
        })
    }, [])

    const propsUpload = {
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
            setSelectedImage(file)
            return false;
        }
    };

    const onSubmit = () => {
        console.log(name)
        console.log(selectedShopId)
        const [startDate, endDate] = dateRange;
        console.log(gender);
        console.log(ageRange);
        console.log(minBalance);
        console.log(selectedImage);
        let imageForm = new FormData();
        imageForm.append('image', selectedImage);

        apiController.saveNewBanner({
            name: name,
            shop_id: selectedShopId,
            start_date: startDate.toISOString().split('T')[0],
            end_date: endDate.toISOString().split('T')[0],
            min_age: ageRange.split('-')[0],
            max_age: ageRange.split('-')[1],
            min_balance: minBalance,
        }, imageForm);
    }

    return (
        <>
            <div
                style={{ backgroundColor: "#FFF", marginTop: -48, marginBottom: 24, paddingBottom: 24, paddingLeft: 24 }}>
                <HeaderPage title="Создать рекламный баннер" />
                <Text>Для того, чтобы создать рекламный баннер вам потребуется картинка формата .png и размером 205х108
                    пикселей</Text>
            </div>

            <TableDiv style={{ marginTop: 24 }}>
                <Title level={5}>Данные для системы</Title>
                <Divider />
                <Form layout="vertical" form={form}>
                    <Row gutter={24}>
                        <Col span={8}>
                            <Form.Item label="Арендатор">
                                <Select value={selectedShopId} onChange={shopId => setSelectedShopId(shopId)} >
                                    {
                                        shops.map(shop => (
                                            <Option value={shop.id} key={shop.id}>{shop.name}</Option>
                                        ))
                                    }
                                </Select>
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item label="Наименование рекламного баннера">
                                <Input placeholder="Наименование" value={name} onChange={e => setName(e.target.value)} />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item label="Комментарий">
                                <Input placeholder="Комментарий" />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={8}>
                            <Form.Item label="Период публикации">
                                <RangePicker value={dateRange}
                                    onChange={dates => setDateRange(dates)} />
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>
            </TableDiv>


            <TableDiv style={{ marginTop: 24 }}>
                <Title level={5}>Аудитория</Title>
                <Divider />
                <Form layout="vertical" form={form}>
                    <Row gutter={24}>
                        <Col span={8}>
                            <Form.Item label="Пол">
                                <Select
                                    defaultValue="male"
                                    value={gender} onChange={e => setGender(e)}
                                >
                                    <Option value="male">Мужской</Option>
                                    <Option value="female">Женский</Option>
                                </Select>
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item label="Возраст">
                                <Select defaultValue="18-24" value={ageRange} onChange={e => setAgeRange(e)}>
                                    <Option value="18-24">18-24</Option>
                                    <Option value="25-30">25-30</Option>
                                    <Option value="31-35">31-35</Option>
                                    <Option value="36-40">36-40</Option>
                                    <Option value="41-45">41-45</Option>
                                    <Option value="46-50">46-50</Option>
                                    <Option value="51-55">51-55</Option>
                                    <Option value="56-60">56-60</Option>
                                </Select>
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item label="Баланс">
                                <InputNumber style={{ width: '100%' }} min={0} addonBefore="от" placeholder="1000"
                                    value={minBalance}
                                    onInput={e => setMinBalance(e)}
                                />
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>
            </TableDiv>

            <TableDiv style={{ marginTop: 24, paddingBottom: 24 }}>
                <Title level={5}>Рекламные материалы</Title>
                <Divider />
                <Row gutter={24}>
                    <Col span={12}>
                        <Dragger {...propsUpload}>
                            <p className="ant-upload-drag-icon">
                                <InboxOutlined />
                            </p>
                            <p className="ant-upload-text">Нажмите или перетащите сюда файлы для загрузки</p>
                        </Dragger>
                    </Col>
                    <Col span={12}>
                        <Title level={5}>Требования к изображению</Title>
                        <ul>
                            <li>
                                <Text>Разрешение изображения не должен превышать 205х108 пикселей</Text>
                            </li>
                            <li>
                                <Text>Размер файла не должен быть больше 0.5Мб</Text>
                            </li>
                            <li>
                                <Text>Текст на изображении не должен занимать более 25%</Text>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </TableDiv>

            <Row justify="center" style={{ marginTop: 24 }}>
                <Col>
                    <Button type="primary" onClick={onSubmit}>
                        Создать
                    </Button>
                </Col>
            </Row>
        </>
    );
};

export { AddBannerPage };
