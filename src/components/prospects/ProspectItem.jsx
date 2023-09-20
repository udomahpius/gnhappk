import { MailIcon, TrashIcon } from "@heroicons/react/outline";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const ProspectItem = ({ prospect, handleCheckChange, checked }) => {
    const router = useRouter();

  return (
    <tr className="bg-white dark:bg-slate-900 border-b dark:border-slate-700 hover:bg-gray-100 dark:hover:bg-slate-600 cursor-pointer group">
        <td className="w-4 p-4">
            <div className="flex items-center">
                <input name={prospect._id} id={prospect._id} type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" 
                onChange={handleCheckChange} checked={checked} />
                <label htmlFor="checkbox-table-search-1" className="sr-only">checkbox</label>
            </div>
        </td>
        <th scope="row" className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap" onClick={() => )}>
            <Image className="w-10 h-10 rounded-full" width={100} height={100} src="https://flowbite-admin-dashboard.vercel.app/images/users/bonnie-green-2x.png" alt="Hello" />
            <div className="pl-3 group">
                <div className="dark:group-hover:text-gray-200 text-base font-semibold text-gray-600 dark:text-gray-200">{ prospect.name }</div>
                <div className="dark:group-hover:text-gray-300 font-normal text-gray-500">{ prospect.email }</div>
            </div>  
        </th>
        <td className="px-6 py-4">
            { prospect.job_title }
        </td>
        <td className="px-6 py-4">
            { prospect.location }
        </td>
        <td className="px-6 py-4">
            { prospect.phone === null && "No Phone" }
        </td>
        <td className="px-6 py-4">
            { prospect.email === null && "No Email" }
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
  )
}

export default ProspectItem