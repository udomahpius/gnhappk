import { DonationRow, Logout, RadioButton, SmallButton, SmatNav, Success } from "@/components";
import { withProtected } from "@/hooks1/routes";
import useLogOut from "@/hooks1/useLogOut";
import DonationService from "@/services1/DonationService";
import { ChevronLeftIcon, ChevronRightIcon, SearchIcon, SortDescendingIcon } from "@heroicons/react/outline";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import currencyFormatter from "@/utils/currencyFormatter";



const override = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "0 auto",
    borderColor: "#269ACE",
};


function Home({ auth }) {
    const router = useRouter();
    const [setLogOut] = useLogOut();
    const { setUser, user } = auth;
    const [openModal, setOpenModal] = useState(false);
    const [openSignOut, setOpenSignOut] = useState(false);
    const [openSuccess, setOpenSuccessModal] = useState(false);
    const [disabled, setDisabled] = useState(false);
    const [donations, setDonations] = useState(null);
    const [file, setFile] = useState(null);
    const [enrollee, setEnrollee] = useState(null);
    const [leads, setLeads] = useState([]);
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

    

    useEffect(() => {
        listDonations()
    }, [])

    const listDonations = async () => {
        setDisabled(true);
        try {
            const response = await DonationService.listDonations();
            console.log(response);
            //toast.success(response.data.message);
            setDisabled(false);
            setDonations(response.data.data);
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
        setSelected(plan.plan);
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

    console.log(donations);

    return (
        <main>
            <Success visible={openSuccess} title="Staff list submitted successfully!" description="Your staff list has been submitted to Smathealth Medicare Limited"
                closeModal={() => setOpenSuccessModal(false)} />
            <SmatNav name={user?.name?.split(" ")[0]} openSignOut={() => setOpenSignOut(true)} />
            <Logout visible={openSignOut} closeModal={() => setOpenSignOut(false)} logout={() => { setLogOut(true);  setOpenSignOut(false) }}  />
            <section className="m-[32px]">
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
                        {/* <button type="submit" className="disabled:bg-gray-400 disabled:text-white w-[300px] px-2 py-4 text-white relative bg-purple-700 rounded-lg flex justify-center items-center">
                            <span className={ disabled ? "hidden" : "flex"} id="button-text">Make Donation</span>
                            <Image src={spinner} id="spinner" className={`${disabled ? "flex" : "hidden"}`} height="20" width="40" alt="" />
                        </button> */}
                        <SmallButton text="Make Donation" type="submit" disabled={disabled} />
                    </form>   
                </div>


                    {/* { !disabled && staffs == null && <div className="h-[550px] flex justify-center items-center">
                        <span class="spinner"></span>
                    </div> } */}

                    

            </section>
        </main>
    );
}

export default Home;