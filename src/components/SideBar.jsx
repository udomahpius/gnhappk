import Link from "next/link";
import { Inter, Montserrat } from "next/font/google"
const inter = Montserrat({ subsets: ['latin'] });
import {InboxInIcon, HomeIcon, ChartPieIcon, UserGroupIcon, QuestionMarkCircleIcon, CogIcon, LogoutIcon, BellIcon} from "@heroicons/react/outline";
import Image from "next/image";
import { useRouter } from "next/router";
import logo from "@/assets/logo-white.png";


function SideBar() {
    const router = useRouter();

    return (
        <aside id="separator-sidebar" className="h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
            <div className="h-full flex flex-col justify-between px-3 py-4 overflow-y-auto black">
                <div>
                    <div className="flex justify-center mb-10">
                        <Image src={logo} class="" width={60} height={30} alt="Flowbite Logo" />
                    </div>
                    <ul className="space-y-5 font-medium">
                        <li>
                            <Link href="/dashboard" className={`flex items-center p-2 hover:text-white setly-bg-hover group ${router.pathname === "/dashboard" ? "rounded-lg text-white setly-bg" : "text-gray-300 rounded-lg"}`}>
                                <HomeIcon className="h-6 w-6 mr-3" />
                                <span>Dashboard</span>
                            </Link>
                        </li>

                        <li>
                            <Link href="/dashboard/analytics" className={`flex items-center p-2 hover:text-white setly-bg-hover group ${router.pathname === "/dashboard/analytics" ? "rounded-lg text-white setly-bg" : "text-gray-300 rounded-lg"}`}>
                                <ChartPieIcon className="h-6 w-6 mr-3" />
                                <span>Analytics</span>
                            </Link>
                        </li>

                        <li>
                            <Link href="/dashboard/prospects" className={`flex items-center p-2 hover:text-white setly-bg-hover group ${router.pathname === "/dashboard/prospects" ? "rounded-lg text-white setly-bg" : "text-gray-300 rounded-lg"}`}>
                                <UserGroupIcon className="h-6 w-6 mr-3" />
                                <span>Prospects</span>
                            </Link>
                        </li>

                        <li>
                            <Link href="/dashboard/inbox" className={`flex items-center p-2 hover:text-white setly-bg-hover group ${router.pathname === "/dashboard/inbox" ? "rounded-lg text-white setly-bg" : "text-gray-300 rounded-lg"}`}>
                                <InboxInIcon className="h-6 w-6 mr-3" />
                                <span className="flex-1 ml-3 whitespace-nowrap">Inbox</span>
                                <span class="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-white setly-bg rounded-full hover:bg-white hover:text-setly-100">3</span>
                            </Link>
                        </li>

                    </ul>
                </div>
                
                <ul className="pt-4 mt-4 space-y-5 font-medium border-t border-gray-200 dark:border-gray-700">
                    <li>
                        <Link href="/dashboard/help" className={`flex items-center p-2 hover:text-white setly-bg-hover group ${router.pathname === "/dashboard/help" ? "rounded-lg text-white setly-bg" : "text-gray-300 rounded-lg"}`}>
                            <QuestionMarkCircleIcon className="h-6 w-6 mr-3" />
                            <span>Help</span>
                        </Link>
                    </li>

                    <li>
                        <Link href="/dashboard/settings" className={`flex items-center p-2 hover:text-white setly-bg-hover group ${router.pathname === "/dashboard/settings" ? "rounded-lg text-white setly-bg" : "text-gray-300 rounded-lg"}`}>
                            <CogIcon className="h-6 w-6 mr-3" />
                            <span>Settings</span>
                        </Link>
                    </li>

                    <li>
                        <Link href="/dashboard/settings" className="flex items-center p-2 text-gray-300 rounded-lg hover:text-white setly-bg-hover group">
                            <LogoutIcon className="h-6 w-6 mr-3" />
                            <span>Logout</span>
                        </Link>
                    </li>
                </ul>
                <button className="p-2 rounded-md relative flex gap-5 items-start hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                    <div className="">
                        <Image className="rounded-full h-10 w-10" src="https://flowbite-admin-dashboard.vercel.app/images/users/bonnie-green-2x.png" 
                        width={85} height={85} alt="" />
                        <span class="bottom-2 left-9 absolute w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
                    </div>
                    <div className="flex flex-col items-start justify-start text-clip overflow-hidden">
                        <h3 className="text-white text-sm font-bold">Saviour Essien</h3>
                        <span className="text-[0.7rem] text-gray-200 truncate w-28">essiensavioudjgdfghfghftgyhfr.a@gmail.com</span>
                    </div>
                    <BellIcon className="h-7 w-7 mr-3 text-gray-300" />
                    <span class="absolute inline-flex items-center justify-center w-6 h-6 text-xs text-white bg-blue-500 border-white rounded-full -top-1 right-7 dark:border-gray-900">20</span>
                </button>
            </div>
        </aside>
    );
}

export default SideBar;