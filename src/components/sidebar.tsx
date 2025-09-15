import React, { useState } from "react";
import { MdOutlineDashboard } from "react-icons/md";
import { IoHomeOutline, IoLogoBuffer, IoPieChartSharp } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { TbReportSearch } from "react-icons/tb";
import { CiSettings } from "react-icons/ci";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const [activeItem, setActiveItem] = useState("Home");

  const sidebarItems = [
    {
      id: "Home",
      icons: <IoHomeOutline size={24} />,
      title: "Home",
      bgColor: "bg-primary hover:bg-primary/90",
      textColor: "text-primary-foreground",
    },
    {
      id: "Chart",
      icons: <IoPieChartSharp size={24} />,
      title: "Analytics",
      bgColor: "bg-primary hover:bg-primary/90",
      textColor: "text-primary-foreground",
    },
    {
      id: "Dashboard",
      icons: <MdOutlineDashboard size={24} />,
      title: "Dashboard",
      bgColor: "bg-primary hover:bg-primary/90",
      textColor: "text-primary-foreground",
    },
    {
      id: "Settings",
      icons: <CiSettings size={24} />,
      title: "Settings",
      bgColor: "bg-primary hover:bg-primary/90",
      textColor: "text-primary-foreground",
    },
    {
      id: "Buffer",
      icons: <IoLogoBuffer size={24} />,
      title: "Buffer",
      bgColor: "bg-primary hover:bg-primary/90",
      textColor: "text-primary-foreground",
    },
    {
      id: "Reports",
      icons: <TbReportSearch size={24} />,
      title: "Reports",
      bgColor: "bg-primary hover:bg-primary/90",
      textColor: "text-primary-foreground",
    },
  ];

  return (
    <div className="z-50 flex">
      {/* Sidebar */}
      <motion.div
        initial={{ width: open ? 280 : 80 }}
        animate={{ width: open ? 280 : 80 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="fixed top-0 left-0 flex-col h-screen bg-card p-4 shadow-sm"
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
        <div className="space-y-2 mt-10">
          {sidebarItems.map((item) => (
            <motion.button
              key={item.id}
              onClick={() => setActiveItem(item.id)}
              className={`w-full flex items-center gap-3 p-3 rounded-lg transition-colors ${
                activeItem === item.id
                  ? `${item.bgColor} ${item.textColor}`
                  : "hover:bg-secondary/50 text-foreground"
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
          <div className="mt-auto pt-4 border-t border-border">
            <div className="flex items-center gap-3 p-3">
              <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                <span className="text-secondary-foreground font-semibold">JD</span>
              </div>
              <div className="flex-1">
                <p className="font-semibold text-foreground">John Doe</p>
                <p className="text-sm text-accent-foreground">Administrator</p>
              </div>
            </div>
          </div>
        )}
      </motion.div>

      {/* Main Content Wrapper (geser sesuai sidebar) */}
      <motion.div
        animate={{ marginLeft: open ? 280 : 80 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="flex-1"
      >
        {/* Taruh konten utama di sini */}
      </motion.div>
    </div>
  );
};

export default Sidebar;
