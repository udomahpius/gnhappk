import { useEffect } from "react";
import { useRouter } from "next/navigation";
import ClipLoader from "react-spinners/ClipLoader";
import { useCookies } from 'react-cookie';
import useAuth from "@/hooks1/auth";
import { setCookie, hasCookie } from 'cookies-next';


const override = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "0 auto",
    borderColor: "#269ACE",
};



export function withPublic(WrappedComponent) {
	return function WithPublic({...props}) {
	  const router = useRouter();
	  const auth = useAuth();
	  const [cookies] = useCookies(["good.sid"]);
  
	  const accessToken = cookies["good.sid"];

	  if (accessToken) {
		router.replace("/dashboard/home");
		return (
			<div className="min-h-screen flex items-center justify-center">
				<ClipLoader
					color="white"
					loading={true}
					cssOverride={override}
					size={50}
					aria-label="Loading Spinner"
					data-testid="loader"
				/>
			</div>
		);
	 }
	  // If this is an accessToken we just render the component that was passed with all its props
		return <WrappedComponent auth={auth} {...props} />;
	};
} 

export function withProtected(WrappedComponent) {
  return function WithProtected({...props}) {
	const router = useRouter();
	const auth = useAuth();
	const [cookies, setCookie] = useCookies(["good.sid"]);
	const accessToken = cookies["good.sid"];

	  if (!accessToken) {
		localStorage.removeItem("good_user");
		router.replace("/auth/login");
		return (
			<div className="min-h-screen flex items-center justify-center">
				<ClipLoader
					color="white"
					loading={true}
					cssOverride={override}
					size={50}
					aria-label="Loading Spinner"
					data-testid="loader"
				/>
			</div>
		);
	 }

      // If this is an accessToken we just render the component that was passed with all its props
      return <WrappedComponent auth={auth} {...props} />;
	}
};