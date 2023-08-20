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
        // <>
        //     <Toaster />
        //     <div className="relative flex min-h-screen justify-center md:px-12 lg:px-0">
        //         <div className="relative z-10 flex flex-col bg-white py-10 px-4 shadow-2xl flex-1 md:flex-none justify-center md:px-28">
        //             <div className="w-full max-w-md mx-auto sm:px-4 md:w-96 md:max-w-sm md:px-0">
        //                 <div className="flex flex-col">
        //                     <Link aria-label="Home" href="/">
        //                         <div className="flex items-center space-x-4">
        //                             <Image src={logo} alt="Rythink Logo" width="150" height="60" />
        //                         </div>
        //                     </Link>
        //                 </div>

        //                 {/* { error && <Modal isOpen={isOpen} closeModal={() => setIsOpen(false)} error={error}   />} */}

        //                 <form className="grid grid-cols-1 mt-6 gap-y-6 mb-7" autoComplete="off" onSubmit={createAccount}>

        //                     <div>
        //                         <div className="bg-[#FAFAFA] h-[50px] pl-5 flex gap-0 items-center rounded-lg border-2 border-[#269ACE]">
        //                             <UserIcon className="h-5 w-5 text-[#9E9E9E]"/>
        //                             <input type="text" name="name" className="h-full w-full px-3 bg-transparent text-[15px] outline-none"
        //                                 placeholder="Enter First & Last Name" onChange={(e) => setName(e.target.value)} value={name}
        //                             />
        //                             {/* <input type="text" name="name" className="h-full w-full px-3 bg-transparent text-[15px] outline-none"
        //                                 placeholder="Enter First & Last Name" onChange={handleChange} onBlur={handleBlur} value={values.name}
        //                             /> */}
                                    
        //                         </div>
        //                         {/* { errors.name && touched.name && <small className="text-red-700">{ errors.name }</small>} */}
        //                     </div>

        //                     <div>
        //                         {/* <div className={`bg-[#FAFAFA] h-[50px] pl-5 flex gap-0 items-center rounded-lg ${errors.email && touched.email ? "border-2 border-red-500" : "border-2 border-[#269ACE]"}`}> */}
        //                         <div className="bg-[#FAFAFA] h-[50px] pl-5 flex gap-0 items-center rounded-lg border-2 border-[#269ACE]">
        //                             <PhoneIcon className="h-5 w-5 text-[#9E9E9E]"/>
        //                             <input type="email" name="email" className="h-full w-full px-3 bg-transparent text-[15px] outline-none"
        //                                 placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)} value={email}
        //                             />
        //                             {/* <input type="email" name="email" className="h-full w-full px-3 bg-transparent text-[15px] outline-none"
        //                                 placeholder="Enter your email" onChange={handleChange} onBlur={handleBlur} value={values.email}
        //                             /> */}
                                    
        //                         </div>
        //                         {/* { errors.email && touched.email && <small className="text-red-700">{ errors.email }</small>} */}
        //                     </div>

        //                     <div className="mb-6">
        //                         <div className="bg-[#FAFAFA] h-[50px] pl-5 flex gap-0 items-center rounded-lg border-2 border-[#269ACE]">
        //                             <LockClosedIcon className="h-6 w-6 text-[#9E9E9E]"/>
        //                             <input type={ activePassword ? "text" : "password"} name="password" className="h-full w-full px-3 bg-transparent text-[15px] outline-none"
        //                                 placeholder="Enter your password" onChange={(e) => setPassword(e.target.value)} value={password}
        //                             />
        //                             {/* <input type={ activePassword ? "text" : "password"} className="h-full w-full px-3 bg-transparent text-[15px] outline-none"
        //                                 name="password" placeholder="Enter your password" onChange={handleChange} onBlur={handleBlur} value={values.password}
        //                             /> */}
        //                             <div className="pr-3">
        //                                 <EyeIcon className={ activePassword ? "h-5 w-5 text-[#9E9E9E]" : "hidden"} onClick={(e) => setActivePassword(false)} />
        //                                 <EyeOffIcon className={ activePassword ? "hidden" : "h-5 w-5 text-[#9E9E9E]"} onClick={(e) => setActivePassword(true)} />
        //                             </div>
        //                         </div>
        //                         {/* { errors.password && touched.password && <small className="text-red-700">{ errors.email }</small>} */}
        //                     </div>
        //                     <Button text="Create Account" type="submit" disable={disabled} disabled={disabled} />
        //                 </form>
    
        //                 <div className="flex justify-center items-center gap-1">
        //                     <span className="text-[#9E9E9E] text-[14px]">Already have an account?</span>
        //                     <Link href="/auth/login" className="bg-transparent text-[#269ACE] flex text-[14px]">Login</Link>
        //                 </div>
        //             </div>
        //             </div>
        //             <div className="lg:relative lg:block lg:flex-1 hidden sm:contents">
        //                 <Image alt="" src="https://secondhand-sandy.vercel.app/_next/static/media/background-auth.4bcf3f4b.jpg" width="1664" height="1866" decoding="async" data-nimg="future" className="absolute inset-0 object-cover w-full h-full" loading="lazy" style={{color: "transparent"}} />
        //             </div>
        //     </div>
        // </>;
        <>
            <Toaster />
            <div className="h-[100vh]">
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
                                <label className="mb-2 text-gray text-sm flex">Email</label>
                                <div className="bg-white h-[50px] rounded-md  border border-gray">
                                    
                                    {/* <input type="email" name="email" className="h-full w-full px-3 bg-transparent text-[15px] outline-none"
                                        onChange={(e) => setEmail(e.target.value)} value={email}
                                    /> */}
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

                            <Button text="Login" type="submit" disable={disabled} disabled={disabled} />
                        </form>

                        <div className="flex justify-center items-center gap-1">
                            <span className="text-[#9E9E9E] text-[14px]">Don&apos;t have an account?</span>
                            <Link href="/auth/signup" className="bg-transparent text-[#269ACE] flex text-[14px]">Signup</Link>
                     </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default withPublic(Login);