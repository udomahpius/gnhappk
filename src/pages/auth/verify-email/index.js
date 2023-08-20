"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useFormik } from "formik";
import { object, string } from "yup";
import React, { useState } from "react";
import logo from "../../../assets/rythink.png";
import toast, { Toaster } from 'react-hot-toast';
import AuthService from "@/services/AuthService";
import { Button } from "@/components";
import OtpInput from "react-otp-input";
import { withPublic } from "@/hooks/routes";


const VerifyEmail = ({ auth }) => {
    const router = useRouter();
    const { setUser, user } = auth;
    const [otp, setOtp] = useState('');

    const [disabled, setDisabled] = useState(false);


    let verifySchema = object({
        token: string().min(5, "Token must be 5 values").required("Token is required"),
    });


    const onSubmit = async (values, actions) => {
        console.log(isSubmitting);
        try {
            const response = await AuthService.verifyEmail(otp);
            toast.success(response.data.message);
            setUser(response.data.data)
            setDisabled(false);
            router.replace("/auth/login");
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message);
            actions.setSubmitting(false)
            setDisabled(false);
        }
    }

    const verifyEmail = async () => {
        setDisabled(true);
        try {
            const response = await AuthService.verifyEmail(otp);
            console.log(response);
            toast.success(response.data.message);
            setUser(response.data.data)
            setDisabled(false);
            router.replace("/auth/login");
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message);
            setDisabled(false);
        }
    }


    const { values, errors, touched, isSubmitting, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: {
          token: ""
        },
        validationSchema: verifySchema,
        onSubmit
    });
    
    return (
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
                    <div className="pt-12 px-12 flex flex-col justify-center">

                        
                            <h3 className="text-2xl md:text-3xl mb-2 font-jakarta text-black font-bold tracking-tight">Verify Your Email Address</h3>
                            <p className="mb-3">A verification email has been sent to: { user?.email }</p>
                            <p className="mb-5 text-slate-500">Get the OTP token from your email to verify your account</p>

                            <div className="mb-5">
                                <OtpInput
                                    value={otp}
                                    inputType="text"
                                    onChange={setOtp}
                                    numInputs={5}
                                    inputStyle={{
                                        border: "1px solid gray",
                                        borderRadius: "8px",
                                        width: "74px",
                                        height: "74px",
                                        fontSize: "25px",
                                        color: "#000",
                                        fontWeight: "400",
                                        caretColor: "blue",
                                        color: "black"
                                    }}
                                    focusStyle={{
                                        border: "1px solid #269ACE",
                                        outline: "none"
                                    }}
                                    containerStyle="w-full items-center justify-center"
                                    renderSeparator={<span style={{ width: "8px" }}></span>}
                                    renderInput={(props) => <input className="w-[100px]" {...props} />}
                                />

                                

                                {/* { errors.token && touched.token && <small className="text-red-700">{ errors.token }</small>} */}

                                <br /> <br />

                                <Button text="Verify Email" onClick={verifyEmail} type="button" background="#269ACE" color="white" disable={disabled} disabled={disabled} />
                            </div>

                            {/* <Button text="Resend Verification Email" onClick={sendVerificationEmail} type="button" background="transparent" color="#269ACE" disable={spin} /> */}
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default withPublic(VerifyEmail);