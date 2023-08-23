import { useState } from 'react'
import { Tab } from '@headlessui/react'
import { InsightTab, WorkflowTab, MessagingTab } from '.'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function ProspectModalTabs() {
  const [categories] = useState({
    Workflows: [
      {
        id: 1,
        title: <WorkflowTab />
      },
    ],
    Insights: [
      {
        id: 1,
        title: <InsightTab />
      },
    ],
    Messaging: [
      {
        id: 1,
        title: <MessagingTab />
      }
    ],
  })

  return (
    <div className="w-full px-2 sm:px-0 h-full">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-gray-100 p-1 h-fit">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-slate-600 ",
                  "ring-white ring-opacity-60 ring-offset-2 ring-offset-setly-100 focus:outline-none focus:ring-2",
                  selected
                    ? "bg-white shadow"
                    : "text-setly-100 hover:bg-white/[0.12] hover:text-setly-100"
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          {Object.values(categories).map((posts, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                'rounded-xl p-3 ',
                ' focus:outline-none focus:none'
              )}
            >
              {posts.map((post) => (
                <section key={post.id} className="h-full">
                    { post.title }
                </section>
            ))}
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}