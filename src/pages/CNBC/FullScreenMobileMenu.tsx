import * as React from "react";
import { Menu, X, Search, Lock } from "lucide-react";

// Menu data structure - restored
const menuData = [
  {
    title: "MARKETS",
    submenu: [
      "PRE-MARKETS",
      "U.S. MARKETS",
      "EUROPE MARKETS",
      "CHINA MARKETS",
      "ASIA MARKETS",
      "WORLD MARKETS",
      "CURRENCIES",
      "CRYPTOCURRENCY",
      "FUTURES & COMMODITIES",
      "BONDS",
      "FUNDS & ETFS",
    ],
  },
  {
    title: "BUSINESS",
    submenu: [
      "ECONOMY",
      "FINANCE",
      "HEALTH & SCIENCE",
      "MEDIA",
      "REAL ESTATE",
      "ENERGY",
      "TRANSPORTATION",
      "SMALL BUSINESS",
    ],
  },
  {
    title: "INVESTING",
    submenu: [
      "STOCKS",
      "BONDS",
      "FUNDS & ETFS",
      "OPTIONS",
      "COMMODITIES",
      "CURRENCIES",
      "CRYPTOCURRENCY",
      "FUTURES",
    ],
  },
  {
    title: "PERSONAL FINANCE",
    submenu: [
      "EARN",
      "SPEND",
      "SAVE",
      "INVEST",
      "CREDIT CARDS",
      "LOANS",
      "INSURANCE",
      "TAXES",
    ],
  },
  {
    title: "TECH",
    submenu: [
      "CYBERSECURITY",
      "ENTERPRISE",
      "INTERNET",
      "MEDIA",
      "MOBILE",
      "SOCIAL MEDIA",
      "VENTURE CAPITAL",
      "ARTIFICIAL INTELLIGENCE",
    ],
  },
  {
    title: "POLITICS",
    submenu: [
      "WHITE HOUSE",
      "CONGRESS",
      "ELECTIONS",
      "POLICY",
      "DEFENSE",
      "TAXES",
      "REGULATION",
      "TRADE",
    ],
  },
  {
    title: "VIDEO",
    submenu: [
      "TOP VIDEOS",
      "LATEST NEWS",
      "CEO INTERVIEWS",
      "MARKET COVERAGE",
      "SPECIAL REPORTS",
      "DIGITAL ORIGINALS",
      "LIVE TV",
    ],
  },
  {
    title: "INVESTING CLUB",
    hasLock: true,
    submenu: [
      "JIM CRAMER'S PICKS",
      "PORTFOLIO HOLDINGS",
      "TRADE ALERTS",
      "MONTHLY MEETINGS",
      "MARKET COMMENTARY",
      "MEMBER BENEFITS",
    ],
  },
];

export default function FullScreenMobileMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [activeMenuItem, setActiveMenuItem] = React.useState("MARKETS");
  const [hoveredMenuItem, setHoveredMenuItem] = React.useState<string | null>(
    null
  );

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuItemClick = (title: string) => {
    setActiveMenuItem(title);
  };

  const handleMenuItemHover = (title: string) => {
    setHoveredMenuItem(title);
  };

  const handleMenuItemLeave = () => {
    setHoveredMenuItem(null);
  };

  const currentMenuItem = hoveredMenuItem || activeMenuItem;
  const activeSubmenu =
    menuData.find((item) => item.title === currentMenuItem)?.submenu || [];

  return (
    <div className="relative">
      {/* Prevent body scroll when menu is open */}
      {isMenuOpen && (
        <style>{`
          body {
            overflow: hidden;
          }
        `}</style>
      )}

      {/* Clean Navigation Bar */}
      <Menu onClick={toggleMenu} className="h-5 w-5 mr-3" />

      {/* Full Screen Menu Overlay with all menu items */}
      {isMenuOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-white z-50 animate-slide-down">
          {/* Menu Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
            <button
              onClick={toggleMenu}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="h-6 w-6 text-gray-600" />
            </button>

            <div className="flex items-center">
              <div className="w-8 h-8 bg-gradient-to-r from-red-500 via-orange-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500 rounded mr-2"></div>
              <span className="text-2xl font-bold text-gray-900">CNBC</span>
            </div>

            <button className="flex items-center space-x-2 text-blue-600 p-2 hover:bg-gray-100 rounded transition-colors">
              <span className="text-sm font-medium">SEARCH</span>
              <Search className="h-5 w-5" />
            </button>
          </div>

          {/* Menu Content - Two Column Layout */}
          <div className="flex h-[calc(100vh-80px)]">
            {/* Left Column - Main Menu */}
            <div className="w-1/2 px-6 py-8 border-r border-gray-200">
              <div className="space-y-6">
                {menuData.map((item) => (
                  <button
                    key={item.title}
                    onClick={() => handleMenuItemClick(item.title)}
                    onMouseEnter={() => handleMenuItemHover(item.title)}
                    onMouseLeave={handleMenuItemLeave}
                    className={`block w-full text-left text-2xl font-bold transition-all duration-200 py-2 pr-4 relative ${
                      hoveredMenuItem === item.title ||
                      (hoveredMenuItem === null &&
                        activeMenuItem === item.title)
                        ? "text-blue-600"
                        : "text-gray-900 hover:text-blue-600"
                    }`}
                  >
                    <div className="flex items-center">
                      {item.title}
                      {item.hasLock && (
                        <Lock className="h-4 w-4 ml-2 text-gray-400" />
                      )}
                    </div>
                    {/* Active/Hover Border */}
                    {(hoveredMenuItem === item.title ||
                      (hoveredMenuItem === null &&
                        activeMenuItem === item.title)) && (
                      <div className="absolute right-0 top-0 bottom-0 w-1 bg-blue-600"></div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Right Column - Submenu */}
            <div className="w-1/2 px-6 py-8">
              <div className="space-y-4">
                {activeSubmenu.map((subItem, index) => (
                  <a
                    key={index}
                    href="#"
                    className="block text-lg text-blue-600 hover:text-blue-800 transition-colors font-medium"
                  >
                    {subItem}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Custom CSS for slide animation */}
      <style>{`
        @keyframes slide-down {
          from {
            transform: translateY(-100%);
          }
          to {
            transform: translateY(0);
          }
        }
        .animate-slide-down {
          animation: slide-down 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}
