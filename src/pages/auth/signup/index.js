"use client";
import React, { useState, useEffect, useContext } from "react";
import smathealth from "@/assets/good-logo.png";
import Image from "next/image";
import { useRouter } from "next/navigation";
import * as EmailValidator from "email-validator";
import Link from "next/link";
import { UserCircleIcon, LockClosedIcon, PhoneIcon, MailIcon, ReceiptRefundIcon } from "@heroicons/react/outline";
import { Button } from "@/components/index.js";
import { signUpWithPhoneAndPassword } from "@/api/requestFactory/auth";
import useRequest from "@/api/useRequest";
import { retrieveToken } from "@/services/auth";
import { storeUserSession } from "@/api/workspace";
import { GlobalLoader } from "@/components";
import Notification from "@/components/Notification";
import { NotificationContext } from "@/context/notification-context";
import itek from "@/assets/itek-logo.jpeg";



const Signup = () => {
    const router = useRouter();
    const { requestMaker } = useRequest();
    const { notification, showNotification, hideNotification } = useContext(NotificationContext);
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [code, setCode] = useState('');
    const [password, setPassword] = useState('');
    const [nameError, setNameError] = useState('');
    const [phoneError, setPhoneError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [passwordFieldType, setPasswordFieldType] = useState('password');


    useEffect(() => {
      retrieveToken().then((value) => {
        if(value) {
          router.replace('/home');
        }
      }).catch((error) => {
        console.log(error);
      });
    }, [router]);

    async function createAccount(e) {
      e.preventDefault();
      setNameError('');
      setPhoneError('');
      setPasswordError('');
      if(!name) {
        setNameError("Full Name is required");
        return;
      }
      if(!phone) {
        setPhoneError("Phone is required");
        return;
      }
      if(phone.length < 11) {
        setPasswordError("Phone number must be valid");
        return;
      }
      if(!email) {
        setEmailError("Email is required");
        return;
      }
      if(!EmailValidator.validate(email)) {
        setEmailError("Please enter a valid email");
        return;
      }
      if(!password) {
        setPasswordError("Password is required");
        return;
      }
      
      if(password.length < 6) {
        setPasswordError("Password must be at least 6 characters long");
        return;
      }
      requestMaker(signUpWithPhoneAndPassword(name, phone, email, password, code))
        .then((res) => {
            showNotification({
                title: "Success",
                content: res.message,
            },
                "success"
            );
            storeUserSession({
              access_token: res?.data?.authorization,
              expires_at: res?.data?.expires_at,
              expires_in: res?.data?.expires_in,
              user: {
                id: res?.data?.id,
                phone: res?.data?.phone,
                email: res?.data?.email,
                created_at: res?.data?.created_at,
                updated_at: res?.data?.updated_at,
                status: res?.data?.account_status
              }
            });
            router.push("/auth/callback");
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
    const [checked, setChecked] = React.useState(false);
const handleChange = () => {
  setChecked(!checked);
};


    return (
      <>
        <Notification
          message={notification.message}
          type={notification.type}
          show={notification.show}
          onClose={hideNotification}
        ></Notification>
        <main className="flex w-full h-screen">
          <section className="w-[50%] bg-[#677597] hidden md:flex flex-col justify-end items-center text-white text-center">
            <div className="mb-20 px-16">
              <h2 className="text-[32px] font-bold mb-20">
                Good Neighbourhood
              </h2>
              <h3 className="text-[24px] font-bold capitalize">
                Helping uplifting poverty
              </h3>
              <p className="text-[16px] font-medium">
                We are connecting the community to another sustainable stream of
                income to survive the harsh economy
              </p>
              <div className="flex justify-center gap-2 mt-5">
                <span className="w-[16px] bg-[#CDD8F3] h-[8px] rounded-[12px] flex"></span>
                <span className="w-[8px] bg-[#DFE2E9] h-[8px] rounded-full flex"></span>
                <span className="w-[8px] bg-[#DFE2E9] h-[8px] rounded-full flex"></span>
              </div>
            </div>
          </section>

          <section className="w-full md:w-[50%] bg-[#EDF0F8] flex flex-col gap-7 md:gap-28 px-5 md:p-[32px] py-3 md:py-0">
            <Image
              src={smathealth}
              width="65"
              height=""
              alt=""
              className="self-end"
            />

            <form className="px-2 md:px-[100px]">
              <div className="text-center mb-8">
                <h4 className="font-bold text-[24px] text-[#051438]">
                  Welcome
                </h4>
                <p className="text-[16px] text-[#677597] font-medium">
                  Provide your details to create an account
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 justify-between gap-3 mb-5">
                <div className="">
                  <label className="mb-2 text-gray-800 text-sm flex">
                    Full Name
                  </label>
                  <div>
                    <div className="border rounded-lg px-4 flex justify-between h-14 bg-white hover:border-setly-100 hover:border-2">
                      <div className="flex gap-3 items-center w-full">
                        <UserCircleIcon className="h-6 w-6 text-gray-600" />
                        <input
                          type="text"
                          name="name"
                          placeholder="Enter full name"
                          className="w-full flex items-center h-full outline-none text-gray-700"
                          onChange={(e) => setName(e.target.value)}
                          value={name}
                        />
                      </div>
                    </div>
                    {nameError && (
                      <small className="text-sm text-red-600 mt-1.5">
                        {nameError}
                      </small>
                    )}
                  </div>
                </div>

                <div className="">
                  <label className="mb-2 text-gray-800 text-sm flex">
                    Phone Number
                  </label>
                  <div className="border bg-white rounded-lg px-4 flex justify-between h-14 hover:border-setly-100 hover:border-2">
                    <div className="flex gap-3 items-center w-full">
                      <PhoneIcon className="h-5 w-5 text-gray-600" />
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Enter Phone Number"
                        className="w-full flex items-center h-full outline-none text-gray-700"
                        onChange={(e) => setPhone(e.target.value)}
                        value={phone}
                      />
                    </div>
                  </div>
                  {phoneError && (
                    <small className="text-sm text-red-600 mt-1.5">
                      {phoneError}
                    </small>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 justify-between gap-3 mb-5">
                <div className="">
                  <label className="mb-2 text-gray-800 text-sm flex">
                    Email Address
                  </label>
                  <div className="border bg-white rounded-lg px-4 flex justify-between h-14 hover:border-setly-100 hover:border-2">
                    <div className="flex gap-3 items-center w-full">
                      <MailIcon className="h-5 w-5 text-gray-600" />
                      <input
                        type="email"
                        name="email"
                        placeholder="Enter Email Address"
                        className="w-full flex items-center h-full outline-none text-gray-700"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                      />
                    </div>
                  </div>
                  {emailError && (
                    <small className="text-sm text-red-600 mt-1.5">
                      {emailError}
                    </small>
                  )}
                </div>

                <div className="">
                  <label className="mb-2 text-gray-800 text-sm flex">
                    Password
                  </label>
                  <div className="border bg-white rounded-lg px-4 flex justify-between h-14 hover:border-setly-100 hover:border-2">
                    <div className="flex gap-3 items-center w-full">
                      <LockClosedIcon className="h-5 w-5 text-gray-600" />
                      <input
                        name="password"
                        className="w-full flex items-center h-full outline-none text-gray-700"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        type={passwordFieldType}
                      />
                    </div>
                    <div className="flex items-center pr-2">
                      <button
                        onClick={() =>
                          setPasswordFieldType(
                            passwordFieldType === "password"
                              ? "text"
                              : "password"
                          )
                        }
                        type="button"
                        className="text-gray-400 hover:text-gray-500"
                      >
                        <span className="sr-only">Show Password</span>
                        {passwordFieldType === "password" ? (
                          <svg
                            className="w-5 h-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M3.70692 2.29298C3.51832 2.11082 3.26571 2.01003 3.00352 2.01231C2.74132 2.01458 2.49051 2.11975 2.3051 2.30516C2.11969 2.49057 2.01452 2.74138 2.01224 3.00358C2.00997 3.26578 2.11076 3.51838 2.29292 3.70698L16.2929 17.707C16.4815 17.8891 16.7341 17.9899 16.9963 17.9877C17.2585 17.9854 17.5093 17.8802 17.6947 17.6948C17.8801 17.5094 17.9853 17.2586 17.9876 16.9964C17.9899 16.7342 17.8891 16.4816 17.7069 16.293L16.2339 14.82C17.7914 13.5781 18.9432 11.8999 19.5419 9.99998C18.2679 5.94298 14.4779 2.99998 9.99992 2.99998C8.43235 2.99785 6.88642 3.36583 5.48792 4.07398L3.70692 2.29298ZM7.96792 6.55298L9.48192 8.06798C9.82101 7.97793 10.1778 7.97853 10.5166 8.06971C10.8554 8.16089 11.1643 8.33946 11.4124 8.58755C11.6604 8.83563 11.839 9.14452 11.9302 9.48331C12.0214 9.8221 12.022 10.1789 11.9319 10.518L13.4459 12.032C13.8969 11.268 14.0811 10.3758 13.9696 9.49566C13.858 8.61554 13.4571 7.79747 12.8297 7.17016C12.2024 6.54284 11.3844 6.14187 10.5042 6.03033C9.62412 5.91878 8.7319 6.10199 7.96792 6.55298Z"
                              fill="#667085"
                            />
                            <path
                              d="M12.454 16.697L9.75001 13.992C8.77769 13.9311 7.86103 13.5174 7.17206 12.8286C6.4831 12.1398 6.06918 11.2233 6.00801 10.251L2.33501 6.578C1.49022 7.58402 0.852357 8.74692 0.458008 10C1.73201 14.057 5.52301 17 10 17C10.847 17 11.669 16.895 12.454 16.697Z"
                              fill="#667085"
                            />
                          </svg>
                        ) : (
                          <svg
                            className="w-5 h-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                            <path
                              fillRule="evenodd"
                              d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        )}
                      </button>
                    </div>
                  </div>
                  {passwordError && (
                    <small className="text-sm text-red-600 mt-1.5">
                      {passwordError}
                    </small>
                  )}
                </div>
              </div>

              <div className="mb-5">
                <label className="mb-2 text-gray-800 text-sm flex">
                  Referral Phone Number (Optional)
                </label>
                <div className="border bg-white rounded-lg px-4 flex justify-between h-14 hover:border-setly-100 hover:border-2">
                  <div className="flex gap-3 items-center w-full">
                    <ReceiptRefundIcon className="h-5 w-5 text-gray-600" />
                    <input
                      type="text"
                      name="code"
                      placeholder="Enter Referral Code"
                      className="w-full flex items-center h-full outline-none text-gray-700"
                      onChange={(e) => setCode(e.target.value)}
                      value={code}
                    />
                  </div>
                </div>
              </div>

              
<ul className="flex justify-center mt-5 space-x-5">
<input
                type="checkbox"
                checked={checked}
                onChange={handleChange}
              />
              <li>
                <Link
                  href="/terms-conditions"
                  className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400"
                >
                  {" "}
                  Terms &amp; Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
              <Button
                text="Create Account"
                className="bg-white "
                type="submit"
                onClick={createAccount}
              />

              <div className="flex justify-center items-center gap-1 mt-4">
                <span className="text-gray-800 text-[14px]">
                  Already have an account?{" "}
                </span>
                <Link
                  href="/auth/login"
                  className="text-[#0B0C7D] font-bold flex text-[14px] text-green-800"
                >
                  Login
                </Link>
              </div>
            </form>
          </section>
        </main>
        <GlobalLoader></GlobalLoader>
      </>
    );
}

export default Signup;