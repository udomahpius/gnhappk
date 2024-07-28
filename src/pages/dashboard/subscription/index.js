import { useState } from "react";
import { useRouter } from "next/router";
import { Button } from "@/components";
import UserService from "@/services1/UserService";
import { Toaster, toast } from "react-hot-toast";
import { withProtected } from "@/hooks1/routes";

function Subscription({ auth }) {
    const router = useRouter();
    const [disabled, setDisabled] = useState(false);

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
        <>
            <Toaster />
            <div className="flex flex-col justify-center items-center h-[100vh] border mx-auto">
                <p>Subscribe</p>
                <div className="w-[20%]">
                    <Button text="Subscribe $25" onClick={checkoutSession} disable={disabled} disabled={disabled} />
                </div>
            </div>
        </>
     );
}

export default withProtected(Subscription);