import React, { useState } from 'react'
import {ErrorMessage, Field, Form, Formik} from 'formik'
import * as Yup from 'yup'
import { useHistory } from 'react-router-dom'
import firebase from "../config/firebase"

export default function SignUp() {

    const [formikBagError, setFormikBagError] = useState(false)
     const [isLoading, setisLoading] = useState(false)

    const history = useHistory()

    return (
        <Formik

        initialValues = {{email:"", password:""}}
        onsubmit ={(value, formikBag) => {
            setisLoading(true)

            firebase.auth().createUserWithEmailAndPassword(value.email, value.password)
            .then(res => {
            setisLoading(false)
            history.replace("/login")
            
            }).catch(res => {
                formikBag.setFormikBagError("email", res.message)
                setisLoading(false)
            })

        }}
        validationSchema = {Yup.object({
            email: Yup.string().required('email is required!').email('email is invalid!'),
            password: Yup.string().required('password is required!').min(8, 'password must be longer than 8 characters!'),

        })}
        >
            
        <div>
            <div className="flex h-screen bg-grey-100">
                <div className="m-auto w-1/3 text-white flex flex-wrap justify-center shadow-lg ronded-lg bg-gradient-to-br from-green-900 to-green-500">
                    <Form className="m-5 w-8/12">
                    <h1 className="w-full text-3xl tracking-widest text-center my-5">SignUp as User</h1>
                        <div className="w-full my-6">
                            <Field name="email" className="w-full p-2 rounded shadow text-black" placeholder="Enter email" type="email"/>
                            {/* <p className="text-red-800">{formik.errors.email}</p> */}
                            <ErrorMessage name="email" />
                           
                        </div>
                        <div className="w-full my-6">
                            <Field name="password" className="w-full p-2 rounded shadow text-black" placeholder="Enter Password" type="password"/>
                            {/* <p className="text-red-800">{formik.errors.password}</p> */}
                            <ErrorMessage name="password" />
                        </div>
                        <div className="w-full my-10">
                            <button className="p-2 rounded shadow w-full bg-yellow-300 text-black" type="submit">
                                {
                                    isLoading ? <i className="fas fa-circle-notch fa-spin"></i>
                                    :
                                    "SignUp"

                                }
                              
                               
                            </button>
                        </div>
                    </Form>
                    
                </div>
            </div>
        </div>
        
        </Formik>
       
    )
}

