import { useState, useEffect } from "react";
import Link from "next/link";
import { deleteCookie } from "cookies-next";
import { Inter, Montserrat } from "next/font/google"
const inter = Montserrat({ subsets: ['latin'] });
import {InboxIcon, HomeIcon, UserGroupIcon, QuestionMarkCircleIcon, CogIcon, LogoutIcon, BellIcon, CollectionIcon, SunIcon, DocumentTextIcon, CashIcon} from "@heroicons/react/outline";
import { MoonIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { useRouter } from "next/router";
import logo from "@/assets/setly2.svg";
import AuthService from "@/services1/AuthService";



function SideBar({ toggleMode, darkSide, user }) {
    const router = useRouter();

    useEffect(() => {
        console.log(darkSide);
    }, [darkSide]);

    const logout = async () => {
        try {
            const response = await AuthService.logout();
            console.log(response);
            localStorage.removeItem("setly_user");
            deleteCookie("setly.sid");
            router.replace("/auth/login");
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <aside id="separator-sidebar" className="side-bar h-screen transition-transform -translate-x-full sm:translate-x-0 border-r dark:border-gray-800 z-[100] shadow-lg" aria-label="Sidebar">
            <div className="h-full flex flex-col justify-between px-3 pb-4 pt-7 overflow-y-auto bg-white dark:bg-slate-900">
                <div>
                    <div className="flex justify-start mb-12 ml-2">
                        <Image src={logo} className="" width="150" height={20} alt="Setly Logo" />
                    </div>

                    <button className="mb-8 p-2 rounded-md relative w-full flex justify-between items-center hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                        <div className="flex gap-3">
                            <div className="">
                                <Image className="rounded-full h-10 w-10" src={`https://ui-avatars.com/api/?name=${user?.name?.split("")[0]}+${user?.name?.split("")[1]}`}
                                width={85} height={85} alt={`${user?.name} image`} priority={true} />
                                <span className="bottom-2 left-9 absolute w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
                            </div>
                            <div className="flex flex-col items-start justify-start text-clip overflow-hidden">
                                <h3 className="text-gray-500 dark:text-gray-300 text-sm font-bold"> { user?.name }</h3>
                                <span className="text-[0.7rem] text-gray-600 dark:text-gray-300 font-semibold  truncate">{ user?.phone }</span>
                            </div>
                        </div>
                        {/* { process.env.NEXT_PUBLIC_SETLY_POINTS } */}
                        <BellIcon className="h-7 w-7 text-gray-500 dark:text-gray-300" />
                        <span className="absolute inline-flex items-center justify-center w-5 h-5 text-xs text-white font-medium bg-red-600 border-white rounded-full top-2 right-2 dark:border-gray-900">0</span>
                    </button>


                    <ul className="space-y-5 font-medium">
                        <li>
                            <Link href="/dashboard" className={`flex items-center p-2 text-sm hover:text-white hover:rounded-lg hover:bg-gradient-to-r from-SETLY-BLUE to-SETLY-GREEN group ${router.pathname === "/dashboard" ? "text-SETLY-BLUE" : "text-gray-600 dark:text-gray-300 rounded-lg hover:bg-gradient-to-r from-SETLY-BLUE to-SETLY-GREEN"}`}>
                                <HomeIcon className="h-6 w-6 mr-3" />
                                <span>Dashboard</span>
                            </Link>
                        </li>

                        <li>
                            <Link href="/dashboard/earnings" className={`flex items-center p-2 text-sm hover:text-white hover:rounded-lg hover:bg-gradient-to-r from-SETLY-BLUE to-SETLY-GREEN group ${router.pathname === "/dashboard/earnings" ? "text-SETLY-BLUE" : "text-gray-600 dark:text-gray-300 rounded-lg hover:bg-gradient-to-r from-SETLY-BLUE to-SETLY-GREEN"}`}>
                                <CashIcon className="h-6 w-6 mr-3" />
                                <span className="flex-1 whitespace-nowrap group-hover:text-white">Earnings</span>
                            </Link>
                        </li>

                        <li>
                            <Link href="/dashboard/donations" className={`group flex items-center p-2 text-sm hover:text-white hover:rounded-lg hover:bg-gradient-to-r from-SETLY-BLUE to-SETLY-GREEN group ${router.pathname === "/dashboard/donations" ? "text-SETLY-BLUE" : "text-gray-600 dark:text-gray-300 rounded-lg hover:bg-gradient-to-r from-SETLY-BLUE to-SETLY-GREEN"}`}>
                                <UserGroupIcon className="h-6 w-6 mr-3" />
                                <span>Donations</span>
                            </Link>
                        </li>

                        <li>
                            <Link href="/dashboard/transactions" className={`flex items-center p-2 text-sm hover:text-white hover:rounded-lg hover:bg-gradient-to-r from-SETLY-BLUE to-SETLY-GREEN group ${router.pathname === "/dashboard/transactions" ? "text-SETLY-BLUE" : "text-gray-600 dark:text-gray-300 rounded-lg hover:bg-gradient-to-r from-SETLY-BLUE to-SETLY-GREEN"}`}>
                                <CollectionIcon className="h-6 w-6 mr-3" />
                                <span className="flex-1 whitespace-nowrap group-hover:text-white">Referrals</span>
                            </Link>
                        </li>

                    </ul>
                </div>
                
                <ul className="pt-4 mt-4 mb-4 space-y-5 font-medium border-t border-gray-200 dark:border-gray-700">
                    <li>
                        <Link href="/dashboard/help" className={`flex items-center p-2 text-sm hover:text-white hover:rounded-lg hover:bg-gradient-to-r from-SETLY-BLUE to-SETLY-GREEN group ${router.pathname === "/dashboard/help" ? "text-SETLY-BLUE" : "text-gray-600 dark:text-gray-300 rounded-lg hover:bg-gradient-to-r from-SETLY-BLUE to-SETLY-GREEN"}`}>
                            <QuestionMarkCircleIcon className="h-6 w-6 mr-3" />
                            <span>Help</span>
                        </Link>
                    </li>

                    <li>
                        <Link href="/dashboard/settings" className={`flex items-center p-2 text-sm hover:text-white hover:rounded-lg hover:bg-gradient-to-r from-SETLY-BLUE to-SETLY-GREEN group ${router.pathname === "/dashboard/settings" ? "text-SETLY-BLUE" : "text-gray-600 dark:text-gray-300 rounded-lg hover:bg-gradient-to-r from-SETLY-BLUE to-SETLY-GREEN"}`}>
                            <CogIcon className="h-6 w-6 mr-3" />
                            <span>Settings</span>
                        </Link>
                    </li>

                    <li>
                        <button className="flex w-full items-center p-2 text-sm text-gray-600 hover:text-white hover:rounded-lg hover:bg-gradient-to-r from-SETLY-BLUE to-SETLY-GREEN dark:text-gray-300 rounded-lg dark:hover:text-gray-300 setly-bg-hover group" onClick={logout}>
                            <LogoutIcon className="h-6 w-6 mr-3" />
                            <span>Logout</span>
                        </button>
                    </li>
                </ul>
                {/* <div className="flex items-center gap-2 pl-2 text-[0.8rem] font-medium text-gray-600 dark:text-gray-300">
                    <CashIcon className="h-5 w-5" />
                    <span>{ user?.points }/500 Credits</span>
                </div> */}
                
            </div>
        </aside>
    );
}

export default SideBar;