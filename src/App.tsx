import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BottomNav from "./components/BottomNav";
import { MouseProvider } from "./context/MouseContext";
import TawkTo from "./components/TawkTo";
import Loader from "./components/Loader"; // Import the Loader component

// Lazy Load Pages for better performance
const Hero = lazy(() => import("./components/Hero"));
const WorldMapSection = lazy(() => import("./components/WorldMapSection"));
const Services = lazy(() => import("./components/Services"));
const Cards = lazy(() => import("./components/Cards"));
const Clients = lazy(() => import("./components/Clients"));
const Pricing = lazy(() => import("./components/Pricing"));
const BulkMessaging = lazy(() => import("./pages/BulkMessaging"));
const Chatbot = lazy(() => import("./pages/Chatbot"));
const ScheduledMessaging = lazy(() => import("./pages/ScheduledMessaging"));
const MessageLogs = lazy(() => import("./pages/MessageLogs"));
const DeviceManagement = lazy(() => import("./pages/DeviceManagement"));
const MessageTemplates = lazy(() => import("./pages/MessageTemplates"));
const WebhookIntegration = lazy(() => import("./pages/WebhookIntegration"));
const ContactBook = lazy(() => import("./pages/ContactBook"));
const ApiAuthentication = lazy(() => import("./pages/ApiAuthentication"));

function App() {
  return (
    <Router>
      <MouseProvider>
        <div className="relative overflow-hidden bg-white">
          <Navbar />
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route
                path="/"
                element={
                  <div className="mx-auto w-[80%]">
                    <Hero />
                    <Services />
                    <Cards />
                    <Pricing />
                    <Clients />
                    <BottomNav />
                    <TawkTo />
                  </div>
                }
              />
              <Route path="/services/bulk-messaging" element={<BulkMessaging />} />
              <Route path="/services/chatbot" element={<Chatbot />} />
              <Route path="/services/scheduled-messaging" element={<ScheduledMessaging />} />
              <Route path="/services/message-logs" element={<MessageLogs />} />
              <Route path="/services/device-management" element={<DeviceManagement />} />
              <Route path="/services/message-templates" element={<MessageTemplates />} />
              <Route path="/services/webhook-integration" element={<WebhookIntegration />} />
              <Route path="/services/contact-book" element={<ContactBook />} />
              <Route path="/services/api-authentication" element={<ApiAuthentication />} />
            </Routes>
          </Suspense>
          <Footer />
        </div>
      </MouseProvider>
    </Router>
  );
}

export default App;
