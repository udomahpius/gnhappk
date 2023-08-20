import { Menu, Transition, Popover } from "@headlessui/react"
import { Fragment, useEffect, useRef, useState } from "react"
//import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { ChevronDownIcon, CashIcon, CogIcon} from "@heroicons/react/outline";
import Image from "next/image";
import Link from "next/link";


const solutions = [
  {
    name: 'Insights',
    description: 'Measure actions your users take',
    href: '##',
    icon: CogIcon,
  },
  {
    name: 'Automations',
    description: 'Create your own targeted content',
    href: '##',
    icon: CashIcon,
  },
  {
    name: 'Reports',
    description: 'Keep track of your growth',
    href: '##',
    icon: CogIcon,
  },
]

export default function TopMenu() {
  return (
    // <div className="">
    //   <Menu as="div" className="relative inline-block text-left">
    //     <div>
    //       <Menu.Button className="bg-gray-100 p-2 rounded-md relative flex gap-4 items-center hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">

    //         <div className="relative">
    //           <Image className="rounded-full h-10 w-10" src="https://flowbite-admin-dashboard.vercel.app/images/users/bonnie-green-2x.png" 
    //             width={85} height={85} alt="" />
    //           <span class="bottom-0 left-7 absolute w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
    //         </div>
    //         <div className="flex flex-col items-start justify-start">
    //           <h3>Saviour Essien</h3>
    //           <span className="text-[0.7rem]">essiensaviour.a@gmail.com</span>
    //         </div>
    //         <ChevronDownIcon className="h-6 w-6" />
    //       </Menu.Button>
    //     </div>
    //     <Transition
    //       as={Fragment}
    //       enter="transition ease-out duration-100"
    //       enterFrom="transform opacity-0 scale-95"
    //       enterTo="transform opacity-100 scale-100"
    //       leave="transition ease-in duration-75"
    //       leaveFrom="transform opacity-100 scale-100"
    //       leaveTo="transform opacity-0 scale-95"
    //     >
    //       <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-[50]">
    //         <div className="px-1 py-1 ">
    //           <Menu.Item>
    //             {({ active }) => (
    //               <button
    //                 className={`${
    //                   active ? 'bg-violet-500 text-white' : 'text-gray-900'
    //                 } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
    //               >
    //                 {active ? (
    //                   <EditActiveIcon
    //                     className="mr-2 h-5 w-5"
    //                     aria-hidden="true"
    //                   />
    //                 ) : (
    //                   <EditInactiveIcon
    //                     className="mr-2 h-5 w-5"
    //                     aria-hidden="true"
    //                   />
    //                 )}
    //                 Edit
    //               </button>
    //             )}
    //           </Menu.Item>
    //           <Menu.Item>
    //             {({ active }) => (
    //               <button
    //                 className={`${
    //                   active ? 'bg-violet-500 text-white' : 'text-gray-900'
    //                 } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
    //               >
    //                 {active ? (
    //                   <DuplicateActiveIcon
    //                     className="mr-2 h-5 w-5"
    //                     aria-hidden="true"
    //                   />
    //                 ) : (
    //                   <DuplicateInactiveIcon
    //                     className="mr-2 h-5 w-5"
    //                     aria-hidden="true"
    //                   />
    //                 )}
    //                 Duplicate
    //               </button>
    //             )}
    //           </Menu.Item>
    //         </div>
    //         <div className="px-1 py-1">
    //           <Menu.Item>
    //             {({ active }) => (
    //               <button
    //                 className={`${
    //                   active ? 'bg-violet-500 text-white' : 'text-gray-900'
    //                 } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
    //               >
    //                 {active ? (
    //                   <ArchiveActiveIcon
    //                     className="mr-2 h-5 w-5"
    //                     aria-hidden="true"
    //                   />
    //                 ) : (
    //                   <ArchiveInactiveIcon
    //                     className="mr-2 h-5 w-5"
    //                     aria-hidden="true"
    //                   />
    //                 )}
    //                 Archive
    //               </button>
    //             )}
    //           </Menu.Item>
    //           <Menu.Item>
    //             {({ active }) => (
    //               <button
    //                 className={`${
    //                   active ? 'bg-violet-500 text-white' : 'text-gray-900'
    //                 } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
    //               >
    //                 {active ? (
    //                   <MoveActiveIcon
    //                     className="mr-2 h-5 w-5"
    //                     aria-hidden="true"
    //                   />
    //                 ) : (
    //                   <MoveInactiveIcon
    //                     className="mr-2 h-5 w-5"
    //                     aria-hidden="true"
    //                   />
    //                 )}
    //                 Move
    //               </button>
    //             )}
    //           </Menu.Item>
    //         </div>
    //         <div className="px-1 py-1">
    //           <Menu.Item>
    //             {({ active }) => (
    //               <button
    //                 className={`${
    //                   active ? 'bg-violet-500 text-white' : 'text-gray-900'
    //                 } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
    //               >
    //                 {active ? (
    //                   <DeleteActiveIcon
    //                     className="mr-2 h-5 w-5 text-violet-400"
    //                     aria-hidden="true"
    //                   />
    //                 ) : (
    //                   <DeleteInactiveIcon
    //                     className="mr-2 h-5 w-5 text-violet-400"
    //                     aria-hidden="true"
    //                   />
    //                 )}
    //                 Delete
    //               </button>
    //             )}
    //           </Menu.Item>
    //         </div>
    //       </Menu.Items>
    //     </Transition>
    //   </Menu>
    // </div>
    <div className=" w-full max-w-sm px-4">
      <Popover className="relative">
        {({ open }) => (
          <>
            <Popover.Button className="bg-gray-100 p-2 rounded-md relative flex gap-4 items-center hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
              <div className="">
                <Image className="rounded-full h-10 w-10" src="https://flowbite-admin-dashboard.vercel.app/images/users/bonnie-green-2x.png" 
                  width={85} height={85} alt="" />
                <span class="bottom-2 left-9 absolute w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
              </div>
              <div className="flex flex-col items-start justify-start">
                <h3>Saviour Essien</h3>
                <span className="text-[0.7rem]">essiensaviour.a@gmail.com</span>
              </div>
              <ChevronDownIcon className="h-6 w-6" />
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-screen max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-sm">
                <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                  <div className="relative grid gap-8 bg-white p-7 lg:grid-cols-1">
                    {solutions.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                      >
                        <div className="shrink-0 text-black">
                          <item.icon aria-hidden="true" className="h-6 w-6" />
                        </div>
                        <div className="ml-4">
                          <p className="text-sm font-medium text-gray-900">
                            {item.name}
                          </p>
                          <p className="text-sm text-gray-500">
                            {item.description}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                  {/* <div className="bg-gray-50 p-4">
                    <a
                      href="##"
                      className="flow-root rounded-md px-2 py-2 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                    >
                      <span className="flex items-center">
                        <span className="text-sm font-medium text-gray-900">
                          Documentation
                        </span>
                      </span>
                      <span className="block text-sm text-gray-500">
                        Start integrating products and tools
                      </span>
                    </a>
                  </div> */}
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </div>
  )
}

function EditInactiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 13V16H7L16 7L13 4L4 13Z"
        fill="#EDE9FE"
        stroke="#A78BFA"
        strokeWidth="2"
      />
    </svg>
  )
}

function EditActiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 13V16H7L16 7L13 4L4 13Z"
        fill="#8B5CF6"
        stroke="#C4B5FD"
        strokeWidth="2"
      />
    </svg>
  )
}

function DuplicateInactiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 4H12V12H4V4Z"
        fill="#EDE9FE"
        stroke="#A78BFA"
        strokeWidth="2"
      />
      <path
        d="M8 8H16V16H8V8Z"
        fill="#EDE9FE"
        stroke="#A78BFA"
        strokeWidth="2"
      />
    </svg>
  )
}

function DuplicateActiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 4H12V12H4V4Z"
        fill="#8B5CF6"
        stroke="#C4B5FD"
        strokeWidth="2"
      />
      <path
        d="M8 8H16V16H8V8Z"
        fill="#8B5CF6"
        stroke="#C4B5FD"
        strokeWidth="2"
      />
    </svg>
  )
}

function ArchiveInactiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="5"
        y="8"
        width="10"
        height="8"
        fill="#EDE9FE"
        stroke="#A78BFA"
        strokeWidth="2"
      />
      <rect
        x="4"
        y="4"
        width="12"
        height="4"
        fill="#EDE9FE"
        stroke="#A78BFA"
        strokeWidth="2"
      />
      <path d="M8 12H12" stroke="#A78BFA" strokeWidth="2" />
    </svg>
  )
}

function ArchiveActiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="5"
        y="8"
        width="10"
        height="8"
        fill="#8B5CF6"
        stroke="#C4B5FD"
        strokeWidth="2"
      />
      <rect
        x="4"
        y="4"
        width="12"
        height="4"
        fill="#8B5CF6"
        stroke="#C4B5FD"
        strokeWidth="2"
      />
      <path d="M8 12H12" stroke="#A78BFA" strokeWidth="2" />
    </svg>
  )
}

function MoveInactiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M10 4H16V10" stroke="#A78BFA" strokeWidth="2" />
      <path d="M16 4L8 12" stroke="#A78BFA" strokeWidth="2" />
      <path d="M8 6H4V16H14V12" stroke="#A78BFA" strokeWidth="2" />
    </svg>
  )
}

function MoveActiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M10 4H16V10" stroke="#C4B5FD" strokeWidth="2" />
      <path d="M16 4L8 12" stroke="#C4B5FD" strokeWidth="2" />
      <path d="M8 6H4V16H14V12" stroke="#C4B5FD" strokeWidth="2" />
    </svg>
  )
}

function DeleteInactiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="5"
        y="6"
        width="10"
        height="10"
        fill="#EDE9FE"
        stroke="#A78BFA"
        strokeWidth="2"
      />
      <path d="M3 6H17" stroke="#A78BFA" strokeWidth="2" />
      <path d="M8 6V4H12V6" stroke="#A78BFA" strokeWidth="2" />
    </svg>
  )
}

function DeleteActiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="5"
        y="6"
        width="10"
        height="10"
        fill="#8B5CF6"
        stroke="#C4B5FD"
        strokeWidth="2"
      />
      <path d="M3 6H17" stroke="#C4B5FD" strokeWidth="2" />
      <path d="M8 6V4H12V6" stroke="#C4B5FD" strokeWidth="2" />
    </svg>
  )
}
