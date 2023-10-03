import { Button, ConnectLinkedin, Layout, SubscriptionPayment, TopNav } from "@/components";
import { withProtected } from "@/hooks/routes";
import {PhoneIcon, MailIcon, PencilAltIcon, OfficeBuildingIcon, XIcon, PaperClipIcon, CalendarIcon} from "@heroicons/react/outline";
import Image from "next/image";
import setly from "@/assets/icon.png";
import { useState } from "react";


const texts = [
  {
    id: 1,
    name: "Glory Essien",
    title: "Manager",
    messages: [
      {
        sender: "me",
        text: "This is a sweet message to prove I love you",
        status: "unread"
      },
      {
        sender: "you",
        text: "This is a sweet message to prove I love you",
        status: "read"
      },
      {
        sender: "me",
        text: "This is a sweet message to prove I love you",
        status: "unread"
      },
      {
        sender: "you",
        text: "This is a sweet message to prove I love you",
        status: "read"
      }
    ]
  },

  {
    id: 2,
    name: "Emem Imoh David",
    title: "Teacher",
    messages: [
      {
        sender: "me",
        text: "I love you in this world and beyond",
        status: "unread"
      },
      {
        sender: "you",
        text: "This is a sweet message to prove I love you",
        status: "unread"
      },
      {
        sender: "me",
        text: "This is a sweet message to prove I love you",
        status: "unread"
      },
      {
        sender: "you",
        text: "This is a sweet message to prove I love you",
        status: "read"
      }
    ]
  }
]


function Inbox({ auth }) {
  const { user } = auth;
  const [prospects, setProspects] = useState(texts);
  const [messages, setMessages] = useState([]);


  function selectMessage (message) {
    setMessages([...message])
  }

  return (
    <>
      <Layout user={user}>
        <TopNav placeholder="Search inbox" />
        { user.status === "onboarding" && <ConnectLinkedin /> }

        { user.status === "default_incomplete" && <SubscriptionPayment /> }

        { user.status === "activated" && <section className="inbox-wrapper overflow-hidden h-full bg-gray-200 dark:bg-slate-600 side-body">
          <div className={`pt-3 ${messages.length > 0 ? "block" : "hidden"} messages overflow-y-auto bg-white dark:bg-slate-900 h-full shadow-lg`}>
            { messages.map((message, index) => (
              <div className={`flex items-center ${message.sender === "you" ? "flex-row-reverse" : ""} justify-end gap-3 mb-10 px-5`} key={index}>
                <span className="text-sm text-slate-600 dark:text-gray-300 font-medium">12:00</span>
                <div className="bg-setly-200 dark:bg-green-400 text-slate-900  px-3 py-2 rounded-md bg-opacity-20">
                  <span className=""> { message.text } </span>
                </div>
                <Image class="w-10 h-10 rounded-full shadow-lg" src="https://flowbite-admin-dashboard.vercel.app/images/users/bonnie-green-2x.png" alt="Bonnie image" height={30} width={80} />
              </div>
            ))}

            {/* <div className="flex flex-row-reverse items-center justify-end gap-3 mb-10 px-5">
              <span className="text-sm text-slate-600 dark:text-gray-300 font-medium">12:00</span>
              <div className="bg-setly-100 text-slate-900 dark:text-gray-300 px-3 py-2 rounded-md bg-opacity-20">
                <span className="">This is a new message I have sent to you today, I hope you get it.
                This is a new message I have sent to you today, I hope you get it.
                This is a new message I have sent to you today, I hope you get it.
                This is a new message I have sent to you today, I hope you get it.</span>
              </div>
              <Image class="w-10 h-10 rounded-full shadow-lg" src="https://flowbite-admin-dashboard.vercel.app/images/users/bonnie-green-2x.png" alt="Bonnie image" height={30} width={80} />
            </div> */}

          </div>

          <div className={`h-full ${messages.length === 0 ? "flex" : "hidden"}  flex-col justify-center items-center messages`}>
            <h3 className="text-xl">Select a Message</h3>
          </div>


          <div className="bg-white dark:bg-slate-900 flex gap-x-5 footer items-center justify-between px-4 footer h-full shadow-lg">
            <PaperClipIcon className="h-6 w-6 text-gray-600 dark:text-gray-200" />
            <div className="w-[70%] h-fit">
              <textarea className="border h-fit w-full px-1 bg-white dark:bg-gray-300 rounded-md outline-none"></textarea>
            </div>
            <Button text="Send" disable={false} disabled={false} />
            <Image src={setly} width={40} height={40} alt="Setly Icon" />
            <CalendarIcon className="w-7 h-7 text-gray-600" />
          </div>


          <aside className="side-profile overflow-y-auto dark:bg-slate-900 shadow-lg">

            <div className="pb-12">
              { prospects.map((prospect, index) => (
                <div className="bg-white flex gap-2 items-start justify-between mb-3 py-4 shadow-lg  px-2 w-full cursor-pointer" key={index} onClick={() => selectMessage(prospect.messages)}>
                  <div className="flex gap-2 items-center">
                    <Image class="w-12 h-12 rounded-full shadow-lg" src="https://flowbite-admin-dashboard.vercel.app/images/users/bonnie-green-2x.png" alt="Bonnie image" height={30} width={80} />
                    <div className="">
                      <h4 className="mb-0 text-sm truncate w-32 font-medium text-slate-900 dark:text-white">{prospect.name}</h4>
                      <p className="text-xs text-slate-800 dark:text-gray-300">{ prospect.title }</p>
                      <p className="text-xs truncate w-40 text-slate-900 dark:text-gray-300">{ prospect.messages[0].text}</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="text-xs font-bold text-slate-900 dark:text-gray-300">13:55</span>
                    <span class="inline-flex items-center justify-center w-2 h-2 p-[0.6rem] text-xs font-medium text-white dark:text-blue-600 bg-blue-600 dark:bg-white rounded-full">{ prospect.messages.filter(item => item.status === "unread").length}</span>
                  </div>
                </div>
              ))}
            </div>
          </aside>
        </section>}
      </Layout>
    </>
  );
}

export default withProtected(Inbox);