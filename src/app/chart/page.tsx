import Navbar from "@/components/Navbar/Navbar";
import NavSecond from "@/components/Navbar/NavSecond";
import CompareSection from "@/components/Compare/CompareSection";
export default function ChartPage() {
  return (
    <div className="flex flex-col items-center container mx-auto  w-full">
      <Navbar />

      <div className="relative flex flex-col    w-full overflow-x-hidden  pt-40 bg-[#13131f]">
        <NavSecond />
        <CompareSection />
      </div>
    </div>
  );
}
