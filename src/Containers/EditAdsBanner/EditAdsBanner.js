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
    message, Checkbox
} from "antd";
import styled from "styled-components";
import { InboxOutlined } from "@ant-design/icons";
import { apiController } from "../../api";
import { useParams } from "react-router-dom";
import moment from "moment";

const { Dragger } = Upload;
const { Text, Title } = Typography
const { RangePicker } = DatePicker
const { Option } = Select

const TableDiv = styled.div`
  padding: 24px;
  backgroun1d-color: #fff;
`;

const EditAdsBanner = () => {
    const [form] = Form.useForm();
    const [name, setName] = React.useState('')
    const [dateRange, setDateRange] = React.useState()
    const [gender, setGender] = React.useState('male')
    const [ageRange, setAgeRange] = React.useState('18-24')
    const [minBalance, setMinBalance] = React.useState()
    const [selectedImage, setSelectedImage] = React.useState(null)
    const [active, setActive] = React.useState()
    let { id } = useParams();
    React.useEffect(() => {
        apiController.getBanner(id).then(res => {
            setName(res.data.name)
            setGender(res.data.gender)
            setAgeRange(res.data.ageRange)
            setMinBalance(res.data.min_balance)
            setDateRange([moment(res.data.start_date), moment(res.data.end_date)])
            setActive(res.data.is_active)
        })
    }, [id])

    const propsUpload = {
        name: 'image',
        multiple: false,
        onDrop(e) {
            console.log('Dropped files', e.dataTransfer.files);
        },
        async beforeUpload(file) {
            const isAllowed = file.type === 'image/jpeg' || file.type === 'image/png';
            if (!isAllowed) {
                await message.error('Вы можете загрузить только jpg или png файл.');
                return false;
            }
            setSelectedImage(file)
            return false;
        }
    };

    const onSubmit = () => {
        const [startDate, endDate] = dateRange;
        let imageForm = new FormData();
        imageForm.append('image', selectedImage);

        apiController.editBanner({
            name: name,
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
                <HeaderPage title="Редактировать рекламный баннер" />
            </div>

            <TableDiv style={{ marginTop: 24 }}>
                <Title level={5}>Данные для системы</Title>
                <Divider />
                <Form layout="vertical" form={form}>
                    <Row gutter={24}>

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
                            <Col span={16}>
                                <Checkbox checked={active} onChange={e => setActive(e)}> Активен</Checkbox>
                            </Col>
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
                        Редактировать
                    </Button>
                </Col>
            </Row>
        </>
    );
};

export { EditAdsBanner };
