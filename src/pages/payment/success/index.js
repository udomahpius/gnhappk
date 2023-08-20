import { withProtected } from "@/hooks/routes";
import Link from "next/link";


function PaymentSuccess() {
    return ( 
        <>
            <p>Payment Success</p>
            <Link href="/dashboard">Go to Dashboard</Link>
        </>
     );
}

export default withProtected(PaymentSuccess);