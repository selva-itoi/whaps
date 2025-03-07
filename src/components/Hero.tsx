import React, { useState } from "react";
import { motion } from "framer-motion";
import { useMouseContext } from "../context/MouseContext";
import { MessageSquare, Send, Users, X } from "lucide-react";
import useMeasure from "react-use-measure";

const Hero: React.FC = () => {
  const { mousePosition } = useMouseContext();
  const [ref, bounds] = useMeasure();
  const [showVideo, setShowVideo] = useState(false);

  const calculateRotation = () => {
    if (!bounds.width) return { x: 0, y: 0 };
    const centerX = bounds.left + bounds.width / 2;
    const centerY = bounds.top + bounds.height / 2;
    const deltaX = (mousePosition.x - centerX) / 30;
    const deltaY = (mousePosition.y - centerY) / 30;
    return { x: -deltaY, y: deltaX };
  };

  const rotation = calculateRotation();

  return (
    <section id="home" className="pt-28 pb-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
              Reach Your Customers <span className="text-green-500">Instantly</span> with WhatsApp
            </h1>
            <p className="mt-6 text-lg text-gray-600">
              Connect with your audience directly through WhatsApp. Send personalized messages,
              promotions, and updates to boost engagement and drive conversions.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a href="#pricing">
                <motion.button
                  className="bg-green-500 text-white px-8 py-3 rounded-full font-medium text-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Started
                </motion.button>
              </a>
              <motion.button
                className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-full font-medium text-lg"
                whileHover={{ scale: 1.05, borderColor: "#22c55e" }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowVideo(true)}
              >
                Watch Demo
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            ref={ref}
            className="md:w-1/2 relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ perspective: 1000 }}
          >
            <motion.div
              className="relative z-10 cursor-grab active:cursor-grabbing"
              animate={{ rotateX: rotation.x, rotateY: rotation.y }}
              transition={{ type: "spring", stiffness: 100, damping: 30 }}
              drag
              dragConstraints={{ left: -50, right: 50, top: -50, bottom: 50 }}
              whileDrag={{ scale: 1.05 }}
            >
              <img
                src="./public/img/hero1.png"
                alt="WhatsApp Marketing Platform"
                className="rounded-2xl shadow-2xl"
              />

              {/* Floating Elements - Reduced Size */}
              <motion.div
                className="absolute -top-4 -left-4 bg-white p-2 rounded-lg shadow-lg flex items-center space-x-2"
                animate={{ y: [0, -10, 0], rotate: [0, 2, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              >
                <MessageSquare className="h-6 w-6 text-green-500" />
                <div>
                  <p className="text-sm font-bold text-gray-800">Bulk Messaging</p>
                  <p className="text-xs text-gray-600">Reach thousands instantly</p>
                </div>
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -right-4 bg-white p-2 rounded-lg shadow-lg flex items-center space-x-2"
                animate={{ y: [0, 10, 0], rotate: [0, -2, 0] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 0.5 }}
              >
                <Users className="h-6 w-6 text-blue-500" />
                <div>
                  <p className="text-sm font-bold text-gray-800">Audience Targeting</p>
                  <p className="text-xs text-gray-600">Personalized campaigns</p>
                </div>
              </motion.div>

              <motion.div
                className="absolute top-1/2 -right-8 transform -translate-y-1/2 bg-white p-2 rounded-lg shadow-lg flex items-center space-x-2"
                animate={{ x: [0, 10, 0], rotate: [0, 3, 0] }}
                transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 1 }}
              >
                <Send className="h-6 w-6 text-purple-500" />
                <div>
                  <p className="text-sm font-bold text-gray-800">Instant Delivery</p>
                  <p className="text-xs text-gray-600">98% open rate</p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {showVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="relative w-full max-w-3xl p-6 bg-white rounded-lg">
            <button
              className="absolute top-4 right-4 bg-gray-200 rounded-full p-2"
              onClick={() => setShowVideo(false)}
            >
              <X className="h-6 w-6 text-gray-600" />
            </button>
            <iframe
              width="100%"
              height="400"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Demo Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg"
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
