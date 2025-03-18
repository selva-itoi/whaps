import React from "react";
import { motion } from "framer-motion";
import ServiceLayout from "../components/layouts/ServiceLayout";
import { CheckCircle, Shield, KeyRound, Globe, Settings } from "lucide-react";
import Button from "@/components/ui/Button";
import { Helmet } from "react-helmet-async";
import { t } from "i18next";

const ApiAuthentication: React.FC = () => {
  return (
    <><Helmet
      title={t`API Authentication - Secure Your WhatsApp API Access`}
      meta={[
        {
          name: "description",
          content: t`Protect your API with secure authentication keys. Ensure only authorized access with encrypted authentication methods.`,
        },
        {
          name: "keywords",
          content: t`API security, authentication keys, secure API, WhatsApp API, encrypted authentication, API integration`,
        },
        {
          property: "og:title",
          content: t`API Authentication - Secure Your WhatsApp API Access`,
        },
        {
          property: "og:description",
          content: t`Implement secure authentication for your WhatsApp API integration. Generate, manage, and validate API keys effortlessly.`,
        },
        {
          property: "og:type",
          content: "website",
        },
        {
          property: "og:image",
          content: "https://whaps.in/img/logo.jpg", // Update with a relevant image if needed
        },
        {
          property: "og:url",
          content: "https://whaps.in/services/api-authentication",
        },
      ]} /><ServiceLayout
        emoji=""
        title=""
        description=""
      >
        {/* Hero Section with WhatsApp Gradient */}
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
              Protect Your API with Secure Authentication
            </motion.h1>
            <p className="mt-3 text-lg opacity-90">
              Ensure that only authorized users access your services with encrypted authentication keys.
            </p>
            <Button className="mt-4 bg-white text-black font-semibold px-6 py-3 rounded-lg hover:bg-gray-100">
              🚀 Get Your API Key
            </Button>

          </div>
          <motion.img

            src={`${import.meta.env.BASE_URL}img/apiKey.png`}
            alt="API Security"
            className="lg:w-1/2 mt-6 lg:mt-0 rounded-lg shadow-lg"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }} />
        </motion.section>

        {/* How It Works Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 text-center">🚀 How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
            {[
              { icon: <Shield size={40} className="text-[#25D366] mb-3" />, title: "1. Generate Key", description: "Create a unique API key from your profile settings." },
              { icon: <KeyRound size={40} className="text-[#25D366] mb-3" />, title: "2. Authenticate Requests", description: "Use the API key in headers for secure authentication." },
              { icon: <Globe size={40} className="text-[#25D366] mb-3" />, title: "3. Validate", description: "Your server checks API keys for validity." },
              { icon: <Settings size={40} className="text-[#25D366] mb-3" />, title: "4. Manage Keys", description: "Rotate keys periodically to maintain security." }
            ].map((step, index) => (
              <motion.div
                key={index}
                className="p-6 bg-white rounded-lg shadow-xl hover:shadow-2xl transition-transform transform hover:-translate-y-2 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex flex-col items-center">{step.icon}</div>
                <h3 className="font-semibold text-gray-800 mt-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <motion.section
          className="mt-16 text-center py-10 bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white rounded-xl shadow-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl font-bold">Ready to Secure Your API?</h2>
          <p className="text-lg mt-2">Generate your authentication key now and integrate securely.</p>
          <motion.button
            className="mt-6 bg-white text-[#128C7E] px-6 py-3 rounded-full font-semibold shadow-md"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            🚀 Generate Your API Key Now
          </motion.button>
        </motion.section>
      </ServiceLayout></>
  );
};

export default ApiAuthentication;
