'use client';
import { useState } from "react";
import { withProtected } from "@/hooks/routes";
import { Button } from "@/components";
import PaymentService from "@/services/DonationService";
import Image from "next/image";


function ManageSubcription() {
    const [disabled, setDisabled] = useState(false);


    const createCustomerPortal = async () => {
        setDisabled(true);
        try {
            const response = await PaymentService.createCustomerPortal();
            console.log(response);
            toast.success(response.data.message);
            setUser(response.data.data)
            setDisabled(false);
            router.replace(response.data.data);
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message);
            actions.setSubmitting(false)
            setDisabled(false);
        }
    }
    return (
        <>

        </>
    );
}

export default withProtected(ManageSubcription);