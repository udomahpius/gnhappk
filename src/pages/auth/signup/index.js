"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useFormik } from "formik";
import { object, string, number, date, InferType } from "yup";
import React, { useState, useRef, useEffect } from "react";
import logo from "../../../assets/rythink.png";
import { EyeIcon, EyeOffIcon, LockClosedIcon, UserIcon, PhoneIcon } from "@heroicons/react/solid";
import toast, { Toaster } from 'react-hot-toast';
import AuthService from "@/services/AuthService";
import { withPublic } from "@/hooks/routes";
import { Button } from "@/components";
import { noAuthAPI } from "@/config/api";
import { cookies } from "next/dist/client/components/headers";
import { Inter, Montserrat } from "next/font/google"

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
            <div className={`h-[100vh] ${inter.className}`}>
                <div className="grid gap-x-20 grid-cols-2 h-full py-8 mx-auto w-[80%]">
                    <div className="light-gray rounded-lg flex flex-col justify-between px-12 py-10">
                        <div className="w-[380px]">
                            <div className="mb-20">
                                <Image src={logo} alt="Rythink Logo" width="120" height="60" />
                            </div>
                            <h3 className="font-bold text-2xl mb-6">Let us help you run your freelance business.</h3>
                            <p>Our registration process is quick and easy, taking no more than 10 minutes to complete.</p>
                        </div>

                        <div>
                            <div className="card rounded-lg h-[150px] p-5">
                                <p className="text-white mb-3">Im impressed with the results Ive seen since starting to use this product, I begin receiving clients and projects in the first week.</p>
                                <div className="text-white">
                                    <div>
                                        <p className="text-sm font-bold">Jonas Kim</p>
                                        <p className="text-sm dark-gray">Product Designer</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-[rgb(0, 0, 0)] pt-12 px-12">
                        <div className="mb-20">
                            <h2 className="font-bold text-2xl mb-6">Get started</h2>
                            <p>Create your account now</p>
                        </div>

                        <form className="mb-12" onSubmit={handleSubmit}>

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

                            <Button text="Signup" type="submit" disable={disabled} disabled={disabled} />
                        </form>

                        <div className="flex justify-center items-center gap-1">
                            <span className="text-[#9E9E9E] text-[14px]">Don&apos;t have an account?</span>
                            <Link href="/auth/login" className="bg-transparent text-[#269ACE] flex text-[14px]">Login</Link>
                     </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default withPublic(Signup);