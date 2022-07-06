import React from 'react';
import {
    MainLayout,
    MainPageAD,
    AddArendatorPage,
    AddBannerPage,
    AddPollPage,
    AdsBannersPage,
    AdsPollsPage,
    BaseTCPage,
    BonusCardPage,
    NotFoundPage,
    ProfilePage, AuthPage,
    EditPollPage,
    EditAdsBanner,
} from "./Containers";
import './App.css'
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import { RequireAuth } from "./Components";

export const App = () => {

    return (
        <BrowserRouter basename="/admin-tc">
            <MainLayout>
                <Routes>
                    <Route path="/" exact element={
                        <RequireAuth>
                            <MainPageAD />
                        </RequireAuth>
                    } />
                    <Route path="/ads" element={<RequireAuth>
                        <AdsBannersPage />
                    </RequireAuth>} />
                    <Route path="/polls" element={
                        <RequireAuth>
                            <AdsPollsPage />
                        </RequireAuth>
                    } />
                    <Route path="/base-tc" element={
                        <RequireAuth>
                            <BaseTCPage />
                        </RequireAuth>
                    } />
                    <Route path="/bonus-card" element={
                        <RequireAuth>
                            <BonusCardPage />
                        </RequireAuth>
                    } />
                    <Route path="/add-arendator" element={<RequireAuth>
                        <AddArendatorPage />
                    </RequireAuth>} />
                    <Route path="/profile" element={
                        <RequireAuth>
                            <ProfilePage />
                        </RequireAuth>
                    } />
                    <Route path="/add-banner" element={
                        <RequireAuth>
                            <AddBannerPage />
                        </RequireAuth>
                    } />
                    <Route path="/add-polls" element={
                        <RequireAuth>
                            <AddPollPage />
                        </RequireAuth>
                    } />
                    <Route path="/edit-poll/:id" element={
                        <RequireAuth>
                            <EditPollPage />
                        </RequireAuth>
                    } />
                    <Route path="/edit-banner/:id" element={
                        <RequireAuth>
                            <EditAdsBanner />
                        </RequireAuth>
                    } />
                    <Route path="/auth" element={<AuthPage />} />
                    <Route path="/*" element={<NotFoundPage />} />
                </Routes>
            </MainLayout>
        </BrowserRouter>
    );
};

;
