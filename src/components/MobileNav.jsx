import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

function MobileNav() {
  const pathname = usePathname();
   
  const nonActiveClassMobile = "relative flex flex-col items-center flex-1 gap-1.5 p-2 text-xs font-medium text-gray-600 transition-all duration-150 bg-white hover:text-gray-900";
  const activeClass = "relative flex flex-col items-center flex-1 gap-1.5 p-2 text-xs font-medium text-blue-500 transition-all duration-150 bg-gradient-to-t from-blue-50 to-transparent";

  const svgActiveClass = "w-5 h-5 transition-all duration-150";
  const svgNonActiveClass = "w-5 h-5 text-gray-400 transition-all duration-150 group-hover:text-gray-500";

  const navItems = [
    {
      name: "AI",
      path: "/ai",
      active: pathname?.includes("/ai") || pathname === "/" || pathname?.startsWith("/ai/templates"),
      svgPath: "M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z"
    },
    // {
    //   name: "Ideas",
    //   path: "/ai/ideas-generator",
    //   active: pathname?.includes("/ai/ideas-generator"),
    //   svgPath: "M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z"
    // },
    {
      name: "Carousels",
      path: "/ai/carousels",
      active: pathname?.includes("/ai/carousels"),
      svgPath: "M2 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1H3a1 1 0 01-1-1V4zM8 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1H9a1 1 0 01-1-1V4zM15 3a1 1 0 00-1 1v12a1 1 0 001 1h2a1 1 0 001-1V4a1 1 0 00-1-1h-2z"
    },
    {
      name: "Posts",
      path: "/posts/drafts",
      active: pathname?.startsWith("/posts"),
      svgPath: "M9 2a2 2 0 00-2 2v8a2 2 0 002 2h6a2 2 0 002-2V6.414A2 2 0 0016.414 5L14 2.586A2 2 0 0012.586 2H9z",
      svgPathSecond: "M3 8a2 2 0 012-2v10h8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z"
    },
    {
      name: "Calendar",
      path: "/calendar",
      active: pathname?.startsWith("/calendar"),
      svgPath: "M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
    },
    {
      name: "Settings",
      path: "/workspace/setting",
      active: pathname?.startsWith("//workspace/setting"),
      svgPath: "M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z"
    },
  ];

  return (
    <>
      <nav className="fixed inset-x-0 bottom-0 z-10 bg-white border-t border-gray-200 lg:hidden">
        <div className="flex">
          {
            navItems.map((item, index) => {
                return (
                  <Link href={item?.path} title={item.name} key={index}
                    className={
                      item.active ? activeClass : nonActiveClassMobile
                    }
                    aria-current="page">

                    <svg aria-hidden="true" className={
                      item.active ? svgActiveClass : svgNonActiveClass
                    }

                      xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d={item.svgPath} />
                      {
                        item.svgPathSecond && (
                          <path
                           d={item.svgPathSecond} />
                        )
                      }
                    </svg>

                    {item.name}
                  </Link>
                )
              }
              )
            }
        </div>
      </nav>
    </>
    )
    }

export default MobileNav;
