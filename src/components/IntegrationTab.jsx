import { LogoutIcon } from "@heroicons/react/outline";
import { LoginIcon, CheckCircleIcon, AtSymbolIcon, UserCircleIcon } from "@heroicons/react/outline";
import Image from "next/image";
import Link from "next/link";
import { Button, Toggle } from ".";
import slack from "@/assets/slack.svg";
import zapier from "@/assets/zapier.svg";
import hubspot from "@/assets/hubspot.svg";
import mailchimp from "@/assets/mailchimp.svg";
import maze from "@/assets/maze.jpeg";
import salesforce from "@/assets/salesforce.png";


function IntegrationTab() {
    return (
        <div className="h-full">
            <div className="flex justify-between items-center mb-7">
                <div>
                    <h3 className="mb-1 text-xl">Integration Channels</h3>
                    <p className="text-gray-500">Connect the tool you use every day</p>
                </div>
                <div className="flex gap-4">
                    <Button text="Cancel" background="red" disable={false} disabled={false} />
                    <Button text="Save" background="bg-gradient-to-r from-green-400 to-blue-500" disable={false} disabled={false} />
                </div>
            </div>

            <div className="rounded-lg bg-white py-5 shadow border border-gray-200 mb-5 h-full">
                <h4 className="border-b pb-3 px-6 mb-6">Recommended Channels</h4>

                <div className="grid grid-cols-3 gap-5 px-6 h-full">
                    <div className="border border-gray-200 pt-4 pb-9 px-3 rounded-xl bg-white shadow">
                        <div className="flex justify-between items-center mb-2">
                            <Image src={slack} width="35" height="20" alt="Slack Icon" />
                            <Toggle />
                        </div>
                        <p className="mb-2">Slack</p>
                        <p className="text-gray-500 font-normal text-sm">Send notifications to channels and create projects from messages</p>
                    </div>

                    <div className="border border-gray-200 pt-4 pb-9 px-3 rounded-xl bg-white shadow">
                        <div className="flex justify-between items-center mb-2">
                            <Image src={maze} width="40" height="20" alt="Slack Icon" className="rounded-full" />
                            <Toggle />
                        </div>
                        
                        <p className="mb-2">Maze</p>
                        <p className="text-gray-500 font-normal text-sm">Product research should&apos;t feel slow or complicated. Collect actionable user insights make decisons in hours</p>
                    </div>

                    <div className="border border-gray-200 pt-4 pb-9 px-3 rounded-xl bg-white shadow">
                        <div className="flex justify-between items-center mb-2">
                            <Image src={zapier} width="35" height="20" alt="Slack Icon" />
                            <Toggle />
                        </div>
                        <p className="mb-2">Zapier</p>
                        <p className="text-gray-500 font-normal text-sm">Zapier help you to build custom automation and integration with other apps.</p>
                    </div>


                    <div className="border border-gray-200 pt-4 pb-9 px-3 rounded-xl bg-white shadow">
                        <div className="flex justify-between items-center mb-2">
                            <Image src={hubspot} width="35" height="20" alt="Slack Icon" />
                            <Toggle />
                        </div>
                        <p className="mb-2">Hubspot</p>
                        <p className="text-gray-500 font-normal text-sm">Send notifications to channels and create projects from messages</p>
                    </div>

                    <div className="border border-gray-200 pt-4 pb-9 px-3 rounded-xl bg-white shadow">
                        <div className="flex justify-between items-center mb-2">
                            <Image src={salesforce} width="50" height="20" alt="Slack Icon" />
                            <Toggle />
                        </div>
                        <p className="mb-2">Salesforce</p>
                        <p className="text-gray-500 font-normal text-sm">Product research should&apos;t feel slow or complicated. Collect actionable user insights make decisons in hours</p>
                    </div>

                    <div className="border border-gray-200 pt-4 pb-9 px-3 rounded-xl bg-white shadow">
                        <div className="flex justify-between items-center mb-2">
                            <Image src={mailchimp} width="35" height="20" alt="Slack Icon" />
                            <Toggle />
                        </div>
                        <p className="mb-2">Mailchimp</p>
                        <p className="text-gray-500 font-normal text-sm">Zapier help you to build custom automation and integration with other apps.</p>
                    </div>

                    
                </div>
            </div>

        </div>
    );
}

export default IntegrationTab;