import currencyFormatter from "@/utils/currencyFormatter";
import { UserIcon } from "@heroicons/react/outline";
import moment from "moment/moment";

function TransactionRow({ transaction }) {
    return (
        <>
        
            <div className="mb-3 rounded-[10px] px-[16px] text-left bg-white w-full flex justify-between items-center pt-2 pb-2">
                <div className="flex gap-2 items-center">
                    <span className="bg-[#A6AFC2] w-[32px] h-[32px] rounded-full flex items-center justify-center">
                        <UserIcon className="h-5 w-5 text-white" />
                    </span>
                    <div className="flex flex-col">
                        <span className="text-[#051438] text-[16px] font-medium">{currencyFormatter(transaction.amount)}</span>
                        <span className="bg-[#E2F8EB] flex py-[2px] capitalize justify-center items-center px-[4px] rounded-[5px] text-[#27AE60] text-[11px]">{ transaction.status }</span>
                    </div>
                </div>

                <div className="text-right">
                    <p className="text-gray-500 text-[13px]">{moment(transaction.created_at).format('ll')}</p>
                    <p className="text-[#051438] text-[14px] font-medium capitalize">{transaction.type}</p>
                </div>
            </div>
        </>
        
    );
}

export default TransactionRow;