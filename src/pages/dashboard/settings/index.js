import { Layout, Profile, NotificationTab, IntegrationTab, BillingTab, ConnectLinkedin, SubscriptionPayment } from "@/components";
import { useState } from 'react'
import { Tab } from '@headlessui/react'
import { withProtected } from "@/hooks/routes";
import Image from "next/image";
import Link from "next/link";


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}
    

function Settings({ auth }) {
  const { user } = auth;

  let [categories] = useState({
    Profile: [
      {
        id: 1,
        title: <Profile />
      },
    ],
    Notifications: [
      {
        id: 2,
        title: <NotificationTab />,
      },
    ],
    Billing: [
      {
        id: 3,
        title: <BillingTab />
      }
    ],

    Integrations: [
      {
        id: 4,
        title: <IntegrationTab />,
      }
  ],
  })
  return (
    <Layout user={user}>
      <Profile user={user} />
    </Layout>
  );
}

export default withProtected(Settings);