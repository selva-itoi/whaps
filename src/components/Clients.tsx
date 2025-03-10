import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const Clients: React.FC = () => {
  const clients = [
    {
      name: "Gospel Echoing Missionary Society( GEMS )",
      logo: "https://dev.gemsbihar.info/assets/images/logo.png",
      quote: "Whaps has transformed how we communicate with our customers. We've seen a 40% increase in engagement since implementing their platform.",
      author: "",
      position: ""
    },
    {
      name: "Tele Doctor",
      logo: "https://dev.teledoctor.life/_next/static/media/logo.8ef8d9c0.svg",
      quote: "The analytics and targeting capabilities have helped us deliver personalized messages that resonate with our audience. Highly recommended!",
      author: "Dr Rajesh Duthie",
      position: "Director"
    },
    {
      name: "INDIAN ASSOCIATION OF ORAL IMPLANTOLOGISTS ( IAOI )",
      logo: "https://iaoi.in//assets/img/IAOI_Logo_PNG.png",
      quote: "We've been able to automate our customer service responses and promotional campaigns, saving time and increasing customer satisfaction.",
      author: "Dr Johnson Raja James",
      position: "Board Member"
    },
    {
      name: "Inherit Initiative ( IIM )",
      logo: "https://inheritinitiative.org/assets/img/iim-logo.png",
      quote: "The platform's compliance features ensure we maintain patient privacy while still delivering timely appointment reminders and follow-ups.",
      author: "Dr Rajesh Duthie",
      position: "Director"
    },
  ];

  return (
    <section id="clients" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Trusted by Leading Brands</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            See how businesses across industries are achieving success with our WhatsApp marketing platform.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {clients.map((client, index) => (
            <motion.div
              key={index}
              className="flex items-center justify-center p-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={client.logo}
                alt={client.name}
                className="max-h-16 object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            </motion.div>
          ))}
        </div>

        <div className="mt-20">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800">What Our Clients Say</h3>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {clients.map((client, index) => (
              <TestimonialCard
                key={index}
                quote={client.quote}
                author={client.author}
                position={client.position}
                company={client.name}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>

        <motion.div
          className="mt-20 bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 md:p-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800">Ready to join our success stories?</h3>
              <p className="mt-4 text-lg text-gray-600">
                Start your journey with Whaps today and see the difference in your customer engagement.
              </p>
            </div>
            <motion.button
              className="bg-green-500 text-white px-8 py-3 rounded-full font-medium text-lg whitespace-nowrap"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started Free
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

interface TestimonialCardProps {
  quote: string;
  author: string;
  position: string;
  company: string;
  delay: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, author, position, company, delay }) => {
  return (
    <motion.div
      className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
    >
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
        ))}
      </div>
      <p className="text-gray-700 mb-6">"{quote}"</p>
      <div className="flex items-center">
        <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-700 font-bold">
          {author.charAt(0)}
        </div>
        <div className="ml-3">
          <p className="font-medium text-gray-800">{author}</p>
          <p className="text-sm text-gray-600">{position}, {company}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Clients;