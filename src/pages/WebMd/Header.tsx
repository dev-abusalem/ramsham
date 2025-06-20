"use client";

import { ArrowRight, ChevronDown, Mail, Search, X } from "lucide-react";
import { useState } from "react";
import "./styles.css";

const Conditions = () => {
  const conditionscolumns = [
    {
      items: [
        "ADD/ADHD",
        "Allergies",
        "Arthritis",
        "Atrial Fibrillation",
        "Breast Cancer",
        "Cancer",
        "Crohn's Disease",
      ],
    },
    {
      items: [
        "Drugs",
        "Supplements",
        "Pill Identifier",
        "Interaction Checker",
        "Heart Disease",
        "HIV & AIDS",
        "Aging Well",
      ],
    },
    {
      items: [
        "Baby",
        "Birth Control",
        "Children's Health",
        "Diet & Weight",
        "Fitness & Exercise",
        "Food & Recipes",
        "Health & Balance",
      ],
    },

    {
      items: [
        "News",
        "Blogs",
        "Podcasts",
        "Webinars",
        "Newsletters",
        "WebMD Surveys",
        "View All",
      ],
    },
  ];
  return (
    <div className=" w-[60.9375rem] grid grid-cols-4 justify-between items-start gap-10 px-10 pt-6 pb-10">
      {conditionscolumns.map((column, index) => (
        <li key={index} className="col-span-1">
          <ul className="w-full ">
            {column.items.map((item, index) => {
              if (item === "View All") {
                return (
                  <li key={index} className="">
                    <a
                      href="/"
                      className="py-2.5   text-[#3557ff] flex justify-start gap-2"
                    >
                      <ArrowRight width={20} height={20} />
                      <span>{item}</span>
                    </a>
                  </li>
                );
              }
              return (
                <li
                  key={index}
                  className={`${
                    index === column.items.length - 1
                      ? "border-b-0"
                      : "border-b"
                  }  border-[#c6cedb]`}
                >
                  <a href="/" className="py-2.5 block text-[#1b1b1b]">
                    {item}
                  </a>
                </li>
              );
            })}
          </ul>
        </li>
      ))}
    </div>
  );
};

const Drugs = () => {
  const conditionscolumns = [
    {
      items: [
        "ADD/ADHD",
        "Allergies",
        "Arthritis",
        "Atrial Fibrillation",
        "Breast Cancer",
        "Cancer",
        "Crohn's Disease",
      ],
    },
  ];
  return (
    <div className=" w-[20rem] grid grid-cols-1 justify-between items-start gap-10 px-10 pt-6 pb-10">
      {conditionscolumns.map((column, index) => (
        <li key={index} className="col-span-1">
          <ul className="w-full ">
            {column.items.map((item, index) => {
              return (
                <li
                  key={index}
                  className={`${
                    index === column.items.length - 1
                      ? "border-b-0"
                      : "border-b"
                  }  border-[#c6cedb]`}
                >
                  <a href="/" className="py-2.5 block text-[#1b1b1b]">
                    {item}
                  </a>
                </li>
              );
            })}
          </ul>
        </li>
      ))}
    </div>
  );
};

const Header = () => {
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(false);
  return (
    <header className="bg-[#00157c] h-[4.6875rem] text-[14px]">
      <div className="container mx-auto flex justify-between gap-x-4 h-full items-center">
        <div className="logo">
          <img
            src="/images/webmd_logo_white.svg"
            alt="logo"
            className="w-[7.25rem]"
          />
        </div>
        <nav className="w-full flex justify-between items-center">
          <ul className="flex justify-between items-center gap-4">
            <li className="relative vn_submenu1_wrapper">
              <div
                onMouseEnter={() => setHoveredMenu("conditions")}
                onMouseLeave={() => setHoveredMenu(null)}
              >
                <a
                  href="/"
                  className="flex px-[0.625rem] py-[0.5rem] cursor-pointer   hover:bg-white ease-in-out duration-300 rounded-[5px] font-semibold hover:text-[#00157c] justify-center items-center text-white text-[15px]"
                >
                  <span>Conditions</span>
                  <ChevronDown
                    className={`text-[.625rem] w-5 h-5 ml-[.3125rem] duration-200 ease-in-out transition-all ${
                      hoveredMenu === "conditions" ? "rotate-180" : ""
                    }`}
                  />
                </a>
                <div
                  className={`${
                    hoveredMenu === "conditions"
                      ? "left-0 visible opacity-100"
                      : "left-[-20px] invisible opacity-0"
                  } absolute transition-all duration-300 ease-in-out ml-[-3.7rem] pt-[20px] z-50 shadow-lg`}
                >
                  <div className="bg-white">
                    <Conditions />
                  </div>
                </div>
              </div>
            </li>
            <li className="relative">
              <div
                onMouseEnter={() => setHoveredMenu("drugs")}
                onMouseLeave={() => setHoveredMenu(null)}
              >
                <a
                  href="/"
                  className="flex px-[0.625rem] py-[0.5rem] cursor-pointer text-[15px]  hover:bg-white ease-in-out duration-300 rounded-[5px] font-semibold hover:text-[#00157c] justify-center items-center text-white "
                >
                  <span>Drugs & Supplements</span>
                  <ChevronDown
                    className={`text-[.625rem] w-5 h-5 ml-[.3125rem] duration-200 ease-in-out transition-all ${
                      hoveredMenu === "drugs" ? "rotate-180" : ""
                    }`}
                  />
                </a>
                <div
                  className={`${
                    hoveredMenu === "drugs"
                      ? "left-0 visible opacity-100"
                      : "left-[-20px] invisible opacity-0"
                  } absolute transition-all duration-300 ease-in-out ml-[-3.7rem] pt-[20px] z-50 shadow-lg`}
                >
                  <div className="bg-white">
                    <Drugs />
                  </div>
                </div>
              </div>
            </li>
            <li className="relative">
              <div
                onMouseEnter={() => setHoveredMenu("wellbeing")}
                onMouseLeave={() => setHoveredMenu(null)}
              >
                <a
                  href="/"
                  className="flex px-[0.625rem] py-[0.5rem] cursor-pointer text-[15px]  hover:bg-white ease-in-out duration-300 rounded-[5px] font-semibold hover:text-[#00157c] justify-center items-center text-white"
                >
                  <span>Well-Being </span>
                  <ChevronDown
                    className={`text-[.625rem] w-5 h-5 ml-[.3125rem] duration-200 ease-in-out transition-all ${
                      hoveredMenu === "wellbeing" ? "rotate-180" : ""
                    }`}
                  />
                </a>
                <div
                  className={`${
                    hoveredMenu === "wellbeing"
                      ? "left-0 visible opacity-100"
                      : "left-[-20px] invisible opacity-0"
                  } absolute transition-all duration-300 ease-in-out ml-[-3.7rem] pt-[20px] z-50 shadow-lg`}
                >
                  <div className="bg-white">
                    <Drugs />
                  </div>
                </div>
              </div>
            </li>
            <li>
              <a
                href="/"
                className="flex px-[0.625rem] py-[0.5rem] cursor-pointer text-[15px]  hover:bg-white ease-in-out duration-300 rounded-[5px] font-semibold hover:text-[#00157c] justify-center items-center text-white"
              >
                <span>Symptom Checker</span>
              </a>
            </li>
            <li>
              <a
                href="/"
                className="flex px-[0.625rem] py-[0.5rem] cursor-pointer text-[15px]  hover:bg-white ease-in-out duration-300 rounded-[5px] font-semibold hover:text-[#00157c] justify-center items-center text-white"
              >
                <span>Find a Doctor</span>
              </a>
            </li>
            <li className="relative">
              <div
                onMouseEnter={() => setHoveredMenu("more")}
                onMouseLeave={() => setHoveredMenu(null)}
              >
                <a
                  href="/"
                  className="flex px-[0.625rem] py-[0.5rem] cursor-pointer text-[15px]  hover:bg-white ease-in-out duration-300 rounded-[5px] font-semibold hover:text-[#00157c] justify-center items-center text-white"
                >
                  <span>More</span>
                  <ChevronDown
                    className={`text-[.625rem] w-5 h-5 ml-[.3125rem] duration-200 ease-in-out transition-all ${
                      hoveredMenu === "more" ? "rotate-180" : ""
                    }`}
                  />
                </a>
                <div
                  className={`${
                    hoveredMenu === "more"
                      ? "left-0 visible opacity-100"
                      : "left-[-20px] invisible opacity-0"
                  } absolute transition-all duration-300 ease-in-out ml-[-3.7rem] pt-[20px] z-50 shadow-lg`}
                >
                  <div className="bg-white">
                    <Drugs />
                  </div>
                </div>
              </div>
            </li>
            <div className="flex justify-end items-center gap-6 relative">
              <div className="w-[1px] h-[40px] bg-white"></div>
              <button className="bg-transparent border border-white flex items-center gap-1 text-white font-semibold rounded-[5px] cursor-pointer py-[6px] hover:bg-white hover:text-[#00157c] px-[0.625rem]">
                <Mail className="w-5 h-5" />
                <span>Subscribe</span>
              </button>
              <button className="text-white cursor-pointer font-semibold">
                Log In
              </button>
              <Search
                onClick={() => setShowForm(true)}
                className="text-white font-semibold cursor-pointer"
              />
              {showForm && (
                <form
                  action=""
                  className="absolute flex justify-baseline items-center -top-[2px] -right-10"
                >
                  <div className="flex justify-end items-center p-1.5 bg-white rounded">
                    <input
                      type="text"
                      className="py-1.5 p-4 border-none outline-none bg-white rounded-lg min-w-sm"
                      placeholder="AskWebMD"
                    />
                    <button className="bg-[#3557ff] cursor-pointer text-white px-4 py-1.5 rounded">
                      Search
                    </button>
                  </div>
                  <X
                    onClick={() => setShowForm(false)}
                    className="text-white cursor-pointer w-6 h-6 ml-4"
                  />
                </form>
              )}
            </div>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
