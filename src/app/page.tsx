import Image from "next/image";
import TradingViewWidget from "@/components/Widget/Widget";
import Navbar from "@/components/Navbar/Navbar";
import Chart1 from "@/components/Chart/Chart1";
import Sidebar from "@/components/Sidebar/Sidebar";
import Link from "next/link";
import NavSecond from "@/components/Navbar/NavSecond";
export default function Home() {
  return (
    <div className="flex flex-col items-center container mx-auto  w-full">
      {/* <TradingViewWidget /> */}
      <Navbar />
      {/* <div className="flex flex-row flex-1  w-full overflow-x-hidden pt-24 bg-[#13131f]">
        <Sidebar />
        <main className=" p-4 bg-[#13131f]    w-full">
          <Chart1 />
        </main>
      </div> */}
      <div className="relative flex flex-col    w-full overflow-x-hidden  pt-40 bg-[#13131f]">
        <NavSecond />
        <Chart1 />
      </div>
    </div>
  );
}
