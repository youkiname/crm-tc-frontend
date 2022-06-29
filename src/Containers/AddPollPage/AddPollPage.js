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
import {InboxOutlined, MinusCircleOutlined, PlusOutlined} from "@ant-design/icons";

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

const AddPollPage = () => {
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
                <Title level={5}>Опрос</Title>
                <Divider/>
                <Form form={form} layout="vertical">
                    <Row gutter={24}>

                        <Col span={12}>
                            <Form.Item label="Заголовок опроса">
                                <Input placeholder="Заголовок опроса"/>
                            </Form.Item>
                        </Col>

                        <Col span={12}>
                            <Form.Item label="Описание">
                                <Input placeholder="Описание"/>
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={12}>
                            <Form name="dynamic_form_item">
                                <Form.List
                                    name="names"
                                    rules={[
                                        {
                                            validator: async (_, names) => {
                                                if (!names || names.length < 2) {
                                                    return Promise.reject(new Error('Должно быть минимум 2 варианта ответа'));
                                                }
                                            },
                                        },
                                    ]}
                                >
                                    {(fields, {add, remove}, {errors}) => (
                                        <>
                                            {fields.map((field, index) => (
                                                <Form.Item

                                                    label={index === 0 ? 'Вариант ответа' : ''}
                                                    required={false}
                                                    key={field.key}
                                                >
                                                    <Form.Item
                                                        {...field}
                                                        validateTrigger={['onChange', 'onBlur']}
                                                        rules={[
                                                            {
                                                                required: true,
                                                                whitespace: true,
                                                                message: "Введите вариант ответа или удалите поле",
                                                            },
                                                        ]}
                                                        noStyle
                                                    >
                                                        <Input
                                                            placeholder="Вариант ответа"
                                                            style={{
                                                                width: '60%',
                                                            }}
                                                        />
                                                    </Form.Item>
                                                    {fields.length > 1 ? (
                                                        <MinusCircleOutlined
                                                            className="dynamic-delete-button"
                                                            onClick={() => remove(field.name)}
                                                        />
                                                    ) : null}
                                                </Form.Item>
                                            ))}
                                            <Form.Item>
                                                <Button
                                                    type="dashed"
                                                    onClick={() => add()}
                                                    style={{
                                                        width: '60%',
                                                    }}
                                                    icon={<PlusOutlined/>}
                                                >
                                                    Добавить вариант ответа
                                                </Button>
                                                <Form.ErrorList errors={errors}/>
                                            </Form.Item>
                                        </>
                                    )}
                                </Form.List>
                            </Form>
                        </Col>
                    </Row>
                </Form>
            </TableDiv>

            <Row justify="center" style={{marginTop: 24}}>
                <Col>
                    <Button type="primary">
                        Создать
                    </Button>
                </Col>
            </Row>
        </>
    )
        ;
};

export {AddPollPage};
