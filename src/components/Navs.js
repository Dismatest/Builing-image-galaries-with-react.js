import React, { useContext } from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import firebase from "../config/firebase"
import AppContext from "../stores/AppContext";


export default function Navs() {

    const history = useHistory()
    const [isLoagedIn, user] = useContext(AppContext)
    

    function handleLogout(){
        firebase.auth().signOut().then(res => {
            history.replace("/login")
        }).catch(res => {
            console.log(res.target.data)
        })
    }

    return (
        <nav className="py-5 bg-gray-500 text-white flex justify-between">
                    <ul className="flex justify-between px-10">
                    <li className="mr-5">
                        <NavLink to = "/" exact = {true} activeClassName="text-yellow-500">Home</NavLink>
                    </li>
                    <li className="mr-5">
                        <NavLink to = "/images" activeClassName="text-yellow-500">Gallaries</NavLink>
                    </li>
                    <li className="mr-5">
                        <NavLink to = "/predict" activeClassName="text-yellow-500">PredictImage</NavLink>
                    </li>
                    </ul>
                    <ul className="flex justify-between px-10">
                    <li>
                        { 
                        isLoagedIn 
                        ? 
                        <button onClick={handleLogout}>Logout</button>
                        :
                        <NavLink to = "/login" activeClassName="text-yellow-500">Login</NavLink>
                         }
                    </li>
                    {  !isLoagedIn &&  
                    <li className="ml-5">   
                             
                        <NavLink to = "/signup" activeClassName="text-yellow-500">SignUp</NavLink>
                        
                    </li>
                      }
                </ul>
            </nav>
    )
}
