import Link from "next/link";
import { Inter, Montserrat } from "next/font/google"
const inter = Montserrat({ subsets: ['latin'] });
import {InboxInIcon, HomeIcon, ChartPieIcon, UserGroupIcon, QuestionMarkCircleIcon, CogIcon, LogoutIcon} from "@heroicons/react/outline";
import Image from "next/image";
import { useRouter } from "next/router";


function SideBar() {
    const router = useRouter();

    return (
        <aside id="separator-sidebar" className="pt-16 pb-4 z-40 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
            <div className="h-full flex flex-col justify-between px-3 py-4 overflow-y-auto bg-gray-50">
                <ul className="space-y-5 font-medium">
                    <li>
                        <Link href="/dashboard" className={`flex items-center p-2 hover:text-white hover:bg-setly-200 group ${router.pathname === "/dashboard" ? "rounded-lg text-white bg-setly-200" : "text-gray-900 rounded-lg"}`}>
                            <HomeIcon className="h-6 w-6 mr-3" />
                            <span>Dashboard</span>
                        </Link>
                    </li>

                    <li>
                        <Link href="/leads" className="flex items-center p-2 text-gray-900 rounded-lg hover:text-white hover:bg-setly-200 group">
                            <ChartPieIcon className="h-6 w-6 mr-3" />
                            <span>Analytics</span>
                        </Link>
                    </li>

                    <li>
                        <Link href="/dashboard/prospects" className={`flex items-center p-2 hover:text-white hover:bg-setly-200 group ${router.pathname === "/dashboard/prospects" ? "rounded-lg text-white bg-setly-200" : "text-gray-900 rounded-lg"}`}>
                            <UserGroupIcon className="h-6 w-6 mr-3" />
                            <span>Prospects</span>
                        </Link>
                    </li>

                    <li>
                        <Link href="/dashboard" className={`flex items-center p-2 hover:text-white hover:bg-setly-200 group ${router.pathname === "/dashboard/inbox" ? "rounded-lg text-white bg-setly-200" : "text-gray-900 rounded-lg"}`}>
                            <InboxInIcon className="h-6 w-6 mr-3" />
                            <span className="flex-1 ml-3 whitespace-nowrap">Inbox</span>
                            <span class="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-white bg-setly-100 rounded-full hover:bg-white hover:text-setly-100">3</span>
                        </Link>
                    </li>

                </ul>
                <ul className="pt-4 mt-4 space-y-5 font-medium border-t border-gray-200 dark:border-gray-700">
                    <li>
                        <Link href="/dashboard" className="flex items-center p-2 text-gray-900 rounded-lg hover:text-white hover:bg-setly-200 group">
                            <QuestionMarkCircleIcon className="h-6 w-6 mr-3" />
                            <span>Help</span>
                        </Link>
                    </li>

                    <li>
                        <Link href="/dashboard" className="flex items-center p-2 text-gray-900 rounded-lg hover:text-white hover:bg-setly-200 group">
                            <CogIcon className="h-6 w-6 mr-3" />
                            <span>Settings</span>
                        </Link>
                    </li>

                    <li>
                        <Link href="/dashboard" className="flex items-center p-2 text-gray-900 rounded-lg hover:text-white hover:bg-setly-200 group">
                            <LogoutIcon className="h-6 w-6 mr-3" />
                            <span>Logout</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </aside>
    );
}

export default SideBar;