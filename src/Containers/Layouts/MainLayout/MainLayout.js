import { Avatar, Layout, Menu, Space, Typography, Button } from 'antd';
import React from 'react';
import './MainLayout.css'
import { Logo } from "../../../Components/Logo/Logo";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useGlobalState, setLogoutState } from '../../../GlobalState';
import { authController } from "../../../api";
import {
    AreaChartOutlined,
    DashboardOutlined,
    TableOutlined,
    TeamOutlined,
    UnorderedListOutlined
} from "@ant-design/icons";

const { Header, Content, Sider } = Layout;
const { Text } = Typography


export const MainLayout = ({ children }) => {
    const selectedKey = useLocation().pathname
    const menuData = [
        {
            icon: React.createElement(DashboardOutlined),
            key: '/',
            label: 'Главная',
            path: '/',
        },
        {
            icon: React.createElement(AreaChartOutlined),
            key: '/ads',
            label: 'Реклама',
            children: [
                {
                    key: 'ads-1',
                    label: 'Рекламные баннеры',
                    path: '/ads',
                },
                {
                    key: 'ads-2',
                    label: 'Опросы',
                    path: '/polls'
                }
            ]
        },
        {
            icon: React.createElement(TableOutlined),
            key: '/base-tc',
            label: 'База ТЦ',
            path: 'base-tc'
        },
        {
            icon: React.createElement(UnorderedListOutlined),
            key: '/bonus-card',
            label: 'Карты лояльности',
            path: 'bonus-card'
        },
        {
            icon: React.createElement(TeamOutlined),
            key: '/add-arendator',
            label: 'Добавить арендатор',
            path: 'add-arendator'
        }
    ]

    const navigate = useNavigate()
    const [username] = useGlobalState('username')
    const [loggedIn] = useGlobalState('loggedIn')
    const [avatarLink] = useGlobalState('avatarLink')

    const highlightMenuItem = () => {
        return [selectedKey]
    }

    const logout = async () => {
        setLogoutState()
        navigate('/auth');
        await authController.logout();
        localStorage.removeItem('token-admin');
    }

    return (
        <Layout>
            <Header className="header mainLayout__header">
                <div className="logo"><Logo /></div>
                <div className='mainLayout__profile-wrap'>
                    {
                        loggedIn &&
                        <>
                            <Link to="/profile">
                                <Space direction="horizontal">
                                    <Avatar src={avatarLink} />
                                    <Text style={{ color: '#fff' }}>{username}</Text>
                                </Space>
                            </Link>
                            <Button onClick={logout} type="primary" style={{ marginLeft: '10px' }}>
                                Выйти
                            </Button>
                        </>
                    }
                </div>
            </Header>
            <Layout>
                <Sider width={200} className="site-layout-background">
                    <Menu
                        selectedKeys={highlightMenuItem()}
                        mode="inline"
                        defaultSelectedKeys={['main']}
                        defaultOpenKeys={['sub1']}
                        style={{
                            height: '100%',
                            borderRight: 0,
                        }}
                        items={menuData}
                        onSelect={(item) => {
                            navigate(item.item.props.path, { replace: true })
                        }}
                    />
                </Sider>
                <Layout
                    style={{
                        padding: '24px 24px 24px',
                    }}
                >
                    <Content
                        className="site-layout-background"
                        style={{
                            padding: 24,
                            margin: 0,
                            minHeight: 280,
                            background: 'transparent'

                        }}
                    >
                        {children}
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    )
};