import { withProtected } from "@/hooks/routes";

function PaymentCancel() {
    return ( 
        <p>Payment Cancel</p>
     );
}

export default withProtected(PaymentCancel);