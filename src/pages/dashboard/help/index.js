import { Button, ConnectLinkedin, Layout, SubscriptionPayment, TopNav } from "@/components";
import { withProtected } from "@/hooks/routes";
import { InformationCircleIcon, ChatIcon, VideoCameraIcon, CogIcon, KeyIcon, BookOpenIcon} from "@heroicons/react/outline";
import Image from "next/image";
import setly from "@/assets/icon.png";
import { useState } from "react";
import Link from "next/link";


function Help({ auth }) {
  const { user } = auth;
  const [messages, setMessages] = useState([]);


  function selectMessage (message) {
    setMessages([...message])
  }

  return (
    <>
      <Layout user={user}>
        <TopNav placeholder="Search for article" />
        { user.status === "onboarding" && <ConnectLinkedin /> }

        { user.status === "default_incomplete" && <SubscriptionPayment /> }

        { user.status === "activated" && <div className="h-full bg-gray-200 dark:bg-slate-600 w-full  overflow-y-auto">
          <div className="mx-auto w-[80%] border-2 pt-4">
            <h2 className="mb-7 font-semibold text-2xl">Setly Help Centre</h2>
            <Link href="#" className="flex gap-10 mb-4 items-center bg-white border border-SETLY-GREEN hover:border-SETLY-BLUE rounded-lg px-10 py-5">
              <InformationCircleIcon className="h-12 w-12 text-SETLY-BLUE-GREEN" />
              <div>
                <h4 className="mb-1 font-semibold">Getting Started</h4>
                <p className="mb-3">Everything you need to know to start winning opportunities with Setly AI!</p>
                <div className="flex gap-3 items-center">
                  <Image src="https://media.licdn.com/dms/image/C4D03AQH-TRPY099lGg/profile-displayphoto-shrink_800_800/0/1641661927675?e=1701302400&v=beta&t=ymAYaNS_4KipmjkH6u7iIjVWkbBSad2O9rjm_WAwIAY"
                  width={25} height={25} alt="Admin Image" className="rounded-full" />
                  <span className="text-sm text-gray-500">By Admin</span>
                  <span className="h-1 w-1 rounded-full bg-gray-600 flex"></span>
                  <span className="text-sm text-gray-500">11 articles</span>
                </div>
              </div>
            </Link>

            <Link href="#" className="flex gap-10 mb-4 items-center bg-white border border-SETLY-GREEN hover:border-SETLY-BLUE rounded-lg px-10 py-5">
              <ChatIcon className="h-12 w-12 text-SETLY-BLUE-GREEN" />
              <div>
                <h4 className="mb-1 font-semibold">Using Setly</h4>
                <p className="mb-3">Everything you need to know to start winning opportunities with Setly AI!</p>
                <div className="flex gap-3 items-center">
                  <Image src="https://media.licdn.com/dms/image/C4D03AQH-TRPY099lGg/profile-displayphoto-shrink_800_800/0/1641661927675?e=1701302400&v=beta&t=ymAYaNS_4KipmjkH6u7iIjVWkbBSad2O9rjm_WAwIAY"
                  width={25} height={25} alt="Admin Image" className="rounded-full" />
                  <span className="text-sm text-gray-500">By Admin</span>
                  <span className="h-1 w-1 rounded-full bg-gray-600 flex"></span>
                  <span className="text-sm text-gray-500">11 articles</span>
                </div>
              </div>
            </Link>

            <Link href="#" className="flex gap-10 mb-4 items-center bg-white border border-SETLY-GREEN hover:border-SETLY-BLUE rounded-lg px-10 py-5">
              <VideoCameraIcon className="h-12 w-12 text-SETLY-BLUE-GREEN" />
              <div>
                <h4 className="mb-1 font-semibold">Setly Video</h4>
                <p className="mb-3">Everything you need to know to start winning opportunities with Setly AI!</p>
                <div className="flex gap-3 items-center">
                  <Image src="https://media.licdn.com/dms/image/C4D03AQH-TRPY099lGg/profile-displayphoto-shrink_800_800/0/1641661927675?e=1701302400&v=beta&t=ymAYaNS_4KipmjkH6u7iIjVWkbBSad2O9rjm_WAwIAY"
                  width={25} height={25} alt="Admin Image" className="rounded-full" />
                  <span className="text-sm text-gray-500">By Admin</span>
                  <span className="h-1 w-1 rounded-full bg-gray-600 flex"></span>
                  <span className="text-sm text-gray-500">11 articles</span>
                </div>
              </div>
            </Link>

            <Link href="#" className="flex gap-10 mb-4 items-center bg-white border border-SETLY-GREEN hover:border-SETLY-BLUE rounded-lg px-10 py-5">
              <CogIcon className="h-12 w-12 text-SETLY-BLUE-GREEN" />
              <div>
                <h4 className="mb-1 font-semibold">Profile &amp; Settings</h4>
                <p className="mb-3">Everything you need to know to start winning opportunities with Setly AI!</p>
                <div className="flex gap-3 items-center">
                  <Image src="https://media.licdn.com/dms/image/C4D03AQH-TRPY099lGg/profile-displayphoto-shrink_800_800/0/1641661927675?e=1701302400&v=beta&t=ymAYaNS_4KipmjkH6u7iIjVWkbBSad2O9rjm_WAwIAY"
                  width={25} height={25} alt="Admin Image" className="rounded-full" />
                  <span className="text-sm text-gray-500">By Admin</span>
                  <span className="h-1   w-1   rounded-full bg-gray-600 flex"></span>
                  <span className="text-sm text-gray-500">11 articles</span>
                </div>
              </div>
            </Link>


            <Link href="#" className="flex gap-10 mb-4 items-center bg-white border border-SETLY-GREEN hover:border-SETLY-BLUE rounded-lg px-10 py-5">
              <KeyIcon className="h-12 w-12 text-SETLY-BLUE-GREEN" />
              <div>
                <h4 className="mb-1 font-semibold">Integrations</h4>
                <p className="mb-3">Everything you need to know to start winning opportunities with Setly AI!</p>
                <div className="flex gap-3 items-center">
                  <Image src="https://media.licdn.com/dms/image/C4D03AQH-TRPY099lGg/profile-displayphoto-shrink_800_800/0/1641661927675?e=1701302400&v=beta&t=ymAYaNS_4KipmjkH6u7iIjVWkbBSad2O9rjm_WAwIAY"
                  width={25} height={25} alt="Admin Image" className="rounded-full" />
                  <span className="text-sm text-gray-500">By Admin</span>
                  <span className="h-1   w-1   rounded-full bg-gray-600 flex"></span>
                  <span className="text-sm text-gray-500">11 articles</span>
                </div>
              </div>
            </Link>

            <Link href="#" className="flex gap-10 mb-4 items-center bg-white border border-SETLY-GREEN hover:border-SETLY-BLUE rounded-lg px-10 py-5">
              <BookOpenIcon className="h-12 w-12 text-SETLY-BLUE-GREEN" />
              <div>
                <h4 className="mb-1 font-semibold">FAQ</h4>
                <p className="mb-3">Everything you need to know to start winning opportunities with Setly AI!</p>
                <div className="flex gap-3 items-center">
                  <Image src="https://media.licdn.com/dms/image/C4D03AQH-TRPY099lGg/profile-displayphoto-shrink_800_800/0/1641661927675?e=1701302400&v=beta&t=ymAYaNS_4KipmjkH6u7iIjVWkbBSad2O9rjm_WAwIAY"
                  width={25} height={25} alt="Admin Image" className="rounded-full" />
                  <span className="text-sm text-gray-500">By Admin</span>
                  <span className="h-1   w-1   rounded-full bg-gray-600 flex"></span>
                  <span className="text-sm text-gray-500">11 articles</span>
                </div>
              </div>
            </Link>


          </div>
        </div>}
      </Layout>
    </>
  );
}

export default withProtected(Help);