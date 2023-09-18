
function TopSearch({ inputValue, setInputValue, isHandling, placeholder }) {
    return (
        <input type="text" id="table-search-users" className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 dark:border-gray-100 rounded-lg w-80 bg-gray-50 dark:bg-slate-900 focus:ring-blue-500 focus:border-blue-500 dark:placeholder-gray-300 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={placeholder} 
            value={inputValue}
            onChange={(e) => {
                setInputValue(e.target.value)
            }}
        />
    );
}

export default TopSearch;