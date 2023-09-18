import { useState } from 'react'
import { Tab } from '@headlessui/react'
import { InsightTab, WorkflowTab, MessagingTab, TaskTab, NoteTab } from '.'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function ProspectModalTabs() {
  const [categories] = useState({
    Tasks: [
      {
        id: 1,
        title: <TaskTab />
      },
    ],
    Insights: [
      {
        id: 1,
        title: <InsightTab />
      },
    ],
    Notes: [
      {
        id: 1,
        title: <NoteTab />
      }
    ],
  })

  return (
    <div className="w-full px-2 sm:px-0  bg-white">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-gray-100 dark:bg-slate-900 p-1">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-slate-600 dark:text-gray-200 ",
                  "ring-white ring-opacity-60 ring-offset-2 ring-offset-setly-100 focus:outline-none focus:ring-2 dark-focus:ring-0",
                  selected
                    ? "bg-white dark:bg-gray-200 shadow text-gray-900"
                    : "text-gray-900 hover:bg-white/[0.12] hover:text-setly-100"
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
                "p-3",
                "focus:outline-none focus:none"
              )}
            >
              {posts.map((post) => (
                <section key={post.id} className="h h-screen">
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