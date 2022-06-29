import React from 'react';
import {HeaderPage} from "../../Components/HeaderPage/HeaderPage";
import {
    Badge,
    Select,
    Button,
    Col,
    DatePicker,
    Descriptions,
    Divider,
    Form,
    Input,
    Row,
    Space,
    Typography,
    InputNumber,
    Upload,
    message
} from "antd";
import styled from "styled-components";
import {InboxOutlined} from "@ant-design/icons";

const {Dragger} = Upload;
const propsUpload = {
    name: 'file',
    multiple: true,
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',

    onChange(info) {
        const {status} = info.file;

        if (status !== 'uploading') {
            console.log(info.file, info.fileList);
        }

        if (status === 'done') {
            message.success(`${info.file.name} file uploaded successfully.`);
        } else if (status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
        }
    },

    onDrop(e) {
        console.log('Dropped files', e.dataTransfer.files);
    },
};

const {Text, Title} = Typography
const {RangePicker} = DatePicker
const {Option} = Select

const TableDiv = styled.div`
  padding: 24px;
  background-color: #fff;
`;

const AddBannerPage = () => {
    const [form] = Form.useForm();

    return (
        <>
            <div
                style={{backgroundColor: "#FFF", marginTop: -48, marginBottom: 24, paddingBottom: 24, paddingLeft: 24}}>
                <HeaderPage title="Создать рекламный баннер"/>
                <Text>Для того, чтобы создать рекламный баннер вам потребуется картинка формата .png и размером 205х108
                    пикселей</Text>
            </div>

            <TableDiv>
                <Title level={5}>Общая информация</Title>
                <Divider/>
                <Descriptions bordered>
                    <Descriptions.Item label="Наименование">Наименование</Descriptions.Item>
                    <Descriptions.Item label="Арендатор">Арендатор</Descriptions.Item>
                    <Descriptions.Item label="Дата создания">23.04.2022</Descriptions.Item>
                    <Descriptions.Item label="Статус публикации">
                        <Space direction="horizontal">
                            <Badge status="success" text="Опубликованно"/>
                            <Button type="primary" size="small" danger>Остановить</Button>
                        </Space>
                    </Descriptions.Item>
                    <Descriptions.Item span={2} label="Комментарий">
                        Comments
                    </Descriptions.Item>
                </Descriptions>
            </TableDiv>

            <TableDiv style={{marginTop: 24}}>
                <Title level={5}>Данные для системы</Title>
                <Divider/>
                <Form layout="vertical" form={form}>
                    <Row gutter={24}>
                        <Col span={8}>
                            <Form.Item label="Арендатор">
                                <Input placeholder="Название организации"/>
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item label="Наименование рекламного баннера">
                                <Input placeholder="Наименование"/>
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item label="Комментарий">
                                <Input placeholder="Комментарий"/>
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={8}>
                            <Form.Item label="Период публикации">
                                <RangePicker/>
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>
            </TableDiv>


            <TableDiv style={{marginTop: 24}}>
                <Title level={5}>Аудитория</Title>
                <Divider/>
                <Form layout="vertical" form={form}>
                    <Row gutter={24}>
                        <Col span={8}>
                            <Form.Item label="Пол">
                                <Select
                                    defaultValue="male"
                                >
                                    <Option value="male">Мужской</Option>
                                    <Option value="female">Женский</Option>
                                </Select>
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item label="Возраст">
                                <Select>
                                    <Option value="18">18-24</Option>
                                    <Option value="25">25-30</Option>
                                    <Option value="31">31-35</Option>
                                    <Option value="36">36-40</Option>
                                    <Option value="41">41-45</Option>
                                    <Option value="46">46-50</Option>
                                    <Option value="51">51-55</Option>
                                    <Option value="56">56-60</Option>
                                </Select>
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item label="Баланс">
                                <InputNumber style={{width: '100%'}} min={0} addonBefore="от" placeholder="1000"/>
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>
            </TableDiv>

            <TableDiv style={{marginTop: 24, paddingBottom: 24}}>
                <Title level={5}>Рекламные материалы</Title>
                <Divider/>
                <Row gutter={24}>
                    <Col span={12}>
                        <Dragger {...propsUpload}>
                            <p className="ant-upload-drag-icon">
                                <InboxOutlined/>
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

            <Row justify="center" style={{marginTop: 24}}>
                <Col>
                    <Button type="primary">
                        Создать
                    </Button>
                </Col>
            </Row>
        </>
    );
};

export {AddBannerPage};
