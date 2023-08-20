import { withProtected } from "@/hooks/routes";
import Image from "next/image";
import Link from "next/link";

function Settings() {
    return (
        <div className="grid grid-cols-6">
            <div className="hidden md:fixed md:inset-y-0 md:flex  md:flex-col bg-black cols-span-1 w-full">
                <nav className="flex flex-grow flex-col overflow-y-auto border-r border-gray-200 bg-gray-50 pt-10 pb-4">
                    <div className="flex flex-shrink-0 items-center px-4">
                        <Link href="/">
                            {/* <div className="flex items-center space-x-2">
                                <Image alt="Rythink Logo" src={logo} width="120" height="60" decoding="async" loading="lazy" style={{color: "transparent"}} />  
                            </div> */}
                        </Link>
                    </div>
                    <div className="mt-16 flex-grow">
                        <div className="space-y-1">
                            <Link className="group border-l-4 py-3 px-3 flex items-center text-base font-medium border-transparent text-gray-600 hover:bg-gray-50 hover:text-gray-900" href="/dashboard">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" className="text-gray-400 group-hover:text-gray-500 mr-4 flex-shrink-0 h-6 w-6"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"></path></svg>
                                Usage
                            </Link>
                            <Link className="group border-l-4 py-3 px-3 flex items-center text-base font-medium border-transparent text-gray-600 hover:bg-gray-50 hover:text-gray-900" href="/dashboard/subscription">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" className="text-gray-400 group-hover:text-gray-500 mr-4 flex-shrink-0 h-6 w-6"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                Subscription
                            </Link>
                            <Link className="group border-l-4 py-3 px-3 flex items-center text-base font-medium bg-blue-50 border-[#269ACE] text-[#269ACE]" aria-current="page" href="/dashboard/profile">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" className="text-[#269ACE] mr-4 flex-shrink-0 h-6 w-6"><path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                                Profile
                            </Link>
                        </div>
                    </div>
                </nav>
            </div>
        <div className="md:pl-72 col-span-5 border">
            <div className=" px-4 sm:px-6 lg:px-0 flex flex-col">
            <div className="sticky top-0 z-10 flex h-16 flex-shrink-0 bg-black">
                <div className="flex flex-1 justify-end pt-5 text-white">
                    {/* <AuthNav photo={user?.photoURL} logout={logout} /> */}
                    hfhfjhf
                </div>
            </div>
        <main className="flex-1 pt-10 pb-16 lg:px-8">
            <h2 className="leading-tight text-3xl md:text-4xl font-jakarta text-black font-bold">Profile</h2>
            <section className="mt-10">
            Et Lorem proident fugiat mollit mollit excepteur sint est deserunt adipisicing eiusmod dolore. Magna eu pariatur consectetur nostrud ut. Lorem ex velit est et ea non et nisi et culpa occaecat incididunt. Fugiat officia ullamco occaecat voluptate id consectetur reprehenderit dolor magna ea ipsum fugiat fugiat. Culpa aute sint aute dolor amet est eiusmod mollit velit nulla.

            Lorem labore deserunt elit pariatur velit tempor labore eiusmod. Mollit ut sint non labore quis cillum dolore et irure elit. Aute Lorem adipisicing aliquip quis.

            Sunt esse amet adipisicing aute velit. Consectetur mollit commodo aute aute. Id nisi commodo sit duis incididunt voluptate ut adipisicing aliqua ut proident mollit.

            Consectetur qui tempor ut Lorem exercitation amet ipsum officia ad mollit. Elit officia id ut sit deserunt nostrud Lorem est adipisicing. Sit occaecat voluptate ipsum adipisicing. Velit minim et elit tempor excepteur anim elit. Dolor sunt ipsum officia cupidatat sunt elit. Ipsum non do duis aute ipsum sit.

            Exercitation ex incididunt eu consectetur deserunt. Dolore commodo eiusmod anim excepteur. Ipsum veniam excepteur aute Lorem minim mollit commodo culpa ut. Consectetur aliquip eu nisi officia qui irure eu. Excepteur laboris ipsum adipisicing est occaecat deserunt minim anim eu laborum eiusmod exercitation.

            Deserunt nisi proident magna dolore aliquip cupidatat et proident duis cupidatat. Culpa eiusmod aute qui ullamco esse minim anim commodo consequat dolor esse eiusmod minim. Cupidatat mollit cillum occaecat occaecat laboris dolor ullamco nulla officia mollit. Elit dolor do exercitation esse ipsum eu est. Excepteur et sint minim sunt eiusmod.

            Commodo sint consectetur ullamco et anim commodo veniam sunt. Amet quis excepteur et ex Lorem minim laboris non velit irure. Incididunt Lorem sit dolor laboris ipsum mollit Lorem et incididunt consequat. Deserunt exercitation elit commodo fugiat. Do amet id adipisicing sunt anim ipsum exercitation occaecat. Duis ad cillum veniam laboris et.

            Nostrud minim enim quis laborum irure cupidatat. Qui pariatur incididunt pariatur exercitation nisi anim non officia ea et esse dolore. Quis fugiat consectetur labore cillum id. Adipisicing exercitation do nulla tempor consequat deserunt laborum ut id ut. Excepteur eiusmod sit non velit occaecat Lorem dolor Lorem ipsum consequat anim est do ipsum. Irure non est voluptate aliqua voluptate. Irure ullamco labore consequat occaecat quis officia occaecat est voluptate est laboris ex esse.

            Occaecat reprehenderit eu qui irure deserunt sit est anim nisi sint quis et qui occaecat. Est fugiat aute dolore veniam aliqua Lorem officia ex proident dolore consectetur. Laborum elit commodo amet eiusmod exercitation enim anim cillum ex ullamco ex eiusmod esse. In est ad mollit veniam. Id ut officia excepteur consequat. Elit duis cillum proident consectetur duis esse nisi cillum anim eiusmod. Nostrud commodo tempor ea esse sunt do irure dolor voluptate irure cillum quis nisi.

            Cupidatat reprehenderit ut aliquip amet sunt dolor est id ex tempor. Officia sint deserunt velit minim incididunt. Enim tempor irure laboris deserunt magna incididunt ullamco. Dolor eiusmod duis eu labore est adipisicing eiusmod. Culpa eu aliqua ut anim proident enim non voluptate dolor quis tempor non occaecat laboris. Amet labore qui exercitation ea nulla Lorem deserunt pariatur sint Lorem esse mollit ex. Reprehenderit et officia velit incididunt duis eu ad cillum qui.

            Et Lorem proident fugiat mollit mollit excepteur sint est deserunt adipisicing eiusmod dolore. Magna eu pariatur consectetur nostrud ut. Lorem ex velit est et ea non et nisi et culpa occaecat incididunt. Fugiat officia ullamco occaecat voluptate id consectetur reprehenderit dolor magna ea ipsum fugiat fugiat. Culpa aute sint aute dolor amet est eiusmod mollit velit nulla.

            Lorem labore deserunt elit pariatur velit tempor labore eiusmod. Mollit ut sint non labore quis cillum dolore et irure elit. Aute Lorem adipisicing aliquip quis.

            Sunt esse amet adipisicing aute velit. Consectetur mollit commodo aute aute. Id nisi commodo sit duis incididunt voluptate ut adipisicing aliqua ut proident mollit.

            Consectetur qui tempor ut Lorem exercitation amet ipsum officia ad mollit. Elit officia id ut sit deserunt nostrud Lorem est adipisicing. Sit occaecat voluptate ipsum adipisicing. Velit minim et elit tempor excepteur anim elit. Dolor sunt ipsum officia cupidatat sunt elit. Ipsum non do duis aute ipsum sit.

            Exercitation ex incididunt eu consectetur deserunt. Dolore commodo eiusmod anim excepteur. Ipsum veniam excepteur aute Lorem minim mollit commodo culpa ut. Consectetur aliquip eu nisi officia qui irure eu. Excepteur laboris ipsum adipisicing est occaecat deserunt minim anim eu laborum eiusmod exercitation.

            Deserunt nisi proident magna dolore aliquip cupidatat et proident duis cupidatat. Culpa eiusmod aute qui ullamco esse minim anim commodo consequat dolor esse eiusmod minim. Cupidatat mollit cillum occaecat occaecat laboris dolor ullamco nulla officia mollit. Elit dolor do exercitation esse ipsum eu est. Excepteur et sint minim sunt eiusmod.

            Commodo sint consectetur ullamco et anim commodo veniam sunt. Amet quis excepteur et ex Lorem minim laboris non velit irure. Incididunt Lorem sit dolor laboris ipsum mollit Lorem et incididunt consequat. Deserunt exercitation elit commodo fugiat. Do amet id adipisicing sunt anim ipsum exercitation occaecat. Duis ad cillum veniam laboris et.

            Nostrud minim enim quis laborum irure cupidatat. Qui pariatur incididunt pariatur exercitation nisi anim non officia ea et esse dolore. Quis fugiat consectetur labore cillum id. Adipisicing exercitation do nulla tempor consequat deserunt laborum ut id ut. Excepteur eiusmod sit non velit occaecat Lorem dolor Lorem ipsum consequat anim est do ipsum. Irure non est voluptate aliqua voluptate. Irure ullamco labore consequat occaecat quis officia occaecat est voluptate est laboris ex esse.

            Occaecat reprehenderit eu qui irure deserunt sit est anim nisi sint quis et qui occaecat. Est fugiat aute dolore veniam aliqua Lorem officia ex proident dolore consectetur. Laborum elit commodo amet eiusmod exercitation enim anim cillum ex ullamco ex eiusmod esse. In est ad mollit veniam. Id ut officia excepteur consequat. Elit duis cillum proident consectetur duis esse nisi cillum anim eiusmod. Nostrud commodo tempor ea esse sunt do irure dolor voluptate irure cillum quis nisi.

            Cupidata
            </section>
        </main>
                                    
            </div>
        </div>
        </div>
    );
}

export default withProtected(Settings);