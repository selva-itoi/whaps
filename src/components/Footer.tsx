import {
  Mail,
  Twitter,
  Instagram,
  Facebook,
  Linkedin,
  Youtube,
  MessageCircle,
  Heart,
  Phone,
  MapPin
} from "lucide-react";
import ThemeToggle from "./ui/theme-toggle";

const Underline = `hover:-translate-y-1 border border-dotted border-gray-200 rounded-xl p-2.5 transition-transform hover:border-green-300 hover:text-green-500`;

const navigation = {
  categories: [
    {
      id: "whatsapp-sender",
      name: "WhatsApp Sender",
      sections: [
        {
          id: "company",
          name: "Company",
          items: [
            { name: "About Us", href: "#" },
            { name: "Our Team", href: "#" },
            { name: "Careers", href: "#" },
          ],
        },
        {
          id: "services",
          name: "Services",
          items: [
            { name: "Bulk Messaging", href: "#services" },
            { name: "Audience Segmentation", href: "#services" },
            { name: "Analytics & Reporting", href: "#services" },
          ],
        },
        {
          id: "features",
          name: "Features",
          items: [
            { name: "Automated Campaigns", href: "#services" },
            { name: "Compliance & Security", href: "#services" },
            { name: "API Integration", href: "#" },
          ],
        },
        {
          id: "resources",
          name: "Resources",
          items: [
            { name: "Blog", href: "#" },
            { name: "Case Studies", href: "#clients" },
            { name: "Documentation", href: "#" },
          ],
        },
        {
          id: "pricing",
          name: "Pricing",
          items: [
            { name: "Plans", href: "#pricing" },
            { name: "Enterprise", href: "#pricing" },
            { name: "Compare", href: "#pricing" },
          ],
        },
        {
          id: "legal",
          name: "Legal",
          items: [
            { name: "Privacy Policy", href: "#" },
            { name: "Terms of Service", href: "#" },
            { name: "GDPR Compliance", href: "#" },
          ],
        },
      ],
    },
  ],
};

const Footer: React.FC = () => {
  return (
    <footer className="border-ali/20 :px-4 mx-auto w-full border-b border-t border-gray-100 bg-gray-50 px-2">
      <div className="relative mx-auto grid max-w-7xl items-center justify-center gap-6 p-10 pb-0 md:flex">
        <a href="#home">
          <p className="flex items-center justify-center rounded-full">
            <MessageCircle className="w-8 h-8 text-green-500" />
          </p>
        </a>
        <p className="bg-transparent text-center text-xs leading-4 text-gray-600 md:text-left">
          Welcome to Whaps, the leading WhatsApp marketing platform for businesses looking to connect with their customers effectively. Our platform offers unique advantages that help businesses engage with their audience through WhatsApp. Send personalized messages, promotions, and updates to boost engagement and drive conversions. With high deliverability rates, detailed analytics, and compliance features, we ensure your WhatsApp marketing campaigns are successful and compliant with all regulations.
        </p>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="border-b border-dotted border-gray-200"></div>
        <div className="py-10">
          {navigation.categories.map((category) => (
            <div
              key={category.name}
              className="grid grid-cols-3 flex-row justify-between gap-6 leading-6 md:flex"
            >
              {category.sections.map((section) => (
                <div key={section.name}>
                  <h3 className="font-medium text-gray-800 mb-3 text-sm">{section.name}</h3>
                  <ul
                    role="list"
                    aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
                    className="flex flex-col space-y-2"
                  >
                    {section.items.map((item) => (
                      <li key={item.name} className="flow-root">
                        <a
                          href={item.href}
                          className="text-sm text-gray-600 hover:text-green-500 transition-colors md:text-xs"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="border-b border-dotted border-gray-200"></div>
      </div>

      <div className="flex flex-wrap justify-center gap-y-6">
        <div className="flex flex-wrap items-center justify-center gap-6 gap-y-4 px-6">
          <a
            aria-label="Email"
            href="mailto:info@whaps.in"
            rel="noreferrer"
            target="_blank"
            className={Underline}
          >
            <Mail strokeWidth={1.5} className="h-5 w-5" />
          </a>
          <a
            aria-label="Twitter"
            href="#"
            rel="noreferrer"
            target="_blank"
            className={Underline}
          >
            <Twitter className="h-5 w-5" />
          </a>
          <a
            aria-label="Instagram"
            href="#"
            rel="noreferrer"
            target="_blank"
            className={Underline}
          >
            <Instagram className="h-5 w-5" />
          </a>
          <a
            aria-label="WhatsApp"
            href="#"
            rel="noreferrer"
            target="_blank"
            className={Underline}
          >
            <MessageCircle className="h-5 w-5" />
          </a>
          <a
            aria-label="Facebook"
            href="#"
            rel="noreferrer"
            target="_blank"
            className={Underline}
          >
            <Facebook className="h-5 w-5" />
          </a>
          <a
            aria-label="LinkedIn"
            href="#"
            rel="noreferrer"
            target="_blank"
            className={Underline}
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            aria-label="YouTube"
            href="#"
            rel="noreferrer"
            target="_blank"
            className={Underline}
          >
            <Youtube className="h-5 w-5" />
          </a>
        </div>
        <ThemeToggle />
      </div>

      <div className="mx-auto mb-10 mt-10 flex flex-col justify-between text-center text-xs md:max-w-7xl">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-gray-600 mb-4">
          <div className="flex items-center">
            <Mail className="h-4 w-4 text-green-500 mr-2" />
            <span>info@whaps.in</span>
          </div>
          <div className="flex items-center">
            <Phone className="h-4 w-4 text-green-500 mr-2" />
            <span>+1 (555) 123-4567</span>
          </div>
          <div className="flex items-center">
            <MapPin className="h-4 w-4 text-green-500 mr-2" />
            <span>123 Business Avenue, Suite 500, San Francisco, CA 94107</span>
          </div>
        </div>
        <div className="flex flex-row items-center justify-center gap-1 text-gray-600">
          <span>©</span>
          <span>{new Date().getFullYear()}</span>
          <span>Made with</span>
          <Heart className="text-green-500 mx-1 h-4 w-4 animate-pulse" />
          <span>by</span>
          <span className="cursor-pointer text-gray-800 font-medium hover:text-green-500 transition-colors">
            <a
              aria-label="Whaps"
              className="font-bold"
              href="#"
            >
              Whaps
            </a>
          </span>
          <span>-</span>
          <span className="cursor-pointer text-gray-600 hover:text-green-500 transition-colors">
            <a aria-label="Home" href="#home">
              All Rights Reserved
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;