import { DocumentIcon, CalendarIcon, ChevronUpIcon } from "@heroicons/react/outline";
import { Montserrat } from "next/font/google";
const inter = Montserrat({ subsets: ['latin'] });
import { Disclosure } from "@headlessui/react";

function WorkflowTab() {
    return (
        <div className="h-full border grid grid-cols-2 gap-12 py-3">
            <div>

                <h4 className="mb-3">Upcoming Tasks</h4>
                    <div className="flex w-full justify-between items-center rounded-lg px-4 py-2 bg-white pb-3 text-left text-sm font-medium hover:bg-gray-300 cursor-pointer">
                            <div className="flex gap-5 items-center">
                                <ChevronUpIcon
                                    className={`${
                                        open ? 'rotate-180 transform' : ''
                                    } h-5 w-5 text-gray-500`}
                                />
                                <span className="h-8 w-8 rounded-full bg-gray-100 flex justify-center items-center">
                                    <DocumentIcon className="h-5 w-5 text-blue-500" />
                                </span>
                            </div>
                            
                            <div className="flex gap-2 items-center">
                                <CalendarIcon className="h-4 w-4 text-gray-500" />
                                <span className="text-sm text-gray-600 font-medium">Today, 12:00 PM</span>
                            </div>
                        </div>

            </div>

            <div>
                <ol class="relative text-gray-500 border-l border-gray-200 dark:border-gray-700 dark:text-gray-400">                  
                    <li class="mb-10 ml-6">            
                        <span class="absolute flex items-center justify-center w-8 h-8 bg-white rounded-full -left-4 ring-4 ring-white">
                            <svg class="w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                            </svg>
                        </span>
                        <h3 class="font-medium leading-tight">Personal Info</h3>
                        <p class="text-sm">Step details here</p>
                    </li>
                    <li class="mb-10 ml-6">
                        <span class="absolute flex items-center justify-center w-8 h-8 bg-white rounded-full -left-4 ring-4 ring-white">
                            <svg class="w-3.5 h-3.5 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                                <path d="M18 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2ZM6.5 3a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3.014 13.021l.157-.625A3.427 3.427 0 0 1 6.5 9.571a3.426 3.426 0 0 1 3.322 2.805l.159.622-6.967.023ZM16 12h-3a1 1 0 0 1 0-2h3a1 1 0 0 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Z"/>
                            </svg>
                        </span>
                        <h3 class="font-medium leading-tight">Account Info</h3>
                        <p class="text-sm">Step details here</p>
                    </li>
                    <li class="mb-10 ml-6">
                        <span class="absolute flex items-center justify-center w-8 h-8 bg-white rounded-full -left-4 ring-4 ring-white">
                            <svg class="w-3.5 h-3.5 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                                <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z"/>
                            </svg>
                        </span>
                        <h3 class="font-medium leading-tight">Review</h3>
                        <p class="text-sm">Step details here</p>
                    </li>
                    <li class="ml-6">
                        <span class="absolute flex items-center justify-center w-8 h-8 bg-white rounded-full -left-4 ring-4 ring-white">
                            <svg class="w-3.5 h-3.5 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                                <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2ZM7 2h4v3H7V2Zm5.7 8.289-3.975 3.857a1 1 0 0 1-1.393 0L5.3 12.182a1.002 1.002 0 1 1 1.4-1.436l1.328 1.289 3.28-3.181a1 1 0 1 1 1.392 1.435Z"/>
                            </svg>
                        </span>
                        <h3 class="font-medium leading-tight">Confirmation</h3>
                        <p class="text-sm">Step details here</p>
                    </li>
                </ol>
            </div>
        </div>
    );
}

export default WorkflowTab;