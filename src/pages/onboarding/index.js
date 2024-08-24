import { createBankAccountRequest, createGetBanksRequest, createVerifyRequest } from "@/api/requestFactory/payment";
import { HomeIcon, PhoneIcon, UserIcon } from "@heroicons/react/outline";
import { useContext, useEffect, useState } from "react";
import useRequest from "@/api/useRequest";
import { GlobalLoader, SmallButton } from "@/components";
import Notification from "@/components/Notification";
import { NotificationContext } from "@/context/notification-context";
import { useRouter } from "next/router";


function Onboarding() {
    const router = useRouter();
    const { requestMaker } = useRequest();
    const { notification, showNotification, hideNotification } = useContext(NotificationContext);
    const [banks, setBanks] = useState([]);
    const [disabled, setDisabled] = useState(true);
    const [bankName, setBankName] = useState(null);
    const [accountNumber, setAccountNumber] = useState("0690000032");
    const [accountNumberError, setAccountNumberError] = useState("");
    const [accountName, setAccountName] = useState("");
    const [accountNameError, setAccountNameError] = useState("");

    useEffect(() => {
        fetchBanks();
    }, [])

    async function fetchBanks() {
        requestMaker(createGetBanksRequest())
          .then((res) => {
            console.log(res.data.data);
            setBanks(res.data.data);
          })
          .catch((err) => {
          console.log(err);
          alert(err.response?.data?.message || "Something went wrong");
      })
    }


    async function verifyBank() {
        console.log(bankName);
        
        requestMaker(createVerifyRequest(accountNumber, "044"))
          .then((res) => {
            console.log(res.data);
            setAccountName(res.data.data.account_name);
            setDisabled(false);
          })
          .catch((err) => {
            console.log(err);
            //alert(err.response?.data?.message || "Something went wrong");
        })
    }

    async function createBankAccount(e) {
        e.preventDefault();
        setAccountNumberError("");
        setAccountNameError("");
        if(!accountNumber) {
            setAccountNumberError("Account number is required");
          return;
        }
        if(!accountName) {
            setAccountNameError("Account Name is required");
          return;
        }
        requestMaker(createBankAccountRequest(accountNumber, "044", accountName))
          .then((res) => {
            showNotification({
                title: "Success",
                content: res.message,
            },
                "success"
            );
            router.push("/home");
          })
          .catch((err) => {
            console.log(err);
            showNotification({
                title: "Something went wrong",
                content: err.response?.data?.message || "Something went wrong",
              },
                "error"
            );
        })
    }

    return (
        <>
            <Notification
                message={notification.message}
                type={notification.type}
                show={notification.show}
                onClose={hideNotification}
            >

          </Notification>
            <section className="flex flex-col justify-center h-screen">
                <div className="mx-auto w-[30%]">
                    <div className="text-center mb-10">
                        <h3 className="text-[30px]">Save Receiving Account</h3>
                        <p>This is your account number you will receive your donations.</p>
                    </div>
                    <form>
                        <div className="mb-5">
                            <label className="mb-2 text-gray-800 text-sm flex">Select a Bank</label>
                            <select className="w-full px-2 rounded-lg h-14" name="bankName"
                                onChange={(e) => setBankName(e.target.value)}
                            >
                                {/* <option hidden>Select a Bank</option> */}
                                {banks?.map((bank, index) => (
                                    <option key={index} value={bank.code}>{bank.name}</option>
                                ))}
                            </select>              
                        </div>

                        <div className="mb-0">
                            <label className="mb-2 text-gray-800 text-sm flex">Account Number</label>
                            <div className="border bg-white rounded-lg px-4 flex justify-between h-14 hover:border-setly-100 hover:border-2">
                                <div className="flex gap-3 items-center w-full">
                                    <HomeIcon className="h-5 w-5 text-gray-600" />
                                    <input type="text" name="account_number" placeholder="0123456789" className="w-full flex items-center h-full outline-none text-gray-700"
                                        onChange={(e) => setAccountNumber(e.target.value)} value={accountNumber} />
                                </div>          
                            </div>
                            {accountNumberError &&
                                <small className="text-sm text-red-600 mt-1.5">
                                    {accountNumberError}
                                </small>
                            }                
                        </div>

                        <button type="button" className="mb-5 text-[13px] text-blue-500 font-semibold underline" onClick={verifyBank}>Verify Account</button>

                        <div className="mb-5">
                            <label className="mb-2 text-gray-800 text-sm flex">Account Name</label>
                            <div className="border bg-white rounded-lg px-4 flex justify-between h-14">
                                <div className="flex gap-3 items-center w-full">
                                    <UserIcon className="h-5 w-5 text-gray-600" />
                                    <input type="text" name="account_number" disabled className="w-full flex items-center h-full outline-none text-gray-700"
                                    value={accountName} />
                                </div>          
                            </div>
                            {accountNameError &&
                                <small className="text-sm text-red-600 mt-1.5">
                                    {accountNameError}
                                </small>
                            }                
                        </div>

                        <div className="flex justify-center">
                            <SmallButton text="Save Account" disabled={disabled}
                                onClick={createBankAccount} type="submit"
                            />
                        </div>
                    </form>
                </div>
            </section>
            <GlobalLoader></GlobalLoader>
        </>
    );
}

export default Onboarding;