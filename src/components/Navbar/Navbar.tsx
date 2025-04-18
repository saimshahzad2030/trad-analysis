import React from "react";
import SearchBar from "../Searchbar/Searchbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className=" fixed w-full  z-50">
      <div className="px-8 flex flex-row items-center relative py-4 bg-[#13131f] justify-between shadow-[0_2px_10px_var(--variant-2)]">
        {/* <img className="h-8 w-auto" src="/assets/logo.png" /> */}
        <h1 className="text-3xl font-bold text-[var(--variant-3)]">LOGO</h1>
        <SearchBar />
        <div className="flex flex-row items-center justify-end  w-4/12  ">
          <Link href="/login">
            <Button
              size="lg"
              variant="second"
              className="mr-1 transition-colors duration-300"
            >
              Login
            </Button>
          </Link>
          <Link href="/login">
            <Button
              size="lg"
              variant="second"
              className="ml-1 transition-colors duration-300"
            >
              Sign Up
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
