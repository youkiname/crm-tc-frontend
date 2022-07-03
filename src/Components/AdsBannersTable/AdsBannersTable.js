import React from 'react';
import { Button, Table, Badge } from "antd";
import { apiController } from "../../api";

const columns = [
    {
        title: 'Арендатор',
        dataIndex: 'shop',
        key: 'shop',
        render: shop => {
            return (
                <div>{shop.name}</div>
            )
        }
    },
    {
        title: 'Имя',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Комментарий',
        dataIndex: 'comment',
        key: 'comment',
    },
    {
        title: 'Статус',
        dataIndex: 'is_active',
        key: 'is_active',
        render: is_active => {
            return (
                <Badge status={is_active ? 'success' : 'error'}
                    text={is_active ? 'Активен' : 'Неактивен'}
                />
            )
        }
    },
    {
        title: 'Дата создания',
        dataIndex: 'created_at',
        key: 'created_at',
    },
    {
        title: 'Действия',
        dataIndex: 'is_active',
        key: 'is_active',
        render: (is_active) => (
            <>
                <Button type="link">Редактировать</Button>
                <Button danger type="link">{is_active ? 'Остановить' : 'Запустить'}</Button>
            </>
        )
    },
]

const AdsBannersTable = () => {
    const [banners, setBanners] = React.useState([])
    React.useEffect(() => {
        apiController.getBanners().then(res => setBanners(res.data))
    }, [])
    return (
        <>
            <Table columns={columns} dataSource={banners} />
        </>
    );
};

export { AdsBannersTable };
