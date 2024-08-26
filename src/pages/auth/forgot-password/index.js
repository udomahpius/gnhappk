"use client";
import React, { useState, useContext } from "react";
import smathealth from "@/assets/good-logo.png";
import Image from "next/image";
import { useRouter } from "next/navigation";
import * as EmailValidator from "email-validator";
import Link from "next/link";
import { MailIcon } from "@heroicons/react/outline";
import { Button } from "@/components/index.js";
import { forgotPassword, signInWithPhoneAndPassword } from "@/api/requestFactory/auth";
import useRequest from "@/api/useRequest";
import { storeUserSession } from "@/api/workspace";
import { GlobalLoader } from "@/components";
import Notification from "@/components/Notification";
import { NotificationContext } from "@/context/notification-context";


const ForgotPassword = () => {
  const router = useRouter();
  const { requestMaker } = useRequest();
  const { notification, showNotification, hideNotification } = useContext(NotificationContext);
  const [emailSent, setEmailSent] = useState(false);
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');


    async function signInWithEmailPassword(e) {
      e.preventDefault();
      setEmailError('');
      if(!email) {
        setEmailError("Email address is required");
        return;
      }
        // regex for email validation
      if(!EmailValidator.validate(email)) {
        setEmailError("Please enter a valid email");
        return;
      }
      requestMaker(forgotPassword(email))
        .then((res) => {
          setEmailSent(true);
          showNotification({
            title: "Success",
            content: res.message,
          },
            "success"
          );
        })
        .catch((err) => {
        console.log(err);
        showNotification({
          title: "Something went wrong",
          content: err.response?.data?.message || "Something went wrong",
        },
          "error"
      );
    })
  }


  return (
    <>
      <Notification
        message={notification.message}
        type={notification.type}
        show={notification.show}
        onClose={hideNotification}
      >

      </Notification>
      <main className="flex w-full h-screen">
        <section className="w-[50%] bg-[#677597] hidden md:flex flex-col justify-end items-center text-white text-center">
          <div className="mb-20 px-16">
            <h2 className="text-[32px] font-bold mb-20">Good Neighbourhood</h2>
            <h3 className="text-[24px] font-bold capitalize">Helping uplifting poverty</h3>
            <p className="text-[16px] font-medium">We are connecting the community to another sustainable stream of income to survive the harsh economy</p>
            <div className="flex justify-center gap-2 mt-5">
              <span className="w-[16px] bg-[#CDD8F3] h-[8px] rounded-[12px] flex"></span>
              <span className="w-[8px] bg-[#DFE2E9] h-[8px] rounded-full flex"></span>
              <span className="w-[8px] bg-[#DFE2E9] h-[8px] rounded-full flex"></span>
            </div>
          </div> 
        </section>

        <section className="w-full md:w-[50%] bg-[#EDF0F8] flex flex-col gap-10 md:gap-28 px-5 md:p-[32px] py-3 md:py-0">
          <Image src={smathealth} width="65" height="" alt="" className="self-end" />
          {emailSent && <div className="md:col-span-2 col-span-7 w-full flex flex-col gap-[32px]">
            <div className="flex flex-col items-center mb-3">
              <div className="font-1 text-[18px] font-bold leading-[30px] mb-[3px]">
                Reset Mail Sent
              </div>
              <p className="text-[13px] text-center text-[#63768D] font400 cursor-pointer">
                We&apos;ve sent you an email, kindly click on the link in the email to recover your password
              </p>
            </div>

            <div className="mx-auto w-[50%]">
              <Link href="https://mail.google.com/mail/u/0/#inbox"
                target="_blank"
                className="inline-flex w-full items-center justify-center gap-2 transition-all duration-150 rounded-[8px] px-3 py-2 sm:px-4 sm:py-2.5 text-sm font-semibold hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-800 bg-purple-700 text-white disabled:bg-gray-300 disabled:cursor-not-allowed">
                Check your mail app
              </Link>
            </div>
          </div>}


          {!emailSent && <form className="px-2 md:px-[100px]">
            <div className="text-center mb-8">
              <h4 className="font-bold text-[24px] text-[#051438]">Forgot Password</h4>
              <p className="text-[16px] text-[#677597] font-medium">Provide your email address to change your password</p>
            </div>

            <div className="mb-5">
              <label className="mb-2 text-gray-800 text-sm flex">Email Address</label>
              <div className="border bg-white rounded-lg px-4 flex justify-between h-14 hover:border-setly-100 hover:border-2">
                <div className="flex gap-3 items-center w-full">
                  <MailIcon className="h-5 w-5 text-gray-600" />
                  <input type="email" name="email" placeholder="Enter email address" className="w-full flex items-center h-full outline-none text-gray-700"
                    onChange={(e) => setEmail(e.target.value)} value={email} />
                </div>          
              </div>
              {emailError &&
                <small className="text-sm text-red-600 mt-1.5">
                  {emailError}
                </small>
              }                
            </div>

            <Button text="Reset Password" type="submit" onClick={signInWithEmailPassword} />

            <div className="flex justify-center items-center gap-1 mt-4">
              <span className="text-gray-800 text-[14px]">Back to Login</span>
              <Link href="/auth/login" className="text-[#0B0C7D] font-bold flex text-[14px]">Login</Link>
            </div>
          </form>}
        </section>
      </main>
      <GlobalLoader></GlobalLoader>
    </>
  )
}

export default ForgotPassword;