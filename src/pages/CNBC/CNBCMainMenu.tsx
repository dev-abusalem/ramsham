import * as React from "react";
import { ChevronDown } from "lucide-react";
import { IoSearchOutline } from "react-icons/io5";
import FullScreenMobileMenu from "./FullScreenMobileMenu";
// Navigation data with submenus
interface NavigationItem {
  title: string;
  hasLabel?: string;
  hasIndicator?: boolean;
  submenu?: { title: string; url: string }[];
}

const navigationData: NavigationItem[] = [
  {
    title: "MARKETS",
    submenu: [
      { title: "Pre-Markets", url: "#" },
      { title: "U.S. Markets", url: "#" },
      { title: "Currencies", url: "#" },
      { title: "Cryptocurrency", url: "#" },
      { title: "Futures & Commodities", url: "#" },
      { title: "Bonds", url: "#" },
      { title: "Market Data", url: "#" },
    ],
  },
  {
    title: "BUSINESS",
    submenu: [
      { title: "Economy", url: "#" },
      { title: "Finance", url: "#" },
      { title: "Health & Science", url: "#" },
      { title: "Media", url: "#" },
      { title: "Real Estate", url: "#" },
      { title: "Energy", url: "#" },
      { title: "Transportation", url: "#" },
    ],
  },
  {
    title: "INVESTING",
    submenu: [
      { title: "Stocks", url: "#" },
      { title: "ETFs", url: "#" },
      { title: "Options", url: "#" },
      { title: "Bonds", url: "#" },
      { title: "Mutual Funds", url: "#" },
      { title: "Personal Finance", url: "#" },
      { title: "Financial Advisors", url: "#" },
    ],
  },
  {
    title: "TECH",
    submenu: [
      { title: "Cybersecurity", url: "#" },
      { title: "Enterprise", url: "#" },
      { title: "Internet", url: "#" },
      { title: "Media", url: "#" },
      { title: "Mobile", url: "#" },
      { title: "Social Media", url: "#" },
      { title: "Venture Capital", url: "#" },
    ],
  },
  {
    title: "POLITICS",
    submenu: [
      { title: "White House", url: "#" },
      { title: "Congress", url: "#" },
      { title: "Elections", url: "#" },
      { title: "Policy", url: "#" },
      { title: "Defense", url: "#" },
      { title: "Taxes", url: "#" },
      { title: "Regulation", url: "#" },
    ],
  },
  {
    title: "VIDEO",
    submenu: [
      { title: "Top Videos", url: "#" },
      { title: "Latest News", url: "#" },
      { title: "CEO Interviews", url: "#" },
      { title: "Market Coverage", url: "#" },
      { title: "Special Reports", url: "#" },
      { title: "Digital Originals", url: "#" },
      { title: "Pro Talks", url: "#" },
    ],
  },
  {
    title: "INVESTING CLUB",
    hasLabel: "JOIN",
    submenu: [
      { title: "Jim Cramer's Picks", url: "#" },
      { title: "Portfolio Holdings", url: "#" },
      { title: "Trade Alerts", url: "#" },
      { title: "Monthly Meetings", url: "#" },
      { title: "Market Commentary", url: "#" },
      { title: "Member Benefits", url: "#" },
    ],
  },
  {
    title: "PRO",
    hasLabel: "JOIN",
    submenu: [
      { title: "Pro News", url: "#" },
      { title: "Pro Research", url: "#" },
      { title: "Pro Screener", url: "#" },
      { title: "Pro Calendar", url: "#" },
      { title: "Pro Newsletters", url: "#" },
      { title: "Pro Events", url: "#" },
    ],
  },
  {
    title: "LIVESTREAM",
    hasIndicator: true,
  },
];

const rightMenuData: NavigationItem[] = [
  {
    title: "MAKE IT",
    submenu: [
      { title: "Entrepreneurs", url: "#" },
      { title: "Leadership", url: "#" },
      { title: "Careers", url: "#" },
      { title: "Money", url: "#" },
      { title: "Life", url: "#" },
    ],
  },
  {
    title: "SELECT",
    submenu: [
      { title: "All Select", url: "#" },
      { title: "Digital Originals", url: "#" },
      { title: "Special Reports", url: "#" },
      { title: "Documentaries", url: "#" },
    ],
  },
];

const proArticles = [
  {
    tag: "PRO",
    tagColor: "bg-green-600",
    title:
      "Options traders are betting Nike makes a big move after earnings next week",
    date: "Thursday, June 19, 2025 • 7:21:27 AM",
    image: "/placeholder.svg?height=80&width=120",
  },
  {
    tag: "PRO",
    tagColor: "bg-green-600",
    title:
      "Fund managers are pouring money into emerging markets. Here's where investors see opportunities",
    date: "Wednesday, June 18, 2025 • 7:31:06 PM",
    image: "/placeholder.svg?height=80&width=120",
  },
  {
    tag: "CLUB",
    tagColor: "bg-blue-600",
    title:
      "The secret AI sauce behind Meta stock's 683% rise since the dark days of 2022",
    date: "Wednesday, June 18, 2025 • 4:17:00 PM",
    image: "/placeholder.svg?height=80&width=120",
  },
];

function CustomSearch({
  isSearchOpen,
  setIsSearchOpen,
}: {
  isSearchOpen: boolean;
  setIsSearchOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <div
      onClick={() => setIsSearchOpen(false)}
      className="h-screen w-full fixed top-0 left-0 bg-transparent"
    >
      <div
        className={`max-w-[440px] z-20 overflow-y-scroll absolute top-4 right-[5%] bg-white w-full h-auto ${
          isSearchOpen ? "max-h-[calc(100vh-130px)]" : "max-h-0"
        } shadow-[0_2px_4px_0px_#97979780] transition-all duration-200 ease-in-out p-5`}
      >
        <div className="relative">
          <input
            type="text"
            placeholder="Search quotes, news and videos"
            className="w-full border-b-2 border-[#001e5a] font-bold text-sm py-2 outline-none focus:outline-none text-gray-900 placeholder-gray-500 "
          />
          <IoSearchOutline className="absolute cursor-pointer right-0 text-[20px] top-1/2 -translate-y-1/2 text-[#2077b6]" />
        </div>
        <div>
          <h3 className="text-black font-bold py-2">POPULAR SYMBOLS</h3>
          <div className=" space-y-2">
            <button className="flex justify-start items-center text-[12px] gap-x-1 py-1 px-1.5 border border-[#fd8e2] rounded-md text-[#4a4a4a]">
              <span className="font-extrabold">US10Y</span>|
              <span className="font-semibold">U.S. 10 Year Treasury</span>|
              <span className="font-extrabold">4.399% </span>|
              <span className="font-extrabold text-green-600">+0.004 </span>
            </button>
            <button className="flex justify-start items-center text-[12px] gap-x-1 py-1 px-1.5 border border-[#fd8e2] rounded-md text-[#4a4a4a]">
              <span className="font-extrabold">US10Y</span>|
              <span className="font-semibold">U.S. 10 Year Treasury</span>|
              <span className="font-extrabold">4.399% </span>|
              <span className="font-extrabold text-green-600">+0.004 </span>
            </button>
            <button className="flex justify-start items-center text-[12px] gap-x-1 py-1 px-1.5 border border-[#fd8e2] rounded-md text-[#4a4a4a]">
              <span className="font-extrabold">US10Y</span>|
              <span className="font-semibold">U.S. 10 Year Treasury</span>|
              <span className="font-extrabold">4.399% </span>|
              <span className="font-extrabold text-red-600">-0.004 </span>
            </button>
            <button className="flex justify-start items-center text-[12px] gap-x-1 py-1 px-1.5 border border-[#fd8e2] rounded-md text-[#4a4a4a]">
              <span className="font-extrabold">US10Y</span>|
              <span className="font-semibold">U.S. 10 Year Treasury</span>|
              <span className="font-extrabold">4.399% </span>|
              <span className="font-extrabold text-red-600">-0.004 </span>
            </button>
            <div className="w-full h-[1px] bg-[#fd8e2] mt-2"></div>
            <div className="px-4 py-4">
              <h2 className="text-lg font-bold text-gray-900 mb-4 underline">
                PRO & INVESTING CLUB
              </h2>
              <div className="space-y-4">
                {proArticles.map((article, index) => (
                  <div
                    key={index}
                    className="flex space-x-3 cursor-pointer hover:bg-gray-50 p-2 rounded"
                  >
                    <div className="flex-1">
                      <div className="flex justify-start gap-x-1">
                        <p
                          className={`inline-block h-[10px] py-[1px] px-[2px] text-[6px] font-bold text-white   ${article.tagColor}`}
                        >
                          {article.tag}
                        </p>
                        <h3 className="text-base font-semibold text-gray-900 leading-tight mb-2">
                          {article.title}
                        </h3>
                      </div>
                      <p className="text-sm text-gray-500">{article.date}</p>
                    </div>
                    <div className="flex-shrink-0">
                      <img
                        src={article.image || "/placeholder.svg"}
                        alt=""
                        className="w-20 h-16 object-cover rounded"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CNBCMainMenu({
  isSearchOpen,
  setIsSearchOpen,
}: {
  isSearchOpen: boolean;
  setIsSearchOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <div className="w-full mt-2">
      {/* Main Navigation Bar */}
      <nav className=" text-white relative">
        <div className="max-w-full ">
          <div className="flex items-center justify-between h-12">
            {/* Left side - Hamburger + Main Menu */}
            <div className="flex items-center space-x-1">
              {/* Desktop Menu */}
              <div className="hidden md:flex items-center space-x-1">
                <FullScreenMobileMenu />

                {navigationData.map((item) => (
                  <div key={item.title} className="relative group">
                    <button
                      className={`flex items-center pr-3 py-1 text-sm font-bold cursor-pointer hover:text-yellow-600 transition-colors relative border-b-4 border-transparent hover:border-yellow-500 duration-200 ease-in-out ${
                        item.hasIndicator && "ml-5"
                      }`}
                    >
                      {item.hasIndicator && (
                        <span className="mr-2  w-2 h-2 bg-red-500 rounded-full "></span>
                      )}
                      {item.title}
                      {item.hasLabel && (
                        <span className="ml-1 bg-blue-500 text-[6px] py-[2px] px-1 absolute right-0 top-0 text-white rounded-lg font-bold">
                          {item.hasLabel}
                        </span>
                      )}
                    </button>

                    {/* Dropdown Menu */}
                    {item?.submenu && (
                      <div className="absolute top-full left-0 w-64 bg-white text-gray-900 shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                        <div className="">
                          {item.submenu.map((subItem, index) => (
                            <a
                              key={index}
                              href={subItem.url}
                              className="block px-4 py-3 text-sm border-b border-[#f3f5f7] hover:bg-gray-100 transition-colors text-[#005594] uppercase text-[12px] font-bold"
                            >
                              {subItem.title}
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Right side menu */}
            <div className="hidden md:flex items-centerspace-x-1">
              {rightMenuData.map((item) => (
                <div key={item.title} className="relative group">
                  <button className="flex text-[#e3e3e3] text-[11px] py-1 tracking-wide font-bold items-center pr-3   hover:text-yellow-600 transition-colors">
                    {item.title}
                    <ChevronDown className="ml-1 h-3 w-3" />
                  </button>

                  {/* Dropdown Menu */}

                  {item.submenu && (
                    <div className="absolute top-full left-0 w-50 bg-white text-gray-900 shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                      <div className="">
                        {item.submenu.map((subItem, index) => (
                          <a
                            key={index}
                            href={subItem.url}
                            className="block px-4 py-3 text-sm border-b border-[#f3f5f7] hover:bg-gray-100 transition-colors text-[#005594] uppercase text-[11px] font-bold"
                          >
                            {subItem.title}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
              <div className="flex justify-center items-center">
                <div className="w-[0.5px] h-[10px] bg-[#e3e3e3]"></div>
              </div>
              <div className="flex items-center space-x-2  ml-4 ">
                <button className="text-[#e3e3e3] hover:text-yellow-600 font-bold text-[12px]">
                  USA
                </button>
                <span className="w-[2px] h-[2px] bg-white rounded-full"></span>
                <button className="text-[#e3e3e3] hover:text-yellow-600 border-b border-[#e3e3e3] font-bold text-[12px]">
                  INTL
                </button>
              </div>
            </div>
          </div>
        </div>
        {isSearchOpen && (
          <CustomSearch
            isSearchOpen={isSearchOpen}
            setIsSearchOpen={setIsSearchOpen}
          />
        )}

        {/* Mobile Menu */}
        {/* {isMobileMenuOpen && (
          <div className="md:hidden bg-blue-800 border-t border-blue-700">
            <div className="px-4 py-2 space-y-1">
              {[...navigationData, ...rightMenuData].map((item) => (
                <div key={item.title}>
                  <button className="w-full text-left px-3 py-2 text-sm font-medium hover:bg-blue-700 transition-colors flex items-center justify-between">
                    <span className="flex items-center">
                      {item.title}
                      {item.hasLabel && (
                        <span className="ml-2 px-1.5 py-0.5 text-xs bg-orange-500 text-white rounded font-bold">
                          {item?.hasLabel}
                        </span>
                      )}
                      {item.hasIndicator && (
                        <span className="ml-2 w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                      )}
                    </span>
                    <ChevronDown className="h-3 w-3" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )} */}
      </nav>
    </div>
  );
}
