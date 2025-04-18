import Navbar from "@/components/Navbar/Navbar";
import HistoricalData from "@/components/HistoricalData/HistoricalData";
import NavSecond from "@/components/Navbar/NavSecond";
export default function History() {
  return (
    <div className="flex flex-col items-center container mx-auto  w-full">
      {/* <TradingViewWidget /> */}
      <Navbar />
      {/* <div className="flex flex-row flex-1  w-full overflow-x-hidden pt-24 bg-[#13131f]">
        <Sidebar />
        <main className=" p-4 bg-[#13131f]    w-full">
          <HistoricalData />
        </main>
      </div> */}
      <div className="relative flex flex-col    w-full overflow-x-hidden  pt-40 bg-[#13131f]">
        <NavSecond />
        <HistoricalData />
      </div>
    </div>
  );
}
