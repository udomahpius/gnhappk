import logo from "@/assets/good-logo.png";
import Image from "next/image";
import Link from "next/link";

function SmatNav({ name, openSignOut }) {
    return (
        <nav className="flex justify-between items-center py-[14px] px-[32px] w-full bg-[#EDF0F8] border-b border-[#DFE2E9]">
            <div className="flex items-center gap-28">
                <Image src={logo} width="50" height="" className="" alt="" />
                <ul className="flex items-center gap-10">
                    <li>
                        <Link href="/dashboard/donations">Donations</Link>
                    </li>
                    <li>
                        <Link href="/dashboard/earnings">Earnings</Link>
                    </li>
                    <li>
                        <Link href="/dashboard/referrals">Referrals</Link>
                    </li>
                    <li>
                        <Link href="/dashboard/profile">Profile</Link>
                    </li>
                </ul>
            </div>
            <button className="flex gap-4 items-center" type="button" onClick={openSignOut}>
                <p className="text-[#051438] font-bold text-[18px]">Hi, { name }</p>
                <span className="bg-[#A6AFC2] w-[26px] h-[26px] rounded-full flex items-center justify-center text-white">{name.split("")[0]}</span>
            </button>
        </nav>
    );
}

export default SmatNav;