import React from 'react';
import { motion } from 'framer-motion';
import {
  MessageSquare,
  Users,
  Clock,
  BarChart,
  Smartphone,
  FileText,
  Webhook,
  BookOpen,
  Key,
  LayoutDashboard,
  Zap
} from 'lucide-react';
import { useMouseContext } from '../context/MouseContext';
import { Helmet } from 'react-helmet-async';

const Services: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Our Services - WhatsApp Marketing Solutions</title>
        <meta name="description" content="Explore our comprehensive WhatsApp marketing services, including chatbots, bulk messaging, scheduled messages, and API integration." />
        <meta name="keywords" content="WhatsApp marketing, chatbot, bulk messaging, API integration, customer engagement" />
        <meta name="author" content="Whaps" />
      </Helmet>
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
            WhatsApp Marketing & Automation Services
          </h1>
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Our Services</h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive WhatsApp marketing solutions to help your business grow and engage with customers effectively.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              icon={<MessageSquare className="h-10 w-10 text-green-500" />}
              title="Chatbot (Auto Reply)"
              description="Automate responses to messages efficiently, saving time and ensuring customers get immediate assistance."
              delay={0.1}
            />
            <ServiceCard
              icon={<Users className="h-10 w-10 text-blue-500" />}
              title="Bulk Messaging"
              description="Send personalized messages to multiple contacts simultaneously with high deliverability rates."
              delay={0.2}
            />
            <ServiceCard
              icon={<Clock className="h-10 w-10 text-purple-500" />}
              title="Scheduled Messaging"
              description="Plan and automate message delivery at optimal times to maximize engagement and response rates."
              delay={0.3}
            />
            <ServiceCard
              icon={<BarChart className="h-10 w-10 text-yellow-500" />}
              title="Message Logs & Tracking"
              description="Monitor sent and received messages with detailed analytics on delivery, open rates, and conversions."
              delay={0.4}
            />
            <ServiceCard
              icon={<Smartphone className="h-10 w-10 text-red-500" />}
              title="Device Management"
              description="Connect and manage multiple devices from a single dashboard for seamless campaign execution."
              delay={0.5}
            />
            <ServiceCard
              icon={<FileText className="h-10 w-10 text-indigo-500" />}
              title="Message Templates"
              description="Save and reuse message formats for efficiency and consistent brand communication."
              delay={0.6}
            />
            <ServiceCard
              icon={<Webhook className="h-10 w-10 text-pink-500" />}
              title="Webhook Integration"
              description="Seamless API and webhook support to integrate WhatsApp messaging with your existing business systems."
              delay={0.7}
            />
            <ServiceCard
              icon={<BookOpen className="h-10 w-10 text-teal-500" />}
              title="Contact Book"
              description="Organize and manage your contact list easily with advanced segmentation and tagging capabilities."
              delay={0.8}
            />
            <ServiceCard
              icon={<Key className="h-10 w-10 text-amber-500" />}
              title="API Authentication"
              description="Secure your integrations with robust authentication mechanisms and API keys for safe data exchange."
              delay={0.9}
            />
            <ServiceCard
              icon={<LayoutDashboard className="h-10 w-10 text-cyan-500" />}
              title="User-Friendly Dashboard"
              description="Get comprehensive insights and analytics on usage, campaign performance, and customer engagement."
              delay={1.0}
            />
          </div>

          <motion.div
            className="mt-20 relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 md:p-12 overflow-hidden relative">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="md:w-1/2">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-800">Ready to Transform
                    Your
                    Customer
                    Communication?</h3>
                  <p className="mt-4 text-lg text-gray-600">
                    Join thousands of businesses that use our platform to engage with their customers effectively.
                  </p>
                  <motion.button
                    className="mt-6 bg-green-500 text-white px-8 py-3 rounded-full font-medium text-lg"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <a href="/pricing">Get Started Now</a>
                  </motion.button>

                </div>
                <div className="md:w-1/2 relative">
                  <ThreeDImage />
                </div>
              </div>

              {/* Background Elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-green-200 rounded-full filter blur-3xl opacity-30 -z-10"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-200 rounded-full filter blur-3xl opacity-30 -z-10"></div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, delay }) => {
  const { mousePosition } = useMouseContext();

  return (
    <motion.div
      className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
    >
      <div className="mb-4">{icon}</div>
      <h2 className="text-xl font-bold text-gray-800 mb-2">{title}</h2>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

const ThreeDImage: React.FC = () => {
  const { mousePosition } = useMouseContext();

  const calculateRotation = () => {
    const maxRotation = 10;
    const x = (mousePosition.x / window.innerWidth - 0.5) * maxRotation;
    const y = (mousePosition.y / window.innerHeight - 0.5) * -maxRotation;

    return { x, y };
  };

  const rotation = calculateRotation();

  return (
    <motion.div
      className="relative w-full h-64 md:h-80"
      style={{
        perspective: 1000
      }}
    >
      <motion.div
        className="absolute inset-0"
        animate={{
          rotateX: rotation.y,
          rotateY: rotation.x
        }}
        transition={{ type: "spring", stiffness: 100, damping: 30 }}
      >
        <img
          src="https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
          alt="WhatsApp Marketing Platform"
          className="w-full h-full object-cover rounded-xl shadow-lg"
        />

        {/* 3D Effect Elements */}
        <div className="absolute inset-0 rounded-xl shadow-inner border border-white/20"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent rounded-xl"></div>
      </motion.div>
    </motion.div>
  );
};

export default Services;