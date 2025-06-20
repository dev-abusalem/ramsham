import walmart from "../../assets/images/walmart/spark-icon.svg";
import dollar from "../../assets/images/walmart/walmart.png";
import { ChevronUp } from "lucide-react";
import { IoMdHeartEmpty } from "react-icons/io";
import { LuUserRound } from "react-icons/lu";
import { IoCartOutline } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";
const WalmartHeader = () => {
  return (
    <header className="min-h-[80px]  flex  justify-between items-center h-full bg-[#0053e2] ">
      <div className="px-[2%] w-full mx-auto flex justify-between items-center gap-x-5 ">
        <div className="flex w-[35%] justify-start items-center gap-x-5 ">
          <img src={walmart} alt="logo" className="w-[35px]" />
          <button className="flex cursor-pointer relative justify-start items-end gap-2 bg-[#001e60] p-2 rounded-full h-[52px] w-[314px]">
            <img src={dollar} alt="logo" className="w-[35px]" />
            <div className="text-white text-left">
              <h3 className="font-bold leading-[1.5em]">Pickup or delivery?</h3>
              <p className="text-[12px] font-semibold leading-[1.2em]">
                Sacramento, 95829 . Sacramento Supe...
              </p>
            </div>
            <ChevronUp className="absolute right-3 top-4 text-white w-[18px] h-[18px]" />
          </button>
        </div>
        <div className="relative w-[65%]">
          <input
            type="text"
            placeholder="Search everything at Walmart online and in store"
            className="h-[52px] placeholder:text-blue-600 bg-white px-5 rounded-full focus:rounded-none outline-none border-none w-full"
          />
          <FiSearch className="absolute rounded-full bg-[#002e99] text-white cursor-pointer right-3 top-1/2 -translate-y-1/2 text-[20px] p-1.5 w-[30px] h-[30px] " />
        </div>
        <div className="flex w-[30%] justify-end items-center gap-x-2">
          <button className="flex cursor-pointer relative justify-start items-center gap-2 hover:bg-[#001e60] p-2 rounded-full h-[52px] px-3">
            <IoMdHeartEmpty className="w-[20px] h-[20px] text-white" />
            <div className="text-white text-left">
              <p className="text-[12px] font-semibold leading-[1.2em]">
                Reorder
              </p>
              <h3 className="font-bold text-sm leading-[1.5em]"> My Items</h3>
            </div>
          </button>
          <button className="flex cursor-pointer relative justify-start items-center gap-2 hover:bg-[#001e60] p-2 rounded-full h-[52px] px-3">
            <LuUserRound className="w-[20px] h-[20px] text-white" />
            <div className="text-white text-left">
              <p className="text-[12px] font-semibold leading-[1.2em]">
                Sign In
              </p>
              <h3 className="font-bold text-sm leading-[1.5em]">Account</h3>
            </div>
          </button>
          <button className="flex flex-col cursor-pointer relative justify-start items-center gap-2 hover:bg-[#001e60] p-2 rounded-full   px-3">
            <IoCartOutline className="w-[20px] h-[20px] text-white" />
            <div className="text-white text-left">
              <p className="text-[12px] font-semibold leading-[1.2em]">$0.00</p>
            </div>
          </button>
        </div>
      </div>
    </header>
  );
};

export default WalmartHeader;
