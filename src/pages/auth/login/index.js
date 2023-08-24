"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useFormik } from "formik";
import { object, string, number, date, InferType } from "yup";
import React, { useState, useRef, useEffect } from "react";
import logo from "@/assets/logo-white.png";
import { CheckCircleIcon, AtSymbolIcon, UserCircleIcon, OfficeBuildingIcon, LockClosedIcon } from "@heroicons/react/outline";
import toast, { Toaster } from 'react-hot-toast';
import AuthService from "@/services/AuthService";
import { withPublic } from "@/hooks/routes";
import { Button } from "@/components";
// import Modal from "@/components/Modal";
import { noAuthAPI } from "@/config/api";
import { cookies } from "next/dist/client/components/headers";


const Login = ({ auth }) => {
    const router = useRouter();
    const { setUser } = auth;

    const [disabled, setDisabled] = useState(false);




    let userSchema = object({
        email: string().email().trim().required("Email is required"),
        password: string().min(8, "Password must be at least 8 characters long").required("Password is required"),
    });


    const onSubmit = async (values, actions) => {
        setDisabled(true);
        try {
            const response = await AuthService.login(values.email, values.password);
            console.log(response);
            toast.success(response.data.message);
            setUser(response.data.data)
            setDisabled(false);
            router.replace("/dashboard")
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message);
            actions.setSubmitting(false)
            setDisabled(false);
        }
    }


    const { values, errors, touched, isSubmitting, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: {
          email: "",
          password: ""
        },
        validationSchema: userSchema,
        onSubmit
    });

    return (
        <>
            <Toaster />
            <div className="h-[100vh]">
                <div className="grid gap-x-20 grid-cols-2 h-full py-8 mx-auto w-[80%]">
                    <div className="card rounded-lg flex flex-col justify-between px-12 py-10">
                        <div className="w-[380px]">
                            <div className="mb-20">
                                <Image src={logo} alt="Rythink Logo" width="80" height="40" />
                            </div>
                            <h3 className="font-bold text-2xl mb-6 text-white">Let us help you run your freelance business.</h3>
                            <p className="text-gray-300">Our registration process is quick and easy, taking no more than 10 minutes to complete.</p>
                        </div>

                        <div>
                            <div className="card setly-bg rounded-lg  p-5">
                                <p className="mb-3 text-black text-opacity-80">Im impressed with the results Ive seen since starting to use this product, I begin receiving clients and projects in the first week.</p>
                                <div className="text-black text-opacity-80">
                                    <div>
                                        <p className="text-sm font-semibold">Jonas Kim</p>
                                        <p className="text-sm text-gray-800">Product Designer</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="bg-[rgb(0, 0, 0)] pt-12 px-12">
                        <div className="mb-12">
                            <h2 className="font-semibold text-2xl mb-2">Welcome Back</h2>
                            <div className="flex items-center gap-1">
                                <span className="text-[#9E9E9E] text-[14px]">Login to continue using Setly. Already have an account?</span>
                                <Link href="/auth/login" className="text-setly-100 font-bold flex text-[14px]">Signup</Link>
                            </div>
                        </div>

                        <form className="mb-12" onSubmit={handleSubmit}>
                            <div className="mb-5">
                                <label className="mb-2 text-gray text-sm flex">Email Address</label>
                                <div className="border rounded-lg px-4 flex justify-between h-14 hover:border-setly-100 hover:border-2">
                                    <div className="flex gap-3 items-center w-full">
                                        <AtSymbolIcon className="h-5 w-5 text-gray-600" />
                                        <input type="email" name="email" placeholder="Enter email" className="w-full flex items-center h-full outline-none text-gray-500"
                                        onChange={handleChange} onBlur={handleBlur} value={values.email} />
                                    </div>
                                    <CheckCircleIcon className="h-5 w-5 text-green-400 self-center" />
                                </div>
                                { errors.email && touched.email && <small className="text-red-700">{ errors.email }</small>}
                            </div>

                            <div className="mb-3">
                                <div className="flex justify-between items-center">
                                    <label className="mb-2 text-gray text-sm flex">Password</label>
                                    { values.password.length >= 8 && <p className="text-sm text-green-600">Strong!</p> } 
                                    
                                </div>
                                <div className="border rounded-lg px-4 flex justify-between h-14 hover:border-setly-100 hover:border-2">
                                    <div className="flex gap-3 items-center w-full">
                                        <LockClosedIcon className="h-5 w-5 text-gray-600" />
                                        <input type="password" name="password" placeholder="**********" className="w-full flex items-center h-full outline-none text-gray-500"
                                        onChange={handleChange} onBlur={handleBlur} value={values.password} />
                                    </div>
                                    <CheckCircleIcon className="h-5 w-5 text-green-400 self-center" />
                                </div>
                                { errors.password && touched.password && <small className="text-red-700">{ errors.password }</small>}
                            </div>
                            <div className="flex justify-end items-center mb-6">
                                <Link href="/auth/signup" className="bg-transparent text-[#269ACE] flex text-[14px]">Forgot Password?</Link>
                            </div>

                            <Button text="Login" type="submit" disable={disabled} disabled={disabled} />
                        </form>

                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default withPublic(Login);