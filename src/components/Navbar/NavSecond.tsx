"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavSecond = () => {
  const pathName = usePathname();
  return (
    <div className="z-40 fixed top-[72px] mb-8 px-8 flex flex-row items-center justify-start text-white space-x-6 py-3 bg-[#13131f] duration-300 transition-all w-full   border border-amber-200 border-t-0 border-l-0 border-r-0 border-b-[var(--variant-4)]">
      <div className="flex flex-col items-start cursor-pointer group">
        <Link href="/">
          <h1
            className={`text-sm ${
              pathName == "/" ? "text-[var(--variant-4)]" : " text-current "
            } group-hover:text-[var(--variant-4)] duration-300 transition-all`}
          >
            Summary
          </h1>
        </Link>
        {/* <div
          className={`h-[2px] bg-white mt-[2px] ${
            pathName == "/" ? "w-full bg-[var(--variant-4)]" : "w-0"
          }  group-hover:w-full  group-hover:bg-[var(--variant-4)] transition-all duration-300 ease-in-out`}
        />{" "} */}
      </div>
      <div className="flex flex-col items-start cursor-pointer group">
        <Link href="/chart">
          <h1
            className={`text-sm ${
              pathName == "/chart"
                ? "text-[var(--variant-4)] font-semibold"
                : " text-current "
            } group-hover:text-[var(--variant-4)] duration-300 transition-all`}
          >
            Chart
          </h1>
        </Link>
        {/* <div
          className={`h-[2px] bg-white mt-[2px] ${
            pathName == "/chart" ? "w-full bg-[var(--variant-4)]" : "w-0"
          }  group-hover:w-full  group-hover:bg-[var(--variant-4)] transition-all duration-300 ease-in-out`}
        />{" "} */}
      </div>
      <div className="flex flex-col items-start cursor-pointer group">
        <Link href="/history">
          <h1
            className={`text-sm ${
              pathName == "/history"
                ? "text-[var(--variant-4)] font-semibold"
                : " text-current "
            } group-hover:text-[var(--variant-4)] duration-300 transition-all`}
          >
            History
          </h1>
        </Link>
        {/* <div
          className={`h-[2px] bg-white mt-[2px] ${
            pathName == "/history" ? "w-full bg-black" : "w-0 bg-none"
          }  group-hover:w-full  group-hover:bg-[var(--variant-4)] transition-all duration-300 ease-in-out`}
        /> */}
      </div>
      <div className="flex flex-col items-start cursor-pointer group">
        <Link href="/statistics">
          <h1
            className={`text-sm ${
              pathName == "/statistics"
                ? "text-[var(--variant-4)] font-semibold"
                : " text-current "
            } group-hover:text-[var(--variant-4)] duration-300 transition-all`}
          >
            Statistics
          </h1>
        </Link>
        {/* <div
          className={`h-[2px] bg-white mt-[2px]  ${
            pathName == "/statistics" ? "w-full bg-[var(--variant-4)]" : "w-0"
          } group-hover:w-full  group-hover:bg-[var(--variant-4)] transition-all duration-300 ease-in-out`}
        />{" "} */}
      </div>
      <div className="flex flex-col items-start cursor-pointer group">
        <Link href="/financials">
          <h1
            className={`text-sm ${
              pathName == "/financials"
                ? "text-[var(--variant-4)] font-semibold"
                : " text-current "
            } group-hover:text-[var(--variant-4)] duration-300 transition-all`}
          >
            Financials
          </h1>
        </Link>
        {/* <div
          className={`h-[2px] bg-white mt-[2px] ${
            pathName == "/settings" ? "w-full bg-[var(--variant-4)]" : "w-0"
          }  group-hover:w-full  group-hover:bg-[var(--variant-4)] transition-all duration-300 ease-in-out`}
        />{" "} */}
      </div>
    </div>
  );
};

export default NavSecond;
