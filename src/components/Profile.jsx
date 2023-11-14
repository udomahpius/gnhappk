import { CheckCircleIcon, AtSymbolIcon, UserCircleIcon, OfficeBuildingIcon, BriefcaseIcon, LockClosedIcon } from "@heroicons/react/outline";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
import { Button, LinkedinButton } from ".";
import { useState, useEffect } from "react";
import AuthService from "@/services/AuthService";


function Profile({ user }) {
    
    const router = useRouter();
    const [disabled, setDisabled] = useState(false);



    return (
        <div className="h-full bg-white">
            <div className="flex justify-between items-center mb-7">
                <div>
                    <h3 className="mb-1 text-xl">General Details</h3>
                    <p className="text-gray-500">Update your personal details here</p>
                </div>
            </div>

            <div className="grid grid-cols-6 h-full gap-4">
                <div className="col-span-4 h-full">
                    <div className="rounded-lg bg-white py-5 shadow border border-gray-200 mb-5">
                        <h4 className="border-b pb-3 px-6 mb-6 font-semibold">Personal Information</h4>
                        <form className="px-6">
                            <div className=" mb-5">
                                <label className="mb-2 flex">Name</label>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="border rounded-lg px-4 flex items-center gap-2 h-14">
                                        <UserCircleIcon className="h-6 w-6 text-gray-400" />
                                        <input type="text" name="name" disabled placeholder="Enter first name" className="w-full flex h-full outline-none" defaultValue={user?.name} />
                                    </div>
                                    <div className="border rounded-lg">
                                        <input type="tel" name="phone"  disabled placeholder="Enter last name" className="px-4 w-full flex items-center h-full outline-none" defaultValue={user?.phone} />
                                    </div>
                                </div>
                            </div>

                            <div>
                                <label className="mb-2 flex">Password</label>
                                <div className="border rounded-lg pl-4 flex justify-between h-14">
                                    <div className="flex gap-3 items-center w-full">
                                        <LockClosedIcon className="h-5 w-5 text-gray-600" />
                                        <input type="password" name="password" disabled placeholder="Enter email" className="w-full flex items-center h-full outline-none" defaultValue={user?.password} />
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>

                </div>



                <div className="col-span-2">
                    <div className="bg-white shadow-lg rounded-lg py-5 mb-8 border border-gray-200">
                        <h4 className="border-b pb-3 px-6 mb-5 font-semibold">Your Details</h4>
                        <div className="px-5 mb-7 flex gap-4 items-center hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                            <Image className="rounded-full h-14 w-14" src={`https://ui-avatars.com/api/?name=${user?.name?.split(" ")[0]}+${user?.name?.split(" ")[1]}`}
                                width={85} height={85} alt={`${user?.name} image`} />
                            <div className="flex flex-col items-start justify-center">
                                <h3 className="text-slate-700 mb-1">{ user?.name }</h3>
                                <p>{ user?.phone }</p>
                            </div>
                        </div>


                        {/* <div class="flex items-center justify-center w-full px-5">
                            <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-40 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-white hover:bg-gray-100">
                                <div class="flex flex-col items-center justify-center pt-5 pb-6">
                                    <svg class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                                    </svg>
                                    <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                                    <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                                </div>
                                <input id="dropzone-file" type="file" class="hidden" />
                            </label>
                        </div>  */}
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Profile;