import React from 'react';
import { HeaderPage } from "../../Components/HeaderPage/HeaderPage";
import {
    Button,
    Col,
    Divider,
    Form,
    Input,
    message,
    Row,
    Typography,
} from "antd";
import styled from "styled-components";
import { pollsController } from "../../api";
import { useParams } from "react-router-dom";

const { Title } = Typography

const TableDiv = styled.div`
  padding: 24px;
  background-color: #fff;
`;

const EditPollPage = () => {
    const [form] = Form.useForm();
    const [title, setTitle] = React.useState('')
    const [description, setDescription] = React.useState('')
    const [choices, setChoices] = React.useState([])
    const { id } = useParams();

    React.useEffect(() => {
        pollsController.getPoll(id).then(res => {
            setTitle(res.data.title)
            setDescription(res.data.description)
            setChoices(res.data.choices)
        })
    }, [id])

    const onChangeChoice = (e, choiceId) => {
        const value = e.target.value
        setChoices(choices.map(choice => {
            if (choice.id === choiceId) {
                choice.title = value
            }
            return choice
        }))

    }

    const onSubmit = () => {
        pollsController.editPoll(id, {
            title,
            description,
            choices: choices.map(el => el.title)
        }).then(() => {
            message.success("Данные успешно сохранены.")
        })
    }

    return (
        <>
            <div
                style={{ backgroundColor: "#FFF", marginTop: -48, marginBottom: 24, paddingBottom: 24, paddingLeft: 24 }}>
                <HeaderPage title="Редактировать опрос" backRoute='/polls' />
            </div>

            <TableDiv style={{ marginTop: 24, paddingBottom: 24 }}>
                <Title level={5}>Опрос</Title>
                <Divider />
                <Form form={form} layout="vertical">
                    <Row gutter={24}>
                        <Col span={12}>
                            <Form.Item label="Заголовок опроса">
                                <Input placeholder="Заголовок опроса"
                                    value={title}
                                    onChange={e => setTitle(e.target.value)}
                                />
                            </Form.Item>
                        </Col>

                        <Col span={12}>
                            <Form.Item label="Описание">
                                <Input placeholder="Описание"
                                    value={description}
                                    onChange={e => setDescription(e.target.value)}
                                />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={12}>
                            <Form.Item label="Варианты ответа">
                                {
                                    choices.map((choice, idx) => (
                                        <Input
                                            key={idx}
                                            placeholder="Вариант ответа"
                                            style={{
                                                width: '60%',
                                            }}
                                            value={choice.title}
                                            onChange={e => onChangeChoice(e, choice.id)}
                                        />
                                    ))
                                }
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>
            </TableDiv>

            <Row justify="center" style={{ marginTop: 24 }}>
                <Col>
                    <Button type="primary" onClick={onSubmit}>
                        Редактировать
                    </Button>
                </Col>
            </Row>
        </>
    )
        ;
};

export { EditPollPage };
