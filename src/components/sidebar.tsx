import React, { useState } from "react";
import { IoAlbumsOutline, IoAppsOutline, IoLogoBuffer, IoPeopleOutline } from "react-icons/io5";
import { TbReportSearch } from "react-icons/tb";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

interface SidebarProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar: React.FC<SidebarProps> = ({ open, setOpen }) => {
  const [activeItem, setActiveItem] = useState<string>("Home");

  const sidebarItems = [
    { id: "Home", icons: <IoAppsOutline size={22} />, title: "Home" },
    { id: "User", icons: <IoPeopleOutline size={22} />, title: "User" },
    { id: "Dashboard", icons: <IoAlbumsOutline size={22} />, title: "Dashboard" },
    { id: "Modul", icons: <IoLogoBuffer size={22} />, title: "Modul Soal" },
    { id: "Reports", icons: <TbReportSearch size={22} />, title: "Survey" },
  ];

  return (
    <div className="flex z-50">
      {/* Sidebar */}
      <motion.div
        animate={{ width: open ? 250 : 80 }}
        transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }} // smooth cubic-bezier
        className="sticky top-16 h-[calc(100vh-5rem)] left-0 flex-col bg-card p-4 shadow-sm"
      >
        {/* Toggle Button */}
        <button
          onClick={() => setOpen(!open)}
          className="absolute -right-3 top-6 bg-primary rounded-full p-1 text-primary-foreground shadow-sm"
        >
          {open ? <FiChevronLeft className="w-4 h-4" /> : <FiChevronRight className="w-4 h-4" />}
        </button>

        {/* Menu Items */}
        <div className="space-y-3 mt-10">
          {sidebarItems.map((item) => (
            <motion.button
              key={item.id}
              onClick={() => setActiveItem(item.id)}
              className={`w-full flex items-center gap-3 p-3 rounded-md transition-colors ${
                activeItem === item.id
                  ? "bg-primary text-primary-foreground"
                  : "hover:bg-gray-200 text-foreground"
              }`}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              {item.icons}
              <AnimatePresence>
                {open && (
                  <motion.span
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -8 }}
                    transition={{ duration: 0.1 }}
                    className="text-sm font-medium whitespace-nowrap"
                  >
                    {item.title}
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          ))}
        </div>

        {/* User Info */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="py-3 px-4 mt-45 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center gap-4"
            >
              <div className="bg-neutral text-neutral-content w-12 h-12 rounded-full flex items-center justify-center">
                <span className="text-xl font-bold">D</span>
              </div>
              <div>
                <p className="text-black font-semibold">Erin Lindford</p>
                <p className="text-slate-500 text-sm">Product Engineer</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Main Content */}
      <motion.div
        animate={{ marginLeft: open ? 0 : 0 }}
        transition={{ duration: 0.4 }}
        className="flex-1"
      >
        {/* Konten utama */}
      </motion.div>
    </div>
  );
};

export default Sidebar;
