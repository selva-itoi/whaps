import React from "react";
import { motion } from "framer-motion";
import { Clock, CalendarCheck, Send, TrendingUp } from "lucide-react";
import ServiceLayout from "../components/layouts/ServiceLayout";
import Button from "@/components/ui/Button";
import { t } from "i18next";
import { Helmet } from "react-helmet-async";

const ScheduledMessaging: React.FC = () => {
  return (
    <><Helmet
      title={t`Scheduled Messaging - Automate Your WhatsApp Messages`}
      meta={[
        {
          name: "description",
          content: t`Schedule and automate WhatsApp messages effortlessly. Save time, boost engagement, and ensure timely delivery with smart scheduling features.`,
        },
        {
          name: "keywords",
          content: t`WhatsApp scheduling, message automation, scheduled messaging, auto-delivery, reminders, WhatsApp marketing`,
        },
        {
          property: "og:title",
          content: t`Scheduled Messaging - Automate Your WhatsApp Messages`,
        },
        {
          property: "og:description",
          content: t`Optimize your communication strategy by scheduling WhatsApp messages in advance. Automate greetings, reminders, follow-ups, and more!`,
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
          content: "https://whaps.in/services/scheduled-messaging",
        },
      ]} /><ServiceLayout
        emoji=""
        title=""
        description=""
      >
        {/* Hero Section - Redesigned */}
        <motion.section
          className="relative flex flex-col lg:flex-row items-center justify-between bg-gradient-to-r from-green-600 to-emerald-500 text-white p-10 rounded-xl shadow-lg overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="lg:w-1/2 text-center lg:text-left">
            <motion.h1
              className="text-4xl font-bold"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Automate & Optimize Your Messages
            </motion.h1>
            <p className="mt-3 text-lg opacity-90">
              Save time and enhance efficiency by scheduling messages in advance.
            </p>
            <Button className="mt-4 bg-white text-green-700 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100">
              ⏰ Get Started Now
            </Button>
          </div>
          <motion.img
            src="https://source.unsplash.com/featured/?calendar,automation"
            alt="Scheduled Messaging"
            className="lg:w-1/2 mt-6 lg:mt-0 rounded-lg shadow-lg"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }} />
        </motion.section>

        {/* Features Section */}
        <section className="mt-12">
          <h2 className="text-3xl font-semibold text-gray-800 text-center">🚀 Smart Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
            {[
              {
                icon: <Clock className="h-12 w-12 text-green-500" />,
                title: "Schedule Messages",
                description: "Set custom time and dates for message delivery.",
              },
              {
                icon: <CalendarCheck className="h-12 w-12 text-blue-500" />,
                title: "Recurring Reminders",
                description: "Automate daily, weekly, or monthly messages.",
              },
              {
                icon: <Send className="h-12 w-12 text-yellow-500" />,
                title: "Auto-Delivery",
                description: "Ensure timely delivery even when offline.",
              },
              {
                icon: <TrendingUp className="h-12 w-12 text-purple-500" />,
                title: "Performance Insights",
                description: "Track engagement and optimize schedules.",
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

        {/* Benefits Section - Glassmorphic Effect */}
        <motion.section
          className="mt-12 p-8 rounded-xl backdrop-blur-md bg-white/30 shadow-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-semibold text-gray-800 text-center">✨ Why Use Scheduled Messaging?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
            {[
              "Save time with automated scheduling",
              "Never miss sending an important message",
              "Boost engagement with strategic timing",
              "Enhance brand consistency in messaging",
              "Eliminate manual effort & increase efficiency",
              "Stay ahead with pre-planned messages",
            ].map((benefit, index) => (
              <motion.div
                key={index}
                className="p-4 bg-white/40 rounded-lg shadow-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                ✅ {benefit}
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Use Cases Section */}
        <section className="mt-12 bg-gray-100 p-8 rounded-xl shadow-md">
          <h2 className="text-3xl font-semibold text-gray-800 text-center">💡 Real-World Applications</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
            {[
              "Birthday & Anniversary Greetings",
              "Event & Webinar Reminders",
              "Customer Follow-ups",
              "Marketing & Promotional Campaigns",
              "Automated Employee Notifications",
              "Daily Motivational Messages",
            ].map((useCase, index) => (
              <motion.div
                key={index}
                className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {useCase}
              </motion.div>
            ))}
          </div>
        </section>

        {/* WhatsApp-Themed CTA */}
        <motion.section
          className="mt-12 p-8 text-center rounded-xl bg-gradient-to-r from-green-600 to-emerald-500 text-white shadow-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold">📆 Automate Your Messaging Now!</h2>
          <p className="mt-2 opacity-90">Take control of your communication with scheduled messages.</p>
          <motion.button
            className="mt-4 bg-white text-green-700 font-semibold px-8 py-3 rounded-full text-lg hover:bg-gray-100"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Try Scheduled Messaging 🚀
          </motion.button>
        </motion.section>
      </ServiceLayout></>
  );
};

export default ScheduledMessaging;
