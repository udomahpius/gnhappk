import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components";
import { withProtected } from "@/hooks/routes";
import Link from "next/link";
import Image from "next/image";
import check from "@/assets/check.png";
import cancel from "@/assets/cancel.png";
import UserService from "@/services/UserService";
import toast, { Toaster } from "react-hot-toast";
import logo from "@/assets/setly2.svg";
import PaymentService from "@/services/DonationService";



function PaymentSuccess({ auth }) {
    const { setUser } = auth;
    const router = useRouter();
    const [disabled, setDisabled] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState("");
    const [image, setImage] = useState(null);

    useEffect(() => {
      const clientSecret = new URLSearchParams(window.location.search).get(
        "setup_intent"
      );
    
      if (!clientSecret) {
        return;
      }
      confirmPaymentMethod(clientSecret);
        
      }, [status, message]);

    const confirmPaymentMethod = async (clientSecret) => {
      setDisabled(true);
      try {
        const response = await PaymentService.confirmPaymentDetails(clientSecret);
        console.log(response.data.data);
        setImage(response.data.data.status)
        switch (response.data.data.status) {
          case "succeeded":
            setStatus("Setup successful");
            setMessage(response.data.data.message)
            break;
          case "processing":
            setStatus("Processing");
            setMessage(response.data.data.message)
            break;
          case "requires_action":
            setStatus("Authenticate your payment method");
            setMessage(response.data.data.message);
            break;
          case "requires_confirmation":
            setStatus("Confirm setup");
            setMessage(response.data.data.message);
            break;
          case "requires_payment_method":
            setStatus("Authenticate your payment method");
            setMessage(response.data.data.message);
            break;
            // default:
            //   setStatus("Setup failed");
            //   break;
        }
        setDisabled(false);
        } catch (error) {
          toast.error(error.response.data.message);
          setMessage(response.data.message)
          setDisabled(false);
        }
    }

    const fetchUser = async () => {
      setIsLoading(true);
      try {
        const response = await UserService.fetchUser();
        setUser(response.data.data);
        localStorage.setItem("setly_user", JSON.stringify(response.data.data));
        setIsLoading(false);
        router.replace("/dashboard")
      } catch (error) {
        toast.error(error.response.data.message);
        setIsLoading(false);
      }
    }


    return ( 
        <>
        <Toaster />
          <div className="flex flex-col justify-center items-center h-[100vh] border mx-auto">
            <div className="mb-5">
              { image === "succeeded" && <Image src={check} alt="Stripe Logo" width={80} height={50} />}
              { image === "requires_action" && <Image src={cancel} alt="Stripe Logo" width={80} height={50} />}
            </div>
            <h2 className="text-5xl mb-2 font-bold">{ status }</h2>
            <p className="w-96 text-center mb-5">{ message }</p>
                {/* <p className="mb-5 w-96 text-center">A receipt for the payment has been sent to your email.</p> */}
            <Button text="Return to Dashboard" background="black" onClick={fetchUser} disable={isLoading} disabled={isLoading} />
          </div>
        </>
        
     );
}

export default withProtected(PaymentSuccess);