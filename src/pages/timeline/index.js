import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Toaster, toast } from "react-hot-toast";
import ClipLoader from "react-spinners/ClipLoader";
import { Button, ConnectLinkedin, DropDown, Nav, RadioButton, SubscriptionPayment } from "@/components";
import Image from "next/image";
import { Montserrat } from "next/font/google";
import { LinkIcon, MailOpenIcon, CollectionIcon, DocumentDuplicateIcon, CheckCircleIcon, AtSymbolIcon } from "@heroicons/react/outline";
import Link from "next/link";
import {
    CircularProgressbar,
    CircularProgressbarWithChildren,
    buildStyles
  } from "react-circular-progressbar";
  import "react-circular-progressbar/dist/styles.css";
import currencyFormatter from "@/utils/currencyFormatter";
const inter = Montserrat({ subsets: ['latin'] });
import spinner from "@/assets/spinner.gif"
import avatar from "@/assets/avatar.jpg";
import LoggedIn from "@/hooks/logged-in";
import icon from "@/assets/insurer-icon.png";
import useRequest from "@/api/useRequest";
import { createGetDonationsRequest } from "@/api/requestFactory/donation";






const override = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "0 auto",
    borderColor: "#269ACE",
};


function Donation() {
    const router = useRouter();
    const { requestMaker } = useRequest();
    const [donations, setDonations] = useState([]);
    const [disabled, setDisabled] = useState(false);
    const [progress, setProgress] = useState(30);
    const [selected, setSelected] = useState(null);

    useEffect(() => {
        requestMaker(createGetDonationsRequest())
          .then((response) => {
            setDonations(response.data);
          })
          .catch((error) => {
            console.error(error);
          });
      }, [requestMaker]);


    return (
       
        <LoggedIn>
            <div className="md:w-custom mx-auto py-8 md:flex md:justify-center md:flex-wrap w-[80%]">

                    <div className="w-full mb-10">
                        <div className="mx-auto w-[50%] flex justify-center">
                            <div className="bg-white h-28 border-2 w-36 flex flex-col gap-1 justify-center items-center rounded-lg">
                                <p>You</p>
                                <Image
                                            src={`https://avatar.iran.liara.run/public`}
                                            width={50}
                                            height={50}
                                            // objectFit="cover"
                                            className="rounded-full object-cover"
                                            alt="profile image"
                                        />
                            </div>
                        </div>
                    </div>

                    <div className="w-full">
                        <div className="mx-auto w-[50%] flex justify-between">

                            { donations.map(donation =>  
                                donation.downlines.map((item) =>  
                                    <div key={item.user_id} className="bg-white h-28 border-2 w-36 flex flex-col gap-1 justify-center items-center rounded-lg">
                                        <p>Donor One</p>
                                        <Image
                                            src={`https://avatar.iran.liara.run/public`}
                                            width={50}
                                            height={50}
                                            // objectFit="cover"
                                            className="rounded-full object-cover"
                                            alt="profile image"
                                            key={item.user_id}
                                        />
                                    </div>
                                )

                            )}
                        </div>
                    </div>       
            </div>
        </LoggedIn>

    )

}

export default Donation;