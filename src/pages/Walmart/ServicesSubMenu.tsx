import { useState } from "react";

const ServicesSubMenu = ({ showSubManu }: { showSubManu: string }) => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const menuData = [
    {
      title: "Auto Care Center Services",
      subItems: [
        { label: "Auto Care Center Services", href: "/cp/auto-services" },
        {
          label: "Buy Tires & Schedule Installation",
          href: "/browse/auto-tires",
        },
        { label: "Tire Maintenance", href: "/cp/tire-maintenance" },
        { label: "Schedule an Oil Change", href: "/cp/oil-change-service" },
        { label: "Vehicle Maintenance", href: "/cp/general-maintenance" },
        { label: "Virtual Garage", href: "/acc/garage" },
        {
          label: "Find an Auto Care Center",
          href: "/store-finder?services=autoCareCenter",
        },
      ],
    },
    {
      title: "Pharmacy",
      subItems: [
        { label: "Prescriptions", href: "/pharmacy/prescriptions" },
        { label: "Refill Medications", href: "/pharmacy/refill" },
        { label: "Transfer Prescriptions", href: "/pharmacy/transfer" },
      ],
    },
    {
      title: "Vision, Health & Wellness",
      subItems: [
        { label: "Eye Exams", href: "/vision/eye-exams" },
        { label: "Glasses & Contacts", href: "/vision/glasses" },
        { label: "Health Clinics", href: "/health/clinics" },
      ],
    },
    {
      title: "Insurance & Benefits",
      subItems: [
        { label: "Health Insurance", href: "/insurance/health" },
        { label: "Auto Insurance", href: "/insurance/auto" },
        { label: "Vision Benefits", href: "/insurance/vision" },
      ],
    },
    {
      title: "Registry, Lists, & Gifts",
      subItems: [
        { label: "Wedding Registry", href: "/registry/wedding" },
        { label: "Baby Registry", href: "/registry/baby" },
        { label: "Gift Lists", href: "/registry/gifts" },
      ],
    },
    {
      title: "Custom Cakes",
      subItems: [
        { label: "Order Custom Cake", href: "/cakes/custom-order" },
        { label: "Cake Gallery", href: "/cakes/gallery" },
        { label: "Cake Flavors", href: "/cakes/flavors" },
      ],
    },
    {
      title: "Photo Services",
      subItems: [
        { label: "Print Photos", href: "/photo/print" },
        { label: "Photo Books", href: "/photo/books" },
        { label: "Custom Gifts", href: "/photo/gifts" },
      ],
    },
    {
      title: "Financial Services",
      subItems: [
        { label: "Credit Cards", href: "/finance/credit-cards" },
        { label: "Loans", href: "/finance/loans" },
        { label: "Insurance Options", href: "/finance/insurance" },
      ],
    },
    {
      title: "Protection, Home, & Tech",
      subItems: [
        { label: "Home Warranty", href: "/protection/home-warranty" },
        { label: "Tech Support", href: "/protection/tech-support" },
        { label: "Device Insurance", href: "/protection/device-insurance" },
      ],
    },
    {
      title: "Subscriptions",
      subItems: [
        { label: "Subscribe & Save", href: "/subscriptions/save" },
        { label: "Magazine Subscriptions", href: "/subscriptions/magazines" },
        { label: "Auto-Reorder", href: "/subscriptions/auto-reorder" },
      ],
    },
    {
      title: "Community & Giving",
      subItems: [
        { label: "Charity Partners", href: "/community/charity" },
        { label: "Volunteer", href: "/community/volunteer" },
        { label: "Local Events", href: "/community/events" },
      ],
    },
    {
      title: "Ordering Online",
      subItems: [
        { label: "Curbside Pickup", href: "/orders/curbside" },
        { label: "Same-Day Delivery", href: "/orders/delivery" },
        { label: "Track Order", href: "/orders/track" },
      ],
    },
  ];

  return (
    <>
      {showSubManu === "Services" && (
        <div className="">
          <div className="bg-white w-[246px] rounded-b-lg">
            <ul className="text-left text-sm pb-[1rem]">
              <li className=" font-bold w-full px-[1.5rem] pb-[0.5rem] pt-[1.5rem]">
                All Services
              </li>
              {menuData.map((item, index) => (
                <li
                  onMouseEnter={() => setHoveredItem(item.title)}
                  onMouseLeave={() => setHoveredItem(null)}
                  key={index}
                  className="relative"
                >
                  <a
                    className="border-l-[3px] border-transparent hover:bg-[#e9f1fe] hover:border-[#0053e2] w-full py-[0.5rem] block px-[1.5rem]"
                    href="/"
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
            <div className="bg-[#f8f9fa] absolute z-50 h-full left-[240px] top-0 w-[246px] rounded-br-lg border-l border-gray-200">
              {hoveredItem && (
                <div className="h-full">
                  <ul className="text-left text-sm">
                    <li className="font-bold w-full px-[1.5rem] pb-[0.5rem] pt-[1.5rem] text-gray-800">
                      {hoveredItem}
                    </li>
                    {menuData
                      .find((item) => item.title === hoveredItem)
                      ?.subItems.map((subItem, subIndex) => (
                        <li key={subIndex}>
                          <a
                            className="  w-full py-[0.5rem] block px-[1.5rem]"
                            href={subItem.href}
                          >
                            {subItem.label}
                          </a>
                        </li>
                      ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ServicesSubMenu;
