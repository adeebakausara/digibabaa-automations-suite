// SEO Helper Functions

export interface FAQItem {
  question: string;
  answer: string;
}

export const generateFAQSchema = (faqs: FAQItem[]) => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
};

export const generateBreadcrumbSchema = (items: Array<{ name: string; url: string }>) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };
};

export const generateArticleSchema = (article: {
  title: string;
  description: string;
  publishDate: string;
  imageUrl?: string;
  author?: string;
}) => {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "description": article.description,
    "datePublished": article.publishDate,
    "author": {
      "@type": article.author ? "Person" : "Organization",
      "name": article.author || "DigiBabaa"
    },
    ...(article.imageUrl && { "image": article.imageUrl })
  };
};

export const generateLocalBusinessSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "DigiBabaa",
    "description": "AI Marketing agency specializing in chatbots, voice agents, and marketing automation",
    "url": "https://digibabaa.co",
    "telephone": "+971-56-257-8722",
    "email": "akbar@digibabaa.co",
    "logo": "https://digibabaa.co/favicon.png",
    "image": "https://digibabaa.co/favicon.png",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "401, Building 44, Al Murar – Deira",
      "addressLocality": "Dubai",
      "addressRegion": "Dubai",
      "addressCountry": "AE"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "25.2776",
      "longitude": "55.3084"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "18:00"
      }
    ],
    "areaServed": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "25.2776",
        "longitude": "55.3084"
      },
      "geoRadius": "50000"
    },
    "sameAs": [
      "https://www.facebook.com/digibabaa",
      "https://www.instagram.com/digibabaa",
      "https://www.linkedin.com/company/digibabaa"
    ]
  };
};

export const generateOrganizationSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "DigiBabaa",
    "alternateName": "DigiBabaa AI Marketing Agency",
    "url": "https://digibabaa.co",
    "logo": "https://digibabaa.co/favicon.png",
    "description": "Leading AI Marketing agency specializing in intelligent automation, chatbots, voice agents, and data-driven marketing solutions",
    "email": "akbar@digibabaa.co",
    "telephone": "+971562578722",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "401, Building 44, Al Murar – Deira",
      "addressLocality": "Dubai",
      "addressCountry": "AE"
    },
    "sameAs": [
      "https://www.facebook.com/digibabaa",
      "https://www.instagram.com/digibabaa",
      "https://www.linkedin.com/company/digibabaa"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+971562578722",
      "contactType": "customer service",
      "areaServed": "AE",
      "availableLanguage": ["en", "ar"]
    }
  };
};

export const generateWebSiteSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "DigiBabaa",
    "url": "https://digibabaa.co",
    "description": "AI Marketing agency specializing in chatbots, voice agents, and intelligent automation",
    "publisher": {
      "@type": "Organization",
      "name": "DigiBabaa",
      "logo": {
        "@type": "ImageObject",
        "url": "https://digibabaa.co/favicon.png"
      }
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://digibabaa.co/blog?search={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };
};

export const generateServiceSchema = (service: {
  name: string;
  description: string;
  url: string;
  provider?: string;
}) => {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": service.name,
    "name": service.name,
    "description": service.description,
    "provider": {
      "@type": "Organization",
      "name": service.provider || "DigiBabaa",
      "url": "https://digibabaa.co"
    },
    "areaServed": {
      "@type": "Country",
      "name": "United Arab Emirates"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": service.name,
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": service.name,
            "description": service.description
          }
        }
      ]
    },
    "url": service.url
  };
};
