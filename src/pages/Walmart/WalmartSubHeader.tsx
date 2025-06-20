import { ChevronUp } from "lucide-react";
import React from "react";
import { RxDashboard } from "react-icons/rx";
import ServicesSubMenu from "./ServicesSubMenu";
import DepartmentSubMenu from "./DepartmentSubMenu";
const menuItems = [
  "Get it Fast",
  "My Items",
  "Pharmacy Delivery",
  "Dinner Solutions",
  "4th of July",
  "Trending",
  "Swim Shop",
  "New Arrivals",
  "Auto Service",
  "Walmart+",
];

const WalmartSubHeader = ({
  showSubManu,
  setShowSubManu,
}: {
  showSubManu: string;
  setShowSubManu: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <header className="min-h-[50px]  flex  justify-between items-center h-full bg-[#f0f5ff] ">
      <div className="px-[2%] w-full mx-auto flex justify-between items-center gap-x-4 ">
        <div className="flex justify-start items-center gap-x-3">
          <button
            onClick={() => setShowSubManu("Departments")}
            className="flex relative border border-transparent px-1.5 py-[2px] hover:border-[#001e60] cursor-pointer rounded-full justify-start items-center gap-x-2"
          >
            <RxDashboard />
            <span className="font-bold text-[14px]">Departments</span>
            <ChevronUp className="w-[18px] h-[18px]" />
            <div className="absolute top-[38px] left-0  ">
              <DepartmentSubMenu showSubManu={showSubManu} />
            </div>
          </button>

          <button
            onClick={() => setShowSubManu("Services")}
            className="flex relative border border-transparent px-1.5 py-[2px] hover:border-[#001e60] cursor-pointer rounded-full justify-start items-center gap-x-2"
          >
            <RxDashboard />
            <span className="font-bold text-[14px]">Services</span>
            <ChevronUp className="w-[18px] h-[18px]" />
            <div className="absolute top-[38px] left-0  ">
              <ServicesSubMenu showSubManu={showSubManu} />
            </div>
          </button>
          <div className="w-[1px] h-[15px] mr-2 bg-[#001e60]"></div>
          <nav>
            <ul className="flex justify-start items-center gap-x-4">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <a
                    className="hover:text-[#001e60] hover:underline text-[13px]"
                    href=""
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <button className="flex border border-transparent px-1.5 py-[2px] hover:border-[#001e60] cursor-pointer rounded-full justify-start items-center gap-x-2">
          <span className="font-bold text-[15px]">More</span>
          <ChevronUp className="w-[18px] h-[18px]" />
        </button>
      </div>
    </header>
  );
};

export default WalmartSubHeader;
