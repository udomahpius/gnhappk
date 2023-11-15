import { ChevronRightIcon, InformationCircleIcon, UserIcon } from "@heroicons/react/outline";


function DonationRow({ donation, openPlan }) {
    return (
        <>
        
            <div className="mb-3 rounded-[10px] px-[16px] text-left bg-white w-full flex gap-20 items-center pt-2 pb-2" onClick={() => openPlan(donation)}>
                <div className="flex gap-2 items-center">
                    <span className="bg-[#A6AFC2] w-[32px] h-[32px] rounded-full flex items-center justify-center">
                        <UserIcon className="h-5 w-5 text-white" />
                    </span>
                    <div className="flex flex-col">
                        <span className="text-[#051438] text-[16px] font-medium">{ donation?.user_id }</span>
                        <span className="bg-[#E2F8EB] flex py-[2px] capitalize justify-center items-center px-[4px] rounded-[5px] text-[#27AE60] text-[12px]">{ donation.status }</span>
                    </div>
                </div>

                <div className="flex flex-col">
                    <span className="text-[#051438] text-[16px] font-medium">{ donation?.email }</span>
                    <span className="text-[14px] font-medium text-[#677597]">{ donation?.phone_number }</span>
                </div>

                <div className="flex flex-col">
                    <span className="text-[#051438] text-[16px] font-medium">{ donation?.job_title }</span>
                    <span className="text-[14px] font-medium text-[#677597]">{ donation?.level }</span>
                </div>


                <div className="flex">
                    <div className="flex flex-col gap-1 items-center justify-center">
                        <p className="text-[#051438] text-[16px] font-medium">Donation Amount</p>
                        <span className="text-[#051438] text-[16px] font-medium">₦{ donation.amount }</span>
                    </div>
                </div>
            </div>
        </>
        
    );
}

export default DonationRow;