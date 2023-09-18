import React, { useState } from "react";
import { createPopper } from '@popperjs/core';

const Labels = ({ status }) => {
  // dropdown props
  const [visible, setVisible] = useState(false);
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();
  
  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "bottom-start"
    });
    setDropdownPopoverShow(true);
  };
  const toggle = () => {
    setVisible(!visible);
  };


  return (
    <div className="relative">
      <button id="dropdownActionButton" data-dropdown-toggle="dropdownAction" className="inline-flex text-amber-400 items-center text-sm dark:text-white bg-white dark:bg-slate-900  focus:outline-none hover:bg-gray-100 font-medium rounded-lg px-3 py-1.5 " type="button" onClick={toggle}>
        <span className="sr-only ">Actions button</span>
          Mark as Lead
        <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
        </svg>    
      </button>
                        
      <div id="dropdownAction" className={`z-10 h-[250px] overflow-y-auto absolute top-9 bg-white divide-y w-44 divide-gray-100 rounded-lg shadow-xl dark:bg-gray-700 dark:divide-gray-600 ${visible ? "block" : "hidden"}`}>
        <ul className="py-1 pl-2 text-sm text-gray-700 dark:text-gray-200 w-full" aria-labelledby="dropdownActionButton">
          <li className="flex gap-3 items-center">
            <div className="w-3 h-3 flex items-center">
                <input id="radio-table-search-1" type="radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                <label htmlFor="radio-table-search-1" className="sr-only">radio</label>
            </div>
            <a href="#" className="block py-2 w-full hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Reward</a>
          </li>
          <li className="flex gap-3 items-center">
            <div className="w-3 h-3 flex items-center">
                <input id="radio-table-search-1" type="radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                <label htmlFor="radio-table-search-1" className="sr-only">radio</label>
            </div>
            <a href="#" className="block py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Reward</a>
          </li>
          <li className="flex gap-3 items-center">
            <div className="w-3 h-3 flex items-center">
                <input id="radio-table-search-1" type="radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                <label htmlFor="radio-table-search-1" className="sr-only">radio</label>
            </div>
            <a href="#" className="block py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Reward</a>
          </li>
          <li className="flex gap-3 items-center">
            <div className="w-3 h-3 flex items-center">
                <input id="radio-table-search-1" type="radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                <label htmlFor="radio-table-search-1" className="sr-only">radio</label>
            </div>
            <a href="#" className="block py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Reward</a>
          </li>

          <li className="flex gap-3 items-center">
            <div className="w-3 h-3 flex items-center">
                <input id="radio-table-search-1" type="radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                <label htmlFor="radio-table-search-1" className="sr-only">radio</label>
            </div>
            <a href="#" className="block py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Reward</a>
          </li>
          <li className="flex gap-3 items-center">
            <div className="w-3 h-3 flex items-center">
                <input id="radio-table-search-1" type="radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                <label htmlFor="radio-table-search-1" className="sr-only">radio</label>
            </div>
            <a href="#" className="block py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Reward</a>
          </li>
          <li className="flex gap-3 items-center">
            <div className="w-3 h-3 flex items-center">
                <input id="radio-table-search-1" type="radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                <label htmlFor="radio-table-search-1" className="sr-only">radio</label>
            </div>
            <a href="#" className="block py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Reward</a>
          </li>
          <li className="flex gap-3 items-center">
            <div className="w-3 h-3 flex items-center">
                <input id="radio-table-search-1" type="radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                <label htmlFor="radio-table-search-1" className="sr-only">radio</label>
            </div>
            <a href="#" className="block py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Reward</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Labels;