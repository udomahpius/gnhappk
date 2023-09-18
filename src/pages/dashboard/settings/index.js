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
        title: <Profile user={user} />
      },
    ],
    Notifications: [
      {
        id: 1,
        title: <NotificationTab />,
      },
    ],
    Billing: [
      {
        id: 1,
        title: <BillingTab />
      }
    ],

    Integrations: [
      {
        id: 1,
        title: <IntegrationTab />,
      }
  ],
  })
  return (
        <Layout>
          
            <div className="w-full px-2 sm:px-0 bg-gray-200 h-fit topnav">
                <Tab.Group>
                    <Tab.List className="space-x-1 p-1 flex items-center justify-between py-2 bg-white shadow px-4 w-full">
                    {Object.keys(categories).map((category) => (
                        <Tab
                        key={category}
                        className={({ selected }) =>
                            classNames(
                            'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-black',
                            'ring-white  focus:outline-none focus:ring-2',
                            selected
                                ? 'bg-gray-100 text-blue-500'
                                : 'text-black hover:bg-white/[0.12] hover:text-blue-500'
                            )
                        }
                        >
                        {category}
                        </Tab>
                    ))}
                    </Tab.List>

                    
                    <Tab.Panels className="mt-2 h-full bg-gray-50">
                    {Object.values(categories).map((posts, idx) => (
                        <Tab.Panel
                        key={idx}
                        className={classNames(
                            'rounded-xl bg-gray-15- p-3',
                            'ring-white ring-opacity-60 ring-offset-2 focus:outline-none'
                        )}
                        >
                        <ul>
                            {posts.map((post) => (
                            <li
                                key={post.id}
                                className="relative rounded-md p-3"
                            >
                                <h3 className="text-sm font-medium leading-5">
                                {post.title}
                                </h3>
                            </li>
                            ))}
                        </ul>
                        </Tab.Panel>
                    ))}
                    </Tab.Panels> 
                    
                </Tab.Group>
                
            </div>
        </Layout>
    );
}

export default withProtected(Settings);