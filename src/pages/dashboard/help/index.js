import { Button, ConnectLinkedin, Layout, SubscriptionPayment, TopNav } from "@/components";
import { withProtected } from "@/hooks/routes";
import {PhoneIcon, MailIcon, PencilAltIcon, OfficeBuildingIcon, XIcon, PaperClipIcon, CalendarIcon} from "@heroicons/react/outline";
import Image from "next/image";
import setly from "@/assets/icon.png";
import { useState } from "react";


function Help({ auth }) {
  const { user } = auth;
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
            <div>

            </div>
        </section>}
      </Layout>
    </>
  );
}

export default withProtected(Help);