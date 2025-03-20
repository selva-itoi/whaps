import React from "react";
import { motion } from "framer-motion";
import { Smartphone, Users, Link, Shield, RefreshCw, Server } from "lucide-react";
import ServiceLayout from "../components/layouts/ServiceLayout";
import Button from "@/components/ui/Button";
import SEO from "../components/SEO";
import { t } from "i18next";

const DeviceManagement: React.FC = () => {
  return (
    <ServiceLayout
      emoji=""
      title=""
      description=""
    >
      <SEO
        title={t`Multi-Device WhatsApp Management - Connect & Sync Devices`}
        description={t`Enterprise-grade device management for WhatsApp accounts. Centrally manage multiple devices with real-time sync, access controls, and security monitoring. MDM solutions for businesses.`}
        keywords={[
          'WhatsApp Device Management', 'Multi-Device Sync', 'Enterprise Mobility',
          'Mobile Device Security', 'Device Compliance', 'Remote Wipe',
          'WhatsApp Business MDM', 'Device Access Control', 'Enterprise Device Management'
        ]}
        ogImage="https://whaps.in/img/logo.jpg"
        ogUrl="https://whaps.in/services/device-management"
        canonicalUrl="https://whaps.in/"
        ogType="article"
        twitterCard="summary_large_image"
      />
      {/* Hero Section */}
      <motion.section
        className="relative flex flex-col lg:flex-row items-center bg-gradient-to-r from-green-500 to-green-700 text-white p-8 rounded-xl shadow-lg"
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
            Effortless Multi-Device WhatsApp Management
          </motion.h1>
          <p className="mt-3 text-lg opacity-90">
            Link multiple devices, sync conversations, and manage all your accounts in one place.
          </p>
          <Button className="mt-4 bg-white text-green-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100">
            🔗 Connect Your Devices
          </Button>
        </div>
        <motion.img
          src="https://source.unsplash.com/featured/?smartphone,technology"
          alt="Device Management"
          className="lg:w-1/2 mt-6 lg:mt-0 rounded-lg shadow-lg"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        />
      </motion.section>

      {/* Key Features Section */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-gray-800 text-center">🚀 Powerful Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {[
            {
              icon: <Smartphone className="h-12 w-12 text-green-500" />,
              title: "Multi-Device Access",
              description: "Connect and use WhatsApp on multiple devices simultaneously.",
            },
            {
              icon: <Users className="h-12 w-12 text-blue-500" />,
              title: "Seamless Account Switching",
              description: "Easily switch between personal and business accounts.",
            },
            {
              icon: <Link className="h-12 w-12 text-purple-500" />,
              title: "Real-Time Sync",
              description: "Keep all conversations updated across all connected devices.",
            },
            {
              icon: <Shield className="h-12 w-12 text-orange-500" />,
              title: "End-to-End Encryption",
              description: "Stay secure with WhatsApp's built-in encryption.",
            },
            {
              icon: <RefreshCw className="h-12 w-12 text-yellow-500" />,
              title: "Auto Sync & Backup",
              description: "Your messages and contacts are always backed up.",
            },
            {
              icon: <Server className="h-12 w-12 text-red-500" />,
              title: "Centralized Device Control",
              description: "Manage all linked devices from a single dashboard.",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              className="p-6 bg-white rounded-xl shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl"
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

      {/* Why Choose Device Management Section */}
      <motion.section
        className="mt-12 p-8 rounded-xl bg-white/40 backdrop-blur-md shadow-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-semibold text-gray-800 text-center">📈 Why Use Multi-Device Management?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {[
            { icon: "⚡", title: "Instant Device Linking", desc: "Add and remove devices easily from your dashboard." },
            { icon: "🔄", title: "Real-Time Message Sync", desc: "Messages update instantly on all linked devices." },
            { icon: "🛡️", title: "Secure Login", desc: "Advanced security ensures only you can access your accounts." },
            { icon: "🚀", title: "Increased Productivity", desc: "Manage work and personal accounts without switching devices." },
            { icon: "💡", title: "Easy Business Management", desc: "Handle multiple WhatsApp Business accounts seamlessly." },
            { icon: "📊", title: "Usage Analytics", desc: "Get insights on device activity and chat history." },
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
        <h2 className="text-2xl font-bold">📲 Ready to Take Control of Your Devices?</h2>
        <p className="mt-2 opacity-90">Start managing all your linked WhatsApp accounts today.</p>
        <motion.button
          className="mt-4 bg-white text-green-600 font-semibold px-8 py-3 rounded-full text-lg hover:bg-gray-100"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Connect Your Devices Now
        </motion.button>
      </motion.section>
    </ServiceLayout>
  );
};

export default DeviceManagement;
