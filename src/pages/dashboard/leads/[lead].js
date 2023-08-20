import { withProtected } from "@/hooks/routes";

function Lead() {
    return (
        <p>Lead</p>
    );
}

export default withProtected(Lead);