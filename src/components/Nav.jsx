import Link from "next/link";
import { Inter, Montserrat } from "next/font/google"
const inter = Montserrat({ subsets: ['latin'] });
import Image from "next/image";
import TopMenu from "./TopMenu";
import logo from "@/assets/icon.png";
import { BellIcon } from "@heroicons/react/outline";


function Nav() {
    return (
        <nav className="fixed top-0 z-50 w-full border-b border-slate-600 bg-white">
            <div class=" flex flex-wrap items-center justify-between py-3 px-3">
                <Image src={logo} class="mr-3" width={40} height={30} alt="Flowbite Logo" />
                <div className="flex gap-12">
                    <button type="button" class="relative text-sm font-medium text-center">
                        <BellIcon className="h-8 w-8" />
                        <span class="sr-only">Notifications</span>
                        <div class="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-blue-500 border-white rounded-full -top-1 -right-2 dark:border-gray-900">20</div>
                    </button>
                    <TopMenu />
                </div>
                
            </div>
       </nav>
    );
}

export default Nav;