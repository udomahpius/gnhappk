import React, { useContext, useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import useRequest from "@/api/useRequest";
import { createVerifyPaymentRequest } from "@/api/requestFactory/payment";
import { NotificationContext } from "@/context/notification-context";
import success from "@/assets/checked.png";
import failed from "@/assets/close.png";
import Image from "next/image";



function TransactionCallback() {
  const router = useRouter();
  const searchParams = useSearchParams()
  const { requestMaker } = useRequest();
  const [requestCall, setRequestCall] = useState(0);
  const { showNotification } = useContext(NotificationContext);

  // useEffect(() => {
  //   if(requestCall > 0) return;
  //   requestMaker(createVerifyPaymentRequest(searchParams.get("status"), searchParams.get("tx_ref"),
  //   searchParams.get("transaction_id")))
  //     .then((res) => {
  //       if(res.data.status === "success") {
  //         setRequestCall(1);
  //       }
  //       showNotification({
  //         title: "Success",
  //         content: res.message,
  //       },
  //         "success"
  //       );
  //       router.replace("/timeline");
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //       showNotification({
  //         title: "Something went wrong",
  //         content: "Couldn't make a donation, please try again later",
  //         },
  //         "error"
  //       );
  //     });
  // }, [router, searchParams, requestMaker, requestCall, showNotification]);

  const verifyPayment = () => {
    if(requestCall > 0) return;
    requestMaker(createVerifyPaymentRequest(searchParams.get("status"), searchParams.get("tx_ref"),
    searchParams.get("transaction_id")))
      .then((res) => {
        if(res.data.status === "success") {
          setRequestCall(1);
        }
        showNotification({
          title: "Success",
          content: res.message,
        },
          "success"
        );
        router.replace("/timeline");
      })
      .catch((error) => {
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
    <div>
      <section className="flex flex-col h-screen justify-center items-center">
        <button onClick={verifyPayment} type="button" className="w-[200px] bg-purple-700 text-white h-12 rounded-lg">Confirm Payment</button>
      </section>
      {/* <section className="flex flex-col h-screen justify-center items-center">
        <div className="mb-12">
          <Image alt="" src={success} width="120" />
        </div>
        <div className="text-center">
          <h3 className="text-7xl font-bold mb-2">N5000</h3>
          <p className="text-green-500">Payment was successful!</p>
        </div>
      </section> */}

      {/* <section className="flex flex-col h-screen justify-center items-center">
        <div className="mb-12">
          <Image alt="" src={failed} width="120" />
        </div>
        <div className="text-center">
          <h3 className="text-7xl font-bold mb-2 text-red-500">N5000</h3>
          <p className="text-red-500">Payment was unsuccessful!</p>
        </div>
      </section> */}
    </div>
  );
}
export default TransactionCallback;


