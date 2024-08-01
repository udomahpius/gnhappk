import { DonationRow, SmallButton, SmatNav, Success } from "@/components";
import LoggedIn from "@/hooks/logged-in";
import { ChevronLeftIcon, ChevronRightIcon, SearchIcon, SortDescendingIcon } from "@heroicons/react/outline";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import icon from "@/assets/insurer-icon.png";



const override = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "0 auto",
    borderColor: "#269ACE",
};


function Donations() {
    const router = useRouter();
    const [openModal, setOpenModal] = useState(false);
    const [openSignOut, setOpenSignOut] = useState(false);
    const [openSuccess, setOpenSuccessModal] = useState(false);
    const [disabled, setDisabled] = useState(false);
    const [donations, setDonations] = useState(null);
    const [file, setFile] = useState(null);
    const [progress, setProgress] = useState(0);
    const [enrollee, setEnrollee] = useState(null);

    useEffect(() => {
        listDonations()
    }, [])

    const listDonations = async () => {
        setDisabled(true);
        try {
            // const response = await DonationService.listDonations();
            // console.log(response);
            // //toast.success(response.data.message);
            // setDisabled(false);
            // setDonations(response.data.data);
        } catch (error) {
            console.log(error);
            //toast.error(error.response.data.message);
            setDisabled(false);
        }
    }

    const openEnrollee = (enrollee) => {
        setEnrollee(enrollee);
        console.log(enrollee);
        router.push(`/dashboard/staff/${enrollee.staff_id}`)
    }

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

    console.log(donations);

    return (
        <LoggedIn>
            <section className="m-[32px]">
                    {/* <div className="flex justify-between items-center mb-8">
                        <h5 className="text-[#051438] text-[18px] font-semibold">Staff management</h5>
                        <div className="flex items-center gap-8">
                            <div className="flex gap-3 items-center bg-white border border-[#DFE2E9] rounded-[10px]  pr-[20px]">
                                <input type="text" id="search" name="search" className="w-full py-[10px] pl-[20px] rounded-l-[10px]" placeholder="Search list" />
                                <SearchIcon className="h-5 w-5" />
                            </div>
                            <SmallButton text="Upload staff details" onClick={() => setOpenModal(true)} />
                        </div>
                    </div> */}

                    <div className="flex justify-between items-center mb-8">
                        <h5 className="text-[#051438] text-[18px] font-semibold">Donations</h5>

                        {/* {!disabled && staffs?.staff_members?.length > 0 && <div className="bg-[#DFE2E9] py-[8px] px-[16px] flex gap-7 justify-between items-center rounded-[10px]">
                            <div className="flex flex-col  items-center">
                                <span className="text-[#051438] text-[16px] font-semibold">{ staffs?.staff_members.length}</span>
                                <span className="text-[#677597] text-[14px] font-semibold">Total staff enrolled</span>
                            </div>
                            <div className="flex flex-col  items-center">
                                <span className="text-[#051438] text-[16px] font-semibold">{ staffs?.incomplete_setup }</span>
                                <span className="text-[#677597] text-[14px] font-semibold">Enrollees with info completed</span>
                            </div>

                            <div className="flex flex-col  items-center">
                                <span className="text-[#051438] text-[16px] font-semibold">{ staffs?.total_dependents }</span>
                                <span className="text-[#677597] text-[14px] font-semibold">Total dependants</span>
                            </div>
                        </div>} */}


                        <div className="flex items-center gap-8">
                            <div className="flex gap-3 items-center bg-white border border-[#DFE2E9] rounded-[10px]  pr-[20px]">
                                <input type="text" id="search" name="search" className="w-full py-[10px] pl-[20px] rounded-l-[10px]" placeholder="Search list" />
                                <SearchIcon className="h-5 w-5" />
                            </div>
                        </div>
                    </div>


                    { !disabled && donations?.length == 0 && <div className="h-[540px] flex justify-center items-center overflow-scroll">
                        <div className="bg-white rounded-[10px] border border-[#DFE2E9] p-[16px] flex flex-col justify-center items-center h-[360px] w-[640px]">
                            <Image src={icon} width="120" height="" alt="" className="mb-8" />
                            <p className="text-[#677597] text-[16px] mb-2">No data recorded</p>
                            <p className="text-[#051438] text-[16px] font-medium">Click on the Upload staff details button to get started</p>
                        </div>
                    </div> }

                    {/* { !disabled && staffs == null && <div className="h-[550px] flex justify-center items-center">
                        <span class="spinner"></span>
                    </div> } */}

                    { !disabled && donations?.length > 0 && <div className="h-[582px]">
                        <div>
                            <div className="flex justify-between items-center mb-5">
                                <div className="flex gap-1 items-center">
                                    <SortDescendingIcon className="h-5 w-5 text-[#0B0C7D]" />
                                </div>

                                <div className="flex gap-6 items-center">
                                    <div className="flex gap-2 items-center">
                                        <p className="text-[#677597] text-[16px] font-medium">
                                            <span>1 - 20</span>
                                        </p>
                                        <span className="text-[#051438] text-[16px] font-medium">of</span>
                                        <span className="text-[#677597] text-[16px] font-medium">200</span>
                                    </div>

                                    <div className="flex gap-3 items-center">
                                        <button className="flex justify-center items-center bg-white disabled:bg-[#E6E8EB] border border-[#DFE2E9] rounded-[4px] h-[32px] w-[32px]" disabled>
                                            <ChevronLeftIcon className="h-4 w-4" />
                                        </button>
                                        <button className="flex justify-center items-center bg-white disabled:bg-[#E6E8EB] border border-[#DFE2E9] rounded-[4px] h-[32px] w-[32px]">
                                            <ChevronRightIcon className="h-4 w-4" />
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="">
                                { donations.map(donation =>  
                                    donation.downlines.map((item) =>  
                                        <DonationRow donation={item} openPlan={openEnrollee} key={item.user_id} />
                                    )
                                )}
                            </div>

                        </div>
                    </div>}

            </section>
        </LoggedIn>
    );
}

export default Donations;