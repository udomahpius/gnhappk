import React, { useContext, useState, useEffect, useCallback } from "react";
import useRequest from "@/api/useRequest";
import { createVerifyPaymentRequest } from "@/api/requestFactory/payment";
import { NotificationContext } from "@/context/notification-context";
import success from "@/assets/checked.png";
import failed from "@/assets/close.png";
import Image from "next/image";
import Link from "next/link";
import LoggedIn from "@/hooks/logged-in";



function TransactionCallback() {
  const { requestMaker } = useRequest();
  const [loading, setLoading] = useState(false);
  const [payment, setPayment] = useState(null);
  const { showNotification } = useContext(NotificationContext);

  const verifyPayment = () => {
    setLoading(true);
    const urlParams = new URLSearchParams(window.location.search);
    let status = urlParams.get("status");
    let tx_ref = urlParams.get("tx_ref");
    let transaction_id = urlParams.get("transaction_id");
    requestMaker(createVerifyPaymentRequest(status, tx_ref, transaction_id))
      .then((res) => {
        // if(res.data.status === "success") {
        //   setRequestCall(1);
        // }
        showNotification({
          title: "Success",
          content: res.message,
        },
          "success"
        );
        setPayment(res.data.data);
        setLoading(false);
        //router.replace("/timeline");
      })
      .catch((error) => {
        setLoading(false);
        console.error(error);
        showNotification({
          title: "Something went wrong",
          content: "Couldn't make a donation, please try again later",
        },
          "error"
        );
    });
  }
  

  return (
    <LoggedIn>
      {loading && <section className="flex flex-col h-screen justify-center items-center">
        <p>Payment is processing</p>
      </section>}

      {payment?.status !== "successful" &&  <section className="flex flex-col h-screen justify-center items-center">
        <button onClick={verifyPayment} className="py-3 px-4 bg-purple-700 text-white rounded-lg">Please Click to Verify Your Payment</button>
      </section>}


      {!loading && payment?.status === "successful" && <section className="flex flex-col h-screen justify-center items-center">
        <div className="mb-12">
          <Image alt="" src={success} width="120" />
        </div>
        <div className="text-center">
          <h3 className="text-7xl font-bold mb-2">{payment?.currency} {payment?.charged_amount}</h3>
          <p className="text-green-500 mb-5">Payment was successful!</p>
          <Link href="/earnings" className="py-3 px-4 bg-purple-700 text-white rounded-lg">Back to Earnings</Link>
        </div>
      </section>}

      {!loading && payment?.status !== "successful" && <section className="flex flex-col h-screen justify-center items-center">
        <div className="mb-12">
          <Image alt="" src={failed} width="120" />
        </div>
        <div className="text-center">
          <h3 className="text-7xl font-bold mb-2 text-red-500">N5000</h3>
          <p className="text-red-500 mb-5">Payment was unsuccessful!</p>
          <Link href="/home" className="py-3 px-4 bg-purple-700 text-white rounded-lg">Back to Home</Link>
        </div>
      </section>}
    </LoggedIn>
  );
}
export default TransactionCallback;


