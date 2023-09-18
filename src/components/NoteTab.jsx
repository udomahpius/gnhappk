import dynamic from "next/dynamic";
import { Button } from '.';
import { DocumentIcon, CalendarIcon, ChevronUpIcon } from "@heroicons/react/outline";
import { Montserrat } from "next/font/google";
const inter = Montserrat({ subsets: ['latin'] });
import { Disclosure } from "@headlessui/react";



const QuillNoSSRWrapper = dynamic(import('react-quill'), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
});

const modules = {
    toolbar: [
      [{ header: '1' }, { header: '2' }],
      [{ size: [] }],
      ['bold', 'italic',],
      [
        { list: 'ordered' },
      ],
      ['link'],
    ],
    clipboard: {
      // toggle to add extra line breaks when pasting HTML:
      matchVisual: false,
    },
  }
  /*
   * Quill editor formats
   * See https://quilljs.com/docs/formats/
   */
  const formats = [
    'header',
    'size',
    'bold',
    'italic',
    'list',
    'link',
  ]

function MessagingTab() {
    return (
        <div className={`${inter.className} grid grid-cols-2 gap-5`}>

            <div>
                <h4 className="mb-3">Add new note</h4>
                <div className="bg-white p-3 rounded-lg w-full">
                    <QuillNoSSRWrapper modules={modules} formats={formats} theme="snow" className="border-0" />
                    <div className="flex justify-start items-center mt-3  w-full self-end">
                        <div className="w">
                            <Button text="New Note" disable={false} disabled={false} />
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <h4 className="mb-3">Notes</h4>
                <Disclosure as="div" className="mb-3 bg-white rounded-lg w-full">
                    {({ open }) => (
                        <>
                        <Disclosure.Button className="flex w-full justify-between items-center rounded-lg px-4 py-2 border-b border-gray-200 pb-3 text-left text-sm font-medium hover:bg-setly-100 focus:outline-none focus-visible:ring focus-visible:ring-setly-100 focus-visible:ring-opacity-75">
                            <div className="flex items-center gap-2">
                                <div className="flex gap-3 items-center">
                                    <ChevronUpIcon
                                        className={`${
                                            open ? 'rotate-180 transform' : ''
                                        } h-5 w-5 text-gray-500`}
                                    />
                                    <span className="h-8 w-8 rounded-full bg-gray-100 flex justify-center items-center">
                                        <DocumentIcon className="h-5 w-5 text-blue-500" />
                                    </span>

                            
                                </div>
                                <span className="text-sm text-gray-500 w-[200px] truncate">She is interested in our new product line and wants our very best price.
                            Please include a detailed breakdown costs.</span>
                            </div>
                            
                            <div className="flex gap-2 items-center">
                                <CalendarIcon className="h-4 w-4 text-gray-500" />
                                <span className="text-sm text-gray-600 font-medium">Today</span>
                            </div>
                        </Disclosure.Button>
                        <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                            She is interested in our new product line and wants our very best price.
                            Please include a detailed breakdown costs.
                        </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>

                <Disclosure as="div" className="mb-3 bg-white rounded-lg w-full">
                    {({ open }) => (
                        <>
                        <Disclosure.Button className="flex w-full justify-between items-center rounded-lg px-4 py-2 border-b border-gray-200 pb-3 text-left text-sm font-medium hover:bg-setly-100 focus:outline-none focus-visible:ring focus-visible:ring-setly-100 focus-visible:ring-opacity-75">
                            <div className="flex items-center gap-2">
                                <div className="flex gap-3 items-center">
                                    <ChevronUpIcon
                                        className={`${
                                            open ? 'rotate-180 transform' : ''
                                        } h-5 w-5 text-gray-500`}
                                    />
                                    <span className="h-8 w-8 rounded-full bg-gray-100 flex justify-center items-center">
                                        <DocumentIcon className="h-5 w-5 text-blue-500" />
                                    </span>

                            
                                </div>
                                <span className="text-sm text-gray-500 w-[200px] truncate">She is interested in our new product line and wants our very best price.
                            Please include a detailed breakdown costs.</span>
                            </div>
                            
                            <div className="flex gap-2 items-center">
                                <CalendarIcon className="h-4 w-4 text-gray-500" />
                                <span className="text-sm text-gray-600 font-medium">22 Fed 2023</span>
                            </div>
                        </Disclosure.Button>
                        <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                            She is interested in our new product line and wants our very best price.
                            Please include a detailed breakdown costs.
                        </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>

         

                <Disclosure as="div" className="mb-3 bg-white rounded-lg w-full">
                    {({ open }) => (
                        <>
                        <Disclosure.Button className="flex w-full justify-between items-center rounded-lg px-4 py-2 border-b border-gray-200 pb-3 text-left text-sm font-medium hover:bg-setly-100 focus:outline-none focus-visible:ring focus-visible:ring-setly-100 focus-visible:ring-opacity-75">
                            <div className="flex items-center gap-2">
                                <div className="flex gap-3 items-center">
                                    <ChevronUpIcon
                                        className={`${
                                            open ? 'rotate-180 transform' : ''
                                        } h-5 w-5 text-gray-500`}
                                    />
                                    <span className="h-8 w-8 rounded-full bg-gray-100 flex justify-center items-center">
                                        <DocumentIcon className="h-5 w-5 text-blue-500" />
                                    </span>

                            
                                </div>
                                <span className="text-sm text-gray-500 w-[200px] truncate">She is interested in our new product line and wants our very best price.
                            Please include a detailed breakdown costs.</span>
                            </div>
                            
                            <div className="flex gap-2 items-center">
                                <CalendarIcon className="h-4 w-4 text-gray-500" />
                                <span className="text-sm text-gray-600 font-medium">22 Feb 2023</span>
                            </div>
                        </Disclosure.Button>
                        <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                            She is interested in our new product line and wants our very best price.
                            Please include a detailed breakdown costs.
                        </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>

                <Disclosure as="div" className="mb-3 bg-white rounded-lg w-full">
                    {({ open }) => (
                        <>
                        <Disclosure.Button className="flex w-full justify-between items-center rounded-lg px-4 py-2 border-b border-gray-200 pb-3 text-left text-sm font-medium hover:bg-setly-100 focus:outline-none focus-visible:ring focus-visible:ring-setly-100 focus-visible:ring-opacity-75">
                            <div className="flex items-center gap-2">
                                <div className="flex gap-3 items-center">
                                    <ChevronUpIcon
                                        className={`${
                                            open ? 'rotate-180 transform' : ''
                                        } h-5 w-5 text-gray-500`}
                                    />
                                    <span className="h-8 w-8 rounded-full bg-gray-100 flex justify-center items-center">
                                        <DocumentIcon className="h-5 w-5 text-blue-500" />
                                    </span>

                            
                                </div>
                                <span className="text-sm text-gray-500 w-[200px] truncate">She is interested in our new product line and wants our very best price.
                            Please include a detailed breakdown costs.</span>
                            </div>
                            
                            <div className="flex gap-2 items-center">
                                <CalendarIcon className="h-4 w-4 text-gray-500" />
                                <span className="text-sm text-gray-600 font-medium">22 Feb 2023</span>
                            </div>
                        </Disclosure.Button>
                        <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                            She is interested in our new product line and wants our very best price.
                            Please include a detailed breakdown costs.
                        </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>

                <Disclosure as="div" className="mb-3 bg-white rounded-lg w-full">
                    {({ open }) => (
                        <>
                        <Disclosure.Button className="flex w-full justify-between items-center rounded-lg px-4 py-2 border-b border-gray-200 pb-3 text-left text-sm font-medium hover:bg-setly-100 focus:outline-none focus-visible:ring focus-visible:ring-setly-100 focus-visible:ring-opacity-75">
                            <div className="flex items-center gap-2">
                                <div className="flex gap-3 items-center">
                                    <ChevronUpIcon
                                        className={`${
                                            open ? 'rotate-180 transform' : ''
                                        } h-5 w-5 text-gray-500`}
                                    />
                                    <span className="h-8 w-8 rounded-full bg-gray-100 flex justify-center items-center">
                                        <DocumentIcon className="h-5 w-5 text-blue-500" />
                                    </span>

                            
                                </div>
                                <span className="text-sm text-gray-500 w-[200px] truncate">She is interested in our new product line and wants our very best price.
                            Please include a detailed breakdown costs.</span>
                            </div>
                            
                            <div className="flex gap-2 items-center">
                                <CalendarIcon className="h-4 w-4 text-gray-500" />
                                <span className="text-sm text-gray-600 font-medium">22 Feb 2023</span>
                            </div>
                        </Disclosure.Button>
                        <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                            She is interested in our new product line and wants our very best price.
                            Please include a detailed breakdown costs.
                        </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>

            </div>
            
        </div>
    );
}

export default MessagingTab;