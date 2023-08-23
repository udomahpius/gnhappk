import { Fragment, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { withProtected } from "@/hooks/routes";
import LeadService from "@/services/ProspectService";
import { Toaster, toast } from "react-hot-toast";
import ClipLoader from "react-spinners/ClipLoader";
import { Button, Layout, Nav, SideBar } from "@/components";
import Image from "next/image";
import TopMenu from "@/components/TopMenu";


const override = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "0 auto",
    borderColor: "#269ACE",
};


function Dashboard({ auth}) {
    const router = useRouter();
    const { user } = auth;
    const [leads, setLeads] = useState([]);
    const [disabled, setDisabled] = useState(false);
    const [noScroll, setNoScroll] = useState(true);


//   useEffect(() => {
//     const html = document.getElementsByClassName("bless")[0];
//     if (noScroll) {
//       html.classList.add("lock-scroll");
//     } else {
//       html.classList.remove("lock-scroll");
//     }

//     return () => {
//       html.classList.remove("lock-scroll");
//     }
//   }, [noScroll]);

    useEffect(() => {
        fetchLeads();
    }, [])

    const fetchLeads = async () => {
        setDisabled(true);
        try {
            const response = await LeadService.fetchLeads();
            console.log(response);
            //toast.success(response.data.message);
            setLeads(response.data.data);
            setDisabled(false);
        } catch (error) {
            console.log(error);
            //toast.error(error.response.data.message);
            setDisabled(false);
        }
    }


    { user.status === "onboarding" && router.replace("/dashboard/connect/linkedin") }

    { user.status === "default_incomplete" && router.replace("/dashboard/subscription") }


    { disabled && 
        <div className="min-h-screen flex items-center justify-center">
            <ClipLoader
                color="white"
                loading={true}
                cssOverride={override}
                size={50}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        </div>
    }

    return (
        // <>
        //     <Toaster />
            
        //     <div className="px-12">
        //         <p>Welcome to Dashboard</p>
        //         <br /> <br />
        //         <div className="flex justify-between item-center">
        //             <div>
        //                 <p>{leads.length}</p>
        //                 <h3>Total Leads</h3>
        //             </div>
        //             <div>
        //                 <p>{leads.length}</p>
        //                 <h3>Total Pending Invites</h3>
        //             </div>
        //             <div>
        //                 <p>{leads.length}</p>
        //                 <h3>Total Closed Leads</h3>
        //             </div>
        //         </div>

        //         <br /> <br />
        //         { leads.map((lead, index) => (
        //             <div key={index}>
        //                 <p>{lead.name}</p>
        //                 <Image src={lead.image} height={200} width={120} alt=""/>
        //                 <p>{lead.location}</p>
        //                 <p>{lead.job_title}</p>
        //                 <p>{lead.summary}</p>
        //             </div>
                    
        //         ))}
        //     </div>
            
        // </>
       <Layout>
            {/* <div>
                <p>Complete the following Task to Continue</p>
            </div> */}

            <div className="grid grid-cols-3 gap-4">

                <div class="p-6 bg-white border-2 border-setly-100 rounded-lg shadow">
                    <svg class="w-7 h-7 text-gray-500 dark:text-gray-400 mb-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M18 5h-.7c.229-.467.349-.98.351-1.5a3.5 3.5 0 0 0-3.5-3.5c-1.717 0-3.215 1.2-4.331 2.481C8.4.842 6.949 0 5.5 0A3.5 3.5 0 0 0 2 3.5c.003.52.123 1.033.351 1.5H2a2 2 0 0 0-2 2v3a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a2 2 0 0 0-2-2ZM8.058 5H5.5a1.5 1.5 0 0 1 0-3c.9 0 2 .754 3.092 2.122-.219.337-.392.635-.534.878Zm6.1 0h-3.742c.933-1.368 2.371-3 3.739-3a1.5 1.5 0 0 1 0 3h.003ZM11 13H9v7h2v-7Zm-4 0H2v5a2 2 0 0 0 2 2h3v-7Zm6 0v7h3a2 2 0 0 0 2-2v-5h-5Z"/>
                    </svg>
                    <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-600">200</h5>
                    <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-600">Pending Leads</h5>
                </div>

                <div class="p-6 bg-white border-2 border-setly-100 rounded-lg shadow">
                    <svg class="w-7 h-7 text-gray-500 dark:text-gray-400 mb-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M18 5h-.7c.229-.467.349-.98.351-1.5a3.5 3.5 0 0 0-3.5-3.5c-1.717 0-3.215 1.2-4.331 2.481C8.4.842 6.949 0 5.5 0A3.5 3.5 0 0 0 2 3.5c.003.52.123 1.033.351 1.5H2a2 2 0 0 0-2 2v3a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a2 2 0 0 0-2-2ZM8.058 5H5.5a1.5 1.5 0 0 1 0-3c.9 0 2 .754 3.092 2.122-.219.337-.392.635-.534.878Zm6.1 0h-3.742c.933-1.368 2.371-3 3.739-3a1.5 1.5 0 0 1 0 3h.003ZM11 13H9v7h2v-7Zm-4 0H2v5a2 2 0 0 0 2 2h3v-7Zm6 0v7h3a2 2 0 0 0 2-2v-5h-5Z"/>
                    </svg>
                    <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-600">200</h5>
                    <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-600">Pending Leads</h5>
                </div>

                <div class="p-6 bg-white border-2 border-setly-100 rounded-lg shadow">
                    <svg class="w-7 h-7 text-gray-500 dark:text-gray-400 mb-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M18 5h-.7c.229-.467.349-.98.351-1.5a3.5 3.5 0 0 0-3.5-3.5c-1.717 0-3.215 1.2-4.331 2.481C8.4.842 6.949 0 5.5 0A3.5 3.5 0 0 0 2 3.5c.003.52.123 1.033.351 1.5H2a2 2 0 0 0-2 2v3a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a2 2 0 0 0-2-2ZM8.058 5H5.5a1.5 1.5 0 0 1 0-3c.9 0 2 .754 3.092 2.122-.219.337-.392.635-.534.878Zm6.1 0h-3.742c.933-1.368 2.371-3 3.739-3a1.5 1.5 0 0 1 0 3h.003ZM11 13H9v7h2v-7Zm-4 0H2v5a2 2 0 0 0 2 2h3v-7Zm6 0v7h3a2 2 0 0 0 2-2v-5h-5Z"/>
                    </svg>
                    <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-600">200</h5>
                    <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-600">Pending Leads</h5>
                </div>

            </div>


            {/* <div className="mb-9 p-4 text-slate-800 border border-blue-800 rounded-lg bg-blue-50" role="alert">
                <div className="flex items-center">
                    <svg className="flex-shrink-0 w-4 h-4 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
                    </svg>
                    <span className="sr-only">Info</span>
                    <h3 className="text-lg font-medium">Make $25 Subcription payment</h3>
                </div>
                <div className="mt-2 mb-4 text-sm">
                    This will give you access to all Setly features.
                </div>
                <div className="flex">
                    <Button text="Make Payment" />
                </div>
            </div>

            <div className="p-4 text-slate-800 border border-blue-800 rounded-lg bg-blue-50" role="alert">
                <div className="flex items-center">
                    <svg className="flex-shrink-0 w-4 h-4 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
                    </svg>
                    <span className="sr-only">Info</span>
                    <h3 className="text-lg font-medium">Connect your Linkedin Account</h3>
                </div>
                <div className="mt-2 mb-4 text-sm">
                    Give access to your linkedin profile to enjoy the best of our Setly.
                </div>
                <div className="flex">
                    <button type="button" className="text-[15px] text-white bg-setly-200 hover:bg-blue-900 focus:ring-1 focus:outline-none focus:ring-blue-200 font-medium rounded-lg px-6 py-3  text-center inline-flex items-center dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    View more
                    </button>
                </div>
            </div> */}
       </Layout>
    )

}

export default withProtected(Dashboard);