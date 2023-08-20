import { useState } from "react";
import { useRouter } from "next/router";
import { Button } from "@/components";
import Link from "next/link";
import AuthService from "@/services/AuthService";
import UserService from "@/services/UserService";
import { Toaster, toast } from "react-hot-toast";
import { withProtected } from "@/hooks/routes";

function LinkedinSuccessful({ auth }) {
    const router = useRouter();
    const { query } = useRouter();
    const [disabled, setDisabled] = useState(false);

    const getAccessToken = async() => {
        setDisabled(true);
        try {
            const response = await AuthService.GetLinkedinAccessToken(query.code);
            console.log(response.data.data);
            setDisabled(false);
            toast.success(response.data.message);
            router.replace("/dashboard");
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
                <p>Linkedin Connected Successful</p>
                <div className="w-[20%]">
                    <Link href="/dashboard">Continue</Link>
                </div>
                <Button text="Continue" onClick={getAccessToken} disable={disabled} disabled={disabled} />
            </div>
        </>
     );
}

export default withProtected(LinkedinSuccessful);