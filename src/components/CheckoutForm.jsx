import React, { useState, useEffect } from "react";
import {
  PaymentElement,
  LinkAuthenticationElement,
  useStripe,
  useElements
} from "@stripe/react-stripe-js";
import { BigButton, Button } from ".";
import PaymentService from "@/services/PaymentService";

export default function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState();

  useEffect(() => {
    if (!stripe) {
      return;
    }

    // const clientSecret = new URLSearchParams(window.location.search).get(
    //   "payment_intent_client_secret"
    // );

    // if (!clientSecret) {
    //   return;
    // }

    // stripe.retrieveSetupIntent(clientSecret).then(({ setupIntent }) => {
    //   switch (setupIntent.status) {
    //     case "succeeded":
    //       setMessage("Success! Your payment method has been saved.");
    //       break;
    //     case "processing":
    //       setMessage("Processing payment details. We'll update you when processing is complete.");
    //       break;
    //     case "requires_payment_method":
    //       setMessage("Failed to process payment details. Please try another payment method.");
    //       break;
    //     default:
    //       setMessage("Something went wrong.");
    //       break;
    //   }
    // });
  }, [stripe]);



  const handleError = (error) => {
    setIsLoading(false);
    setMessage(error.message);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js hasn't yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    setIsLoading(true);

    const {error: submitError} = await elements.submit();
    if (submitError) {
      setIsLoading(false);
      console.log(submitError);
      handleError(submitError);
      return;
    }


    const subscription = await PaymentService.createSubscription();


    console.log(subscription);

    const { type, clientSecret } = subscription.data.data;

    const confirmIntent = type === "setup" ? stripe.confirmSetup : stripe.confirmPayment;

    // Confirm the Intent using the details collected by the Payment Element
    const { error } = await confirmIntent({
      elements,
      clientSecret,
      confirmParams: {
        return_url: "http://localhost:3000/payment/complete",
      },
    });


    if (error) {
      // This point is only reached if there's an immediate error when confirming the Intent.
      // Show the error to your customer (for example, "payment details incomplete").
      setIsLoading(false);
      handleError(error);
    } else {
      // Your customer is redirected to your `return_url`. For some payment
      // methods like iDEAL, your customer is redirected to an intermediate
      // site first to authorize the payment, then redirected to the `return_url`.
      setIsLoading(false);
    }

    


    // const { error } = await stripe.confirmPayment({
    //   elements,
    //   confirmParams: {
    //     // Make sure to change this to your payment completion page
    //     return_url: "https://app.setly.ai/payment/success",
    //   },
    // });

    // // This point will only be reached if there is an immediate error when
    // // confirming the payment. Otherwise, your customer will be redirected to
    // // your `return_url`. For some payment methods like iDEAL, your customer will
    // // be redirected to an intermediate site first to authorize the payment, then
    // // redirected to the `return_url`.
    // if (error.type === "card_error" || error.type === "validation_error") {
    //   setMessage(error.message);
    // } else {
    //   setMessage("An unexpected error occurred.");
    // }

    
  };

  const paymentElementOptions = {
    layout: "tabs",
  };

  return (
    <form id="payment-form" onSubmit={handleSubmit} className="w-[45%]">
      <LinkAuthenticationElement
        id="link-authentication-element"
        onChange={(e) => setEmail(e.target.value)}
      />
      <PaymentElement id="payment-element" options={paymentElementOptions} className="mb-5 w-full" />
      <BigButton text="Pay $24" background="black" id="submit" disable={isLoading} disabled={isLoading || !stripe || !elements} />
      {/* Show any error or success messages */}
      {message && <div id="payment-message" className="text-red-500">{message}</div>}
    </form>

// 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
  );
}