import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { Button, CheckoutForm, LinkedinButton } from "@/components";
import AuthService from "@/services/AuthService";
import UserService from "@/services/UserService";
import { Toaster, toast } from "react-hot-toast";
import { withProtected } from "@/hooks/routes";
import ClipLoader from "react-spinners/ClipLoader";
import { Layout, Nav } from "@/components";
import Image from "next/image";
import stripe from "@/assets/stripe.png";
import PaymentService from "@/services/PaymentService";

const override = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "0 auto",
    borderColor: "#269ACE",
};

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is your test publishable API key.
const stripePromise = loadStripe("pk_test_51MpB9EC4vUmChxeGMgLMhJB9slejzc5n97Kxc2IcMwIcA3PbqtitzjA5h5sLpSleuMyoY8095Uhi03Qk3wtBu4jT00gINMjmvi");

function SubscriptionPayment() {
    const router = useRouter();
    const [disabled, setDisabled] = useState(false);


    const checkoutSession = async() => {
        setDisabled(true);
        try {
            const response = await PaymentService.createCheckoutSession();
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

    const [clientSecret, setClientSecret] = useState("");

    useEffect(() => {
      // Create PaymentIntent as soon as the page loads
      fetch("/api/create-payment-intent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items: [{ id: "xl-tshirt" }] }),
      })
        .then((res) => res.json())
        .then((data) => setClientSecret(data.clientSecret));
    }, []);
  
    const appearance = {
      theme: "stripe",

    variables: {
        colorPrimary: '#0570de',
        colorBackground: '#ffffff',
        colorText: '#30313d',
        colorDanger: '#df1b41',
        fontFamily: 'Ideal Sans, system-ui, sans-serif',
        spacingUnit: '7px',
        // See all possible variables below
    }
    };

    const options = {
        layout: {
            type: 'tabs',
            defaultCollapsed: false,
          },
          business: "Setly AI",
      clientSecret,
      appearance,
    };


    return ( 
        <div className="flex flex-col justify-center items-center h-full w-full bg-white side-body">
            <div className="mb-5">
                <Image src={stripe} alt="Stripe Logo" width={100} height={50} />
            </div>
            {clientSecret && (
                <Elements options={options} stripe={stripePromise}>
                    <CheckoutForm  />
                </Elements>
            )}
            {/* <div className="mb-5">
                <Image src={stripe} alt="Stripe Logo" width={100} height={50} />
            </div>
            <h2 className="text-lg mb-2 font-bold">Pay $24 Subscription</h2>
            <p className="mb-5 w-96 text-center">Complete subscription payment to again access to the Setly features.</p>
            <Button text="Pay $24" background="black" disable={disabled} disabled={disabled} onClick={checkoutSession} /> */}
        </div>
     )

    
}

export default SubscriptionPayment;