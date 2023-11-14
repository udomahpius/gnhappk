import { Fragment, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { withProtected } from "@/hooks/routes";
import LeadService from "@/services/ProspectService";
import { Toaster, toast } from "react-hot-toast";
import ClipLoader from "react-spinners/ClipLoader";
import { Button, ConnectLinkedin, DropDown, Layout, Nav, RadioButton, SideBar, SubscriptionPayment } from "@/components";
import Image from "next/image";
import TopMenu from "@/components/TopMenu";
import { Montserrat } from "next/font/google";
import { LinkIcon, MailOpenIcon, CollectionIcon, DocumentDuplicateIcon, CheckCircleIcon, AtSymbolIcon } from "@heroicons/react/outline";
import Link from "next/link";
import {
    CircularProgressbar,
    CircularProgressbarWithChildren,
    buildStyles
  } from "react-circular-progressbar";
  import "react-circular-progressbar/dist/styles.css";
import useTheme from "@/hooks/theme";
import currencyFormatter from "@/utils/currencyFormatter";
const inter = Montserrat({ subsets: ['latin'] });
import spinner from "@/assets/spinner.gif"
import DonationService from "@/services/DonationService";






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
    const [selected, setSelected] = useState(null);
    const [amount, setAmount] = useState(0);


    const plans = [
        {
            plan: "Basic",
            amount: 5000
        },
        {
            plan: "Golden",
            amount: 10000
        },
        {
            plan: "God Abeg",
            amount: 20000
        },
        {
            plan: "Platinum",
            amount: 50000
        }
    ]

    const onSubmit = async (event) => {
        event.preventDefault();
        console.log(amount);
        setDisabled(true);
        try {
            const response = await DonationService.makeDonation(amount);
            console.log(response);
            toast.success(response.data.message);
            setDisabled(false);
            setAmount(0)
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message);
            setDisabled(false);
        }
    }



    const onSelect = (plan) => {
        setSelected(plan);
        setAmount(plan.amount)
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

    return (
       <>
        <Toaster />
        <Layout user={user}>
            <div className="flex justify-center items-center dark:border-b dark:border-slate-700 bg-white dark:bg-slate-900 shadow dark:shadow-none w-full topnav px-4 h-16">
                <h2 className="font-semibold text-3xl dark:text-gray-100">Welcome { user?.first_name}</h2>
                {/* <p className="text-sm dark:text-gray-100">Here is where you can track your progress as the ultimate Setly Prospector</p> */}
            </div>

            <div className="md:w-custom mx-auto py-8 md:flex md:justify-between md:flex-wrap w-[80%]">
                {plans.map((plan, index) => (
                    <RadioButton plan={plan.plan} selected={selected} amount={currencyFormatter(plan.amount)} key={index} onSelect={() => onSelect(plan)} /> 
                ))}

                <form className="w-full mb-12" onSubmit={onSubmit}>
                    <div className="w-full mb-5">
                        <label className="mb-2 flex">Custom Amount</label>
                        <div className="w-full border rounded-lg h-14 bg-white">
                            <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount" className="bg-white w-full rounded-lg px-4 flex items-center h-full outline-none" />
                        </div>
                    </div>
                    <button type="submit" className="disabled:bg-gray-400 disabled:text-white w-[300px] px-2 py-4 text-white relative bg-purple-700 rounded-lg flex justify-center items-center">
                        <span className={ disabled ? "hidden" : "flex"} id="button-text">Make Donation</span>
                        <Image src={spinner} id="spinner" className={`${disabled ? "flex" : "hidden"}`} height="20" width="40" alt="" />
                    </button>
                </form>   
            </div>
        </Layout>
       </>
    )
}

export default withProtected(Dashboard);