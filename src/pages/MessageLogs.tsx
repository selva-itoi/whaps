import React from "react";
import { motion } from "framer-motion";
import { Search, Clock, CheckCircle, XCircle, FileText, BarChart3 } from "lucide-react";
import ServiceLayout from "../components/layouts/ServiceLayout";
import { t } from "i18next";
import { Helmet } from "react-helmet-async";

const MessageLogs: React.FC = () => {
  return (

    <>
      <Helmet>
        <title>{t`Bulk Message Tracking & Analytics Dashboard | Whaps`}</title>
        <meta name="description" content={t`Track bulk message delivery, analyze engagement metrics, and optimize campaigns with real-time SMS/WhatsApp analytics. Get detailed message logs and performance reports.`} />
        <meta name="keywords" content={t`bulk SMS tracking, WhatsApp message analytics, mass message reports, delivery status tracking, message engagement metrics, SMS campaign analytics, bulk messaging insights`} />

        {/* Open Graph */}
        <meta property="og:title" content={t`Bulk Message Tracking & Analytics Dashboard`} />
        <meta property="og:description" content={t`Real-time tracking and analytics for bulk SMS/WhatsApp campaigns. Monitor delivery rates, engagement metrics, and campaign performance.`} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://whaps.in/services/message-logs" />
        <meta property="og:image" content="https://whaps.in/img/logo.jpg" />

        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@whaps_app" />

        {/* Schema.org Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://whaps.in",
            "@type": "Product",
            "name": "Bulk Message Analytics",
            "description": "Advanced tracking and analytics for bulk messaging campaigns",
            "brand": {
              "@type": "Brand",
              "name": "Whaps"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "reviewCount": "1500"
            }
          })}
        </script>
      </Helmet>
      <ServiceLayout
        emoji=""
        title=""
        description=""
      >
        {/* Hero Section */}
        <motion.section
          className="relative bg-gradient-to-r from-green-500 to-green-700
         to-teal-500 text-white text-center py-16 rounded-xl shadow-lg"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold">Gain Actionable Insights from Your Messages</h1>
          <p className="mt-3 text-lg">Track message delivery, engagement, and performance seamlessly.</p>
          <motion.img
            src="https://source.unsplash.com/featured/?data,tracking"
            alt="Message Logs & Tracking"
            className="mx-auto mt-6 rounded-lg shadow-lg w-full max-w-md"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          />
        </motion.section>

        {/* Message Log Features */}
        <section className="mt-12">
          <h2 className="text-3xl font-semibold text-center text-gray-800">📡 Comprehensive Tracking Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {[
              {
                icon: <Search className="h-10 w-10 text-blue-500" />,
                title: "Advanced Search",
                description: "Instantly locate messages with powerful filters.",
              },
              {
                icon: <Clock className="h-10 w-10 text-green-500" />,
                title: "Real-Time Monitoring",
                description: "Track sent, delivered, and read statuses instantly.",
              },
              {
                icon: <CheckCircle className="h-10 w-10 text-purple-500" />,
                title: "Delivery Confirmation",
                description: "Ensure messages successfully reach recipients.",
              },
              {
                icon: <XCircle className="h-10 w-10 text-red-500" />,
                title: "Failed Message Reports",
                description: "Analyze failed deliveries and troubleshoot instantly.",
              },
              {
                icon: <FileText className="h-10 w-10 text-yellow-500" />,
                title: "Export & Download Logs",
                description: "Save records in CSV or PDF formats effortlessly.",
              },
              {
                icon: <BarChart3 className="h-10 w-10 text-orange-500" />,
                title: "In-Depth Analytics",
                description: "Optimize messaging strategies with data-driven insights.",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="p-6 bg-white rounded-lg shadow-lg transform transition-all hover:scale-105 hover:shadow-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              >
                <div className="mb-3">{feature.icon}</div>
                <h3 className="font-semibold text-gray-800">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Analytics & Insights */}
        <motion.section
          className="mt-12 p-8 bg-gray-100 rounded-xl shadow-lg text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h2 className="text-3xl font-semibold text-gray-800 flex items-center justify-center gap-2">
            <BarChart3 className="h-7 w-7 text-blue-500" /> Performance Insights
          </h2>
          <p className="text-gray-600 mt-3">
            Analyze trends, optimize engagement, and improve delivery rates effortlessly.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            {[
              { icon: "📅", text: "Track daily and monthly messaging patterns." },
              { icon: "⏳", text: "Discover the best times to send messages." },
              { icon: "📈", text: "Analyze response rates and user engagement." },
              { icon: "🎯", text: "Make data-driven decisions for better messaging." },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="flex items-center p-4 bg-white rounded-lg shadow-md transition-all hover:scale-105"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              >
                <span className="text-xl">{item.icon}</span>
                <p className="ml-3 text-gray-800 font-medium">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <motion.button
            className="bg-gradient-to-r from-blue-600 to-teal-500 text-white px-8 py-3 rounded-lg font-medium text-lg shadow-lg hover:scale-105 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            🚀 Start Tracking Now
          </motion.button>
        </motion.section>
      </ServiceLayout>
    </>
  );
};

export default MessageLogs;
