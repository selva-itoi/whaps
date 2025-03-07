import React from "react";
import { motion } from "framer-motion";
import { Users, Search, PlusCircle, UploadCloud, FileText, Shield } from "lucide-react";
import ServiceLayout from "../components/layouts/ServiceLayout";
import Button from "@/components/ui/Button";

const ContactBook: React.FC = () => {
  return (
    <ServiceLayout
      emoji=""
      title=""
      description=""
    >
      {/* Hero Section with WhatsApp Gradient */}
      <motion.section
        className="relative bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white py-16 px-6 text-center rounded-xl shadow-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Smart Contact Management</h1>
          <p className="text-lg opacity-90">
            Store, organize, and access your contacts with ease. Enjoy seamless categorization and search features.
          </p>
          <motion.img
            src="https://source.unsplash.com/featured/?phonebook,contacts"
            alt="Contact Book"
            className="mx-auto mt-6 rounded-lg shadow-xl transition-transform duration-300 hover:scale-105"
            width={500}
            height={300}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          />
          <motion.button
            className="mt-6 bg-white text-[#128C7E] hover:bg-gray-100 px-6 py-3 rounded-full font-semibold shadow-md"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            ➕ Add New Contact
          </motion.button>
        </div>
      </motion.section>

      {/* Features Section */}
      <section className="my-12">
        <h2 className="text-3xl font-semibold text-gray-800 text-center mb-6">🌟 Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { icon: Users, title: "Manage Contacts", desc: "Store and organize all contacts in one place." },
            { icon: Search, title: "Quick Search", desc: "Find any contact instantly." },
            { icon: PlusCircle, title: "Add Contacts", desc: "Easily add and edit contact details." },
            { icon: UploadCloud, title: "Import & Export", desc: "Seamlessly transfer contacts." },
            { icon: FileText, title: "Categorization", desc: "Group contacts for better management." },
            { icon: Shield, title: "Data Security", desc: "Your data remains safe and encrypted." },
          ].map((feature, index) => (
            <motion.div
              key={index}
              className="p-6 bg-white/50 backdrop-blur-md shadow-md rounded-xl border border-gray-200 transition-all duration-300 hover:shadow-lg hover:-translate-y-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 * index }}
            >
              <feature.icon className="h-12 w-12 text-[#25D366] mx-auto mb-4" />
              <h3 className="font-semibold text-lg text-gray-900 text-center">{feature.title}</h3>
              <p className="text-gray-600 text-center">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      {/* Key Benefits Section */}
      <section className="my-12">
        <h2 className="text-3xl font-semibold text-gray-800 text-center mb-6">🎯 Why Choose Our Contact Book?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { icon: "📌", title: "Access Anytime", desc: "Manage contacts from any device seamlessly." },
            { icon: "🔒", title: "Secure & Private", desc: "Your data is encrypted and protected." },
            { icon: "🔎", title: "Advanced Search", desc: "Find any contact instantly with powerful filters." },
            { icon: "💾", title: "Backup & Restore", desc: "One-click backup and easy recovery options." },
            { icon: "📂", title: "Categorization", desc: "Group contacts for better organization and workflow." },
            { icon: "🚀", title: "Faster Workflow", desc: "Optimized for teams, businesses, and individuals." },
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


      {/* Use Cases Section */}
      <section className="my-12">
        <h2 className="text-3xl font-semibold text-gray-800 text-center mb-6">📌 Use Cases</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "🔹 Personal Contact Management",
            "🔹 Business & Client Networking",
            "🔹 Sales & Marketing Contact Lists",
            "🔹 Event & Invitation Management",
            "🔹 Emergency Contact Storage",
            "🔹 Customer Support Contact Database",
          ].map((useCase, index) => (
            <motion.div
              key={index}
              className="p-4 bg-white shadow-md rounded-lg text-center border border-gray-200 transition-all hover:shadow-lg hover:-translate-y-1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 * index }}
            >
              {useCase}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <motion.section
        className="text-center mt-16 py-10 bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white rounded-xl shadow-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-2xl font-bold">📞 Start Managing Your Contacts</h2>
        <p className="text-lg mt-2">Keep your contacts organized and secure with our smart contact book.</p>
        <motion.button
          className="mt-6 bg-white text-[#128C7E] hover:bg-gray-100 px-6 py-3 rounded-full font-semibold shadow-md"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          🚀 Get Started Now
        </motion.button>
      </motion.section>
    </ServiceLayout>
  );
};

export default ContactBook;
