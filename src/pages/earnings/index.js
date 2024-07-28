import {  DonationRow } from "@/components";
import { NotificationContext } from "@/context/notification-context";
import LoggedIn from "@/hooks/logged-in";
import { ChevronLeftIcon } from "@heroicons/react/outline";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import useRequest from "@/api/useRequest";
import { createGetUserRequest } from "@/api/requestFactory/user";
import Image from "next/image";
import currencyFormatter from "@/utils/currencyFormatter";
import { createGetDonationsRequest } from "@/api/requestFactory/donation";
import { createGetTransactionsRequest } from "@/api/requestFactory/transaction";
import TransactionRow from "@/components/rows/TransactionRow";


function Earnings () {
    const { requestMaker } = useRequest();
    const [transactions, setTransactions] = useState([]);
    const [donatedAmount, setDonatedAmount] = useState(0);
    const [donationReceived, setDonationReceived] = useState(0);
    const [donationReceivedAmount, setDonationReceivedAmount] = useState(0);
    const [referralAmount, setReferralAmount] = useState(0);
    const router = useRouter();
    const { query } = useRouter();
    const { notification, hideNotification } = useContext(NotificationContext);


  useEffect(() => {
    requestMaker(createGetTransactionsRequest())
      .then((response) => {
        setTransactions(response.data);
        const totalDonatedAmount = response.data.filter(transaction => transaction.type === "donated")
        .reduce((sum, transaction) => {
            return sum + transaction.amount
        }, 0);
        setDonatedAmount(totalDonatedAmount);

        const totalReceivedAmount = response.data.filter(transaction => transaction.type === "donated")
        .reduce((sum, transaction) => {
            return sum + transaction.amount
        }, 0);
        setDonationReceived(totalReceivedAmount);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [requestMaker]);


    return (
        
        <LoggedIn>
            <section className="my-[32px] mx-auto w-[75%]">
                <div className="p-[16px] rounded-[10px] bg-white mb-10">
                    <div className="w-full flex gap-3 justify-between items-center mb-5">
                        <span className="text-[#A6AFC2] font-bold text-[16px]">Your earnings</span>
                    </div>


                    <div className="grid grid-cols-4">
                        <div className="flex flex-col gap-1 w-full">
                            <span className="text-[14px] font-semibold text-[#677597]">Donations Made</span>
                            <span className="text-[25px] font-medium text-[#051438]">{currencyFormatter(donatedAmount)}</span>
                        </div>

                        <div className="flex flex-col gap-1 w-full">
                            <span className="text-[14px] font-semibold text-[#677597]">Donations Received</span>
                            <span className="text-[25px] font-medium text-[#051438]">{currencyFormatter(donationReceived)}</span>
                        </div>

                        <div className="flex flex-col gap-1 w-full">
                            <span className="text-[14px] font-semibold text-[#677597]">Referral</span>
                            <span className="text-[25px] font-medium text-[#051438]">{currencyFormatter(10000)}</span>
                        </div>

                        <div className="flex flex-col gap-1 w-full">
                            <span className="text-[14px] font-semibold text-[#677597]">Referral Earned</span>
                            <span className="text-[25px] font-medium text-[#051438]">{currencyFormatter(10000)}</span>
                        </div>

                    </div>
                </div>

                {transactions.length > 0 && <div className="">
                    <h3 className="mb-3 text-lg">Earnings History</h3>
                    { transactions.map(transaction =>  
                        <TransactionRow transaction={transaction} key={transaction.user_id} />
                    )}
                </div>}

            </section>
            
        </LoggedIn>
    );
}

export default Earnings;