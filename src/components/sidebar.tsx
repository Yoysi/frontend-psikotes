import React, { useState } from "react";
import {
  MdMenuOpen,
  MdOutlineDashboard,
} from "react-icons/md";
import { IoHomeOutline, IoLogoBuffer, IoMenuOutline, IoPieChartSharp } from "react-icons/io5";
import { FaProductHunt, FaUserCircle } from "react-icons/fa";
import { TbReportSearch } from "react-icons/tb";
import { CiSettings } from "react-icons/ci";

const menuItems = [
  { icons: <IoHomeOutline size={24} />, label: "Home" },
  { icons: <IoPieChartSharp size={24} />, label: "....." },
  { icons: <MdOutlineDashboard size={24} />, label: "Dashboard" },
  { icons: <CiSettings size={24} />, label: "Setting" },
  { icons: <IoLogoBuffer size={24} />, label: "Log" },
  { icons: <TbReportSearch size={24} />, label: "Report" },
];

export default function Sidebar() {
  const [open, setOpen] = useState(false);
  const [close,setClose] = useState(true);

  return (
    <div className="fixed flex">
      {/* Sidebar */}
      <aside
        className={`bg-white shadow-md h-screen transition-all duration-500 ${
          open ? "w-64" : "w-16"
        }`}
      >
        <div className="flex justify-between items-center p-3">
          <span className={`font-bold text-lg ${!open && "hidden"}`}>
            Persada
          </span>
          <IoMenuOutline
            size={28}
            className={`cursor-pointer transition-transform ${
              !open 
            }`}
            onClick={() => setOpen(!open)}
          />
        </div>

        <ul className="menu p-2">
          {menuItems.map((item, index) => (
            <li key={index}>
              <a className="flex gap-3 items-center">
                {item.icons}
                <span className={`${!open && "hidden"} transition-all`}>
                  {item.label}
                </span>
              </a>
            </li>
          ))}
        </ul>

        {/* Footer user info */}
        <div className="p-3 flex items-center gap-2">
          <FaUserCircle size={28} />
          <div className={`${!open && "hidden"} leading-5`}>
            <p className="font-medium">Saheb</p>
            <span className="text-xs">saheb@gmail.com</span>
          </div>
        </div>
      </aside>

      
    </div>
  );
}
