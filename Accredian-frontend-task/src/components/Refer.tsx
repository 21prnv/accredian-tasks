import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { ChevronDown, ChevronRight, Menu } from "lucide-react";
import Sidebar from "./Sidebar";
import ReferralDialog from "./ReferalDIalogue";
const ReferralPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("Refer");

  const menuItems = ["Refer", "Benefits", "FAQs", "Support"];

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <div className="w-full bg-white">
      {/* Top Banner */}
      <div className="w-full bg-[#EEF4FF] py-2 px-4 text-center">
        <p className="text-sm font-semibold">
          Navigate your ideal career path with tailored expert advice
          <a href="#" className="text-[#1a73e8] hover:underline ml-1">
            Contact Expert
          </a>
        </p>
      </div>
      {/* Main Navigation */}
      <header className="md:px-8 px-4 md:block ">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <a
                href="#"
                className="text-blue-600 text-[1.25rem] font-semibold flex flex-col items-center justify-center"
              >
                <p className="m-0">accredian</p>
                <p className="text-black font-extralight text-[9px] m-0">
                  credentials that matter
                </p>
              </a>

              <Button
                variant="ghost"
                className=" items-center md:flex hidden bg-blue-600 ml-3 text-white font-medium"
              >
                Courses <ChevronDown className=" h-4 w-4" />
              </Button>
            </div>
            {/* Main Nav Items */}
            <nav className="  hidden md:flex items-center gap-8">
              <a
                href="#"
                className="text-[#1a202c] hover:text-[#1a73e8] text-sm font-semibold"
              >
                Refer & Earn
              </a>

              <a
                href="#"
                className="text-[#1a202c] hover:text-[#1a73e8] text-sm font-semibold"
              >
                Resources
              </a>

              <a
                href="#"
                className="text-[#1a202c] hover:text-[#1a73e8] text-sm font-semibold"
              >
                About Us
              </a>

              <Button
                variant="ghost"
                className="text-[#1a202c] font-[600] bg-gray-300"
              >
                Login
              </Button>

              <Button className="bg-[#1a73e8] text-white hover:bg-[#1557b0] font-semibold">
                Try for free
              </Button>
            </nav>
            {/* Mobile Menu Button */}
            <div className="flex gap-3 md:hidden">
              <Button
                variant="ghost"
                className=" items-center md:hidden flex  bg-blue-600 ml-3 text-white font-medium"
              >
                Explore <ChevronRight className=" h-4 w-4" />
              </Button>
              <button onClick={toggleSidebar} className="md:hidden text-black">
                <Menu />
              </button>
            </div>
          </div>
        </div>
      </header>
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
      {/* Secondary Navigation */}
      <NavigationMenu className="container w-full mx-auto block mt-4 px-10 bg-blue-50 rounded-full">
        <NavigationMenuList className="flex gap-8 py-2 justify-center">
          {menuItems.map((item) => (
            <NavigationMenuItem key={item}>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setActiveItem(item);
                }}
                className={`
                py-2 text-sm font-bold relative
                ${
                  activeItem === item
                    ? "text-blue-600"
                    : "text-gray-600 hover:text-blue-600"
                }
                ${
                  activeItem === item
                    ? "after:content-['.'] after:text-3xl after:mb-2 after:absolute after:bottom-[-12px] after:left-1/2 after:transform after:-translate-x-1/2 after:text-blue-600"
                    : ""
                }
              `}
              >
                {item}
              </a>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>

      {/* Hero Section */}
      <div className="md:max-w-5xl mx-6 md:mx-auto  shadow-[0px_4px_29px_9px_rgba(0,_0,_0,_0.1)]  rounded-lg mt-5">
        <div className="relative bg-blue-50 rounded-xl  flex items-center md:justify-between justify-center">
          {/* Money icons in corners - placeholders */}
          <img
            src="/cash-top-left.svg"
            className="absolute top-[-17px] md:left-4 left-0 w-[5rem] h-[5rem]"
            alt="Cash Top Left"
          />
          <img
            src="/cash-tops-left.svg"
            className="absolute top-[-17px] right-4  w-[5rem] h-[5rem]"
            alt="Cash Top Right"
          />
          <img
            src="/cash-middle-right.svg"
            className="absolute md:bottom-24 bottom-[-10px] right-0  w-[5rem] h-[5rem]"
            alt="Cash Middle Left"
          />
          <img
            src="/cash-bottom.svg"
            className="absolute md:bottom-4 bottom-[-4px] md:right-80 right-72 md:w-[5rem] w-[3rem] h-[5rem]  z-10"
            alt="Cash Bottom Right"
          />
          <img
            src="/cash-behind-mobile.svg"
            className="absolute top-[7px] right-[17rem] w-[5rem] h-[5rem] md:block hidden"
            alt="Cash Behind Mobile"
          />

          {/* Left Content */}
          <div className="max-w-md ml-4 md:text-left md:mt-0 mt-8 text-center">
            <p className="md:text-7xl text-3xl font-[700] mb-2 text-black">
              Let’s Learn <br className="md:block hidden" /> & Earn
            </p>
            <p className="text-2xl font-[300] text-[#555] mb-5">
              Get a chance to win <br className="md:block hidden" /> up-to{" "}
              <br className="md:hidden block" />
              <span className="text-blue-600 text-3xl font-bold">
                Rs. 15,000
              </span>
            </p>
            <ReferralDialog
              triggerButton={
                <Button className="bg-blue-600 text-white px-6 md:mb-0 mb-9 py-2 rounded-md hover:bg-blue-700">
                  Refer Now
                </Button>
              }
            />
          </div>

          {/* Right Content */}
          <div className="h-[410px] w-[33rem] relative md:block hidden">
            <div className="absolute bottom-[-15px] right-4">
              <img src="/hero-main.svg" alt="Phone" className="w-[30rem] " />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReferralPage;
