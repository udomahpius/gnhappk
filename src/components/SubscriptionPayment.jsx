import { useState } from "react";
import { useRouter } from "next/router";
import { Button, LinkedinButton } from "@/components";
import AuthService from "@/services/AuthService";
import UserService from "@/services/UserService";
import { Toaster, toast } from "react-hot-toast";
import { withProtected } from "@/hooks/routes";
import ClipLoader from "react-spinners/ClipLoader";
import { Layout, Nav } from "@/components";
import Image from "next/image";
import stripe from "@/assets/stripe.png";

const override = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "0 auto",
    borderColor: "#269ACE",
};

function SubscriptionPayment() {
    const router = useRouter();
    const [disabled, setDisabled] = useState(false);
    const [text, setText] = useState("Connect Linkedin");

    const checkoutSession = async() => {
        setDisabled(true);
        try {
            const response = await UserService.createCheckoutSession();
            console.log(response.data.data);
            setDisabled(false);
            router.replace(response.data.data)
        } catch (error) {
            setDisabled(false)
            if(error.response.status === 401) {
                router.replace("/auth/login")
            }
            toast.error(error.statusCode)
            console.log(error);
        }
    }


    return ( 
        <div className="flex flex-col justify-center items-center h-full w-full bg-white side-body">
            <div className="mb-5">
                <Image src={stripe} alt="Stripe Logo" width={100} height={50} />
            </div>
            <h2 className="text-lg mb-2 font-bold">Pay $24 Subscription</h2>
            <p className="mb-5 w-96 text-center">Complete subscription payment to again access to the Setly features.</p>
            <Button text="Pay $24" background="black" disable={disabled} disabled={disabled} onClick={checkoutSession} />
        </div>
     )

    
}

export default SubscriptionPayment;