import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const Pricing: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const toggleBilling = (value: boolean) => {
    setIsAnnual(value);
  };

  const handleSignup = async (planName: string) => {
    try {
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ plan: planName }),
      });
      const data = await response.json();
      console.log('Signup Response:', data);
    } catch (error) {
      console.error('Signup Error:', error);
    }
  };

  const plans = [
    {
      name: "Starter",
      originalMonthlyPrice: 329,
      monthlyPrice: Math.round(329 * 0.9),
      annualPrice: Math.round((329 * 12) * 0.85),
      description: "Perfect for small businesses just getting started with WhatsApp marketing.",
      features: [
        "Up to 1000 messages per month",
        "Contact limit (10)",
        "Device limit (1)",
        "Basic audience segmentation",
        "Standard templates(1)",
        "Basic analytics",
        "Basic API access",
      ],
      notIncluded: ["Advanced targeting", "Custom templates", "Priority support"]
    },
    {
      name: "Professional",
      originalMonthlyPrice: 879,
      monthlyPrice: Math.round(879 * 0.9),
      annualPrice: Math.round((879 * 12) * 0.85),
      description: "Ideal for growing businesses looking to scale their WhatsApp marketing.",
      features: [
        "Up to 10000 messages per month",
        "Contact limit (50)",
        "Device limit (1)",
        "Apps limit (1)",
        "Schedule message",
        "Access chat list",
        "Standard templates & Custom templates(5)",
        "Email & chat support",
        "Detailed analytics",
        "Full API access",
      ],
      notIncluded: ["Unlimited messages", "Priority support"],
    },
    {
      name: "Enterprise",
      originalMonthlyPrice: 1649,
      monthlyPrice: Math.round(1649 * 0.9),
      annualPrice: Math.round((1649 * 12) * 0.85),
      description: "For large organizations requiring advanced features and dedicated support.",
      features: [
        "Up to 50000 messages per month",
        "Contact limit (1000)",
        "Device limit (3)",
        "Apps limit (3)",
        "Chatbot",
        "Bulk message",
        "Schedule message",
        "Access chat list",
        "Access group list",
        "Standard templates & Custom templates",
        "Full API access",
        "Priority support",
        "Dedicated account manager",
        "Advanced analytics & reporting",
      ],
      notIncluded: [],
      popular: true
    },
    {
      name: "Custom",
      monthlyPrice: null,
      annualPrice: null,
      description: "Tailored solutions for enterprises with unique needs. Contact us for a custom plan.",
      features: [
        "Messages limit (unlimited)",
        "Contact limit (unlimited)",
        "Device limit (unlimited)",
        "Template limit (unlimited)",
        "Apps limit (unlimited)",
        "Chatbot",
        "Bulk message",
        "Schedule message",
        "Access chat list",
        "Access group list",
        "Custom templates & workflows",
        "Full API access",
        "Priority support",
        "Dedicated account manager",
        "Advanced analytics & reporting",
      ],
      notIncluded: [],
      custom: true
    }
  ];

  return (
    <section id="pricing" className="py-6 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Simple, Transparent Pricing</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the plan that fits your business needs. No hidden fees or long-term commitments.
          </p>

          <div className="mt-8 flex items-center justify-center">
            <motion.div className="bg-white p-1 rounded-full shadow-sm inline-flex relative z-10">
              <button
                className={`px-6 py-2 rounded-full text-xs font-medium cursor-pointer transition-colors ${!isAnnual ? 'bg-green-500 text-white' : 'text-gray-700 hover:bg-gray-200'}`}
                onClick={() => toggleBilling(false)}
              >
                Monthly
              </button>
              <button
                className={`px-6 py-2 rounded-full text-xs font-medium cursor-pointer transition-colors ${isAnnual ? 'bg-green-500 text-white' : 'text-gray-700 hover:bg-gray-200'}`}
                onClick={() => toggleBilling(true)}
              >
                Annual <span className="text-xs opacity-90">(Save 15%)</span>
              </button>
            </motion.div>
          </div>

        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {plans.map((plan, index) => (
            <PricingCard key={index} plan={plan} isAnnual={isAnnual} delay={index * 0.1} handleSignup={handleSignup} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface PricingCardProps {
  plan: {
    name: string;
    monthlyPrice: number | null;
    annualPrice: number | null;
    description: string;
    features: string[];
    notIncluded: string[];
    popular?: boolean;
    custom?: boolean;
  };
  isAnnual: boolean;
  delay: number;
}

const PricingCard: React.FC<PricingCardProps> = ({ plan, isAnnual, delay }) => {
  // Define fixed rounded prices
  const fixedPrices: Record<string, { monthly: number; annual: number }> = {
    "Starter": { monthly: 299, annual: Math.round(299 * 12 * 0.85) },
    "Professional": { monthly: 799, annual: Math.round(799 * 12 * 0.85) },
    "Enterprise": { monthly: 1499, annual: Math.round(1499 * 12 * 0.85) },
  };

  const actualMonthlyPrice = fixedPrices[plan.name]?.monthly || null;
  const actualAnnualPrice = fixedPrices[plan.name]?.annual || null;

  const handleSignup = async (planName: string) => {
    const planUrls: Record<string, string> = {
      "Starter": "http://app.whaps.in/register/1",
      "Professional": "http://app.whaps.in/register/3",
      "Enterprise": "http://app.whaps.in/register/2",
    };
    if (planUrls[planName]) {
      window.location.href = planUrls[planName]; // Redirect to the corresponding URL
    }
  };

  return (
    <>
      <Helmet>
        <title>Pricing Plans - Affordable WhatsApp Marketing</title>
        <meta name="description" content="Compare our pricing plans and choose the best option for your business. Affordable WhatsApp marketing solutions for small to enterprise businesses." />
        <meta name="keywords" content="WhatsApp marketing, pricing, affordable plans, business messaging" />
        <meta property="og:title" content="Pricing Plans - Affordable WhatsApp Marketing" />
        <meta property="og:description" content="Choose the best WhatsApp marketing plan for your business. No hidden fees, simple pricing." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://whaps.in/img/logo.jpg" />
        <meta property="og:url" content="https://whaps.in/pricing" />
      </Helmet>
      <motion.div
        className={`bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow relative ${plan.popular ? 'border-2 border-green-500' : 'border border-gray-100'}`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay }}
        viewport={{ once: true }}
        whileHover={{ y: -10 }}
      >
        {plan.popular && (
          <div className="absolute top-0 right-0 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
            MOST POPULAR
          </div>
        )}

        <div className="p-6 md:p-8">
          <h3 className="text-xl font-bold text-gray-800">{plan.name}</h3>
          <p className="mt-2 text-gray-600">{plan.description}</p>

          {/* Pricing Display */}
          {!plan.custom ? (
            <div className="mt-4">
              {isAnnual ? (
                <div className="bg-gray-900 text-white text-lg font-bold px-4 py-2 rounded-lg shadow-md inline-block">
                  <span className="text-xs opacity-80 line-through mr-2">
                    ₹{actualMonthlyPrice ? actualMonthlyPrice * 12 : ''}
                  </span>
                  ₹{actualAnnualPrice} <span className="text-xs opacity-80">/yr</span>
                  <p className="text-xs text-green-300 font-medium">
                    You save ₹{actualMonthlyPrice ? Math.round(actualMonthlyPrice * 12 - actualAnnualPrice) : 0}
                  </p>
                </div>
              ) : (
                <div className="bg-gray-900 text-white text-lg font-bold px-4 py-2 rounded-lg shadow-md inline-block">
                  <span className="text-xs opacity-80 line-through mr-2">₹{plan.originalMonthlyPrice}</span>
                  ₹{actualMonthlyPrice} <span className="text-xs opacity-80">/mo</span>
                  <p className="text-xs text-green-300 font-medium">You save ₹{plan.originalMonthlyPrice - (actualMonthlyPrice || 0)}</p>
                </div>
              )}
            </div>
          ) : (
            <div className="mt-4 invisible">&nbsp;</div> // Keeps the space but hides the content
          )}

          <motion.button
            className={`mt-6 w-full py-3 rounded-lg font-medium ${plan.popular ? 'bg-green-500 text-white' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => handleSignup(plan.name)}
          >
            {plan.custom ? "Contact Us" : 'Start Free 14 Trial'}
          </motion.button>
        </div>

        <div className="border-t border-gray-100 p-6 md:p-8">
          <p className="font-medium text-gray-800 text-xs mb-4">What's included:</p>
          <ul className="space-y-3">
            {plan.features.map((feature: string, index: number) => (
              <li key={index} className="flex items-start text-xs">
                <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-600">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </>

  );
};

export default Pricing;
