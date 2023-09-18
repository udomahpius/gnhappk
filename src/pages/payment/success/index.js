import { useState } from "react";
import { Button } from "@/components";
import { withProtected } from "@/hooks/routes";
import Link from "next/link";
import Image from "next/image";
import check from "@/assets/check.png";


function PaymentSuccess() {
    const [disabled, setDisabled] = useState(false);
    return ( 
        <div className="flex flex-col justify-center items-center h-[100vh] border mx-auto">
            <div className="mb-5">
                <Image src={check} alt="Stripe Logo" width={80} height={50} />
            </div>
            <h2 className="text-5xl mb-2 font-bold">Success!</h2>
            <p className="w-96 text-center">Your payment was successful.</p>
            <p className="mb-5 w-96 text-center">A receipt for the payment has been sent to your email.</p>
            <Button text="Return to Dashboard" background="black" disable={disabled} disabled={disabled} />
        </div>
     );
}

export default withProtected(PaymentSuccess);