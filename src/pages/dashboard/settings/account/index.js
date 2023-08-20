import { withProtected } from "@/hooks/routes";

function Account({ auth }) {
    const { user } = auth;

    return (
        <>
            <div>
                <p>Account</p>
                <div>
                    <p>{ user.first_name }</p>
                    <p>{ user.last_name }</p>
                    <p>{ user.email}</p>
                </div>
            </div>
        </>
    );
}

export default withProtected(Account);