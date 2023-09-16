import { useEffect, useState } from "react";
import { Button, InboxModal, Layout, TopNav } from "@/components/index.js";
import Image from "next/image";
import ProspectService from "@/services/ProspectService";
import { withProtected } from "@/hooks/routes";
import { EyeIcon, UserRemoveIcon, TrashIcon, OfficeBuildingIcon, BriefcaseIcon } from "@heroicons/react/outline";
import rocket from "@/assets/rocket.webp"
import { Montserrat } from "next/font/google";
const inter = Montserrat({ subsets: ['latin'] })




function Tasks() {
    const [prospects, setProspects] = useState([]);
    const [prospect, setProspect] = useState(null);
    const [disabled, setDisabled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

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
            <InboxModal closeModal={closeModal} isOpen={isOpen} />
            <Layout>
            <TopNav />


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
                    <h2 className="mb-5 text-lg font-semibold">Tasks</h2>

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
                </div>

            </Layout>
        </>
        
    );
}

export default withProtected(Tasks);