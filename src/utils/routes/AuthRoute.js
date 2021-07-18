import React, { useContext } from 'react'
import { Redirect, Route } from 'react-router-dom'
import AppContext from "../../stores/AppContext"


export default function AuthRoute(props) {
    const [isLogedIn] = useContext(AppContext)
    if(isLogedIn) return <Route {...props}/>

    return <Redirect to="/login" />
}
