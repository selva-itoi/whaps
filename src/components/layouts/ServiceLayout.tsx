import React from 'react';
import { motion } from 'framer-motion';

interface ServiceLayoutProps {
  emoji: string;
  title: string;
  description: string;
  children: React.ReactNode;
}

const ServiceLayout: React.FC<ServiceLayoutProps> = ({ emoji, title, description, children }) => {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="text-4xl mb-4">{emoji}</div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">{title}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{description}</p>
        </motion.div>
        {children}
      </div>
    </div>
  );
};

export default ServiceLayout;