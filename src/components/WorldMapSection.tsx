import React, { Suspense, useMemo } from "react";
import { motion } from "framer-motion";
import { Globe } from "lucide-react";

// Lazy load the WorldMap component
const WorldMap = React.lazy(() => import("./ui/world-map"));

export function WorldMapSection() {
  // Memoizing dots data to prevent re-calculations on every render
  const mapDots = useMemo(() => [
    { start: { lat: 40.7128, lng: -74.0060 }, end: { lat: 51.5074, lng: -0.1278 } }, // NYC -> London
    { start: { lat: 40.7128, lng: -74.0060 }, end: { lat: 19.4326, lng: -99.1332 } }, // NYC -> Mexico
    { start: { lat: 51.5074, lng: -0.1278 }, end: { lat: 48.8566, lng: 2.3522 } }, // London -> Paris
    { start: { lat: 51.5074, lng: -0.1278 }, end: { lat: 55.7558, lng: 37.6173 } }, // London -> Moscow
    { start: { lat: 51.5074, lng: -0.1278 }, end: { lat: 28.6139, lng: 77.2090 } }, // London -> Delhi
    { start: { lat: 28.6139, lng: 77.2090 }, end: { lat: 35.6762, lng: 139.6503 } }, // Delhi -> Tokyo
    { start: { lat: 28.6139, lng: 77.2090 }, end: { lat: 1.3521, lng: 103.8198 } }, // Delhi -> Singapore
    { start: { lat: 1.3521, lng: 103.8198 }, end: { lat: -33.8688, lng: 151.2093 } }, // Singapore -> Sydney
    { start: { lat: -33.8688, lng: 151.2093 }, end: { lat: -36.8485, lng: 174.7633 } }, // Sydney -> Auckland
    { start: { lat: 19.4326, lng: -99.1332 }, end: { lat: -23.5505, lng: -46.6333 } }, // Mexico -> São Paulo
  ], []);

  return (
    <section className="py-16 bg-white w-full">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Title Section */}
        <div className="text-center mb-10">
          <div className="flex items-center justify-center mb-4">
            <Globe className="h-8 w-8 text-green-500 mr-2" />
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-gray-800"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Global <span className="text-green-500">Reach</span>
            </motion.h2>
          </div>
          <motion.p
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Connect with your customers anywhere in the world. Our WhatsApp marketing platform
            enables businesses to reach audiences across continents with personalized messaging.
          </motion.p>
        </div>

        {/* World Map (Lazy Loaded for Performance) */}
        <Suspense fallback={<div className="h-96 flex items-center justify-center text-gray-500">Loading map...</div>}>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="rounded-xl overflow-hidden shadow-xl"
          >
            <WorldMap dots={mapDots} lineColor="#22c55e" />
          </motion.div>
        </Suspense>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {[
            { title: "200+ Countries", description: "Reach customers in over 200 countries worldwide.", icon: "🌎" },
            { title: "2 Billion+ Users", description: "Connect with the massive global WhatsApp user base.", icon: "👥" },
            { title: "98% Open Rate", description: "WhatsApp messages have higher open rates than email.", icon: "📱" },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Memoize component to prevent unnecessary re-renders
export default React.memo(WorldMapSection);
