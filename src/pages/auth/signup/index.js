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
import { BigButton, Button } from "@/components";
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
                    <div className="card rounded-lg flex flex-col justify-between px-12 py-3 pb-10">
                        <div className="w-[350px]">
                            <div className="mb-12 pt-6">
                                <Image src={logo} alt="Rythink Logo" width="250" height="10" />
                            </div>
                            <h3 className={`font-bold ${inter.className} text-2xl mb-6 text-white`}>Easily build your pipeline with AI.</h3>
                            <p className="text-gray-300">Our sign-up process is easy and only takes about 6 minutes.</p>
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
                            <h2 className="font-semibold text-2xl mb-2">Sign Up</h2>
                            <div className="flex items-center gap-1">
                                <span className="text-gray-800 text-[14px]">Create your account now. Already have an account?</span>
                                <Link href="/auth/login" className="text-setly-100 font-bold flex text-[14px]">Login</Link>
                            </div>
                        </div>

                        <form className="px-1">
                            <div className="mb-5">
                                <label className="mb-2 text-gray-800 text-sm flex">Full Name</label>
                                <div className="grid grid-cols-2 gap-4">
                                    {/* <div className="border h-full rounded-lg px-4 flex hover:border-setly-100 hover:border-2">
                                        <UserCircleIcon className="h-6 w-6 text-gray-400" />
                                        <input type="text" placeholder="Enter first name" className="w-full py-2 flex items-center h-full outline-none text-gray-500" />
                                    </div> */}
                                    <div className="border rounded-lg px-4 flex justify-between h-14 bg-white hover:border-setly-100 hover:border-2">
                                        <div className="flex gap-3 items-center w-full">
                                            <UserCircleIcon className="h-6 w-6 text-gray-600" />
                                            <input type="text" name="first_name" placeholder="Enter email" className="w-full flex items-center h-full outline-none text-gray-700" />
                                        </div>
                                    </div>
                                    <div className="border rounded-lg px-4 bg-white hover:border-setly-100">
                                        <input type="text" name="last_name" placeholder="Enter last name" className="w-full flex items-center h-full outline-none text-gray-700" />
                                    </div>
                                </div>
                            </div>

                            <div className="mb-5">
                                <label className="mb-2 text-gray-800 text-sm flex">Email Address</label>
                                <div className="border bg-white rounded-lg px-4 flex justify-between h-14 hover:border-setly-100 hover:border-2">
                                    <div className="flex gap-3 items-center w-full">
                                        <AtSymbolIcon className="h-5 w-5 text-gray-600" />
                                        <input type="email" name="email" placeholder="Enter email" className="w-full flex items-center h-full outline-none text-gray-700" />
                                    </div>
                                    <CheckCircleIcon className="h-5 w-5 text-green-400 self-center" />
                                </div>
                            </div>

                            <div className="mb-5">
                                <label className="mb-2 text-gray-800 text-sm flex">Password</label>
                                <div className="border bg-white rounded-lg px-4 flex justify-between h-14 hover:border-setly-100 hover:border-2">
                                    <div className="flex gap-3 items-center w-full">
                                        <LockClosedIcon className="h-5 w-5 text-gray-600" />
                                        <input type="password" placeholder="**********" className="w-full flex items-center h-full outline-none text-gray-700" />
                                    </div>
                                    <CheckCircleIcon className="h-5 w-5 text-green-400 self-center" />
                                </div>
                            </div>

                            <div className="mb-8">
                                <label className="mb-2 text-gray-800 text-sm flex">Company Information</label>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="border bg-white rounded-lg p-4 flex gap-2 hover:border-setly-100">
                                        <OfficeBuildingIcon className="h-6 w-6 text-gray-400" />
                                        <input type="text" name="company_name" placeholder="Company name" className="w-full flex items-center h-full outline-none text-gray-700" />
                                    </div>
                                    <select name="industry" className="bg-white h-full hover:border-setly-100  rounded-lg flex px-2 border border-gray w-full outline-none text-gray-400">
                                        <option selected disabled>Select an Industry</option>
                                        <option>Advertising &amp; Media</option>
                                        <option>Automotive</option>
                                        <option>Construction</option>
                                        <option>Consulting & Coaching</option>
                                        <option>Financial Services</option>
                                        <option>Higher Education</option>
                                        <option>Information Technology & Services</option>
                                        <option>Legal</option>
                                        <option>Manufacturing</option>
                                        <option>Medical & Health Care</option>
                                        <option>Oil &amp; Energy</option>
                                        <option>Retail</option>
                                        <option>Sales</option>
                                        <option>Telecommunications</option>
                                    </select>
                                </div>
                            </div>

                            <BigButton text="Signup" type="submit" disable={disabled} disabled={disabled} />
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default withPublic(Signup);