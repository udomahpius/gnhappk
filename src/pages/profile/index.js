import {  Nav, SmallButtonWhite, SmatNav } from "@/components";
import { NotificationContext } from "@/context/notification-context";
import LoggedIn from "@/hooks/logged-in";
import { ChevronLeftIcon } from "@heroicons/react/outline";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import useRequest from "@/api/useRequest";
import { createGetUserRequest } from "@/api/requestFactory/user";
import Image from "next/image";


function Profile () {
    const { requestMaker } = useRequest();
    const [user, setUser] = useState(null);
    const router = useRouter();
    const { query } = useRouter();
    const [openModal, setOpenModel] = useState(false);
    const [insurer, setInsurer] = useState(null);
    const [disabled, setDisabled] = useState(false);

    
  const { notification, hideNotification } = useContext(NotificationContext);

  useEffect(() => {
    requestMaker(createGetUserRequest())
      .then((response) => {
        setUser(response.data);
        setUserAccountStatus(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [requestMaker]);


    return (
        
        <LoggedIn>
            <section className="my-[32px] mx-auto w-[75%]">
                <div className="p-[16px] rounded-[10px] bg-white">
                    <div className="w-full flex gap-3 justify-between items-center mb-5">
                        <span className="text-[#A6AFC2] font-bold text-[16px]">Your information</span>
                    </div>


                    <div>

                            <div className="flex gap-4 mb-4">
                                <span className="bg-[#A6AFC2] text-white rounded-full w-[45px] h-[45px] flex justify-center items-center">
                                    <Image
                                        src={`https://avatar.iran.liara.run/public`}
                                        width={91}
                                        height={103}
                                        // objectFit="cover"
                                        className="rounded-full object-cover"
                                        alt="profile image"
                                    />
                                </span>
                                <div className="flex flex-col gap-1">
                                    <span className="text-[12px] font-semibold text-[#677597]">Full name</span>
                                    <span className="text-[16px] font-medium text-[#051438]">{user?.name}</span>
                                </div>
                            </div>

                            <div>
                                <h4 className="text-[16px] font-bold text-[#A6AFC2] mb-3">Contact person(s) information</h4>
                                <div className="pb-3 flex justify-around mb-3">
                                    <div className="flex flex-col gap-1 w-full">
                                        <span className="text-[12px] font-semibold text-[#677597]">Phone number</span>
                                        <span className="text-[16px] font-medium text-[#051438]">{user?.phone}</span>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>

                </section>
            
        </LoggedIn>
    );
}

export default Profile;