import React from 'react';
import { PageHeader } from "antd";
import { useNavigate } from "react-router-dom";

const HeaderPage = ({ title, subTitle, backRoute = '/' }) => {
    const navigate = useNavigate()
    return (
        <PageHeader
            className="site-page-header"
            onBack={() => navigate(backRoute, { replace: true })}
            title={title}
            subTitle={subTitle}
        />
    );
};

export { HeaderPage };
