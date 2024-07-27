import React from "react";
import { useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import LoginPage from "./src/pages/loginPage";
import SignupPage from "./src/pages/signupPage";
import HomePage from "./src/pages/homePage";
import OtpPage from "./src/pages/otpPage";
import WebsitePage from "./src/pages/websitePage";
import { useSelector } from "react-redux";

const AppRouter = () => {
    const { isAuthorized, isEmailVerified } = useSelector((e) => e.auth);
    console.log(isEmailVerified);

    const router = createBrowserRouter([
        {
            path: "/cloudhome",
            element: isAuthorized ? <>{
                isEmailVerified ? <HomePage /> : <Navigate to="/otp" />
            }</>
                : <Navigate to="/" />,
        },
        {
            path: "/",
            element: isAuthorized ? <Navigate to="/cloudhome" /> : <WebsitePage />,
        },
        {
            path: "/login",
            element: isAuthorized ? <Navigate to="/cloudhome" /> : <LoginPage />,
        },
        {
            path: "/signup",
            element: isAuthorized ? <Navigate to="/cloudhome" /> : <SignupPage />,
        },
        {
            path: "/otp",
            element: isAuthorized && !isEmailVerified ? <OtpPage /> : <Navigate to="/cloudhome" />,
        },



    ]);
    return <RouterProvider router={router} />

};

export default AppRouter;