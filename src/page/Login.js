import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import firebase from "../config/firebase"

export default function Login() {

    const history = useHistory()
    const [isLoading, setisLoading] = useState(false)
    const [errors, seterrors] = useState("")
    const [form, setform] = useState({email: "", password: ""})

    // const [isLoadgedIn, setisLoadgedIn] = useState(false)

    function handleOnFormSubmt(e){
        if(isLoading) return
        setisLoading(true)
        e.preventDefault()
        firebase.auth().signInWithEmailAndPassword(form.email, form.password)
        .then(res => {
            history.replace("/")
            // setisLoadgedIn(true)
            seterrors("")
            setisLoading(false)
        }).catch((e) => {
            seterrors(e.message)
            setisLoading(false)
        })
    }
    function handleInput(e){
        setform({...form, [e.target.name]: e.target.value})

        }

        // if (isLoadgedIn) return <Redirect to="/"/>
    return (
        <div>
            <div className="flex h-screen bg-grey-100">
                <div className="m-auto w-1/3 text-white flex flex-wrap justify-center shadow-lg ronded-lg bg-gradient-to-br from-green-900 to-green-500">
                    <form className="m-5 w-8/12" onSubmit={handleOnFormSubmt}>
                        {(errors !== "") && <p>{errors}</p>}
                    <h1 className="w-full text-3xl tracking-widest text-center my-5">Login as User</h1>
                        <div className="w-full my-6">
                            <input className="w-full p-2 rounded shadow text-black" placeholder="Enter email" type="email" value={form.email} onChange={handleInput} name="email"/>
                        </div>
                        <div className="w-full my-6">
                            <input className="w-full p-2 rounded shadow text-black" placeholder="Enter Password" type="password" value={form.password} onChange={handleInput} name="password"/>
                        </div>
                        <div className="w-full my-10">
                            <button className="p-2 rounded shadow w-full bg-yellow-300 text-black" type="submit">
                                {
                                    isLoading ? <i className="fas fa-circle-notch fa-spin"></i>
                                    : "Login"

                                }
                               
                            </button>
                        </div>
                    </form>
                    
                </div>
            </div>
        </div>
       
    )
}
