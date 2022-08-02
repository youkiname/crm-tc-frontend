import { Avatar, Layout, Menu, Space, Typography, Button } from 'antd';
import React, {useState} from 'react';
import './MainLayout.css'
import { Logo } from "../../../Components/Logo/Logo";
import {Link, useLocation} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useGlobalState, setGlobalState } from '../../../GlobalState';
import {apiController, authController} from "../../../api";
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
            key: 'main',
            label: 'Главная',
            path: '/',
        },
        {
            icon: React.createElement(AreaChartOutlined),
            key: 'ad',
            label: 'Реклама',
            children: [
                {
                    key: 'ad-1',
                    label: 'Рекламные баннеры',
                    path: '/ads',
                },
                {
                    key: 'ad-2',
                    label: 'Опросы',
                    path: '/polls'
                }
            ]
        },
        {
            icon: React.createElement(TableOutlined),
            key: 'baza',
            label: 'База ТЦ',
            path: 'base-tc'
        },
        {
            icon: React.createElement(UnorderedListOutlined),
            key: 'cards',
            label: 'Карты лояльности',
            path: 'bonus-card'
        },
        {
            icon: React.createElement(TeamOutlined),
            key: 'arendator',
            label: 'Добавить арендатор',
            path: 'add-arendator'
        }
    ]
    const highlight = () => {
        if (selectedKey === '/'){
            return ['main']
        } else if (selectedKey === '/base-tc'){
            return ['baza']
        } else if (selectedKey === '/bonus-card'){
            return ['cards']
        } else if (selectedKey === '/ads'){
            return ['ad-1']
        } else if (selectedKey === '/add-arendator'){
            return ['arendator']
        } else if (selectedKey === '/ads'){
            return ['ad-2']
        }
    }
    const navigate = useNavigate()
    const [username] = useGlobalState('username')
    const [loggedIn] = useGlobalState('loggedIn')
    const [avatar, setAvatar] = useState()

    const logout = async () => {
        setGlobalState('username', '')
        setGlobalState('loggedIn', false)
        navigate('/auth');
        await authController.logout();
        localStorage.removeItem('token-admin');
    }

    React.useEffect(() => {
        if (localStorage.getItem('name')) {
            setGlobalState('username', localStorage.getItem('name'))
        }
        if (localStorage.getItem('token-admin')) {
            setGlobalState('loggedIn', true)
        }
        authController.getMe().then(res => {
            setAvatar(res.data.avatar_link)
        })
    }, [])
console.log(avatar)
    return (
        <Layout>
            {/*<Navigate to="/LoginPage" />*/}
            <Header className="header mainLayout__header">
                <div className="logo"><Logo /></div>
                <div className='mainLayout__profile-wrap'>
                    {
                        loggedIn &&
                        <>
                            <Link to="/profile">
                                <Space direction="horizontal">
                                    <Avatar src={avatar}/>
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
                        selectedKeys={highlight()}
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