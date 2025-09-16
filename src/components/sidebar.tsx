import React, { useState } from "react";
import { MdOutlineDashboard } from "react-icons/md";
import {
  IoAlbumsOutline,
  IoApps,
  IoAppsOutline,
  IoClipboardOutline,
  IoHomeOutline,
  IoLogoBuffer,
  IoPeopleOutline,
  IoPieChartSharp,
} from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { TbReportSearch } from "react-icons/tb";
import { CiSettings } from "react-icons/ci";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { IoIosApps } from "react-icons/io";

interface SidebarProps {
  open: Boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar: React.FC<SidebarProps> = ({ open, setOpen }) => {
  const [activeItem, setActiveItem] = useState<string>("Home");

  const sidebarItems = [
    {
      id: "Home",
      icons: <IoAppsOutline size={24} />,
      title: "Home",
      bgColor: "bg-primary hover:bg-primary/90",
      textColor: "text-primary-foreground",
    },
    {
      id: "User",
      icons: <IoPeopleOutline size={24} />,
      title: "User",
      bgColor: "bg-primary hover:bg-primary/90",
      textColor: "text-primary-foreground",
    },
    {
      id: "Dashboard",
      icons: <IoAlbumsOutline size={24} />,
      title: "Dashboard",
      bgColor: "bg-primary hover:bg-primary/90",
      textColor: "text-primary-foreground",
    },
    {
      id: "Modul",
      icons: <IoLogoBuffer size={24} />,
      title: "Modul Soal",
      bgColor: "bg-primary hover:bg-primary/90",
      textColor: "text-primary-foreground",
    },
    {
      id: "Reports",
      icons: <TbReportSearch size={24} />,
      title: "Survey",
      bgColor: "bg-primary hover:bg-primary/90",
      textColor: "text-primary-foreground",
    },
  ];

  return (
    <div className="flex z-50 ">
      {/* Sidebar */}
      <motion.div
        initial={{ width: open ? 250 : 30 }}
        animate={{ width: open ? 250 : 80 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="sticky top-16 h-[calc(100vh-5rem)] left-0 flex-col bg-card p-4 shadow-sm"
      >
        {/* Toggle Button */}
        <button
          onClick={() => setOpen(!open)}
          className="absolute -right-3 top-6 bg-primary rounded-full p-1 text-primary-foreground shadow-sm"
          aria-label={open ? "Collapse sidebar" : "Expand sidebar"}
        >
          {open ? (
            <FiChevronLeft className="w-4 h-4" />
          ) : (
            <FiChevronRight className="w-4 h-4" />
          )}
        </button>

        {/* Menu Items */}
        <div className="space-y-4 mt-10">
          {sidebarItems.map((item) => (
            <motion.button
              key={item.id}
              onClick={() => setActiveItem(item.id)}
              className={`w-full flex items-center gap-3 p-3 rounded-sm transition-colors ${
                activeItem === item.id
                  ? `${item.bgColor} ${item.textColor}`
                  : "hover:bg-gray-200 text-foreground"
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {item.icons}
              <AnimatePresence>
                {open && (
                  <motion.span
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="font-body text-body tracking-wide whitespace-nowrap"
                  >
                    {item.title}
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          ))}
        </div>

        {/* User Info */}
        {open && (
          <div className="py-2 px-4 mt-30 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
            <div className="avatar avatar-placeholder">
              <div className="bg-neutral text-neutral-content w-12 rounded-full">
                <span className="text-3xl">D</span>
              </div>
            </div>
            <div className="text-center space-y-2 sm:text-left">
              <div className="space-y-0.5">
                <p className="text-lg text-black font-semibold">
                  Erin Lindford
                </p>
                <p className="text-slate-500 font-medium">Product Engineer</p>
              </div>
              <button className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
                Message
              </button>
            </div>
          </div>
        )}
      </motion.div>

      {/* Main Content Wrapper (geser sesuai sidebar) */}
      <motion.div
        animate={{ marginLeft: open ? 0 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="flex-1"
      >
        {/* Taruh konten utama di sini */}
      </motion.div>
    </div>
  );
};

export default Sidebar;
