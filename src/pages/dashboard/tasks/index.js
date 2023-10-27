import { useEffect, useState } from "react";
import { Button, ConnectLinkedin, Layout, SubscriptionPayment, TopNav } from "@/components/index.js";
import Image from "next/image";
import ProspectService from "@/services/ProspectService";
import { withProtected } from "@/hooks/routes";
import { EyeIcon, UserRemoveIcon, TrashIcon, OfficeBuildingIcon, BriefcaseIcon } from "@heroicons/react/outline";
import rocket from "@/assets/rocket.webp"
import { Montserrat } from "next/font/google";
const inter = Montserrat({ subsets: ['latin'] })
import tasks from "@/data/tasks.json";



function Tasks({ auth }) {
    const [prospects, setProspects] = useState([]);
    const [prospect, setProspect] = useState(null);
    const [disabled, setDisabled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const { user } = auth;

    // useEffect(() => {
    //     fetchProspects();
    // }, [])

    // const fetchProspects = async () => {
    //     setDisabled(true);
    //     try {
    //         const response = await ProspectService.fetchProspects();
    //         console.log(response);
    //         //toast.success(response.data.message);
    //         setProspects(response.data.data);
    //         setDisabled(false);
    //     } catch (error) {
    //         console.log(error);
    //         //toast.error(error.response.data.message);
    //         setDisabled(false);
    //     }
    // }


    function closeModal() {
        setIsOpen(false)
    }
    
    function openModal() {
        // setProspect(lead);
        // console.log(lead);
        setIsOpen(true);
    }


    return (
        <>
            <Layout user={user}>
            <TopNav placeholder="Search tasks" />

            { user.status === "onboarding" && <ConnectLinkedin /> }

            { user.status === "default_incomplete" && <SubscriptionPayment /> }

            { user.status === "activated" &&

                <div className="side-body">
                    <div className="relative pt-5 px-4 mb-10 side-body">
                        <div className="grid grid-cols-3 gap-5 h-[290px]">
                            <div className="relative col-span-1 bg-[#4C58F0] rounded-lg flex flex-col justify-start items-center">
                                <Image src={rocket} width="120" height="20" alt="rocket" className="block -top-5 relative" />
                                <h4 className="mb-2 text-white font-medium text-xl w-60 text-center">There are no milestones for today</h4>
                                <p className="text-gray-200 text-sm">Complete tasks to achieve milestones</p>
                            </div>
                            <div className="border col-span-2">
                                
                            </div>
                        </div>
                    </div>

                    <div className="px-10">
                        <div className="flex gap-4 items-center mb-5">
                            <h2 className="text-lg font-semibold">Today&apos;s Tasks</h2>
                            <span className="flex h-6 w-6 rounded-full bg-black text-white items-center justify-center text-sm font-medium">0</span>
                        </div>

                        { tasks.map((task, index) => (
                            <div className="bg-white shadow-md py-4 px-5 grid grid-cols-3 rounded-lg mb-5" key={index}>
                                <div className="flex gap-3 items-center">
                                    <Image className="rounded-full h-10 w-10" src="https://flowbite-admin-dashboard.vercel.app/images/users/bonnie-green-2x.png" 
                                    width={85} height={85} alt="" />
                                    <div>
                                        <h5 className="font-medium">{task.name}</h5>
                                        <p className="text-sm text-gray-500">Software Engineer</p>
                                    </div>
                                </div>

                                <div className="place-self-start">
                                    <h5 className="font-medium">Action</h5>
                                    <p className="text-sm text-gray-500 truncate w-[220px]">{task.description}</p>
                                </div>

                                <div className="place-self-end flex justify-between w-full">
                                    <div className="col-span-5">
                                        <h5 className="font-medium">Status</h5>
                                        <p className="text-sm text-green-500 capitalize">{task.status}</p>
                                    </div>

                                    <div className="col-span-5">
                                        <Button text={task.action} disable={false} disabled={false} />
                                    </div>
                                </div>

                                
                            </div>
                        ))}

                        
                    </div>
                </div> }

            </Layout>
        </>
        
    );
}

export default withProtected(Tasks);