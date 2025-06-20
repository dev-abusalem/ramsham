import * as React from "react";
import { Search, ChevronDown } from "lucide-react";

// Menu data with submenu information
const menuData = [
  {
    title: "Home",
    hasSubmenu: false,
  },
  {
    title: "News",
    hasSubmenu: true,
    submenu: [
      { title: "World News", url: "#" },
      { title: "Politics", url: "#" },
      { title: "Technology", url: "#" },
      { title: "Health", url: "#" },
    ],
  },
  {
    title: "Sport",
    hasSubmenu: false,
  },
  {
    title: "Business",
    hasSubmenu: true,
    submenu: [
      { title: "Markets", url: "#" },
      { title: "Economy", url: "#" },
      { title: "Companies", url: "#" },
    ],
  },
  {
    title: "Innovation",
    hasSubmenu: true,
    submenu: [
      { title: "Technology", url: "#" },
      { title: "Science", url: "#" },
      { title: "Future", url: "#" },
    ],
  },
  {
    title: "Culture",
    hasSubmenu: true,
    submenu: [
      { title: "Film", url: "#" },
      { title: "Music", url: "#" },
      { title: "Books", url: "#" },
    ],
  },
  {
    title: "Arts",
    hasSubmenu: true,
    submenu: [
      { title: "Visual Arts", url: "#" },
      { title: "Performance", url: "#" },
      { title: "Design", url: "#" },
    ],
  },
  {
    title: "Travel",
    hasSubmenu: true,
    submenu: [
      { title: "Destinations", url: "#" },
      { title: "Food & Drink", url: "#" },
      { title: "Adventure", url: "#" },
    ],
  },
  {
    title: "Earth",
    hasSubmenu: true,
    submenu: [
      { title: "Climate", url: "#" },
      { title: "Environment", url: "#" },
      { title: "Wildlife", url: "#" },
    ],
  },
  {
    title: "Audio",
    hasSubmenu: true,
    submenu: [
      { title: "Podcasts", url: "#" },
      { title: "Radio", url: "#" },
      { title: "Music", url: "#" },
    ],
  },
  {
    title: "Video",
    hasSubmenu: false,
  },
  {
    title: "Live",
    hasSubmenu: true,
    submenu: [
      { title: "Live TV", url: "#" },
      { title: "Events", url: "#" },
      { title: "Breaking News", url: "#" },
    ],
  },
];

export default function BBCMobileMenu() {
  const [expandedItems, setExpandedItems] = React.useState<string[]>([]);

  const toggleSubmenu = (title: string) => {
    setExpandedItems((prev) =>
      prev.includes(title)
        ? prev.filter((item) => item !== title)
        : [...prev, title]
    );
  };

  const isExpanded = (title: string) => expandedItems.includes(title);

  return (
    <div className="min-h-screen bg-[#00000076]  w-full fixed left-0 top-[80px]">
      <div className="min-h-screen h-full fixed w-[300px] bg-white">
        {/* Header with close button and search */}
        <div className=" bg-gray-200 p-2">
          <form className="relative">
            <input
              type="text"
              placeholder="Search news, topics and more"
              className="w-full pr-16 pl-2 h-[50px]  bg-gray-50 border border-black text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-none focus:border-transparent"
            />
            <Search className="absolute w-[50px] h-[50px] p-3 right-0 top-1/2  bg-black -translate-y-1/2 text-white" />
          </form>
        </div>

        {/* Menu items */}
        <div className="flex flex-col">
          {menuData.map((item) => (
            <div
              key={item.title}
              className="border-b border-gray-100 last:border-b-0"
            >
              {item.hasSubmenu ? (
                <div>
                  <button
                    onClick={() => toggleSubmenu(item.title)}
                    className="w-full text-[15px] font-semibold flex items-center justify-between px-6 py-2.5 text-left hover:bg-gray-50 transition-colors"
                  >
                    <span className="   text-black">{item.title}</span>
                    <ChevronDown
                      className={`h-4 w-4 text-gray-600 transition-transform duration-200 ${
                        isExpanded(item.title) ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {/* Submenu */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      isExpanded(item.title)
                        ? "max-h-96 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="bg-gray-50">
                      {item.submenu?.map((subItem) => (
                        <a
                          key={subItem.title}
                          href={subItem.url}
                          className="block px-8 py-3 text-base text-gray-600 hover:bg-gray-100 transition-colors border-b border-gray-100 last:border-b-0"
                        >
                          {subItem.title}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <a
                  href="#"
                  className="block font-semibold px-6 py-2.5 text-[15px]   text-black hover:bg-gray-50 transition-colors"
                >
                  {item.title}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
