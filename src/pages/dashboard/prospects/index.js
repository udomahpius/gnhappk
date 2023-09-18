import { useEffect, useState, useCallback } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { ConnectLinkedin, InboxModal, Layout, Pagination, ProspectsList, SubscriptionPayment, TopNav } from "@/components/index.js";
import Image from "next/image";
import ProspectService from "@/services/ProspectService";
import { withProtected } from "@/hooks/routes";
import { MailIcon, UserRemoveIcon, TrashIcon } from "@heroicons/react/outline";
import { Montserrat } from "next/font/google";
const inter = Montserrat({ subsets: ['latin'] });
import data from "@/data/prospects.json";
import Link from "next/link";



function Prospects({ auth }) {
    const [prospects, setProspects] = useState([]);
    const [prospect, setProspect] = useState(null);
    const [disabled, setDisabled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [checked, setChecked] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [prospectsPerPage] = useState(7);
    const [inputValue, setInputValue] = useState("")
    
    
    const router = useRouter();
    const { user } = auth;
        // Get current posts
  const indexOfLastPost = currentPage * prospectsPerPage;
  const indexOfFirstPost = indexOfLastPost - prospectsPerPage;
  const currentProspects = prospects.slice(indexOfFirstPost, indexOfLastPost);
  const [initialList] = useState(prospects);
  const [filteredList, setFilteredList] = useState(currentProspects);

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

    useEffect(() => {
        fetchProspects();
    }, []);

    

    // Search Handler
    const searchHandler = useCallback(() => {
        const filteredData = currentProspects.filter((prospect) => {
            return prospect.name.toLowerCase().includes(inputValue.toLowerCase())
        })
        setFilteredList(filteredData)
    }, [currentProspects, inputValue])

    // EFFECT: Search Handler
    useEffect(() => {
        // Debounce search handler
        const timer = setTimeout(() => {
            searchHandler()
        }, 500)

        // Cleanup
        return () => {
            clearTimeout(timer)
        }
    }, [searchHandler])



  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

    const fetchProspects = async () => {
        setDisabled(true);   
        try {
            const response = await ProspectService.fetchProspects();
            console.log(response);
            //toast.success(response.data.message);
            setProspects(response.data.data);
            setDisabled(false);
        } catch (error) {
            console.log(error);
            //toast.error(error.response.data.message);
            setDisabled(false);
        }
    }


    function closeModal() {
        setIsOpen(false)
    }
    
    function openModal() {
        // setProspect(lead);
        // console.log(lead);
        //setIsOpen(true);
        router.push("/dashboard/prospects/hello")
    }

    // function load () {
    //     //`/dashboard/prospects?page=${pgNumber}`
    //     fetchProspects(currentPage + 1, recordsPerPage)
    // }


    return (
        <>
            <InboxModal closeModal={closeModal} isOpen={isOpen} />
            <Layout user={user}>
            
                <TopNav placeholder="Search prospects" inputValue={inputValue} setInputValue={setInputValue} />
                { user.status === "onboarding" && <ConnectLinkedin /> }

                { user.status === "default_incomplete" && <SubscriptionPayment /> }

                { user.status === "activated" && <div className="relative bg-white dark:bg-slate-900 w-full side-body shadow-lg">  
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 bg-white dark:bg-black border^100" style={{ width: "100%"}}>
                        <thead className="text-xs text-gray-700 dark:text-gray-300 uppercase bg-white dark:bg-slate-900 w-full">
                            <tr>
                                <th scope="col" className="p-4">
                                    <div className="flex items-center">
                                        <input id="checkbox-all-search" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" 
                                        onChange={handleCheckAllChange}

                                        />
                                        <label htmlFor="checkbox-all-search" className="sr-only">checkbox</label>
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
                        <ProspectsList prospects={inputValue.length > 0 ? filteredList : currentProspects} />
                    </table>
                    <Pagination
                        prospectsPerPage={prospectsPerPage}
                        totalProspects={prospects.length}
                        paginate={paginate}
                        currentPage={currentPage}
                    />
                </div>}
            </Layout>
        </>
    );
}

export default withProtected(Prospects);