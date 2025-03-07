import React, { useState } from "react";
import { Menu, X, MessageCircle, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showServicesGrid, setShowServicesGrid] = useState(false);

  const services = [
    { title: "Chatbot", path: "/services/chatbot" },
    { title: "Bulk Messaging", path: "/services/bulk-messaging" },
    { title: "Scheduled Messaging", path: "/services/scheduled-messaging" },
    { title: "Message Logs", path: "/services/message-logs" },
    { title: "Device Management", path: "/services/device-management" },
    { title: "Message Templates", path: "/services/message-templates" },
    { title: "Webhook Integration", path: "/services/webhook-integration" },
    { title: "Contact Book", path: "/services/contact-book" },
    { title: "API Authentication", path: "/services/api-authentication" },
  ];

  return (
    <>
      {/* Fixed Navbar */}
      <motion.nav
        className="bg-white py-4 px-6 md:px-12 fixed w-full z-50 shadow-sm"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link to="/">
            <motion.div className="flex items-center space-x-2" whileHover={{ scale: 1.05 }}>
              <MessageCircle className="h-8 w-8 text-green-500" />
              <span className="text-xl font-bold text-gray-800">
                <span className="text-green-500">Whaps</span>
              </span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink to="/">Home</NavLink>

            {/* Services Button to Trigger Hover */}
            <div
              className="relative"
              onMouseEnter={() => setShowServicesGrid(true)}
              onMouseLeave={() => setShowServicesGrid(false)}
            >
              <button className="flex items-center space-x-1 text-gray-700 hover:text-green-500 font-medium">
                <span>Services</span>
                <ChevronDown className="h-4 w-4" />
              </button>
            </div>

            <NavLink to="/#clients">Clients</NavLink>
            <NavLink to="/#pricing">Pricing</NavLink>
            <motion.button
              className="bg-green-500 text-white px-6 py-2 rounded-full font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </motion.button>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Fixed Full-Width Services Grid (Visible on Hover) */}
      <AnimatePresence>
        {showServicesGrid && (
          <motion.div
            className="fixed top-[64px] left-0 w-full bg-white shadow-lg border-t border-gray-200 z-40 p-6"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            onMouseEnter={() => setShowServicesGrid(true)}
            onMouseLeave={() => setShowServicesGrid(false)}
          >
            <div className="max-w-7xl mx-auto grid grid-cols-3 gap-6">
              {services.map((service, index) => (
                <Link
                  key={index}
                  to={service.path}
                  className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-green-100 transition"
                >
                  <span className="text-2xl">{service.emoji}</span>
                  <span className="ml-3 text-gray-800 font-medium">{service.title}</span>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Push content down to avoid overlapping */}
      <div className="h-[80px]"></div>
    </>
  );
};

// Navigation Link Component
const NavLink: React.FC<{ to: string; children: React.ReactNode }> = ({ to, children }) => (
  <motion.div whileHover={{ scale: 1.1 }}>
    <Link to={to} className="text-gray-700 hover:text-green-500 font-medium">
      {children}
    </Link>
  </motion.div>
);

export default Navbar;
