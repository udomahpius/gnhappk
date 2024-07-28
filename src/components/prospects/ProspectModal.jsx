import { Dialog, Transition } from "@headlessui/react"
import Image from "next/image";
import { Fragment, useEffect, useState } from "react";
import {PhoneIcon, MailIcon, PencilAltIcon, OfficeBuildingIcon, XIcon, PaperClipIcon, TrashIcon} from "@heroicons/react/outline";
import ProspectService from "@/services1/ProspectService";
import { Button, Labels, ProspectModalTabs } from "..";
import Link from "next/link";


function InboxModal({isOpen, closeModal, prospect }) {

  const [prospects, setProspects] = useState({});
  const [disabled, setDisabled] = useState(false);


    // useEffect(() => {
    //     //fetchLeads();
    //     console.log(prospect);
    // },)

  // const fetchLeads = async () => {
  //   setDisabled(true);
  //   try {
  //     const response = await ProspectService.fetchProspects();
  //     console.log(response);
  //     //toast.success(response.data.message);
  //     setProspects(response.data.data);
  //     setDisabled(false);
  //   } catch (error) {
  //     console.log(error);
  //     //toast.error(error.response.data.message);
  //     setDisabled(false);
  //   }
  // }


  return (
    <>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-[100]" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <button onClick={closeModal} className="absolute right-2 top-5 z-10 h-10 w-10 bg-white rounded-full flex items-center justify-center">
              <XIcon className="h-5 w-5" />
            </button>
            <div className="flex min-h-full items-center justify-center py-4 px-16 text-center w-full">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="h-[700px] inbox-wrapper w-full transform rounded-xl bg-gray-100 text-left align-middle shadow-xl transition-all">
                  <div className="messages w-full h-full">
                    <ProspectModalTabs />
                  </div>

                  {/* <section className="messages hfull w-full border-2 border-red-500">
                    <div className="h-full border border-slate-800" >
                      
                    </div>
                  </section> */}


                <aside className="side-profile  border-r dark:border-slate-700 bg-white rounded-tl-xl rounded-bl-xl">
                  <div class="w-full max-w-sm mb-6">
                    <div class="flex flex-col items-center pb-8 mb-3 bg-SETLY-BLUE rounded-tl-xl pt-3">
                      <Image class="w-20 h-20 mb-3 rounded-full shadow-lg border-2" src="https://flowbite-admin-dashboard.vercel.app/images/users/bonnie-green-2x.png" alt="Bonnie image" height={30} width={80} />
                      <h5 class="text-xl font-medium text-gray-50 py-0 mb-0">{ prospect?.name }</h5>
                      <span class="text-sm text-[#da45da] capitalize">Pending</span>

                      <div className="my-3">
                        <Link className="px-4 py-1 border border-gray-200 rounded-full flex gap-2 items-center justify-center cursor-pointer" href="/dashboard/inbox">
                          <MailIcon className="h-5 w-5 text-gray-200" />
                          <span className="text-gray-100 text-sm">Send Message</span>
                        </Link>
                      </div>
                    </div>

                    <div className="w-full mb-9 px-4">
                      <div className="flex  items-center justify-between mb-2 w-full">
                          <div className="flex gap-1 items-center">
                            {/* <TagIcon className="h-4 w-4 text-amber-500" /> */}
                            <div className="flex flex-col text-xs">
                              <span>Current Label</span>
                              <span className="text-amber-500 text-sm">Standard</span> 
                            </div>
                          </div>
                          <Labels />
                        </div>

                        <div className="flex gap-1 items-center">
                          <span class="w-2 h-2 flex bg-green-400 rounded-full"></span>
                          <span className="text-gray-500 dark:text-gray-300 text-xs">Last activity : 2 Jan 2020 </span>
                        </div>
                    </div>

                    <div className="px-4">
                      <div className="mb-4">
                        <h5 className="text-gray-400 dark:text-gray-400 text-sm">Job Title</h5>
                        <span className="text-gray-600 dark:text-gray-300 font-medium">{ prospect?.job_title }</span>
                      </div>

                      <div className="mb-4">
                        <h5 className="text-gray-400 dark:text-gray-400 text-sm">Email</h5>
                        <span className="text-gray-600 dark:text-gray-300 font-medium">{ prospect?.email === null && "No Email" }</span>
                      </div>

                      <div className="mb-4">
                        <h5 className="text-gray-400 dark:text-gray-400 text-sm">Phone</h5>
                        <span className="text-gray-600 dark:text-gray-300 font-medium">{ prospect?.phone === null && "No Phone" }</span>
                      </div>

                      <div className="mb-7">
                        <h5 className="text-gray-400 dark:text-gray-400 text-sm">Prospect source</h5>
                        <span className="text-gray-600 dark:text-gray-300 font-medium">Linkedin</span>
                      </div>

                      <button className="text-xs text-red-600 font-semibold flex items-center gap-2">
                        <TrashIcon className="h-4 w-4" />
                        <span>Remove Prospect</span>
                      </button>
                    </div>

                                  
                  </div>

                </aside>


                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

export default InboxModal;