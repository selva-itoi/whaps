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
    ogImage = 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e',
    ogUrl = 'https://your-domain.com'
}: SEOProps) {
    const formattedTitle = `${title} | Whaps`;

    return (
        <Helmet>
            {/* Basic Meta Tags */}
            <title>{formattedTitle}</title>
            <meta name="description" content={description} />
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
            <meta name="robots" content="index, follow" />
            <meta name="author" content="John Doe" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="canonical" href={ogUrl} />
        </Helmet>
    );
}