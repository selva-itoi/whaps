import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title: string;
    description: string;
    keywords?: string[];
    ogImage?: string;
    ogUrl?: string;
    canonicalUrl?: string;
    ogType?: string;
    twitterCard?: string;
}

export default function SEO({
    title,
    description,
    keywords = [],
    ogImage = '/img/logo.jpg',
    ogUrl = 'https://whaps.in',
    canonicalUrl,
    ogType = 'website',
    twitterCard = 'summary_large_image'
}: SEOProps & { children?: React.ReactNode }) {
    const formattedTitle = `${title} | Whaps`;

    return (
        <Helmet>
            {/* Basic Meta Tags */}
            <title>{formattedTitle}</title>
            <meta name="description" content={description || "Official WhatsApp Business API provider offering bulk messaging solutions, chatbot automation & marketing services with enterprise-grade delivery analytics."} />

            <meta name="keywords" content={[...new Set([
                'WhatsApp API Integration', 'Free WhatsApp API Integration',
                'WhatsApp API Integration in Website', 'WhatsApp API with Salesforce',
                'Send Message Through WhatsApp API', 'Setup WhatsApp API',
                'Create WhatsApp API', 'WhatsApp Business API', 'Bulk Messaging',
                'Chatbot Integration', 'CRM Integration', 'Enterprise Messaging',
                'API Security', 'Two-Way Communication', 'Message Templates',
                'Session Messages', 'WhatsApp Cloud API', 'Cloud Communications',
                'Omnichannel Support',
                ...keywords
            ])].join(', ')} />

            {/* Open Graph Meta Tags */}
            <meta property="og:title" content={formattedTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={ogImage} />
            <meta property="og:url" content={ogUrl} />
            <meta property="og:type" content="website" />

            {/* Twitter Card Meta Tags */}
            <meta name="twitter:card" content={twitterCard} />
            <meta name="twitter:title" content={formattedTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={ogImage} />

            {/* Additional Meta Tags */}
            <meta name="robots" content="index, follow, max-image-preview:large" />
            <meta name="author" content="Whaps Technologies" />
            <meta name="copyright" content="Whaps" />
            <meta httpEquiv="content-language" content="en_IN" />

            {/* Structured Data */}
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Organization",
                    "name": "WhatsApp API Integration Experts",
                    "url": "https://whaps.in",
                    "logo": "https://whaps.in/img/logo.png",
                    "sameAs": ["https://twitter.com/whaps"],
                    "description": "Free WhatsApp API integration services for websites and Salesforce. Professional setup for sending messages through WhatsApp API with enterprise security.",
                    "keywords": "WhatsApp API Integration, Free WhatsApp API, Send Messages via API, Salesforce Integration",
                    "offers": {
                        "@type": "Service",
                        "name": "WhatsApp API Integration Package",
                        "description": "Complete setup and configuration of WhatsApp Business API including Salesforce integration and message template management"
                    }
                })}
            </script>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="canonical" href={canonicalUrl || ogUrl} />
            <meta name="google-site-verification" content="your_verification_code" />
        </Helmet>
    );
}
