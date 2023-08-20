import { withProtected } from "@/hooks/routes";

function Leads() {
    return (
        <p>Leads</p>
    );
}

export default withProtected(Leads);