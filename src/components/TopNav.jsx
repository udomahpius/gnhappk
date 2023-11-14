import { DropDown, TopSearch } from ".";


function TopNav({ placeholder, inputValue, setInputValue }) {
    return (
        <div className="flex items-center justify-end gap-12 dark:border-b dark:border-slate-700 bg-white dark:bg-slate-900 shadow-lg dark:shadow-none w-full topnav px-4 h-16">
            <DropDown />
            <label htmlFor="table-search" className="sr-only">Search</label>
            <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                    </svg>
                </div>
                <TopSearch placeholder={placeholder} inputValue={inputValue} setInputValue={setInputValue} />
            </div>
        </div>
    );
}

export default TopNav;