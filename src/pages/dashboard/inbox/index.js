import { Button, Layout } from "@/components";
import { withProtected } from "@/hooks/routes";
import {PhoneIcon, MailIcon, PencilAltIcon, OfficeBuildingIcon, XIcon, PaperClipIcon} from "@heroicons/react/outline";
import Image from "next/image";


function Inbox() {
    return (
        <Layout>
          <div className="flex items-center justify-between py-5 bg-white shadow fixed z-[10] min-w-[1150px] top-0 right-0 px-4">
            <div>
                <button id="dropdownActionButton" data-dropdown-toggle="dropdownAction" className="inline-flex items-center text-gray-500 bg-white focus:outline-none hover:bg-gray-100 focus:ring-1 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5 " type="button">
                    <span className="sr-only">Actions button</span>
                    Actions
                    <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                    </svg>
                            
                </button>
                        
                <div id="dropdownAction" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                  <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownActionButton">
                    <li>
                      <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Reward</a>
                    </li>
                    <li>
                      <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Promote</a>
                    </li>
                    <li>
                      <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Activate account</a>
                    </li>
                  </ul>
                  <div className="py-1">
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete User</a>
                  </div>
                </div>
            </div>
              <label for="table-search" className="sr-only">Search</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                  </svg>
                </div>
                <input type="text" id="table-search-users" className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for users" />
              </div>
            </div>


            <section className="inbox-wrapper overflow-hidden h-full pt-16">
              <div className="pt-3 messages overflow-y-auto  bg-gray-100">
                <div className="flex items-center justify-end gap-3 mb-10 px-5">
                  <span className="text-sm text-gray-500">12:00</span>
                  <div className="bg-setly-200 px-3 py-2 rounded-md bg-opacity-20">
                    <span className="">This is a new message I have sent to you today,</span>

                  </div>
                  <Image class="w-10 h-10 rounded-full shadow-lg" src="https://flowbite-admin-dashboard.vercel.app/images/users/bonnie-green-2x.png" alt="Bonnie image" height={30} width={80} />
                </div>

                <div className="flex flex-row-reverse items-center justify-end gap-3 mb-10 px-5">
                  <span className="text-sm text-gray-500">12:00</span>
                  <div className="bg-setly-100 px-3 py-2 rounded-md bg-opacity-20">
                    <span className="">This is a new message I have sent to you today, I hope you get it.
                    This is a new message I have sent to you today, I hope you get it.
                    This is a new message I have sent to you today, I hope you get it.
                    This is a new message I have sent to you today, I hope you get it.</span>
                  </div>
                  <Image class="w-10 h-10 rounded-full shadow-lg" src="https://flowbite-admin-dashboard.vercel.app/images/users/bonnie-green-2x.png" alt="Bonnie image" height={30} width={80} />
                </div>

                <div className="flex items-center justify-end gap-3 mb-10 px-5">
                  <span className="text-sm text-gray-500">12:00</span>
                  <div className="bg-setly-200 px-3 py-2 rounded-md bg-opacity-20">
                    <span className="">This is a new message I have sent to you today, I hope you get it.</span>
                  </div>
                  <Image class="w-10 h-10 rounded-full shadow-lg" src="https://flowbite-admin-dashboard.vercel.app/images/users/bonnie-green-2x.png" alt="Bonnie image" height={30} width={80} />
                </div>

                      <div className="flex flex-row-reverse items-center justify-end gap-3 mb-10 px-5">
                        <span className="text-sm text-gray-500">12:00</span>
                        <div className="bg-setly-100 px-3 py-2 rounded-md bg-opacity-20">
                          <span className="">This is a new message I have sent to you today, I hope you get it.
                          This is a new message I have sent to you today, I hope you get it.
                          This is a new message I have sent to you today, I hope you get it.
                          This is a new message I have sent to you today, I hope you get it.</span>
                          This is a new message I have sent to you today, I hope you get it.This is a new message I have sent to you today, I hope you get it.
                          This is a new message I have sent to you today, I hope you get it.

                        </div>
                        <Image class="w-10 h-10 rounded-full shadow-lg" src="https://flowbite-admin-dashboard.vercel.app/images/users/bonnie-green-2x.png" alt="Bonnie image" height={30} width={80} />
                      </div>

                      <div className="flex items-center justify-end gap-3 mb-10 px-5">
                        <span className="text-sm text-gray-500">12:00</span>
                        <div className="bg-setly-200 px-3 py-2 rounded-md bg-opacity-20">
                          <span className="">This is a new message I have sent to you today, I hope you get it.</span>

                        </div>
                        <Image class="w-10 h-10 rounded-full shadow-lg" src="https://flowbite-admin-dashboard.vercel.app/images/users/bonnie-green-2x.png" alt="Bonnie image" height={30} width={80} />
                      </div>

                      <div className="flex flex-row-reverse items-center justify-end gap-3 mb-10 px-5">
                        <span className="text-sm text-gray-500">12:00</span>
                        <div className="bg-setly-100 px-3 py-2 rounded-md bg-opacity-20">
                          <span className="">This is a new message I have sent to you today, I hope you get it.
                          This is a new message I have sent to you today, I hope you get it.
                          This is a new message I have sent to you today, I hope you get it.
                          This is a new message I have sent to you today, I hope you get it.</span>
                          This is a new message I have sent to you today, I hope you get it.This is a new message I have sent to you today, I hope you get it.
                          This is a new message I have sent to you today, I hope you get it.

                        </div>
                        <Image class="w-10 h-10 rounded-full shadow-lg" src="https://flowbite-admin-dashboard.vercel.app/images/users/bonnie-green-2x.png" alt="Bonnie image" height={30} width={80} />
                      </div>

                      <div className="flex items-center justify-end gap-3 mb-10 px-5">
                        <span className="text-sm text-gray-500">12:00</span>
                        <div className="bg-setly-200 px-3 py-2 rounded-md bg-opacity-20">
                          <span className="">This is a new message I have sent to you today, I hope you get it.</span>

                        </div>
                        <Image class="w-10 h-10 rounded-full shadow-lg" src="https://flowbite-admin-dashboard.vercel.app/images/users/bonnie-green-2x.png" alt="Bonnie image" height={30} width={80} />
                      </div>

                      <div className="flex flex-row-reverse items-center justify-end gap-3 mb-10 px-5">
                        <span className="text-sm text-gray-500">12:00</span>
                        <div className="bg-setly-100 px-3 py-2 rounded-md bg-opacity-20">
                          <span className="">This is a new message I have sent to you today, I hope you get it.
                          This is a new message I have sent to you today, I hope you get it.
                          This is a new message I have sent to you today, I hope you get it.
                          This is a new message I have sent to you today, I hope you get it.</span>
                          This is a new message I have sent to you today, I hope you get it.This is a new message I have sent to you today, I hope you get it.
                          This is a new message I have sent to you today, I hope you get it.

                        </div>
                        <Image class="w-10 h-10 rounded-full shadow-lg" src="https://flowbite-admin-dashboard.vercel.app/images/users/bonnie-green-2x.png" alt="Bonnie image" height={30} width={80} />
                      </div>

                      <div className="flex items-center justify-end gap-3 mb-10 px-5">
                        <span className="text-sm text-gray-500">12:00</span>
                        <div className="bg-setly-200 px-3 py-2 rounded-md bg-opacity-20">
                          <span className="">This is a new message I have sent to you today, I hope you get it.</span>

                        </div>
                        <Image class="w-10 h-10 rounded-full shadow-lg" src="https://flowbite-admin-dashboard.vercel.app/images/users/bonnie-green-2x.png" alt="Bonnie image" height={30} width={80} />
                      </div>

                      <div className="flex flex-row-reverse items-center justify-end gap-3 mb-10 px-5">
                        <span className="text-sm text-gray-500">12:00</span>
                        <div className="bg-setly-100 px-3 py-2 rounded-md bg-opacity-20">
                          <span className="">This is a new message I have sent to you today, I hope you get it.
                          This is a new message I have sent to you today, I hope you get it.
                          This is a new message I have sent to you today, I hope you get it.
                          This is a new message I have sent to you today, I hope you get it.</span>
                          This is a new message I have sent to you today, I hope you get it.This is a new message I have sent to you today, I hope you get it.
                          This is a new message I have sent to you today, I hope you get it.

                        </div>
                        <Image class="w-10 h-10 rounded-full shadow-lg" src="https://flowbite-admin-dashboard.vercel.app/images/users/bonnie-green-2x.png" alt="Bonnie image" height={30} width={80} />
                      </div>

                      <div className="flex items-center justify-end gap-3 mb-10 px-5">
                        <span className="text-sm text-gray-500">12:00</span>
                        <div className="bg-setly-200 px-3 py-2 rounded-md bg-opacity-20">
                          <span className="">This is a new message I have sent to you today, I hope you get it.</span>

                        </div>
                        <Image class="w-10 h-10 rounded-full shadow-lg" src="https://flowbite-admin-dashboard.vercel.app/images/users/bonnie-green-2x.png" alt="Bonnie image" height={30} width={80} />
                      </div>

                      <div className="flex flex-row-reverse items-center justify-end gap-3 mb-10 px-5">
                        <span className="text-sm text-gray-500">12:00</span>
                        <div className="bg-setly-100 px-3 py-2 rounded-md bg-opacity-20">
                          <span className="">This is a new message I have sent to you today, I hope you get it.
                          This is a new message I have sent to you today, I hope you get it.
                          This is a new message I have sent to you today, I hope you get it.
                          This is a new message I have sent to you today, I hope you get it.</span>
                          This is a new message I have sent to you today, I hope you get it.This is a new message I have sent to you today, I hope you get it.
                          This is a new message I have sent to you today, I hope you get it.

                        </div>
                        <Image class="w-10 h-10 rounded-full shadow-lg" src="https://flowbite-admin-dashboard.vercel.app/images/users/bonnie-green-2x.png" alt="Bonnie image" height={30} width={80} />
                      </div>

                      <div className="flex items-center justify-end gap-3 mb-10 px-5">
                        <span className="text-sm text-gray-500">12:00</span>
                        <div className="bg-setly-200 px-3 py-2 rounded-md bg-opacity-20">
                          <span className="">This is a new message I have sent to you today, I hope you get it.</span>

                        </div>
                        <Image class="w-10 h-10 rounded-full shadow-lg" src="https://flowbite-admin-dashboard.vercel.app/images/users/bonnie-green-2x.png" alt="Bonnie image" height={30} width={80} />
                      </div>

                      <div className="flex flex-row-reverse items-center justify-end gap-3 mb-10 px-5">
                        <span className="text-sm text-gray-500">12:00</span>
                        <div className="bg-setly-100 px-3 py-2 rounded-md bg-opacity-20">
                          <span className="">This is a new message I have sent to you today, I hope you get it.
                          This is a new message I have sent to you today, I hope you get it.
                          This is a new message I have sent to you today, I hope you get it.
                          This is a new message I have sent to you today, I hope you get it.</span>
                          This is a new message I have sent to you today, I hope you get it.This is a new message I have sent to you today, I hope you get it.
                          This is a new message I have sent to you today, I hope you get it.

                        </div>
                        <Image class="w-10 h-10 rounded-full shadow-lg" src="https://flowbite-admin-dashboard.vercel.app/images/users/bonnie-green-2x.png" alt="Bonnie image" height={30} width={80} />
                      </div>

                      


                    </div>

                  
                    <div className="flex gap-x-5 footer items-center justify-between px-4">
                      <PaperClipIcon className="h-6 w-6 text-gray-400" />
                      <textarea className="border h-fit w-full px-1"></textarea>
                      <div>
                        <Button text="Send" disable={false} disabled={false} />
                      </div>
                    </div>


                  <aside className="side-profile overflow-y-auto">

                    <div className="pb-12 pt-2">
                      
                      <div className="flex gap-2 items-center justify-between mb-6 py-4 shadow-lg rounded-md px-2 w-full">
                          <div className="flex gap-2 items-center">
                                <Image class="w-12 h-12 rounded-full shadow-lg" src="https://flowbite-admin-dashboard.vercel.app/images/users/bonnie-green-2x.png" alt="Bonnie image" height={30} width={80} />
                                <div className="">
                                  <h4 className="mb-0 text-sm font-medium">Julia Hosten</h4>
                                    <p className="text-xs">Project Manager</p>
                                    <p className="text-xs truncate w-28">Hello Kate how are things going</p>
                                </div>
                            </div>
                            <div className="flex flex-col items-center">
                              <span className="text-xs font-bold">13:55</span>
                              <span class="inline-flex items-center justify-center w-2 h-2 p-[0.6rem] text-xs font-medium text-white bg-blue-600 rounded-full">3</span>
                            </div>
                        </div>

                        <div className="flex gap-2 items-center justify-between mb-6 py-4 rounded-md px-2 w-full">
                          <div className="flex gap-2 items-center">
                                <Image class="w-12 h-12 rounded-full shadow-lg" src="https://flowbite-admin-dashboard.vercel.app/images/users/bonnie-green-2x.png" alt="Bonnie image" height={30} width={80} />
                                <div className="">
                                  <h4 className="mb-0 text-sm font-medium">Julia Hosten</h4>
                                    <p className="text-xs">Project Manager</p>
                                    <p className="text-xs truncate w-28">Hello Kate how are things going</p>
                                </div>
                            </div>
                            <div className="flex flex-col items-center">
                              <span className="text-xs font-bold">13:55</span>
                              <span class="inline-flex items-center justify-center w-2 h-2 p-[0.6rem] text-xs font-medium text-white bg-blue-600 rounded-full">3</span>
                            </div>
                        </div>

                        <div className="flex gap-2 items-center justify-between mb-6 py-4 rounded-md px-2 w-full">
                          <div className="flex gap-2 items-center">
                                <Image class="w-12 h-12 rounded-full shadow-lg" src="https://flowbite-admin-dashboard.vercel.app/images/users/bonnie-green-2x.png" alt="Bonnie image" height={30} width={80} />
                                <div className="">
                                  <h4 className="mb-0 text-sm font-medium">Julia Hosten</h4>
                                    <p className="text-xs">Project Manager</p>
                                    <p className="text-xs truncate w-28">Hello Kate how are things going</p>
                                </div>
                            </div>
                            <div className="flex flex-col items-center">
                              <span className="text-xs font-bold">13:55</span>
                              <span class="inline-flex items-center justify-center w-2 h-2 p-[0.6rem] text-xs font-medium text-white bg-blue-600 rounded-full">3</span>
                            </div>
                        </div>

                        <div className="flex gap-2 items-center justify-between mb-6 py-4 rounded-md px-2 w-full">
                          <div className="flex gap-2 items-center">
                                <Image class="w-12 h-12 rounded-full shadow-lg" src="https://flowbite-admin-dashboard.vercel.app/images/users/bonnie-green-2x.png" alt="Bonnie image" height={30} width={80} />
                                <div className="">
                                  <h4 className="mb-0 text-sm font-medium">Julia Hosten</h4>
                                    <p className="text-xs">Project Manager</p>
                                    <p className="text-xs truncate w-28">Hello Kate how are things going</p>
                                </div>
                            </div>
                            <div className="flex flex-col items-center">
                              <span className="text-xs font-bold">13:55</span>
                              <span class="inline-flex items-center justify-center w-2 h-2 p-[0.6rem] text-xs font-medium text-white bg-blue-600 rounded-full">3</span>
                            </div>
                        </div>

                        <div className="flex gap-2 items-center justify-between mb-6 py-4 rounded-md px-2 w-full">
                          <div className="flex gap-2 items-center">
                                <Image class="w-12 h-12 rounded-full shadow-lg" src="https://flowbite-admin-dashboard.vercel.app/images/users/bonnie-green-2x.png" alt="Bonnie image" height={30} width={80} />
                                <div className="">
                                  <h4 className="mb-0 text-sm font-medium">Julia Hosten</h4>
                                    <p className="text-xs">Project Manager</p>
                                    <p className="text-xs truncate w-28">Hello Kate how are things going</p>
                                </div>
                            </div>
                            <div className="flex flex-col items-center">
                              <span className="text-xs font-bold">13:55</span>
                              <span class="inline-flex items-center justify-center w-2 h-2 p-[0.6rem] text-xs font-medium text-white bg-blue-600 rounded-full">3</span>
                            </div>
                        </div>

                        <div className="flex gap-2 items-center justify-between mb-6 py-4 rounded-md px-2 w-full">
                          <div className="flex gap-2 items-center">
                                <Image class="w-12 h-12 rounded-full shadow-lg" src="https://flowbite-admin-dashboard.vercel.app/images/users/bonnie-green-2x.png" alt="Bonnie image" height={30} width={80} />
                                <div className="">
                                  <h4 className="mb-0 text-sm font-medium">Julia Hosten</h4>
                                    <p className="text-xs">Project Manager</p>
                                    <p className="text-xs truncate w-28">Hello Kate how are things going</p>
                                </div>
                            </div>
                            <div className="flex flex-col items-center">
                              <span className="text-xs font-bold">13:55</span>
                              <span class="inline-flex items-center justify-center w-2 h-2 p-[0.6rem] text-xs font-medium text-white bg-blue-600 rounded-full">3</span>
                            </div>
                        </div>

                        <div className="flex gap-2 items-center justify-between mb-6 py-4 rounded-md px-2 w-full">
                          <div className="flex gap-2 items-center">
                                <Image class="w-12 h-12 rounded-full shadow-lg" src="https://flowbite-admin-dashboard.vercel.app/images/users/bonnie-green-2x.png" alt="Bonnie image" height={30} width={80} />
                                <div className="">
                                  <h4 className="mb-0 text-sm font-medium">Julia Hosten</h4>
                                    <p className="text-xs">Project Manager</p>
                                    <p className="text-xs truncate w-28">Hello Kate how are things going</p>
                                </div>
                            </div>
                            <div className="flex flex-col items-center">
                              <span className="text-xs font-bold">13:55</span>
                              <span class="inline-flex items-center justify-center w-2 h-2 p-[0.6rem] text-xs font-medium text-white bg-blue-600 rounded-full">3</span>
                            </div>
                        </div>

                        <div className="flex gap-2 items-center justify-between mb-6 py-4 rounded-md px-2 w-full">
                          <div className="flex gap-2 items-center">
                                <Image class="w-12 h-12 rounded-full shadow-lg" src="https://flowbite-admin-dashboard.vercel.app/images/users/bonnie-green-2x.png" alt="Bonnie image" height={30} width={80} />
                                <div className="">
                                  <h4 className="mb-0 text-sm font-medium">Julia Hosten</h4>
                                    <p className="text-xs">Project Manager</p>
                                    <p className="text-xs truncate w-28">Hello Kate how are things going</p>
                                </div>
                            </div>
                            <div className="flex flex-col items-center">
                              <span className="text-xs font-bold">13:55</span>
                              <span class="inline-flex items-center justify-center w-2 h-2 p-[0.6rem] text-xs font-medium text-white bg-blue-600 rounded-full">3</span>
                            </div>
                        </div>

                        <div className="flex gap-2 items-center justify-between mb-6 py-4 rounded-md px-2 w-full">
                          <div className="flex gap-2 items-center">
                                <Image class="w-12 h-12 rounded-full shadow-lg" src="https://flowbite-admin-dashboard.vercel.app/images/users/bonnie-green-2x.png" alt="Bonnie image" height={30} width={80} />
                                <div className="">
                                  <h4 className="mb-0 text-sm font-medium">Julia Hosten</h4>
                                    <p className="text-xs">Project Manager</p>
                                    <p className="text-xs truncate w-28">Hello Kate how are things going</p>
                                </div>
                            </div>
                            <div className="flex flex-col items-center">
                              <span className="text-xs font-bold">13:55</span>
                              <span class="inline-flex items-center justify-center w-2 h-2 p-[0.6rem] text-xs font-medium text-white bg-blue-600 rounded-full">3</span>
                            </div>
                        </div>


                        <div className="flex gap-2 items-center justify-between py-4 rounded-md px-2 w-full">
                            <div className="flex gap-2 items-center">
                                <Image class="w-12 h-12 rounded-full shadow-lg" src="https://flowbite-admin-dashboard.vercel.app/images/users/bonnie-green-2x.png" alt="Bonnie image" height={30} width={80} />
                                <div className="">
                                  <h4 className="mb-0 text-sm font-medium">Julia Hosten</h4>
                                    <p className="text-xs">Project Manager</p>
                                    <p className="text-xs truncate w-28">Hello Kate how are things going</p>
                                </div>
                            </div>
                            <div className="flex flex-col items-center">
                              <span className="text-xs font-bold">13:55</span>
                              <span class="inline-flex items-center justify-center w-2 h-2 p-[0.6rem] text-xs font-medium text-white bg-blue-600 rounded-full">3</span>
                            </div>
                        </div>
                    </div>
                  </aside>
            </section>
        </Layout>
    );
}

export default withProtected(Inbox);