import React from "react";
import { motion } from "framer-motion";
import { Zap, Link, Code, ShieldCheck, Settings2 } from "lucide-react";
import ServiceLayout from "../components/layouts/ServiceLayout";
import { t } from "i18next";
import { Helmet } from "react-helmet-async";

const WebhookIntegration: React.FC = () => {
  return (
    <> <Helmet
      title={t`Webhook Integration - Automate Your Workflows`}
      meta={[
        {
          name: "description",
          content: t`Streamline your workflow with real-time webhook integration. Automate tasks, sync data, and connect services effortlessly.`,
        },
        {
          name: "keywords",
          content: t`webhook integration, API automation, real-time webhooks, workflow automation, event-driven integration, secure API connections`,
        },
        {
          property: "og:title",
          content: t`Webhook Integration - Automate Your Workflows`,
        },
        {
          property: "og:description",
          content: t`Seamlessly integrate webhooks with your applications. Receive real-time updates, trigger custom events, and enhance automation.`,
        },
        {
          property: "og:type",
          content: "website",
        },
        {
          property: "og:image",
          content: "https://whaps.in/img/logo.jpg", // Replace with actual image URL
        },
        {
          property: "og:url",
          content: "https://whaps.in/services/webhook-integration",
        },
      ]}
    />
      <ServiceLayout
        emoji=""
        title=""
        description=""
      >
        {/* Hero Section */}
        <motion.section
          className="relative text-center py-16 bg-gradient-to-r from-green-500 to-green-700
         rounded-xl shadow-lg text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.img
            src="https://source.unsplash.com/featured/?technology,api"
            alt="Webhook Automation"
            className="mx-auto rounded-lg shadow-xl"
            width={500}
            height={300}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          />
          <h1 className="text-3xl font-bold mt-6">Automate Your Workflows with Webhooks</h1>
          <p className="mt-2 text-lg">Connect services effortlessly and sync data in real-time.</p>
        </motion.section>

        {/* Features Section */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {[
            {
              icon: <Zap className="h-10 w-10 text-yellow-400" />,
              title: "Real-time Updates",
              description: "Receive instant notifications for all webhook events.",
            },
            {
              icon: <Link className="h-10 w-10 text-blue-400" />,
              title: "Seamless Integration",
              description: "Easily connect with multiple platforms and APIs.",
            },
            {
              icon: <Code className="h-10 w-10 text-green-400" />,
              title: "Developer Friendly",
              description: "Well-documented APIs for effortless implementation.",
            },
            {
              icon: <ShieldCheck className="h-10 w-10 text-red-400" />,
              title: "Secure & Reliable",
              description: "Encrypted communication to keep data safe.",
            },
            {
              icon: <Settings2 className="h-10 w-10 text-purple-400" />,
              title: "Custom Triggers",
              description: "Define custom webhook events for specific actions.",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              className="p-6 bg-white rounded-lg shadow-xl hover:shadow-2xl transition-transform transform hover:-translate-y-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="mb-3">{feature.icon}</div>
              <h3 className="font-semibold text-gray-800">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </section>

        {/* Glassmorphic Benefits Section */}
        <motion.section
          className="mt-12 bg-white/30 backdrop-blur-md p-8 rounded-xl shadow-lg border border-gray-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl font-semibold text-gray-800 text-center">💡 Why Choose Webhooks?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
            {[
              "Reduce manual work with automation",
              "Improve data accuracy and efficiency",
              "Integrate with CRM, Payments, and more",
              "Handle large-scale event-driven workflows",
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
        </motion.section>

        {/* CTA Section */}
        <motion.section
          className="mt-16 text-center py-10 bg-gradient-to-r from-green-500 to-teal-600 text-white rounded-xl shadow-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl font-bold">Ready to Automate Your Workflow?</h2>
          <p className="text-lg mt-2">Start integrating webhooks today and enhance efficiency.</p>
          <motion.button
            className="mt-4 bg-white text-green-600 px-6 py-3 rounded-full font-semibold shadow-md"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started Now
          </motion.button>
        </motion.section>
      </ServiceLayout>
    </>
  );
};

export default WebhookIntegration;
