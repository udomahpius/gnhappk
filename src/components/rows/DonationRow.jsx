import currencyFormatter from "@/utils/currencyFormatter";
import { ChevronRightIcon, InformationCircleIcon, UserIcon } from "@heroicons/react/outline";


function DonationRow({ donation }) {
    return (
        <>
        
            <div className="mb-3 rounded-[10px] px-[16px] text-left bg-white w-full flex justify-between items-center pt-2 pb-2">
                <div className="flex gap-2 items-center">
                    <span className="bg-[#A6AFC2] w-[32px] h-[32px] rounded-full flex items-center justify-center">
                        <UserIcon className="h-5 w-5 text-white" />
                    </span>
                    <div className="flex flex-col">
                        <span className="text-[#051438] text-[16px] font-medium">{currencyFormatter(donation.amount)}</span>
                        <span className="bg-[#E2F8EB] flex py-[2px] capitalize justify-center items-center px-[4px] rounded-[5px] text-[#27AE60] text-[11px]">{ donation.status }</span>
                    </div>
                </div>

                <div className="text-right">
                    <p className="text-gray-500 text-[13px]">2nd July 2024</p>
                    <p className="text-[#051438] text-[14px] font-medium capitalize">{donation.type}</p>
                </div>
            </div>
        </>
        
    );
}

export default DonationRow;