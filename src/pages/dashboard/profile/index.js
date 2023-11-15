import {  Nav, SmallButtonWhite, SmatNav } from "@/components";
import { withProtected } from "@/hooks/routes";
import { ChevronLeftIcon } from "@heroicons/react/outline";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";


function Profile ({ auth }) {
    const router = useRouter();
    const { user } = auth;
    const { query } = useRouter();
    const [openModal, setOpenModel] = useState(false);
    const [insurer, setInsurer] = useState(null);
    const [disabled, setDisabled] = useState(false);

    // useEffect(() => {
    //     fetchInsurer(query.id)
    // }, [query]);

    // const fetchInsurer = async (query) => {
    //     console.log(query);
    //     try {
    //         const response = await InsurerService.fetchInsurer(query);
    //         console.log(response);
    //         setInsurer(response.data);
    //         setDisabled(false);
    //     } catch (error) {
    //         console.log(error);
    //         setDisabled(false);
    //     }
    // }

    return (
        
        <main className="bg-[#EDF0F8] h-screen">
            <SmatNav name={user?.name?.split(" ")[0]} />
                <section className="m-[32px]">

                    <div className="p-[16px] rounded-[10px] bg-white">
                        <div className="w-full flex gap-3 justify-between items-center mb-5">
                            <span className="text-[#A6AFC2] font-bold text-[16px]">Your information</span>
                        </div>


                        <div>

                            <div className="flex gap-4 mb-4">
                                <span className="bg-[#A6AFC2] text-white rounded-full w-[45px] h-[45px] flex justify-center items-center">{user?.name?.split("")[0]}</span>
                                <div className="flex flex-col gap-1">
                                    <span className="text-[12px] font-semibold text-[#677597]">Full name</span>
                                    <span className="text-[16px] font-medium text-[#051438]">{user?.name}</span>
                                </div>
                            </div>

                            <div>
                                <h4 className="text-[16px] font-bold text-[#A6AFC2] mb-3">Contact person(s) information</h4>
                                <div className="pb-3 flex justify-around mb-3">
                                    <div className="flex flex-col gap-1 w-full">
                                        <span className="text-[12px] font-semibold text-[#677597]">Phone number</span>
                                        <span className="text-[16px] font-medium text-[#051438]">{user?.phone}</span>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>

                </section>
            
        </main>
    );
}

export default withProtected(Profile);