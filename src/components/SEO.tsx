import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title: string;
    description: string;
    keywords?: string[];
    ogImage?: string;
    ogUrl?: string;
}

export default function SEO({
    title,
    description,
    keywords = [],
    ogImage = '/img/logo.jpg',
    ogUrl = 'https://whaps.in'
}: SEOProps) {
    const formattedTitle = `${title} | Whaps`;

    return (
        <Helmet>
            {/* Basic Meta Tags */}
            <title>{formattedTitle}</title>
            <meta name="description" content={description || "Default description for SEO."} />

            <meta name="keywords" content={keywords.join(', ')} />

            {/* Open Graph Meta Tags */}
            <meta property="og:title" content={formattedTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={ogImage} />
            <meta property="og:url" content={ogUrl} />
            <meta property="og:type" content="website" />

            {/* Twitter Card Meta Tags */}
            <meta name="twitter:card" content="summary_large_image" />
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
                    "@context": "https://whaps.in",
                    "@type": "Organization",
                    "name": "Whaps",
                    "url": "https://whaps.in",
                    "logo": "https://whaps.in/img/logo.png",
                    "sameAs": ["https://twitter.com/whaps"]
                })}
            </script>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="canonical" href={ogUrl} />
            <meta name="google-site-verification" content="your_verification_code" />
        </Helmet>
    );
}
