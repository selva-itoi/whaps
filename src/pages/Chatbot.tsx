import React from "react";
import { motion } from "framer-motion";
import { Bot, MessageSquare, Clock, TrendingUp, Smile, Shield } from "lucide-react";
import ServiceLayout from "../components/layouts/ServiceLayout";
import Button from "@/components/ui/Button";

const Chatbot: React.FC = () => {
  return (
    <ServiceLayout
      emoji=""
      title=""
      description=""
    >
      {/* Hero Section */}
      <motion.section
        className="relative bg-gradient-to-r from-green-500 to-green-700
         text-white py-16 px-6 text-center rounded-xl shadow-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Smart Chatbot Automation</h1>
          <p className="text-lg opacity-90">
            Instantly respond to messages, engage users, and optimize your workflow with AI-driven automation.
          </p>
          <motion.img
            src="https://source.unsplash.com/featured/?chatbot,ai,technology"
            alt="Chatbot AI"
            className="mx-auto mt-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
            width={500}
            height={300}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          />
          <Button className="mt-6 bg-white text-indigo-600 hover:bg-gray-100 px-6 py-3 rounded-lg shadow-md">
            🚀 Try Chatbot Now
          </Button>
        </div>
      </motion.section>

      {/* Key Features Section */}
      <section className="my-12">
        <h2 className="text-3xl font-semibold text-gray-800 text-center mb-6">💡 Key Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { icon: MessageSquare, title: "Automate Replies", desc: "Instantly respond to common queries." },
            { icon: Clock, title: "Set Timed Messages", desc: "Schedule replies based on time or triggers." },
            { icon: TrendingUp, title: "Track Engagement", desc: "Analyze chatbot effectiveness with reports." },
            { icon: Smile, title: "Enhance User Experience", desc: "Provide friendly, personalized interactions." },
            { icon: Shield, title: "Secure & Reliable", desc: "Data privacy and security ensured." },
            { icon: Bot, title: "AI-Powered Intelligence", desc: "Train your bot for smarter replies." },
          ].map((feature, index) => (
            <motion.div
              key={index}
              className="p-6 bg-white shadow-md rounded-xl border border-gray-200 transition-all duration-300 hover:shadow-lg hover:-translate-y-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 * index }}
            >
              <feature.icon className="h-12 w-12 text-indigo-500 mx-auto mb-4" />
              <h3 className="font-semibold text-lg text-gray-900 text-center">{feature.title}</h3>
              <p className="text-gray-600 text-center">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Use Our Chatbot? */}
      <section className="my-12">
        <h2 className="text-3xl font-semibold text-gray-800 text-center mb-6">🌟 Why Use Our Chatbot?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { icon: "⚡", title: "Instant Responses", desc: "Save time with automated replies and quick answers." },
            { icon: "😊", title: "Better Customer Satisfaction", desc: "Provide instant support, improving user experience." },
            { icon: "📉", title: "Reduce Workload", desc: "Automate common queries and focus on what matters." },
            { icon: "🔗", title: "Multi-Platform Integration", desc: "Works seamlessly with WhatsApp, Messenger, and more." },
            { icon: "⚙️", title: "Customizable Replies", desc: "Tailor chatbot responses for different scenarios." },
            { icon: "📊", title: "Performance Tracking", desc: "Monitor interactions and optimize chatbot efficiency." },
          ].map((benefit, index) => (
            <motion.div
              key={index}
              className="p-6 bg-white shadow-md rounded-xl text-center border border-gray-200 transition-all hover:shadow-lg hover:-translate-y-1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 * index }}
            >
              <span className="text-4xl">{benefit.icon}</span>
              <h3 className="mt-3 font-semibold text-lg text-gray-900">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <motion.section
        className="mt-12 p-8 text-center rounded-xl bg-gradient-to-r from-green-500 to-green-700 text-white shadow-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl font-bold">🚀 Get Started with Chatbot Automation</h2>
        <p className="mt-2 opacity-90">Boost engagement and streamline conversations today.</p>
        <motion.button
          className="mt-4 bg-white text-indigo-600 font-semibold px-8 py-3 rounded-full text-lg hover:bg-gray-100"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Try Chatbot Now
        </motion.button>
      </motion.section>
    </ServiceLayout>
  );
};

export default Chatbot;
