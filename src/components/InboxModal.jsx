import { Dialog, Transition } from "@headlessui/react"
import Image from "next/image";
import { Fragment, useEffect, useState } from "react";
import {PhoneIcon, MailIcon, PencilAltIcon, OfficeBuildingIcon, XIcon} from "@heroicons/react/outline";
import ProspectService from "@/services/ProspectService";


function InboxModal({isOpen, closeModal }) {

  const [prospects, setProspects] = useState({});
  const [disabled, setDisabled] = useState(false);


    // useEffect(() => {
    //     fetchLeads();
    // }, [])

  const fetchLeads = async () => {
    setDisabled(true);
    try {
      const response = await ProspectService.fetchProspects();
      console.log(response);
      //toast.success(response.data.message);
      setProspects(response.data.data);
      setDisabled(false);
    } catch (error) {
      console.log(error);
      //toast.error(error.response.data.message);
      setDisabled(false);
    }
  }


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
                <Dialog.Panel className="h-[700px] grid grid-cols-5 gap-3 w-full transform rounded-xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  {/* <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Payment successful
                  </Dialog.Title> */}
                  <div className="mt-2 col-span-4 overflow-y-auto relative">
                    <div className="fixed bottom-0 left-0 w-full px-4">
                      <textarea rows={2} className="border w-full "></textarea>
                    </div>



                    <div className="flex items-center justify-end gap-3 mb-10 px-5">
                      <span className="text-sm text-gray-500">11pm</span>
                      <div className="bg-setly-200 px-3 py-2 rounded-md bg-opacity-20">
                        <span className="">This is a new message I have sent to you today,</span>

                      </div>
                      <Image class="w-10 h-10 rounded-full shadow-lg" src="https://flowbite-admin-dashboard.vercel.app/images/users/bonnie-green-2x.png" alt="Bonnie image" height={30} width={80} />
                    </div>

                    <div className="flex flex-row-reverse items-center justify-end gap-3 mb-10 px-5">
                      <span className="text-sm text-gray-500">11pm</span>
                      <div className="bg-setly-100 px-3 py-2 rounded-md bg-opacity-20">
                        <span className="">This is a new message I have sent to you today, I hope you get it.
                        This is a new message I have sent to you today, I hope you get it.
                        This is a new message I have sent to you today, I hope you get it.
                        This is a new message I have sent to you today, I hope you get it.</span>

                      </div>
                      <Image class="w-10 h-10 rounded-full shadow-lg" src="https://flowbite-admin-dashboard.vercel.app/images/users/bonnie-green-2x.png" alt="Bonnie image" height={30} width={80} />
                    </div>

                    <div className="flex items-center justify-end gap-3 mb-10 px-5">
                      <span className="text-sm text-gray-500">11pm</span>
                      <div className="bg-setly-200 px-3 py-2 rounded-md bg-opacity-20">
                        <span className="">This is a new message I have sent to you today, I hope you get it.</span>

                      </div>
                      <Image class="w-10 h-10 rounded-full shadow-lg" src="https://flowbite-admin-dashboard.vercel.app/images/users/bonnie-green-2x.png" alt="Bonnie image" height={30} width={80} />
                    </div>

                    <div className="flex flex-row-reverse items-center justify-end gap-3 mb-10 px-5">
                      <span className="text-sm text-gray-500">11pm</span>
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

                  <div className="">
                    <div class="w-full max-w-sm bg-white rounded-lg shadow-lg pt-2 mb-6">
                        <div class="flex flex-col items-center pb-8">
                            <Image class="w-16 h-16 mb-3 rounded-full shadow-lg" src="https://flowbite-admin-dashboard.vercel.app/images/users/bonnie-green-2x.png" alt="Bonnie image" height={30} width={80} />
                            <span class="top-20 right-[7.8rem] absolute w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
                            <h5 class="text-xl font-medium text-gray-900 py-0 mb-0">Bonnie Green</h5>
                            <span class="text-sm text-green-500">Connected</span>
                            <div className="flex gap-3 items-center mt-3">
                              <div className="h-10 w-10 bg-gray-100 flex items-center justify-center rounded-md">
                                <OfficeBuildingIcon className="h-5 w-5" />
                              </div>
                              <div className="flex flex-col items-center">
                                <span class="text-sm text-black font-bold">Visual Designer</span>
                                <span class="text-sm text-gray-500">Visual Designer</span>
                              </div>
                            </div>
                        </div>
                    </div>


                    <div class="w-full max-w-sm bg-white rounded-lg shadow-lg pt-4 pb-5 px-5">
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
                    </div>


                  </div>
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