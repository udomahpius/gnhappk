"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useFormik } from "formik";
import { object, string, number, date, InferType } from "yup";
import React, { useState, useRef, useEffect } from "react";
import logo from "@/assets/logo-white.png";
import toast, { Toaster } from 'react-hot-toast';
import AuthService from "@/services/AuthService";
import { withPublic } from "@/hooks/routes";
import { Button } from "@/components";
import { noAuthAPI } from "@/config/api";
import { cookies } from "next/dist/client/components/headers";
import { Inter, Montserrat } from "next/font/google";
import { CheckCircleIcon, AtSymbolIcon, UserCircleIcon, OfficeBuildingIcon, LockClosedIcon } from "@heroicons/react/outline";

const inter = Montserrat({ subsets: ['latin'] })


const Signup = ({ auth }) => {
    const router = useRouter();
    const { setUser } = auth;

    const [disabled, setDisabled] = useState(false);


    let userSchema = object({
        name: string().min(3, "Name must be at least 3 characters long").trim().required("Name is required"),
        email: string().email().trim().required("Email is required"),
        password: string().min(8, "Password must be at least 8 characters long").required("Password is required"),
    });


    const onSubmit = async (values, actions) => {
        setDisabled(true);
        try {
            const response = await AuthService.register(values.name, values.email, values.password);
            toast.success(response.data.message);
            setUser(response.data.data)
            setDisabled(false);
            router.replace("/auth/verify-email")
        } catch (error) {
            toast.error(error.response.data.message);
            actions.setSubmitting(false)
            setDisabled(false);
        }
    }


    const { values, errors, touched, isSubmitting, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: {
          name: "",
          email: "",
          password: ""
        },
        validationSchema: userSchema,
        onSubmit
    });

    return (
        <>
            <Toaster />
            <div className={`h-[100vh] ${inter.className} overflow-x-hidden`}>
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


                    <div className="bg-[rgb(0, 0, 0)] pt-6 px-6 overflow-y-auto">
                        <div className="mb-14">
                            <h2 className="font-semibold text-2xl mb-2">Welcome Back</h2>
                            <div className="flex items-center gap-1">
                                <span className="text-[#9E9E9E] text-[14px]">Create your account now. Don&apos;t have an account?</span>
                                <Link href="/auth/login" className="text-setly-100 font-bold flex text-[14px]">Login</Link>
                            </div>
                        </div>

                        <form className="px-1">
                            <div className="mb-5">
                                <label className="mb-2 text-gray text-sm flex">Full Name</label>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="border rounded-lg p-4 flex gap-2 hover:border-setly-100 hover:border-2">
                                        <UserCircleIcon className="h-6 w-6 text-gray-400" />
                                        <input type="text" placeholder="Enter first name" className="w-full flex items-center h-full outline-none text-gray-500" />
                                    </div>
                                    <div className="border rounded-lg px-4 hover:border-setly-100">
                                        <input type="text" placeholder="Enter last name" className="w-full flex items-center h-full outline-none text-gray-500" />
                                    </div>
                                </div>
                            </div>

                            <div className="mb-5">
                                <label className="mb-2 text-gray text-sm flex">Email Address</label>
                                <div className="border rounded-lg px-4 flex justify-between h-14 hover:border-setly-100 hover:border-2">
                                    <div className="flex gap-3 items-center w-full">
                                        <AtSymbolIcon className="h-5 w-5 text-gray-600" />
                                        <input type="email" placeholder="Enter email" className="w-full flex items-center h-full outline-none text-gray-500" />
                                    </div>
                                    <CheckCircleIcon className="h-5 w-5 text-green-400 self-center" />
                                </div>
                            </div>

                            <div className="mb-5">
                                <label className="mb-2 text-gray text-sm flex">Password</label>
                                <div className="border rounded-lg px-4 flex justify-between h-14 hover:border-setly-100 hover:border-2">
                                    <div className="flex gap-3 items-center w-full">
                                        <LockClosedIcon className="h-5 w-5 text-gray-600" />
                                        <input type="email" placeholder="**********" className="w-full flex items-center h-full outline-none text-gray-500" />
                                    </div>
                                    <CheckCircleIcon className="h-5 w-5 text-green-400 self-center" />
                                </div>
                            </div>

                            <div className="mb-7">
                                <label className="mb-2 text-gray text-sm flex">Company Information</label>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="border rounded-lg p-4 flex gap-2 hover:border-setly-100 hover:border-2">
                                        <OfficeBuildingIcon className="h-6 w-6 text-gray-400" />
                                        <input type="text" placeholder="Company name" className="w-full flex items-center h-full outline-none text-gray-500" />
                                    </div>
                                    <select className="bg-white h-full hover:border-setly-100 hover:border-2 rounded-lg flex px-2 border border-gray w-full outline-none text-gray-400">
                                        <option>Tech</option>
                                        <option>Ecommerce</option>
                                        <option>Communication</option>
                                        <option>Tech</option>
                                    </select>
                                </div>
                            </div>

                            <Button text="Signup" type="submit" disable={disabled} disabled={disabled} />
                        </form>

                        {/* <form className="mb-12" onSubmit={handleSubmit}>

                            <div className="mb-7">
                                <label className="mb-2 text-gray text-sm flex">Full Name</label>
                                <div className="bg-white h-[50px] rounded-md  border border-gray">
                                    <input type="text" name="name" className="h-full w-full px-3 bg-transparent text-[15px] outline-none"
                                        onChange={handleChange} onBlur={handleBlur} value={values.name}
                                    />
                                    { errors.name && touched.name && <small className="text-red-700">{ errors.name }</small>}
                                </div>
                            </div>

                            <div className="mb-7">
                                <label className="mb-2 text-gray text-sm flex">Email</label>
                                <div className="bg-white h-[50px] rounded-md  border border-gray">
                                    <input type="email" name="email" className="h-full w-full px-3 bg-transparent text-[15px] outline-none"
                                        onChange={handleChange} onBlur={handleBlur} value={values.email}
                                    />
                                    { errors.email && touched.email && <small className="text-red-700">{ errors.email }</small>}
                                </div>
                            </div>

                            <div className="mb-7">
                                <div className="flex justify-between items-center">
                                    <label className="mb-2 text-gray text-sm flex">Password</label>
                                    { values.password.length >= 8 && <p className="text-sm text-green-600">Strong!</p> } 
                                    
                                </div>
                                <div className="bg-white h-[50px] rounded-md  border border-gray">
                                    
                                    <input type="password" name="password" className="h-full w-full px-3 bg-transparent text-[15px] outline-none"
                                        onChange={handleChange} onBlur={handleBlur} value={values.password}
                                    />
                                    { errors.password && touched.password && <small className="text-red-700">{ errors.password }</small>}
                                </div>
                            </div>

                            <div className="mb-7">
                                <label className="mb-2 text-gray text-sm flex">Company Name</label>
                                <div className="bg-white h-[50px] rounded-md  border border-gray">
                                    <input type="text" name="name" className="h-full w-full px-3 bg-transparent text-[15px] outline-none"
                                        onChange={handleChange} onBlur={handleBlur} value={values.name}
                                    />
                                    { errors.name && touched.name && <small className="text-red-700">{ errors.name }</small>}
                                </div>
                            </div>

                            <div className="mb-7">
                                <label className="mb-2 text-gray text-sm flex">Industry</label>
                                    <select className="bg-white h-[50px] rounded-md px-2 border border-gray w-full outline-none text-gray-600">
                                        <option>Tech</option>
                                        <option>Ecommerce</option>
                                        <option>Communication</option>
                                        <option>Tech</option>
                                    </select>
                                    { errors.name && touched.name && <small className="text-red-700">{ errors.name }</small>}
                              
                            </div>

                            <Button text="Signup" type="submit" disable={disabled} disabled={disabled} />
                        </form> */}

                        {/* <div className="flex justify-center items-center gap-1">
                            <span className="text-[#9E9E9E] text-[14px]">Don&apos;t have an account?</span>
                            <Link href="/auth/login" className="bg-transparent text-[#269ACE] flex text-[14px]">Login</Link>
                        </div> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default withPublic(Signup);