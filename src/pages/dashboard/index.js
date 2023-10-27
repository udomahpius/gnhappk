import { Fragment, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { withProtected } from "@/hooks/routes";
import LeadService from "@/services/ProspectService";
import { Toaster, toast } from "react-hot-toast";
import ClipLoader from "react-spinners/ClipLoader";
import { Button, ConnectLinkedin, DropDown, Layout, Nav, SideBar, SubscriptionPayment } from "@/components";
import Image from "next/image";
import TopMenu from "@/components/TopMenu";
import { Montserrat } from "next/font/google";
import { LinkIcon, MailOpenIcon, CollectionIcon, DocumentDuplicateIcon } from "@heroicons/react/outline";
import Link from "next/link";
import {
    CircularProgressbar,
    CircularProgressbarWithChildren,
    buildStyles
  } from "react-circular-progressbar";
  import "react-circular-progressbar/dist/styles.css";
import useTheme from "@/hooks/theme";
const inter = Montserrat({ subsets: ['latin'] });

import { io } from "socket.io-client";

const socket = io("http://127.0.0.1:4000", {
    reconnection: true
})






const override = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "0 auto",
    borderColor: "#269ACE",
};


function Dashboard({ auth }) {
    const router = useRouter();
    const { user } = auth;
    const [leads, setLeads] = useState([]);
    const [disabled, setDisabled] = useState(false);
    const [progress, setProgress] = useState(30);


//   useEffect(() => {
//     const html = document.getElementsByClassName("bless")[0];
//     if (noScroll) {
//       html.classList.add("lock-scroll");
//     } else {
//       html.classList.remove("lock-scroll");
//     }

//     return () => {
//       html.classList.remove("lock-scroll");
//     }
//   }, [noScroll]);

    // useEffect(() => {
    //     fetchLeads();
    // }, [])

    // const fetchLeads = async () => {
    //     setDisabled(true);
    //     try {
    //         const response = await LeadService.fetchLeads();
    //         console.log(response);
    //         //toast.success(response.data.message);
    //         setLeads(response.data.data);
    //         setDisabled(false);
    //     } catch (error) {
    //         console.log(error);
    //         //toast.error(error.response.data.message);
    //         setDisabled(false);
    //     }
    // }
    useEffect(() => {
        socket.on("connect", () => {
            console.log(socket); // x8WIv7-mJelg7on_ALbx
        });
        console.log("Socket ID", socket);
    }, [])



    { disabled && 
        <div className="min-h-screen flex items-center justify-center">
            <ClipLoader
                color="white"
                loading={true}
                cssOverride={override}
                size={50}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        </div>
    }

    return (
       <>
        <Layout user={user}>
            <div className="flex justify-center items-center dark:border-b dark:border-slate-700 bg-white dark:bg-slate-900 shadow dark:shadow-none w-full topnav px-4 h-16">
                <h2 className="font-semibold text-3xl dark:text-gray-100">Welcome { user?.first_name}</h2>
                {/* <p className="text-sm dark:text-gray-100">Here is where you can track your progress as the ultimate Setly Prospector</p> */}
            </div>

            { user.status === "onboarding" && <ConnectLinkedin /> }

            { user.status === "default_incomplete" && <SubscriptionPayment /> }

            { user.status === "activated" && <div className="pb-4 dark:bg-slate-900 h-full pt-4 px-8 side-body">

                <div className="mx-auto w-[65%] px-12 py-4 bg-white flex flex-col justify-center items-center mb-12">
                        <h2 className="text-2xl text-gray-600 dark:text-gray-100">Current Level</h2>
                        <p className="font-semibold mb-6 dark:text-gray-100">Beginner Lvl <span className="font-bold">1</span></p>

                        <div className="flex justify-between gap-6 w-full items-center mb-8 mt-0">
                            <div className="text-center">
                                <h5 className="font-semibold dark:text-gray-100">lvl 1</h5>
                                <span className="text-sm dark:text-gray-100">Beginner</span>
                            </div>
                            <div className="h-[30px] w-full bg-gray-300">
                                <div className="h-full bg-setly-200 text-right" style={{ width: `${progress}%`}}>
                                    {/* <span className="h-8 w-8 border-4 border-white rounded-full bg-setly-300 absolute bottom-0" style={{ left: `${progress + 65}%`}}></span> */}
                                    <span className="p-8 text-white font-bold">{`${progress}%`}</span>
                                </div>
                            </div>
                            <div className="text-center">
                                <h5 className="font-semibold dark:text-gray-100">lvl 2</h5>
                                <span className="text-sm dark:text-gray-100">Advanced</span>
                            </div>
                        </div>

                        <div className="bg-[#4C58F0] px-20 py-2 text-center rounded-lg bg-opacity-80">
                            <p className="text-white text-sm">Next Price: lvl <span className="font-bold">5</span></p>
                            <p className="text-gray-100">$10 Gift Card to Starbucks</p>
                        </div>
                </div>

                <div className="">
                    {/* <div className="grid grid-cols-4 gap-4 mb-8">
                        <div class="px-6 py-4 bg-white rounded-lg shadow">
                            <LinkIcon className="h-8 w-8 text-slate-700 mb-1" />
                            <h5 class="mb-1 text-lg font-semibold tracking-tight text-gray-600">0/10</h5>
                            <h5 class="mb-2 font-semibold text-sm tracking-tight text-gray-600">Connection Request Sent</h5>
                        </div>

                        <div class="px-6 py-4 bg-white rounded-lg shadow">
                            <MailOpenIcon className="h-8 w-8 text-slate-700 mb-1" />
                            <h5 class="mb-1 text-lg font-semibold tracking-tight text-gray-600">0/10</h5>
                            <h5 class="mb-2 font-semibold text-sm tracking-tight text-gray-600">Message Sent</h5>
                        </div>

                        <div class="px-6 py-4 bg-white rounded-lg shadow">
                            <CollectionIcon className="h-8 w-8 text-slate-700 mb-1" />
                            <h5 class="mb-1 text-lg font-semibold tracking-tight text-gray-600">0/10</h5>
                            <h5 class="mb-2 font-semibold text-sm tracking-tight text-gray-600">Comments Made </h5>
                        </div>

                        <div class="px-6 py-4 bg-white rounded-lg shadow">
                            <DocumentDuplicateIcon className="h-8 w-8 text-slate-700 mb-1" />
                            <h5 class="mb-1 text-lg font-semibold tracking-tight text-gray-600">0/10</h5>
                            <h5 class="mb-2 font-semibold text-sm tracking-tight text-gray-600">Posts Made </h5>
                        </div>
                    </div> */}
                </div>

                <div className="grid grid-cols-2 gap-12  dark:text-gray-100">
                    <div className="relative  bg-white drop-shadow-lg rounded-lg px-6 py-4">
                        <h2 className="font-semibold text-center text-lg">Your Daily Goal Progression</h2>
                        <p className="text-sm mb-7 text-center">How are you doing today? have you reached your goals?</p>
                        <div className="grid grid-cols-2 gap-4">
                            <div class="px-6 py-4 bg-white rounded-lg shadow-xl">
                                <LinkIcon className="h-8 w-8 text-slate-700 mb-1" />
                                <h5 class="mb-1 text-lg font-semibold tracking-tight text-gray-600">0/10</h5>
                                <h5 class="mb-2 font-semibold text-sm tracking-tight text-gray-600">Connection Request Sent</h5>
                            </div>

                            <div class="px-6 py-4 bg-white rounded-lg shadow-xl">
                                <MailOpenIcon className="h-8 w-8 text-slate-700 mb-1" />
                                <h5 class="mb-1 text-lg font-semibold tracking-tight text-gray-600">0/10</h5>
                                <h5 class="mb-2 font-semibold text-sm tracking-tight text-gray-600">Message Sent</h5>
                            </div>

                            <div class="px-6 py-4 bg-white rounded-lg shadow-xl">
                                <CollectionIcon className="h-8 w-8 text-slate-700 mb-1" />
                                <h5 class="mb-1 text-lg font-semibold tracking-tight text-gray-600">0/10</h5>
                                <h5 class="mb-2 font-semibold text-sm tracking-tight text-gray-600">Comments Made </h5>
                            </div>

                            <div class="px-6 py-4 bg-white rounded-lg shadow-xl">
                                <DocumentDuplicateIcon className="h-8 w-8 text-slate-700 mb-1" />
                                <h5 class="mb-1 text-lg font-semibold tracking-tight text-gray-600">0/10</h5>
                                <h5 class="mb-2 font-semibold text-sm tracking-tight text-gray-600">Posts Made </h5>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white drop-shadow-lg rounded-lg px-6 py-4">
                        <h2 className="font-semibold text-center text-lg">Your Weekly Goals</h2>
                        <p className="text-sm mb-7 text-center">Earn your weekly goals to unlock awesome prizes!</p>

                        <div className="relative pt-1 mb-12">
                            <div className="flex mb-2 items-center justify-between">
                                <div>
                                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-blue-200">
                                Connection Request
                                </span>
                                </div>
                                <div className="text-right">
                                <span className="text-xs font-semibold inline-block text-gray-600 dark:text-gray-100">
                                    {progress}%
                                </span>
                                </div>
                            </div>
                            <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                                <div style={{ width: `${progress}%`}} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"></div>
                            </div>
                        </div>

                        <div className="relative pt-1 mb-12">
                            <div className="flex mb-2 items-center justify-between">
                                <div>
                                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-red-200">
                                    Total InMails
                                </span>
                                </div>
                                <div className="text-right">
                                <span className="text-xs font-semibold inline-block text-gray-600 dark:text-gray-100">
                                    {progress}%
                                </span>
                                </div>
                            </div>
                            <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                                <div style={{ width: `${progress}%`}} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"></div>
                            </div>
                        </div>

                        <div className="relative pt-1 mb-12">
                            <div className="flex mb-2 items-center justify-between">
                                <div>
                                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-teal-200">
                                    Total Messages
                                </span>
                                </div>
                                <div className="text-right">
                                <span className="text-xs font-semibold inline-block text-gray-600 dark:text-gray-100">
                                    {progress}%
                                </span>
                                </div>
                            </div>
                            <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                                <div style={{ width: `${progress}%`}} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-teal-500"></div>
                            </div>
                        </div>

                        <div className="relative pt-1">
                            <div className="flex mb-2 items-center justify-between">
                                <div>
                                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-yellow-200">
                                    Total Posts
                                </span>
                                </div>
                                <div className="text-right">
                                <span className="text-xs font-semibold inline-block text-gray-600 dark:text-gray-100">
                                    {progress}%
                                </span>
                                </div>
                            </div>
                            <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                                <div style={{ width: `${progress}%`}} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-yellow-500"></div>
                            </div>
                        </div>

                    </div>
                </div>

                
            </div>}


            

            








            



                {/* <div className="h-full py-3 bg-gray-50">
                    <div className="flex justify-between items-center mb-4">
                        <h4 className="font-medium text-lg">Upcoming Tasks</h4>
                        <Link href="/dashboard/tasks" className="flex gap-2 items-center hover:text-blue-600 text-sm">
                            <span>See All Task</span>
                            <ChevronRightIcon className="w-4 h-4" />
                        </Link>
                    </div>


                        <div className="bg-white shadow-md py-4 px-5 grid grid-cols-4 rounded-lg mb-5">
                            <div className="flex gap-3 items-center">
                                <Image className="rounded-full h-10 w-10" src="https://flowbite-admin-dashboard.vercel.app/images/users/bonnie-green-2x.png" 
                                width={85} height={85} alt="" />
                                <div>
                                    <h5>Saviour Essien</h5>
                                    <p className="text-sm text-gray-500">Software Engineer</p>
                                </div>
                            </div>

                            <div className="place-self-start">
                                <h4>Action</h4>
                                <p className="text-sm text-gray-500 truncate w-[220px]">Send a Connection Request Ago In the atmosphere of the heavens</p>
                            </div>

                            <div className="place-self-end">
                                <h5>Status</h5>
                                <p className="text-sm text-green-500">Completed</p>
                            </div>

                            <div className="place-self-end">
                                <Button text="Send Request" disable={false} disabled={false} />
                            </div>
                        </div>

                        <div className="bg-white shadow-md py-4 px-5 grid grid-cols-4 rounded-lg">
                            <div className="flex gap-3 items-center">
                                <Image className="rounded-full h-10 w-10" src="https://flowbite-admin-dashboard.vercel.app/images/users/bonnie-green-2x.png" 
                                width={85} height={85} alt="" />
                                <div>
                                    <h5>Saviour Essien</h5>
                                    <p className="text-sm text-gray-500">Software Engineer</p>
                                </div>
                            </div>

                            <div className="place-self-start">
                                <h4>Action</h4>
                                <p className="text-sm text-gray-500 truncate w-[220px]">Make a Linkedin Post</p>
                            </div>

                            <div className="place-self-end">
                                <h5>Status</h5>
                                <p className="text-sm text-green-500">Completed</p>
                            </div>

                            <div className="border place-self-end">
                                <Button text="Make Post" disable={false} disabled={false} />
                            </div>
                        </div>

                    

                    <div>
                    </div>
                </div> */}
                



        </Layout>
       </>
    )

}

export default withProtected(Dashboard);