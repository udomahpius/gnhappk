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

    // useEffect(() => {
    //   // Create PaymentIntent as soon as the page loads
    //   fetch("/api/create-payment-intent", {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify({ items: [{ id: "xl-tshirt" }] }),
    //   })
    //     .then((res) => res.json())
    //     .then((data) => setClientSecret(data.clientSecret));
    // }, []);

    const subscribe = () => {

    }
  
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
        mode: "subscription",
        amount: 2400,
        layout: {
            type: 'tabs',
            defaultCollapsed: false,
        },
        //business: "Setly AI",
        currency: 'usd',
      //clientSecret,
      appearance,
    };


    return ( 
        <div className="flex flex-col justify-center items-center h-full w-full bg-white side-body py-3">
            <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-8 lg-pt-3">
                <h2 className="mb-2 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Start Your 14 Days Free Trial</h2>
                <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">Your $24 subscription will begin when your free trial period ends.</p>
            </div>
            

            <section className="bg-white dark:bg-gray-900 w-full">
                <div className="py-3 px-4 mx-auto max-w-screen-xl lg:py-0 lg:px-6 flex justify-between">
                    
                    <div className="space-y-8 lg:grid lg:grid-cols-1 sm:gap-6 xl:gap-10 lg:space-y-0">
                        <div className="flex flex-col p-4 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:py-5 xl:px-8 dark:bg-gray-800 dark:text-white">
                            <h3 className="text-2xl font-semibold">Solo</h3>
                            <div className="flex justify-center items-baseline my-6">
                                <span className="mr-2 text-5xl font-extrabold">$24</span>
                                <span className="text-gray-500 dark:text-gray-400">/month</span>
                            </div>
                            <ul role="list" className="mb-3 space-y-4 text-left">
                                <li className="flex items-center space-x-3">
                                    <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span>500 AI Credits</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span>Import/Export Prospect Data</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span>Integrations: <span className="font-semibold">Linkedin</span></span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span>AI Messaging &amp; Replying</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span>AI Generated Content Creation</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span>Earn Rewards &amp; Incentives</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span>Setly Communities</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span>Setly Sales Academy</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span>Customer Support</span>
                                </li>
                            </ul>
                            {/* <Button text="Start Your Free Trial" disable={disabled} disabled={disabled} onClick={subscribe} /> */}
                        </div>
                    </div>

                    <Elements options={options} stripe={stripePromise}>
                        <CheckoutForm  />
                    </Elements>
                </div>
            </section>
            {/* <div classNameName="mb-5">
                <Image src={stripe} alt="Stripe Logo" width={100} height={50} />
            </div>
            <h2 classNameName="text-lg mb-2 font-bold">Pay $24 Subscription</h2>
            <p classNameName="mb-5 w-96 text-center">Complete subscription payment to again access to the Setly features.</p>
            <Button text="Pay $24" background="black" disable={disabled} disabled={disabled} onClick={checkoutSession} /> */}
        </div>
     )

    
}

export default SubscriptionPayment;