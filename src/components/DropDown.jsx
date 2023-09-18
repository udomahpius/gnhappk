import React, { useState } from "react";
import { createPopper } from '@popperjs/core';

const Dropdown = () => {
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
      <button id="dropdownActionButton" data-dropdown-toggle="dropdownAction" className="inline-flex items-center text-gray-500 dark:text-white bg-white dark:bg-slate-900 border-2 dark:border focus:outline-none hover:bg-gray-100 focus:ring-1 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5 " type="button" onClick={toggle}>
        <span className="sr-only ">Actions button</span>
          Actions
        <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
        </svg>    
      </button>
                        
      <div id="dropdownAction" className={`z-10 absolute top-9 bg-white divide-y w-44 divide-gray-100 rounded-lg shadow  dark:bg-gray-700 dark:divide-gray-600 ${visible ? "flex" : "hidden"}`}>
        <ul className="py-1 text-sm text-gray-700 dark:text-gray-200 w-full" aria-labelledby="dropdownActionButton">
          <li>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Reward</a>
          </li>
          <li>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Promote</a>
          </li>
          <li>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Activate account</a>
          </li>

          <li>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Activate account</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dropdown;