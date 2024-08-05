import { DonationRow, Logout, RadioButton, SmallButton, SmatNav, Success } from "@/components";
import useRequest from "@/api/useRequest";
import { ChevronLeftIcon, ChevronRightIcon, SearchIcon, SortDescendingIcon } from "@heroicons/react/outline";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import currencyFormatter from "@/utils/currencyFormatter";
import LoggedIn from "@/hooks/logged-in";
import { NotificationContext } from "@/context/notification-context";
import { createMakeDonationRequest } from "@/api/requestFactory/donation";
import { createGetUserRequest } from "@/api/requestFactory/user";
import { createPaymentRequest } from "@/api/requestFactory/payment";



const override = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  margin: "0 auto",
  borderColor: "#269ACE",
};


function Home() {

  const router = useRouter();
  const { requestMaker } = useRequest();
  const [openModal, setOpenModal] = useState(false);
  const [user, setUser] = useState(null);
  const [openSignOut, setOpenSignOut] = useState(false);
  const [openSuccess, setOpenSuccessModal] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [donations, setDonations] = useState(null);
  const [file, setFile] = useState(null);
  const [enrollee, setEnrollee] = useState(null);
  const [leads, setLeads] = useState([]);
  const [progress, setProgress] = useState(30);
  const [selected, setSelected] = useState(null);
  const [amount, setAmount] = useState();
  const { showNotification } = useContext(NotificationContext);

  const plans = [
    {
      plan: "Basic",
      amount: 5000
    },
    {
      plan: "God Abeg",
      amount: 10000
    },
    {
      plan: "Golden",
      amount: 20000
    },
        {
            plan: "Sappehire",
            amount: 50000
        },
        {
          plan: "Platinum",
          amount: 100000
      }
  ];


  useEffect(() => {
    requestMaker(createGetUserRequest())
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        console.error(error);
    });
  }, [requestMaker]);

    

  const makeDonation = async (event) => {
    event.preventDefault();
    if(amount < 5000)
    setDisabled(true);
    requestMaker(createPaymentRequest(amount, "http://localhost:3000/transaction"))
      .then((res) => {
        setDisabled(false);
        setAmount(0);
        setSelected(null);
        // showNotification({
        //   title: "Success",
        //   content: res.message,
        // },
        //   "success"
        // );

        router.replace(res.data);
      })
      
      .catch((err) => {
      console.log(err);
      setDisabled(false);
      showNotification({
        title: "Something went wrong",
        content: err.response.data.message || "Couldn't make a donation, please try again later",
        },
        "error"
      );
    })
  }



  const onSelect = (plan) => {
    setSelected(plan.plan);
    setAmount(plan.amount)
    if(plan.amount >= 5000) {
      setDisabled(false)
    } else {
      setDisabled(true)
    }
  }

    

  return (
    <LoggedIn>
      <section className="m-5 md:m-[32px]">
        <div className="md:w-custom mx-auto py-8 md:flex md:justify-between md:flex-wrap w-full md:w-[80%]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-6 gap-x-3 justify-center md:justify-evenly w-full mb-6">
            {plans.map((plan, index) => (
              <RadioButton plan={plan.plan} selected={selected} amount={currencyFormatter(plan.amount)} key={index} onSelect={() => onSelect(plan)} /> 
            ))}
          </div>

          <form className="w-full mb-12">
            <div className="w-full mb-5 hidden">
              <label className="mb-2 flex">Custom Amount</label>
              <div className="w-full border rounded-lg h-14 bg-white">
                <input type="number" value={amount} onChange={(e) => {setAmount(e.target.value); setSelected(null); e.target.value < 5000 && setDisabled(true); e.target.value >= 5000 && setDisabled(false)}} 
                placeholder="Enter amount" className="bg-white w-full rounded-lg px-4 flex items-center h-full outline-none" />
              </div>
            </div>

            <SmallButton text="Make Donation" disabled={disabled}
              onClick={makeDonation}
            />
          </form>   
        </div>
      </section>
    </LoggedIn>
  );
}

export default Home;