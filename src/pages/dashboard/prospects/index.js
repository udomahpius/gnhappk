import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { InboxModal, Layout, TopNav } from "@/components/index.js";
import Image from "next/image";
import ProspectService from "@/services/ProspectService";
import { withProtected } from "@/hooks/routes";
import { MailIcon, UserRemoveIcon, TrashIcon } from "@heroicons/react/outline";
import { Montserrat } from "next/font/google";
const inter = Montserrat({ subsets: ['latin'] });
import data from "@/data/prospects.json";
import Link from "next/link";



function Prospects() {
    const [prospects, setProspects] = useState(data);
    const [prospect, setProspect] = useState(null);
    const [disabled, setDisabled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [checked, setChecked] = useState([]);
    const router = useRouter();

    const handleCheckAllChange = (e) => {
        setChecked(
        e.target.checked ? countries.map((c) => c.countryName) : []
        );
    };

    const handleCountryChange = (e, c) => {
        setChecked((prevChecked) =>
        e.target.checked
            ? [...prevChecked, c.countryName]
            : prevChecked.filter((item) => item !== c.countryName)
        );
    };

    // useEffect(() => {
    //     fetchProspects();
    // }, [])

    // const fetchProspects = async () => {
    //     setDisabled(true);   
    //     try {
    //         const response = await ProspectService.fetchProspects();
    //         console.log(response);
    //         //toast.success(response.data.message);
    //         setProspects(response.data.data);
    //         setDisabled(false);
    //     } catch (error) {
    //         console.log(error);
    //         //toast.error(error.response.data.message);
    //         setDisabled(false);
    //     }
    // }


    function closeModal() {
        setIsOpen(false)
    }
    
    function openModal() {
        // setProspect(lead);
        // console.log(lead);
        //setIsOpen(true);
        router.push("/dashboard/prospects/hello")
    }


    return (
        <>
            <InboxModal closeModal={closeModal} isOpen={isOpen} />
            <Layout>
            
                <TopNav />
                <div className="relative bg-white dark:bg-slate-900 w-full side-body">  
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 bg-white dark:bg-black border^100" style={{ width: "100%"}}>
                        <thead className="text-xs text-gray-700 dark:text-gray-300 uppercase bg-white dark:bg-slate-900 w-full">
                            <tr>
                                <th scope="col" className="p-4">
                                    <div className="flex items-center">
                                        <input id="checkbox-all-search" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" 
                                        onChange={handleCheckAllChange}

                                        />
                                        <label for="checkbox-all-search" className="sr-only">checkbox</label>
                                    </div>
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Position
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Location
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Phone
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Email
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Status
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody className="">
                            { prospects.map((prospect, index) => (
                                <tr className="bg-white dark:bg-slate-900 border-b dark:border-slate-700 hover:bg-gray-100 dark:hover:bg-slate-600 cursor-pointer group" key={index}>
                                    <td className="w-4 p-4">
                                        <div className="flex items-center">
                                            <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                            <label for="checkbox-table-search-1" className="sr-only">checkbox</label>
                                        </div>
                                    </td>
                                    <th scope="row" className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap" onClick={() => openModal(prospect)}>
                                        <Image className="w-10 h-10 rounded-full" width={100} height={100} src="https://flowbite-admin-dashboard.vercel.app/images/users/bonnie-green-2x.png" alt="Hello" />
                                        <div className="pl-3 group">
                                            <div className="dark:group-hover:text-gray-200 text-base font-semibold text-gray-600 dark:text-gray-200">{ prospect.name }</div>
                                            <div className="dark:group-hover:text-gray-300 font-normal text-gray-500">{ prospect.email }</div>
                                        </div>  
                                    </th>
                                    <td className="px-6 py-4">
                                        { prospect.position }
                                    </td>
                                    <td className="px-6 py-4">
                                        { prospect.location }
                                    </td>
                                    <td className="px-6 py-4">
                                        { prospect.phone === null && "No Phone" }
                                    </td>
                                    <td className="px-6 py-4">
                                        { prospect.prospect_email === null && "No Email" }
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center">
                                            <div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div>
                                            { prospect.status }
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex gap-5 items-start">
                                            <Link href="/dashboard/inbox">
                                                <MailIcon className="h-5 w-5 text-setly-200" />
                                            </Link>
                                            <TrashIcon className="h-5 w-5 text-red-400" />
                                        </div>
                                        {/* <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit user</a> */}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </Layout>
        </>
    );
}

export default withProtected(Prospects);