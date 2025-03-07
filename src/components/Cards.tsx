import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, BarChart3, Zap } from 'lucide-react';
import { useMouseContext } from '../context/MouseContext';

const Cards: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Why Choose Whaps</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Our platform offers unique advantages that help businesses connect with their customers effectively.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <DraggableCard
            icon={<MessageCircle className="h-12 w-12 text-green-500" />}
            title="High Deliverability"
            description="Our platform ensures 99% message delivery rate with real-time tracking and notifications."
            color="green"
          />
          <DraggableCard
            icon={<BarChart3 className="h-12 w-12 text-blue-500" />}
            title="Detailed Analytics"
            description="Get comprehensive insights into campaign performance, customer engagement, and conversion rates."
            color="blue"
          />
          <DraggableCard
            icon={<Zap className="h-12 w-12 text-purple-500" />}
            title="Instant Setup"
            description="Get started in minutes with our user-friendly interface and pre-built templates."
            color="purple"
          />
        </div>

        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl overflow-hidden relative">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-800">Experience the Power of WhatsApp Marketing</h3>
                <p className="mt-4 text-lg text-gray-600">
                  Our platform makes it easy to create, send, and track WhatsApp campaigns that drive results.
                </p>
                <ul className="mt-6 space-y-3">
                  {[
                    "Reach customers directly on their most used app",
                    "Higher open rates compared to email marketing",
                    "Personalized messaging for better engagement",
                    "Real-time delivery and read receipts"
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      className="flex items-start"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <span className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-3">
                        <span className="h-3 w-3 rounded-full bg-green-500"></span>
                      </span>
                      <span className="text-gray-700">{item}</span>
                    </motion.li>
                  ))}
                </ul>
                <motion.button
                  className="mt-8 bg-green-500 text-white px-8 py-3 rounded-full font-medium text-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Start Free Trial
                </motion.button>
              </div>
              <div className="md:w-1/2">
                <ThreeDPhone />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

interface DraggableCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}

const DraggableCard: React.FC<DraggableCardProps> = ({ icon, title, description, color }) => {
  const colorClasses = {
    green: "from-green-50 to-green-100 border-green-200",
    blue: "from-blue-50 to-blue-100 border-blue-200",
    purple: "from-purple-50 to-purple-100 border-purple-200"
  };

  return (
    <motion.div
      className={`bg-gradient-to-br ${colorClasses[color as keyof typeof colorClasses]} rounded-xl p-8 border shadow-sm`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="mb-6">{icon}</div>
      <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </motion.div>
  );
};

const ThreeDPhone: React.FC = () => {
  const { mousePosition } = useMouseContext();

  const calculateRotation = () => {
    const maxRotation = 15;
    const x = (mousePosition.x / window.innerWidth - 0.5) * maxRotation;
    const y = (mousePosition.y / window.innerHeight - 0.5) * -maxRotation;
    return { x, y };
  };

  const rotation = calculateRotation();

  return (
    <>
      {/* Mobile View (Separate Style) */}
      <div className="block md:hidden text-center">
        <img
          src="./gif/gif1.gif"
          alt="WhatsApp on smartphone"
          className="w-3/4 mx-auto rounded-lg shadow-lg"
        />
      </div>

      {/* Larger Screen 3D Effect */}
      <motion.div
        className="relative hidden md:block w-full h-80 md:h-96"
        style={{ perspective: 1200 }}
      >
        <motion.div
          className="absolute inset-0"
          animate={{ rotateX: rotation.y, rotateY: rotation.x }}
          transition={{ type: "spring", stiffness: 100, damping: 30 }}
        >
          <img
            src="./gif/gif1.gif"
            alt="WhatsApp on smartphone"
            className="absolute top-0 left-0 w-full h-full object-contain rounded-xl shadow-xl"
          />

          {/* 3D Effect Elements */}
          <div className="absolute inset-0 rounded-xl shadow-inner border border-white/20"></div>
          <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent rounded-xl"></div>

          {/* Floating Elements */}
          <motion.div
            className="absolute -top-5 -right-5 bg-white p-3 rounded-lg shadow-lg"
            animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          >
            <div className="flex items-center space-x-2">
              <div className="h-3 w-3 rounded-full bg-green-500"></div>
              <span className="text-sm font-medium">99% Delivery Rate</span>
            </div>
          </motion.div>

          <motion.div
            className="absolute -bottom-5 -left-5 bg-white p-3 rounded-lg shadow-lg"
            animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }}
            transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 0.5 }}
          >
            <div className="flex items-center space-x-2">
              <div className="h-3 w-3 rounded-full bg-blue-500"></div>
              <span className="text-sm font-medium">Real-time Tracking</span>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
};


export default Cards;