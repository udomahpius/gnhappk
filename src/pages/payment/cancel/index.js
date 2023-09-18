import { useState } from "react";
import { Button } from "@/components";
import { withProtected } from "@/hooks/routes";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import cancel from "@/assets/cancel.png";


function PaymentCancel() {
    const router = useRouter();
    const [disabled, setDisabled] = useState(false);

    const goBack = () => {
        router.replace("/dashboard");
    }


    return ( 
        <div className="flex flex-col justify-center items-center h-[100vh] border mx-auto">
            <div className="mb-5">
                <Image src={cancel} alt="Stripe Logo" width={80} height={50} />
            </div>
            <h2 className="text-5xl mb-2 font-bold">Oh no!</h2>
            <p className="mb-5 w-96 text-center">An error occured during your payment. Please try again.</p>
            <Button text="Try Again" background="red" disable={disabled} disabled={disabled} onClick={goBack} />
        </div>
     );
}

export default withProtected(PaymentCancel);