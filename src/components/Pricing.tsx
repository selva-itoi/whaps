import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

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
      monthlyPrice: 299,
      annualPrice: 299 * 12,
      description: "Perfect for small businesses just getting started with WhatsApp marketing.",
      features: [
        "Up to 100 messages per month",
        "Contact limit (10)",
        "Device limit (3)",
        "Basic audience segmentation",
        "Standard templates",
        "Basic analytics",
        "Basic API access",
      ],
      notIncluded: ["Advanced targeting", "Custom templates", "Priority support"]
    },
    {
      name: "Professional",
      monthlyPrice: 799,
      annualPrice: 799 * 12,
      description: "Ideal for growing businesses looking to scale their WhatsApp marketing.",
      features: [
        "Messages limit (unlimited)",
        "Contact limit (100)",
        "Device limit (25)",
        "Template limit (100)",
        "Apps limit (10)",
        "Schedule message",
        "Access chat list",
        "Custom templates",
        "Email & chat support",
        "Detailed analytics",
        "Full API access",
      ],
      notIncluded: ["Unlimited messages", "Priority support"],

    },
    {
      name: "Enterprise",
      monthlyPrice: 1499,
      annualPrice: 1499 * 12,
      description: "For large organizations requiring advanced features and dedicated support.",
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
      popular: true
    },
    {
      name: "Custom",
      monthlyPrice: null, // No fixed price
      annualPrice: null, // No fixed price
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
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
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
                className={`px-6 py-2 rounded-full text-sm font-medium cursor-pointer transition-colors ${!isAnnual ? 'bg-green-500 text-white' : 'text-gray-700 hover:bg-gray-200'}`}
                onClick={() => toggleBilling(false)}
              >
                Monthly
              </button>
              <button
                className={`px-6 py-2 rounded-full text-sm font-medium cursor-pointer transition-colors ${isAnnual ? 'bg-green-500 text-white' : 'text-gray-700 hover:bg-gray-200'}`}
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
  const price = isAnnual ? plan.annualPrice : plan.monthlyPrice;
  const isCustom = plan.custom;

  // Calculate discount for annual pricing (15% off)
  const discountPercentage = 15;
  const originalAnnualPrice = plan.monthlyPrice ? plan.monthlyPrice * 12 : null;
  const discountAmount = originalAnnualPrice ? (originalAnnualPrice * discountPercentage) / 100 : 0;
  const finalAnnualPrice = originalAnnualPrice ? originalAnnualPrice - discountAmount : null;
  const handleSignup = async (planName: string) => {
    const planUrls: Record<string, string> = {
      "Starter": "https://dev.agoo.in/register/1",
      "Professional": "https://dev.agoo.in/register/3",
      "Enterprise": "https://dev.agoo.in/register/2"
    };
    if (planUrls[planName]) {
      window.location.href = planUrls[planName]; // Redirect to the corresponding URL
    }
  };

  return (
    <motion.div
      className={`bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow relative ${plan.popular ? 'border-2 border-green-500' : 'border border-gray-100'}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      drag
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      dragElastic={0.1}
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
        {!isCustom ? (
          <div className="mt-4 bg-gray-900 text-white text-lg font-bold px-4 py-2 rounded-lg shadow-md inline-block">
            {isAnnual ? (
              <>
                <span className="text-sm opacity-80 line-through mr-2">₹{originalAnnualPrice}</span>
                ₹{finalAnnualPrice} <span className="text-sm opacity-80">/yr</span>
                <p className="text-sm text-green-300 font-medium">You save ₹{discountAmount}</p>
              </>
            ) : (
              <>
                ₹{price} <span className="text-sm opacity-80">/mo</span>
              </>
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
          {isCustom ? "Contact Us" : 'Start Free 14 Trial'}
        </motion.button>
      </div>

      <div className="border-t border-gray-100 p-6 md:p-8">
        <p className="font-medium text-gray-800 mb-4">What's included:</p>
        <ul className="space-y-3">
          {plan.features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
              <span className="text-gray-600">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};




export default Pricing;
