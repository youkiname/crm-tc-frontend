import React from 'react';
import {MainLayout} from "./Containers/Layouts/MainLayout/MainLayout";
import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {MainPageAD} from "./Containers/MainPageAD/MainPageAD";
import {AdsBannersPage} from "./Containers/AdsBannersPage/AdsBannersPage";
import {AdsPollsPage} from "./Containers/AdsPollsPage/AdsPollsPage";
import {BaseTCPage} from "./Containers/BaseTCPage/BaseTCPage";
import {BonusCardPage} from "./Containers/BonusCardPage/BonusCardPage";
import {AddArendatorPage} from "./Containers/AddArendatorPage/AddArendatorPage";
import {ProfilePage} from "./Containers/ProfilePage/ProfilePage";
import {NotFoundPage} from "./Containers/NotFoundPage/NotFoundPage";
import {AddBannerPage} from "./Containers/AddBannerPage/AddBannerPage";
import {AddPollPage} from "./Containers/AddPollPage/AddPollPage";
import {AuthPage} from "./Containers/AuthPage/AuthPage";

const App = () => {
    const auth = true
    return (
        <BrowserRouter>
            <MainLayout>
                {auth ?
                    <Routes>
                        <Route path="/" exact element={<MainPageAD/>}/>
                        <Route path="/ads" element={<AdsBannersPage/>}/>
                        <Route path="/polls" element={<AdsPollsPage/>}/>
                        <Route path="/base-tc" element={<BaseTCPage/>}/>
                        <Route path="/bonus-card" element={<BonusCardPage/>}/>
                        <Route path="/add-arendator" element={<AddArendatorPage/>}/>
                        <Route path="/profile" element={<ProfilePage/>}/>
                        <Route path="/add-banner" element={<AddBannerPage/>}/>
                        <Route path="/add-polls" element={<AddPollPage/>}/>
                        <Route path="*" element={<NotFoundPage/>}/>
                    </Routes>
                    : <Route path="*" element={<AuthPage />} />
                    }
            </MainLayout>
        </BrowserRouter>
    );
};

export {App};
