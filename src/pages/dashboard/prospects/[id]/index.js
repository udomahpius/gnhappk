import { Button, ProspectModalTabs } from "@/components";
import { withProtected } from "@/hooks/routes";
import { MailIcon } from "@heroicons/react/outline";
import Image from "next/image";
import Link from "next/link";


function Prospect() {
    return (
        <div className="inbox-wrapper w-full h-full transform bg-white dark:bg-slate-900 text-left align-middle  transition-all">
            <div className="messages w-full h-full pt-6">
                <ProspectModalTabs />
            </div>

            <aside className="side-profile h-full border-r dark:border-slate-700">
                <div class="w-full max-w-sm pt-2 mb-6 px-6">
                    <div class="flex flex-col items-center pb-8">
                        <Image class="w-20 h-20 mb-3 rounded-full shadow-lg" src="https://flowbite-admin-dashboard.vercel.app/images/users/bonnie-green-2x.png" alt="Bonnie image" height={30} width={80} />
                        <h5 class="text-xl font-medium text-gray-900 py-0 mb-0">John Doe</h5>
                        <span class="text-sm text-yellow-500 capitalize">Pending</span>

                        <div className="my-3">
                            <Link className="h-9 w-9 border border-setly-200 rounded-full flex items-center justify-center cursor-pointer" href="/dashboard/inbox">
                                <MailIcon className="h-5 w-5 text-setly-300" />
                            </Link>
                        </div>


                        <div className="flex gap-1 items-center">
                            <span class="w-2 h-2 flex bg-green-400 rounded-full"></span>
                            <span className="text-gray-500 dark:text-gray-300 text-sm">Last activity : 2 Jan 2020 at 09:00 AM</span>
                        </div>
                            {/* <div className="flex gap-3 items-center mt-3">
                              <div className="h-10 w-10 bg-gray-100 flex items-center justify-center rounded-md">
                                <OfficeBuildingIcon className="h-5 w-5" />
                              </div>
                              <div className="flex flex-col items-center">
                                <span class="text-sm text-black font-bold">Software Engineer</span>
                                <span class="text-sm text-gray-500">Los Angeles</span>
                              </div>
                            </div> */}

                            
                    </div>

                    <div className="mb-4">
                        <h5 className="text-gray-400 dark:text-gray-400 text-sm">Job Title</h5>
                        <span className="text-gray-600 dark:text-gray-300 font-medium">Content Writer</span>
                    </div>

                    <div className="mb-4">
                        <h5 className="text-gray-400 dark:text-gray-400 text-sm">Email</h5>
                        <span className="text-gray-600 dark:text-gray-300 font-medium">joremebell@gmail.com</span>
                    </div>

                    <div className="mb-4">
                        <h5 className="text-gray-400 dark:text-gray-400 text-sm">Phone</h5>
                        <span className="text-gray-600 dark:text-gray-300 font-medium">(405)555-1230</span>
                    </div>

                    <div className="mb-7">
                        <h5 className="text-gray-400 dark:text-gray-400 text-sm">Prospect source</h5>
                        <span className="text-gray-600 dark:text-gray-300 font-medium">Linkedin</span>
                    </div>

                    <Button text="Remove Prospect" background="red" />
                </div>

                    {/* <div class="w-full max-w-sm pt-4 pb-5 px-5 mb-6">
                      <h5 class="text-md font-medium text-gray-900 mb-5">Labels</h5>

                      <div className="flex justify-between items-center">
                        <div className="flex gap-1 items-center">
                          <PhoneIcon className="h-5 w-5" />
                          <span class="text-sm text-black font-medium">Phone</span>
                        </div>
                        <div className="flex gap-4 items-center">
                          <span class="text-sm text-gray-500">No Phone</span>
                          <PencilAltIcon className="h-5 w-5" />
                        </div>
                      </div>
                    </div>


                    <div class="w-full max-w-sm pt-4 pb-5 px-5">
                      <h5 class="text-md font-medium text-gray-900 mb-5">Contacts</h5>
                      <div className="flex justify-between items-center mb-6">
                        <div className="flex gap-1 items-center">
                          <MailIcon className="h-5 w-5" />
                          <span class="text-sm text-black font-medium">Email</span>
                        </div>
                        <div className="flex gap-4 items-center">
                          <span class="text-sm text-gray-500">No Email</span>
                          <PencilAltIcon className="h-5 w-5" />
                        </div>
                      </div>

                      <div className="flex justify-between items-center">
                        <div className="flex gap-1 items-center">
                          <PhoneIcon className="h-5 w-5" />
                          <span class="text-sm text-black font-medium">Phone</span>
                        </div>
                        <div className="flex gap-4 items-center">
                          <span class="text-sm text-gray-500">No Phone</span>
                          <PencilAltIcon className="h-5 w-5" />
                        </div>
                      </div>
                    </div> */}


            </aside>


        </div>
    );
}

export default withProtected(Prospect);