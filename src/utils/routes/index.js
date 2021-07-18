import Home from "../../page/Home";

import React from "react"
import Login from "../../page/Login";
import Images from "../../components/Images";
import SignUp from "../../page/SignUp";
import Prediction from "../../page/Prediction";


export default[
    {
        path: "/",
        exact: true,
        routeComponent: ()=> <Home />,
        protected: null,
    },
    {
        path: "/login",
        routeComponent: ()=> <Login />,
        protected: "guest",
    },
    {
        path: "/images",
        routeComponent: ()=> <Images />,
        protected: "auth",
    },
    {
        path: "/signup",
        routeComponent: ()=> <SignUp />,
        protected: "guest",
    },
    {
        path: "/predict",
        routeComponent: ()=> <Prediction />,
        protected: null,
    },
]