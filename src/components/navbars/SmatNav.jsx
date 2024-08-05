import logo from "@/assets/good-logo.png";
import OutsideAlerter from "@/hooks/useOutsideAlerter";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";

function SmatNav({ user, openSignOut }) {
  const router = useRouter();
  const [showAllWorkspaces, setShowAllWorkspaces] = useState(false);
  
  
  return (
    <nav className="flex justify-end md:justify-between items-center py-[14px] px-4 md:px-[32px] w-full bg-[#EDF0F8] border-b border-[#DFE2E9]">
      <div className="hidden md:flex items-center gap-28">
        <Link href="/home">
          <Image src={logo} width="50" height="" className="" alt="" />
        </Link>
                
        <ul className="flex items-center gap-10">
          <li>
            <Link href="/home">Home</Link>
          </li>
          <li>
            <Link href="/timeline">Timeline</Link>
          </li>
          <li>
            <Link href="/earnings">Earnings</Link>
          </li>
          <li>
            <Link href="/profile">Profile</Link>
          </li>
        </ul>
      </div>
            {/* <button className="flex gap-4 items-center" type="button" onClick={openSignOut}>
                <p className="text-[#051438] font-bold text-[18px]">Hi, { user?.name?.split(" ")[0] }</p>
                <span className="bg-[#A6AFC2] w-[35px] h-[35px] rounded-full flex items-center justify-center text-white">
                    <Image
                        src={`https://avatar.iran.liara.run/public`}
                        width={91}
                        height={103}
                        // objectFit="cover"
                        className="rounded-full object-cover"
                        alt="profile image"
                    />
                </span>
            </button> */}

      <OutsideAlerter
        callback={() => {
          setShowAllWorkspaces(false);
          //setZIndex("z-0");
        }}
      >
                <div className="relative w-full">
                  <div className="flex gap-12 items-center justify-between">
                    <p className="text-[#051438] font-bold text-[18px]">Hi, { user?.name?.split(" ")[0] }</p>
                    <button
                      onClick={() => {
                        setShowAllWorkspaces(!showAllWorkspaces);
                        //setZIndex(zIndex === "z-0" ? "z-50" : "z-0");
                      }}
                      type="button"
                      className="inline-flex items-center justify-center text-white transition-all duration-150 rounded-full ring-1 ring-inset ring-gray-200 bg-gray-200 h-10 w-10 md:text-lg text-sm font-semibold group shadow-xs"
                    >
                      {/* {currentWorkspace?.name?.split("")[0]} */}

                      <Image
                        src={`https://avatar.iran.liara.run/public`}
                        width={91}
                        height={103}
                        // objectFit="cover"
                        className="rounded-full object-cover"
                        alt="profile image"
                      />
                      
                    </button>


                  </div>

                  {showAllWorkspaces && (
                    <div className="absolute right-0 rounded-xl overflow-hidden shadow-xl top-[130%]">
                      <div className="w-[17.5rem] py-4 overflow-hidden max-w-xs z-200 bg-white divide-y rounded-t-xl divide-gray-200 ring-1 ring-gray-200 ring-inset">
                        <div className="flex flex-col justify-center items-center px-2 pb-4">
                          <div
                            className="mb-2 inline-flex items-center justify-center text-white transition-all duration-150 rounded-full ring-1 ring-inset ring-gray-100 bg-gray-100 h-12 w-12 md:text-lg text-sm font-semibold group shadow-xs"
                          >
                            <Image
                              src={`https://avatar.iran.liara.run/public`}
                              width={91}
                              height={103}
                              // objectFit="cover"
                              className="rounded-full object-cover"
                              alt="profile image"
                            />
                          </div>
                          <h4 className="font-bold text-[14px] capitalize">{user?.user?.name}</h4>
                          <p className="text-center text-xs text-[#6c6685] mb-2">{user?.user?.email}</p>
                          <Link href="/earnings" className="border rounded-2xl px-4 py-2 text-[12px] font-semibold hover:bg-slate-100">View Earnings</Link>
                        </div>
                      </div>

                      <div className="px-4 py-3 bg-white">
                        <button
                          type="button"
                          onClick={() => router.push("/logout")}
                          className="text-[14px] font-medium relative whitespace-nowrap rounded-full flex gap-2 items-center w-full py-[0.375rem] px-[0.75rem] hover:bg-[#b1b1b126] text-slate-600"
                        >
                          Sign Out
                        </button>
                      </div>
                      
                      
                    </div>
                  )}
                </div>
              </OutsideAlerter>
    </nav>
  );
}

export default SmatNav;