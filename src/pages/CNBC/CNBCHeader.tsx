import React from "react";
import cnbc from "../../assets/images/cnbc/cnbc.svg";
import { FiSearch } from "react-icons/fi";
import { FaBell } from "react-icons/fa";
import CNBCMainMenu from "./CNBCMainMenu";
const CNBCHeader = () => {
  const [isSearchOpen, setIsSearchOpen] = React.useState(false);

  return (
    <header className="min-h-[100px] sticky top-0 z-10 left-0 flex  justify-between items-center h-full bg-[#001e5a] ">
      <div className="container w-full mx-auto ">
        <div className="flex justify-between items-center">
          <img src={cnbc} alt="logo" className="w-[156px]" />
          <div className="flex justify-end items-center gap-x-4">
            <button
              onClick={() => setIsSearchOpen(true)}
              className="flex cursor-pointer justify-between h-[30px] items-center px-2 py-1 text-white bg-[#ffffff21] w-[250px]"
            >
              <span className="text-[12px] font-bold">
                Search quotes, news & videos
              </span>
              <FiSearch />
            </button>
            <button className="flex cursor-pointer justify-center text-white items-center gap-x-2">
              <span className="text-[12px] hover:text-yellow-500 uppercase font-bold">
                Watchlist
              </span>
              <FaBell className="w-[20px] h-[20px]" />
            </button>
            <div className="w-[1px] h-[15px] bg-white"></div>
            <button className="flex cursor-pointer justify-center text-white items-center gap-x-2">
              <span className="text-[12px] hover:text-yellow-500 uppercase font-bold">
                SIGN IN
              </span>
            </button>
            <button className="flex cursor-pointer justify-center bg-white tracking-wide text-[#001e5a] py-0.5 px-2 rounded-[2px]  items-center gap-x-2">
              <span className="text-[12px] hover:text-yellow-500 uppercase font-bold">
                Create free account
              </span>
            </button>
          </div>
        </div>
        <CNBCMainMenu
          isSearchOpen={isSearchOpen}
          setIsSearchOpen={setIsSearchOpen}
        />
      </div>
    </header>
  );
};

export default CNBCHeader;
