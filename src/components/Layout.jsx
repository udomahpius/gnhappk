import React, { useEffect, useState } from "react";
import { Nav, SideBar, TopNav } from "@/components/index.js";
import useTheme from "@/hooks/theme";
import { Montserrat } from "next/font/google";
const inter = Montserrat({ subsets: ['latin'] });


function Layout({ children, user }) {
    const [darkToggle, setDarkToggle] = useState(false);
    const [colorTheme, setTheme] = useTheme();
    const [darkSide, setDarkSide] = useState(colorTheme === "light" ? true : false);

    const toggleDarkMode = checked => {
        setTheme(colorTheme);
        setDarkSide(!darkSide);
        console.log(checked);
    };

    const toggleMode = () => {
        localStorage.setItem("mode", JSON.stringify(!darkToggle));
    }

    return (
        // <>
        //     <Nav />
        //     <SideBar />
        //     <div className="px-12 pt-24 sm:ml-64 relative bg-white">
        //         { children }
        //     </div>
        // </>
        <div className={`${inter.className} bg-gray-100 dark:bg-slate-600 wrapper overflow-y-hidden h-screen transition duration-200 ${darkSide}`}>
            {/* <Nav /> */}
            <SideBar toggleMode={toggleDarkMode} darkSide={darkSide} user={user} />
            <article className="relative h-screen overflow-y-auto w-full bg-gray-100 dark:bg-slate-600 side-bar article p-0">
                { children }
            </article>
            
        </div>
    );
}

export default Layout;