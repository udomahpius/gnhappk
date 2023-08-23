import { LogoutIcon } from "@heroicons/react/outline";
import { CalendarIcon } from "@heroicons/react/solid";
import Image from "next/image";
import Link from "next/link";
import { Button, CardRadio, Toggle } from ".";
import slack from "@/assets/slack.svg";
import zapier from "@/assets/zapier.svg";
import hubspot from "@/assets/hubspot.svg";
import mailchimp from "@/assets/mailchimp.svg";
import pdf from "@/assets/pdf.svg";
import salesforce from "@/assets/salesforce.png";


function BillingTab() {
    return (
        <div className="h-full">
            <div className="mb-7">
                <div>
                    <h3 className="mb-1 text-xl">Payment Method</h3>
                    <p className="text-gray-500">Update your billing details and address</p>
                </div>
            </div>

            <div className="rounded-lg bg-white py-5 shadow border border-gray-200 mb-5 h-full">
                <h4 className="border-b pb-3 px-6 mb-6">Billing History</h4>

                <div className="grid grid-cols-2 gap-8 px-6 h-full mb-12">
                    <div className="bg-white shadow-lg rounded-lg py-5 mb-8 border border-gray-200">
                        <h4 className="border-b pb-3 px-6 mb-5">Card Details</h4> 
                        <CardRadio />
                    </div>

                    <div className="bg-white shadow-lg rounded-lg py-5 mb-8 border border-gray-200">
                        <h4 className="border-b pb-3 px-6 mb-5">Next Payment</h4>
                        <div className="px-5  items-start hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                            <div className="flex items-center justify-between bg-gray-50 py-3 w-full rounded-lg px-3 mb-5">
                                <div className="flex gap-4 items-center  ">
                                    <div className="py-3 px-3 rounded-lg bg-white">
                                        <CalendarIcon className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <p className="text-gray-500">Due date</p>
                                        <p>on Febuary 30, 2023</p>
                                    </div>
                                </div>

                                <CheckIcon className="h-5 w-5 text-red-500" />

                            </div>
                            <div className="px-5">
                                <Button text="Manage Payment" disable={false} disabled={false} />
                            </div>
                        </div>


                        
                    </div>
                </div>

                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-white  dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Invoices
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Amount
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Date
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Status
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Plan
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                            
                        <tr className="bg-white border-b dark:border-gray-200 hover:bg-gray-100">
                            <th scope="row" className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap">
                                <Image className="w-8 h-8 rounded-md" width={80} height={80} src={pdf} alt="" />
                                <div className="pl-3">
                                    <div className="text-sm font-normal">Basic Plan - June 2023</div>
                                    <div className="font-normal text-gray-500">Setly - #12930</div>
                                </div>  
                            </th>
                            <td className="px-6 py-4">
                                hello
                            </td>
                            <td className="px-6 py-4">
                                World
                            </td>
                            <td className="px-6 py-4">
                                No Phone
                            </td>
                            <td className="px-6 py-4">
                                No Email
                            </td>
                            <td className="px-6 py-4">
                                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Download</a>
                            </td>
                        </tr>

                        <tr className="bg-white border-b dark:border-gray-200 hover:bg-gray-100">
                            <th scope="row" className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap">
                                <Image className="w-8 h-8 rounded-md" width={80} height={80} src={pdf} alt="" />
                                <div className="pl-3">
                                    <div className="text-sm font-normal">Basic Plan - June 2023</div>
                                    <div className="font-normal text-gray-500">Setly - #12930</div>
                                </div>  
                            </th>
                            <td className="px-6 py-4">
                                hello
                            </td>
                            <td className="px-6 py-4">
                                World
                            </td>
                            <td className="px-6 py-4">
                                No Phone
                            </td>
                            <td className="px-6 py-4">
                                No Email
                            </td>
                            <td className="px-6 py-4">
                                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Download</a>
                            </td>
                        </tr>

                        <tr className="bg-white border-b dark:border-gray-200 hover:bg-gray-100">
                            <th scope="row" className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap">
                                <Image className="w-8 h-8 rounded-md" width={80} height={80} src={pdf} alt="" />
                                <div className="pl-3">
                                    <div className="text-sm font-normal">Basic Plan - June 2023</div>
                                    <div className="font-normal text-gray-500">Setly - #12930</div>
                                </div>  
                            </th>
                            <td className="px-6 py-4">
                                hello
                            </td>
                            <td className="px-6 py-4">
                                World
                            </td>
                            <td className="px-6 py-4">
                                No Phone
                            </td>
                            <td className="px-6 py-4">
                                No Email
                            </td>
                            <td className="px-6 py-4">
                                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Download</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
    );
}





function CheckIcon(props) {
    return (
      <svg viewBox="0 0 24 24" fill="none" {...props}>
        <circle cx={12} cy={12} r={12} fill="#49E7B6" opacity="" />
        <path
          d="M7 13l3 3 7-7"
          stroke="#fff"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
}

export default BillingTab;