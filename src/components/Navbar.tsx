import React, { useState } from "react";
import { Menu, X, MessageCircle, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet-async";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showServicesGrid, setShowServicesGrid] = useState(false);

  const services = [
    { title: "Chatbot", path: "/services/chatbot", emoji: "🤖" },
    { title: "Bulk Messaging", path: "/services/bulk-messaging", emoji: "📤" },
    { title: "Scheduled Messaging", path: "/services/scheduled-messaging", emoji: "⏳" },
    { title: "Message Logs", path: "/services/message-logs", emoji: "📊" },
    { title: "Device Management", path: "/services/device-management", emoji: "📱" },
    { title: "Message Templates", path: "/services/message-templates", emoji: "📝" },
    { title: "Webhook Integration", path: "/services/webhook-integration", emoji: "🔗" },
    { title: "Contact Book", path: "/services/contact-book", emoji: "📖" },
    { title: "API Authentication", path: "/services/api-authentication", emoji: "🔐" },
  ];

  return (
    <>
      <Helmet>
        <title>Navbar | Whaps</title>
        <meta name="description" content="Explore our services including chatbot, bulk messaging, scheduled messaging, and more." />
        <meta name="keywords" content="WhatsApp, chatbot, bulk messaging, API, automation" />
        <meta property="og:title" content="Navbar | Whaps" />
        <meta property="og:description" content="Discover our services for WhatsApp automation and customer engagement." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://whaps.in/img/logo.jpg" />
        <meta property="og:url" content="https://whaps.in" />
      </Helmet>
      <motion.nav
        className="bg-white py-4 px-6 md:px-12 fixed w-full z-50 shadow-sm"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <a href="/">
            <motion.div
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={`${import.meta.env.BASE_URL}img/logo.jpg`}
                alt="Whaps Logo"
                className="w-10 h-10 md:w-12 md:h-12 object-contain"
              />
              <span className="text-xl font-bold text-gray-800">
                <span className="text-green-500">Whaps</span>
              </span>
            </motion.div>
          </a>


          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="/">Home</NavLink>
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
            <NavLink href="/clients">Clients</NavLink>
            <NavLink href="/pricing">Pricing</NavLink>
            <motion.button
              className="bg-green-500 text-white px-6 py-2 rounded-full font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a href="/pricing">Get Started</a>
            </motion.button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

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
                <a
                  key={index}
                  href={service.path}
                  className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-green-100 transition"
                >
                  <span className="ml-3 text-gray-800 font-medium">{service.title}</span>
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed top-0 right-0 h-full w-64 bg-white shadow-lg p-6 z-50"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
          >
            <button onClick={() => setIsOpen(false)} className="absolute top-4 right-4">
              <X size={24} />
            </button>
            <div className="mt-10 space-y-6">
              <NavLink href="/" onClick={() => setIsOpen(false)}>Home</NavLink>
              <NavLink href="/clients" onClick={() => setIsOpen(false)}>Clients</NavLink>
              <NavLink href="/pricing" onClick={() => setIsOpen(false)}>Pricing</NavLink>
              <motion.button
                className="bg-green-500 text-white px-6 py-2 rounded-full font-medium w-full"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a href="/pricing" onClick={() => setIsOpen(false)}>Get Started</a>
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="h-[80px]"></div>
    </>
  );
};

const NavLink: React.FC<{ href: string; children: React.ReactNode; onClick?: () => void }> = ({ href, children, onClick }) => (
  <motion.div whileHover={{ scale: 1.1 }}>
    <a href={href} className="text-gray-700 hover:text-green-500 font-medium" onClick={onClick}>
      {children}
    </a>
  </motion.div>
);

export default Navbar;
