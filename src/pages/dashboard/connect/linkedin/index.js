import { useState } from "react";
import { useRouter } from "next/router";
import { Button, LinkedinButton } from "@/components";
import AuthService from "@/services/AuthService";
import UserService from "@/services/UserService";
import { Toaster, toast } from "react-hot-toast";
import { withProtected } from "@/hooks/routes";
import ClipLoader from "react-spinners/ClipLoader";
import { Layout, Nav } from "@/components";
import Image from "next/image";

const override = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "0 auto",
    borderColor: "#269ACE",
};

function ConnectLinkedin({ auth }) {
    const router = useRouter();
    const { user } = auth;
    const [disabled, setDisabled] = useState(false);
    const [text, setText] = useState("Connect Linkedin");


    const connectLinkedin = async() => {
        setDisabled(true);
        setText("Connecting...");
        try {
            const response = await AuthService.connectLinkedin();
            console.log(response.data.data);
            setDisabled(true);
            setText("Redirecting...")
            router.replace(response.data.data)
        } catch (error) {
            setDisabled(false);
            setText("Connect Linkedin");
            if(error.response.status === 401) {
                router.replace("/auth/login")
            }
            toast.error(error.statusCode)
            console.log(error);
        }
    }

    { user.status === "activated" && router.replace("/dashboard") }

    { user.status === "default_incomplete" && router.replace("/dashboard/subscription") }


    { disabled && 
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
    }

    return ( 
        <>
            <Toaster />
            <div className="flex flex-col justify-center items-center h-[100vh] border mx-auto">
                <div className="mb-5">
                    <svg width="84" height="21" viewBox="0 0 84 21" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet" focusable="false"><path fill-rule="evenodd" clip-rule="evenodd" d="M64.5 0H82.5C82.8978 0 83.2794 0.158035 83.5607 0.43934C83.842 0.720644 84 1.10218 84 1.5V19.5C84 19.8978 83.842 20.2794 83.5607 20.5607C83.2794 20.842 82.8978 21 82.5 21H64.5C64.1022 21 63.7206 20.842 63.4393 20.5607C63.158 20.2794 63 19.8978 63 19.5V1.5C63 1.10218 63.158 0.720644 63.4393 0.43934C63.7206 0.158035 64.1022 0 64.5 0ZM66.5417 5.93108C66.8229 6.12924 67.1562 6.24017 67.5 6.25C67.734 6.25669 67.9669 6.21637 68.1851 6.13142C68.4032 6.04647 68.6021 5.91863 68.7699 5.75546C68.9377 5.59228 69.0711 5.3971 69.1622 5.18145C69.2532 4.9658 69.3001 4.73408 69.3 4.5C69.2999 4.15604 69.1984 3.81975 69.0082 3.53315C68.818 3.24655 68.5476 3.02234 68.2307 2.88854C67.9139 2.75475 67.5646 2.71729 67.2266 2.78086C66.8885 2.84443 66.5767 3.00621 66.3301 3.24597C66.0835 3.48574 65.913 3.79286 65.8399 4.12897C65.7669 4.46508 65.7945 4.81527 65.9193 5.13578C66.0441 5.45629 66.2606 5.73291 66.5417 5.93108ZM78 18H81L80.96 11.76C80.96 8.69 79.07 7.76 77.3 7.76C76.6604 7.75255 76.0282 7.89631 75.4547 8.17957C74.8812 8.46283 74.3828 8.87757 74 9.39V8H71V18H74V13C73.9699 12.6909 74.0023 12.379 74.0955 12.0827C74.1887 11.7865 74.3406 11.5121 74.5423 11.2759C74.7439 11.0397 74.9911 10.8466 75.2691 10.7082C75.547 10.5697 75.85 10.4887 76.16 10.47C77.26 10.47 78 11.29 78 12.91V18ZM66 8V18H69V8H66Z" fill="#0A66C2"></path><path d="M11.5418 3.06894C11.8229 2.87077 12.1562 2.75984 12.5 2.75001C12.734 2.74332 12.967 2.78365 13.1851 2.86859C13.4032 2.95354 13.6021 3.08138 13.7699 3.24456C13.9378 3.40773 14.0712 3.60292 14.1622 3.81856C14.2533 4.03421 14.3001 4.26593 14.3 4.50001C14.2999 4.84397 14.1984 5.18026 14.0082 5.46686C13.8181 5.75347 13.5477 5.97767 13.2308 6.11147C12.9139 6.24527 12.5646 6.28272 12.2266 6.21915C11.8886 6.15558 11.5768 5.9938 11.3302 5.75404C11.0835 5.51427 10.9131 5.20715 10.84 4.87104C10.7669 4.53493 10.7945 4.18475 10.9193 3.86424C11.0442 3.54373 11.2607 3.26711 11.5418 3.06894Z" fill="#0A66C2"></path><path d="M11 8H14V18H11V8Z" fill="#0A66C2"></path><path d="M22.34 7.75999C21.6937 7.74617 21.0535 7.88687 20.4725 8.17038C19.8916 8.45389 19.3868 8.87202 19 9.38999V7.99999H16V18H19V13C18.9769 12.6949 19.0146 12.3882 19.111 12.0978C19.2074 11.8075 19.3605 11.5391 19.5615 11.3084C19.7624 11.0776 20.0072 10.8891 20.2816 10.7538C20.5561 10.6185 20.8546 10.539 21.16 10.52C22.26 10.52 23 11.34 23 12.96V18H26V11.75C26 8.68999 24.11 7.75999 22.34 7.75999Z" fill="#0A66C2"></path><path d="M3 3H0V18H9V15H3V3Z" fill="#0A66C2"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M55.5525 8.01468C56.0985 8.23857 56.5915 8.5742 57 9V3H60V18H57.18V16.69C56.8112 17.2182 56.3135 17.6433 55.7342 17.9251C55.1549 18.2069 54.5132 18.3359 53.87 18.3C53.193 18.2842 52.5262 18.131 51.9102 17.8497C51.2942 17.5684 50.7417 17.1649 50.2863 16.6637C49.8309 16.1625 49.4821 15.574 49.261 14.9339C49.0398 14.2938 48.9511 13.6154 49 12.94C48.9537 12.2744 49.0438 11.6063 49.2648 10.9767C49.4858 10.3471 49.833 9.76927 50.2853 9.27865C50.7375 8.78803 51.2852 8.39494 51.8947 8.12348C52.5042 7.85203 53.1628 7.70792 53.83 7.7C54.4198 7.6836 55.0066 7.79079 55.5525 8.01468ZM53.4235 15.5818C53.7501 15.7257 54.1031 15.8 54.46 15.8C54.8223 15.8067 55.182 15.7375 55.516 15.597C55.85 15.4565 56.1509 15.2477 56.3995 14.9841C56.6481 14.7204 56.8388 14.4077 56.9594 14.0661C57.0801 13.7244 57.1279 13.3613 57.1 13C57.1234 12.6397 57.0723 12.2786 56.95 11.9389C56.8277 11.5992 56.6367 11.2884 56.3891 11.0257C56.1414 10.7631 55.8423 10.5542 55.5105 10.4121C55.1786 10.2701 54.821 10.1979 54.46 10.2C54.1022 10.1969 53.7477 10.2691 53.4196 10.412C53.0915 10.5548 52.7972 10.7651 52.5557 11.0292C52.3143 11.2933 52.1311 11.6053 52.0181 11.9448C51.9052 12.2844 51.8649 12.6439 51.9 13C51.8681 13.3555 51.9105 13.7137 52.0247 14.0519C52.1388 14.3901 52.3221 14.7007 52.563 14.9642C52.8038 15.2276 53.0969 15.4379 53.4235 15.5818Z" fill="#0A66C2"></path><path d="M38.04 8H34.4L31.06 12.04H31V3H28V18H31V13.19H31.06L34.48 18H38.23L34.17 12.5L38.04 8Z" fill="#0A66C2"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M41.1362 8.05742C41.7695 7.8035 42.448 7.68187 43.13 7.70001C45.85 7.70001 48 9.52001 47.92 13.23V14H40.92V14.06C40.9808 14.6366 41.2627 15.1671 41.7066 15.5401C42.1504 15.9131 42.7216 16.0994 43.3 16.06C43.7471 16.0657 44.1906 15.9799 44.6033 15.808C45.0161 15.636 45.3893 15.3815 45.7 15.06L47.63 16.36C47.0925 16.9941 46.4182 17.4981 45.6578 17.8341C44.8974 18.1701 44.0708 18.3294 43.24 18.3C42.5303 18.3195 41.8243 18.1908 41.1671 17.9223C40.5099 17.6538 39.9158 17.2512 39.4228 16.7403C38.9298 16.2295 38.5486 15.6214 38.3037 14.9551C38.0587 14.2887 37.9553 13.5786 38 12.87C37.9766 12.1882 38.0929 11.5087 38.3419 10.8735C38.5909 10.2383 38.9673 9.66077 39.4478 9.17647C39.9284 8.69216 40.503 8.31133 41.1362 8.05742ZM41.6013 10.4936C41.1871 10.8872 40.9457 11.4288 40.93 12H45.14C45.1536 11.7291 45.1119 11.4582 45.0175 11.2039C44.923 10.9496 44.7779 10.7171 44.5908 10.5207C44.4037 10.3243 44.1786 10.1679 43.9292 10.0612C43.6798 9.95452 43.4113 9.89967 43.14 9.90001C42.5688 9.88657 42.0155 10.1 41.6013 10.4936Z" fill="#0A66C2"></path></svg>
                </div>
                <h2 className="text-lg mb-2 font-bold">Connect Your Linkedin Account</h2>
                <p className="mb-5 w-96 text-center">To access Setly dashboard and use the Setly features properly, please connect your Linkedin account to Setly.</p>
                {/* <button className="linkedin-btn">Connect Linkedin</button> */}
                <LinkedinButton text={text} disable={disabled} disabled={disabled} onClick={connectLinkedin} />
                <div className="w-[20%]">
                    {/* <Button text="Connfect Linkd" onClick={connectLinkedin} disable={disabled} disabled={disabled} /> */}
                </div>
            </div>
        </>
     )

    
}

export default withProtected(ConnectLinkedin);