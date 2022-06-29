import {
    AreaChartOutlined,
    DashboardOutlined,
    LaptopOutlined,
    NotificationOutlined, TableOutlined, TeamOutlined, UnorderedListOutlined,
    UserOutlined
} from "@ant-design/icons";
import React from "react";

export const menuListData = [
12,12
]

export const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map((icon, index) => {
    const key = String(index + 1);
    return {
        key: `sub${key}`,
        icon: React.createElement(icon),
        label: `subnav ${key}`,
        children: new Array(4).fill(null).map((_, j) => {
            const subKey = index * 4 + j + 1;
            return {
                key: subKey,
                label: `option${subKey}`,
            };
        }),
    };
});
export const menuData = [
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