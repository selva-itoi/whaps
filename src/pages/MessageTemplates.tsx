import React from "react";
import { motion } from "framer-motion";
import ServiceLayout from "../components/layouts/ServiceLayout";
import { t } from "i18next";
import { Helmet } from "react-helmet-async";

const templates = [
  {
    title: "Plain Text",
    description: "Simple text messages without media or buttons.",
    icon: "📄",
  },
  {
    title: "Text With Media",
    description: "Send images, videos, or documents along with text.",
    icon: "🖼️",
  },
  {
    title: "Message With Button",
    description: "Interactive messages with call-to-action buttons.",
    icon: "🔘",
  },
  {
    title: "List Message",
    description: "Structured messages with multiple selectable options.",
    icon: "📜",
  },
  {
    title: "Send Location",
    description: "Share live or static locations with recipients.",
    icon: "📍",
  },
];

const MessageTemplates: React.FC = () => {
  return (
    <><Helmet
      title={t`WhatsApp Message Templates - Enhance Your Communication`}
      meta={[
        {
          name: "description",
          content: t`Create and manage WhatsApp message templates, including text, media, interactive buttons, and more.`,
        },
        {
          name: "keywords",
          content: t`WhatsApp templates, message templates, WhatsApp buttons, list messages, interactive messages, automated messaging`,
        },
        {
          property: "og:title",
          content: t`WhatsApp Message Templates - Enhance Your Communication`,
        },
        {
          property: "og:description",
          content: t`Craft engaging WhatsApp messages with pre-defined templates, including text, media, and interactive elements.`,
        },
        {
          property: "og:type",
          content: "website",
        },
        {
          property: "og:image",
          content: "https://whaps.in/img/logo.jpg", // Update with actual image URL
        },
        {
          property: "og:url",
          content: "https://whaps.in/services/message-logs",
        },
      ]} /><ServiceLayout
        emoji=""
        title=""
        description=""
      >
        {/* Hero Section with WhatsApp Theme */}
        <motion.div
          className="bg-gradient-to-r from-green-600 to-emerald-500 text-white p-10 rounded-xl text-center shadow-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold">Craft Engaging WhatsApp Messages</h2>
          <p className="mt-2 text-lg">Enhance communication with tailored message templates.</p>
        </motion.div>

        {/* Templates Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {templates.map((template, index) => (
            <motion.div
              key={index}
              className="relative p-6 bg-white rounded-xl shadow-md flex flex-col items-center hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="text-4xl mb-3">{template.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800">{template.title}</h3>
              <p className="text-gray-600 text-center mt-2">{template.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.section
          className="mt-12 p-8 text-center rounded-xl bg-gradient-to-r from-green-500 to-green-700 text-white shadow-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold">Start Using Templates Today!</h2>
          <p className="mt-2 opacity-90">Save time and improve consistency with powerful message templates.</p>
          <motion.button
            className="mt-4 bg-white text-green-600 font-semibold px-8 py-3 rounded-full text-lg hover:bg-gray-100"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Try It Now
          </motion.button>
        </motion.section>

      </ServiceLayout></>
  );
};

export default MessageTemplates;
