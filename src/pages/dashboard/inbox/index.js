import { Button, Layout, TopNav } from "@/components";
import { withProtected } from "@/hooks/routes";
import {PhoneIcon, MailIcon, PencilAltIcon, OfficeBuildingIcon, XIcon, PaperClipIcon} from "@heroicons/react/outline";
import Image from "next/image";


function Inbox() {
  return (
    <>
      <Layout>
        <TopNav />
        <section className="inbox-wrapper overflow-hidden h-full bg-gray-200 dark:bg-slate-600 side-body">
          <div className="pt-3 messages overflow-y-auto bg-white dark:bg-slate-900 messages h-full">
            <div className="flex items-center justify-end gap-3 mb-10 px-5">
              <span className="text-sm text-slate-600 dark:text-gray-300 font-medium">12:00</span>
              <div className="bg-setly-200 dark:bg-green-400 text-slate-900  px-3 py-2 rounded-md bg-opacity-20">
                <span className="">This is a new message I have sent to you today, gdhgdhgd hghgd hgd hgdhgf hgfhhf vfhghfghfgh fgfhgdhgfhgfh </span>
              </div>
              <Image class="w-10 h-10 rounded-full shadow-lg" src="https://flowbite-admin-dashboard.vercel.app/images/users/bonnie-green-2x.png" alt="Bonnie image" height={30} width={80} />
            </div>

            <div className="flex flex-row-reverse items-center justify-end gap-3 mb-10 px-5">
              <span className="text-sm text-slate-600 dark:text-gray-300 font-medium">12:00</span>
              <div className="bg-setly-100 text-slate-900 dark:text-gray-300 px-3 py-2 rounded-md bg-opacity-20">
                <span className="">This is a new message I have sent to you today, I hope you get it.
                This is a new message I have sent to you today, I hope you get it.
                This is a new message I have sent to you today, I hope you get it.
                This is a new message I have sent to you today, I hope you get it.</span>
              </div>
              <Image class="w-10 h-10 rounded-full shadow-lg" src="https://flowbite-admin-dashboard.vercel.app/images/users/bonnie-green-2x.png" alt="Bonnie image" height={30} width={80} />
            </div>

          </div>


          <div className="bg-white dark:bg-slate-900 flex gap-x-5 footer items-center justify-between px-4 footer h-full">
            <PaperClipIcon className="h-6 w-6 text-gray-600 dark:text-gray-200" />
            <div className="w-[70%] h-fit">
              <textarea className="border h-fit w-full px-1 bg-white dark:bg-gray-300 rounded-md outline-none"></textarea>
            </div>
            <Button text="Send Message" disable={false} disabled={false} />
          </div>


          <aside className="side-profile overflow-y-auto bg-white dark:bg-slate-900">

            <div className="pb-12 pt-2">
                      
              <div className="flex gap-2 items-center justify-between mb-6 py-4 shadow-lg rounded-md px-2 w-full">
                <div className="flex gap-2 items-center">
                  <Image class="w-12 h-12 rounded-full shadow-lg" src="https://flowbite-admin-dashboard.vercel.app/images/users/bonnie-green-2x.png" alt="Bonnie image" height={30} width={80} />
                  <div className="">
                    <h4 className="mb-0 text-sm font-medium text-slate-900 dark:text-white">Julia Hosten</h4>
                      <p className="text-xs text-slate-800 dark:text-gray-300">Project Manager</p>
                      <p className="text-xs truncate w-40 text-slate-900 dark:text-gray-300">Hello Kate how are things going</p>
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-xs font-bold text-slate-900 dark:text-gray-300">13:55</span>
                  <span class="inline-flex items-center justify-center w-2 h-2 p-[0.6rem] text-xs font-medium text-white dark:text-blue-600 bg-blue-600 dark:bg-white rounded-full">3</span>
                </div>
              </div>

              <div className="flex gap-2 items-center justify-between mb-6 py-4 shadow-lg rounded-md px-2 w-full">
                <div className="flex gap-2 items-center">
                  <Image class="w-12 h-12 rounded-full shadow-lg" src="https://flowbite-admin-dashboard.vercel.app/images/users/bonnie-green-2x.png" alt="Bonnie image" height={30} width={80} />
                  <div className="">
                    <h4 className="mb-0 text-sm font-medium text-slate-900 dark:text-white">Julia Hosten</h4>
                      <p className="text-xs text-slate-800 dark:text-gray-300">Project Manager</p>
                      <p className="text-xs truncate w-40 text-slate-900 dark:text-gray-300">Hello Kate how are things going</p>
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-xs font-bold text-slate-900 dark:text-gray-300">13:55</span>
                  <span class="inline-flex items-center justify-center w-2 h-2 p-[0.6rem] text-xs font-medium text-white dark:text-blue-600 bg-blue-600 dark:bg-white rounded-full">3</span>
                </div>
              </div>

            </div>
          </aside>
        </section>
      </Layout>
    </>
  );
}

export default withProtected(Inbox);