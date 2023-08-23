import { LogoutIcon } from "@heroicons/react/outline";
import { LoginIcon, CheckCircleIcon, AtSymbolIcon, UserCircleIcon } from "@heroicons/react/outline";
import Image from "next/image";
import Link from "next/link";
import { Button, Toggle } from ".";


function NotificationTab() {
    return (
        <div className="h-full">
            <div className="flex justify-between items-center mb-7">
                <div>
                    <h3 className="mb-1 text-xl">Notification Permissions</h3>
                    <p className="text-gray-500">Manage your notifications and prospecting persona</p>
                </div>
                <div className="flex gap-4">
                    <Button text="Cancel" background="red" disable={false} disabled={false} />
                    <Button text="Save" background="bg-gradient-to-r from-green-400 to-blue-500" disable={false} disabled={false} />
                </div>
            </div>

            <div className="rounded-lg bg-white py-5 shadow border border-gray-200 mb-7">
                <h4 className="border-b pb-3 px-6 mb-6">General Permission</h4>

                <div className="px-6">
                    <h5 className="text-md font-semibold">Notify on updates and activity</h5>
                    <p className="mb-5 text-sm text-gray-500">You will be notified when a prospect performs an action or a worfflow</p>

                    <div className="flex justify-between mb-6">
                        <h5>Email</h5>
                        <Toggle />
                    </div>

                    <div className="flex justify-between mb-6">
                        <h5>Push Notification</h5>
                        <Toggle />
                    </div>

                    <div className="flex justify-between">
                        <h5>Email</h5>
                        <Toggle />
                    </div>
                </div>
            </div>


            <div className="rounded-lg bg-white py-5 shadow border border-gray-200 mb-5">
                <h4 className="border-b pb-3 px-6 mb-6">Marketing Permission</h4>

                <div className="px-6">
                    <h5 className="text-md font-semibold">Notify on updates and activity</h5>
                    <p className="mb-5 text-sm text-gray-500">We will notify you of latest updates and marketing plans.</p>

                    <div className="flex justify-between items-center mb-6">
                        <div>
                            <h5>Send weekly digest</h5>
                            <span className="text-gray-500 text-sm">Receive our weekly updates</span>
                        </div>
                        <Toggle />
                    </div>

                    <div className="flex justify-between items-center mb-6">
                        <div>
                            <h5>Send marketing materials</h5>
                            <span className="text-gray-500 text-sm">Receive our weekly updates</span>
                        </div>
                        <Toggle />
                    </div>

                    <div className="flex justify-between items-center">
                        <div>
                            <h5>Send weekly digest</h5>
                            <span className="text-gray-500 text-sm">Receive our weekly updates</span>
                        </div>
                        <Toggle />
                    </div>
                </div>
            </div>

        </div>
    );
}

export default NotificationTab;