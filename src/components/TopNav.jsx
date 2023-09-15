import { Montserrat } from "next/font/google";
import { DropDown } from ".";
const inter = Montserrat({ subsets: ["latin"] });


function TopNav() {
    return (
        <div className={`${inter.className} flex items-center justify-end gap-12 dark:border-b dark:border-slate-700 bg-white dark:bg-slate-900 shadow dark:shadow-none w-full topnav px-4 h-16`}>
            <DropDown />
            <label for="table-search" className="sr-only">Search</label>
            <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                    </svg>
                </div>
                <input type="text" id="table-search-users" className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 dark:border-gray-100 rounded-lg w-80 bg-gray-50 dark:bg-slate-900 focus:ring-blue-500 focus:border-blue-500 dark:placeholder-gray-300 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for users" />
            </div>
        </div>
    );
}

export default TopNav;