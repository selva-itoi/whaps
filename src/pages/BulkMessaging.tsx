import React from "react";
import { motion } from "framer-motion";
import { Users, Send, FileText, Clock } from "lucide-react";
import ServiceLayout from "../components/layouts/ServiceLayout";
import Button from "@/components/ui/Button";
import { t } from "i18next";
import { Helmet } from "react-helmet-async";

const BulkMessaging: React.FC = () => {
  return (
    <><Helmet
      title={t`Bulk Messaging - Automate & Scale Your WhatsApp Outreach`}
      meta={[
        {
          name: "description",
          content: t`Send bulk messages instantly using automation. Personalize, schedule, and track your WhatsApp campaigns effortlessly.`,
        },
        {
          name: "keywords",
          content: t`WhatsApp bulk messaging, automated messages, WhatsApp marketing, message scheduling, customer engagement`,
        },
        {
          property: "og:title",
          content: t`Bulk Messaging - Automate & Scale Your WhatsApp Outreach`,
        },
        {
          property: "og:description",
          content: t`Reach thousands of customers instantly with our bulk messaging solution. Automate, personalize, and track your WhatsApp campaigns effortlessly.`,
        },
        {
          property: "og:type",
          content: "website",
        },
        {
          property: "og:image",
          content: "https://whaps.in/img/logo.jpg", // Update with the correct image URL
        },
        {
          property: "og:url",
          content: "https://whaps.in/services/bulk-messaging",
        },
      ]} /><ServiceLayout
        emoji=""
        title=""
        description=""
      >
        {/* Hero Section */}
        <motion.section
          className="relative flex flex-col lg:flex-row items-center justify-between bg-gradient-to-r from-green-500 to-green-700 text-white p-8 rounded-xl shadow-lg overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="lg:w-1/2 text-center lg:text-left">
            <motion.h1
              className="text-3xl font-bold"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Reach More People Effortlessly
            </motion.h1>
            <p className="mt-3 text-lg opacity-90">
              Automate and personalize messages to engage your audience effectively.
            </p>
            <Button className="mt-4 bg-white text-black font-semibold px-6 py-3 rounded-lg hover:bg-gray-100">
              🚀 Get Started Now
            </Button>

          </div>
          <motion.img

            src={`${import.meta.env.BASE_URL}img/template.png`}
            alt="Bulk Messaging"
            className="lg:w-1/2 mt-6 lg:mt-0 rounded-lg shadow-lg"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }} />
        </motion.section>

        {/* Key Features Section */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold text-gray-800 text-center">🚀 Powerful Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
            {[
              {
                icon: <Users className="h-12 w-12 text-green-500" />,
                title: "Select Recipients",
                description: "Upload contacts or select from your contact list.",
              },
              {
                icon: <FileText className="h-12 w-12 text-blue-500" />,
                title: "Compose Messages",
                description: "Create personalized messages or use templates.",
              },
              {
                icon: <Clock className="h-12 w-12 text-purple-500" />,
                title: "Schedule Sending",
                description: "Send messages immediately or at a scheduled time.",
              },
              {
                icon: <Send className="h-12 w-12 text-yellow-500" />,
                title: "Track Performance",
                description: "Monitor message delivery and engagement.",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="p-6 bg-white rounded-xl shadow-md transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-center">{feature.icon}</div>
                <h3 className="mt-3 text-lg font-semibold text-gray-800">{feature.title}</h3>
                <p className="mt-2 text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Why Choose Bulk Messaging Section */}
        <motion.section
          className="mt-12 p-8 rounded-xl bg-white/40 backdrop-blur-md shadow-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-semibold text-gray-800 text-center">📈 Why Choose Bulk Messaging?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {[
              { icon: "⚡", title: "Faster Outreach", desc: "Send messages to thousands of recipients instantly." },
              { icon: "💡", title: "Smart Automation", desc: "Use scheduling and templates to save time." },
              { icon: "📊", title: "Real-Time Tracking", desc: "Monitor message delivery, open rates, and engagement." },
              { icon: "🎯", title: "Targeted Messaging", desc: "Segment your audience for personalized communication." },
              { icon: "🤖", title: "AI-Powered Personalization", desc: "Use dynamic variables to tailor messages." },
              { icon: "🔒", title: "Secure & Reliable", desc: "End-to-end encryption ensures privacy and security." },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                className="p-6 bg-white shadow-md rounded-xl border border-gray-200 transition-all hover:shadow-lg hover:scale-105 flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <span className="text-4xl">{benefit.icon}</span>
                <h3 className="mt-3 font-semibold text-lg text-gray-900">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Gradient Call to Action (CTA) */}
        <motion.section
          className="mt-12 p-8 text-center rounded-xl bg-gradient-to-r from-green-500 to-green-700 text-white shadow-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold">🚀 Ready to Get Started?</h2>
          <p className="mt-2 opacity-90">Start sending bulk messages to your contacts today.</p>
          <motion.button
            className="mt-4 bg-white text-green-600 font-semibold px-8 py-3 rounded-full text-lg hover:bg-gray-100"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Try Bulk Messaging Free
          </motion.button>
        </motion.section>
      </ServiceLayout></>
  );
};

export default BulkMessaging;
