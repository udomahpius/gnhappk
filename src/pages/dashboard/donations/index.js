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
import avatar from "@/assets/avatar.jpg";






const override = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "0 auto",
    borderColor: "#269ACE",
};


function Donation({ auth }) {
    const router = useRouter();
    const { user } = auth;
    const [donations, setDonations] = useState([]);
    const [disabled, setDisabled] = useState(false);
    const [progress, setProgress] = useState(30);
    const [selected, setSelected] = useState(null);


    useEffect(() => {
        listDonations()
    }, [])

    const listDonations = async () => {
        setDisabled(true);
        try {
            const response = await DonationService.listDonations();
            console.log(response);
            toast.success(response.data.message);
            setDisabled(false);
            setDonations([...response.data.data])
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
            <div className="md:w-custom mx-auto py-8 md:flex md:justify-between md:flex-wrap w-[80%]">

                <div className="w-full mb-10">
                    <div className="mx-auto w-[50%] flex justify-center">
                        <div className="bg-white h-28 border-2 w-36 flex justify-center items-center rounded-lg">
                            <span>You</span>
                        </div>
                    </div>
                </div>

                <div className="w-full">
                    <div className="mx-auto w-[50%] flex justify-between">

                        { donations.map(donation =>  
                            donation.downlines.map((item) =>  
                                <div key={item.user_id} className="bg-white h-28 border-2 w-36 flex justify-center items-center rounded-lg">
                                    
                                    <Image src={avatar} width={80} height={80} alt="" key={item.user_id} />
                                </div>
                            )

                        )}
                    </div>
                </div>            
            </div>
        </Layout>
       </>
    )

}

export default withProtected(Donation);