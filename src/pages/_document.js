import Document, { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';
import { getTestimonials } from '../components/TestimonialsData.js';

class MyDocument extends Document {
  render() {
  const testimonials = getTestimonials();
    return (
      <Html lang="en">
        <Head>
          {/* Preconnect to Google domains for performance */}
          <link rel="preconnect" href="https://googleads.g.doubleclick.net" />
          <link rel="preconnect" href="https://www.google-analytics.com" />
          <link rel="preconnect" href="https://www.gstatic.com" />
          <link
            rel="preload"
            href="https://imagedelivery.net/OHVtjf602XdHccCnziCADA/e17c9569-a336-4893-bf7b-260b2789d400/public"
            as="image"
            type="image/webp"
          />
          {/* Alternate link for language */}
          <link rel="alternate" hrefLang="en" href="https://greenviewsolutions.net" />

          {/* Other tags like favicons, apple-touch-icons, etc. can also go here */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@graph": [
                  {
                    "@type": "WebSite",
                    "@id": "https://greenviewsolutions.net/#website",
                    "url": "https://greenviewsolutions.net/",
                    "name": "GreenView Solutions",
                    "description": "Professional fencing solutions in Colorado",
                    "potentialAction": [{
                      "@type": "SearchAction",
                      "target": "https://greenviewsolutions.net/search?q={search_term_string}",
                      "query-input": "required name=search_term_string"
                    }]
                  },
                  {
                    "@type": "LocalBusiness",
                    "@id": "https://greenviewsolutions.net/#localbusiness1",
                    "name": "GreenView Solutions - Boulder",
                    "image": "https://greenviewsolutions.net/gvsLogoGreen.png",
                    "url": "https://greenviewsolutions.net",
                    "telephone": "+303-358-8168",
                    "priceRange": "$$",
                    "address": {
                      "@type": "PostalAddress",
                      "streetAddress": "6525 Gunpark Dr Ste 370-110",
                      "addressLocality": "Boulder",
                      "addressRegion": "CO",
                      "postalCode": "80301",
                      "addressCountry": "US"
                    },
                    "geo": {
                      "@type": "GeoCoordinates",
                      "latitude": 40.125623,
                      "longitude": -104.9541494
                    },
                    "openingHoursSpecification": [
                      {
                        "@type": "OpeningHoursSpecification",
                        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                        "opens": "08:00",
                        "closes": "17:00"
                      }
                    ],
                    "sameAs": [
                      "https://www.facebook.com/greenviewsolutions",
                      "https://www.twitter.com/greenviewsolutions",
                      "https://www.instagram.com/greenview_solutions_llc"
                    ]
                  },
                  {
                    "@type": "LocalBusiness",
                    "@id": "https://greenviewsolutions.net/#localbusiness2",
                    "name": "GreenView Solutions - Arvada",
                    "image": "https://greenviewsolutions.net/gvsLogoGreen.png",
                    "url": "https://greenviewsolutions.net",
                    "telephone": "+303-358-8168",
                    "priceRange": "$$",
                    "address": {
                      "@type": "PostalAddress",
                      "streetAddress": "12650 W 64th Ave Unit E-149",
                      "addressLocality": "Arvada",
                      "addressRegion": "CO",
                      "postalCode": "80004",
                      "addressCountry": "US"
                    },
                    "geo": {
                      "@type": "GeoCoordinates",
                      "latitude": 39.8139,
                      "longitude": -105.1399
                    },
                    "openingHoursSpecification": [
                      {
                        "@type": "OpeningHoursSpecification",
                        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                        "opens": "08:00",
                        "closes": "17:00"
                      }
                    ],
                    "sameAs": [
                      "https://www.facebook.com/greenviewsolutions",
                      "https://www.twitter.com/greenviewsolutions",
                      "https://www.instagram.com/greenview_solutions_llc"
                    ]
                  },
                  {
                    "@type": "Service",
                    "serviceType": "Fencing Installation",
                    "provider": {
                      "@id": "https://greenviewsolutions.net/#localbusiness1"
                    },
                    "areaServed": [
                      "Boulder, CO",
                      "Niwot, CO",
                      "Louisville, CO",
                      "Longmont, CO",
                      "Frederick, CO",
                      "Erie, CO",
                      "Superior, CO",
                      "Denver, CO",
                      "Westminster, CO",
                      "Fort Collins, CO"
                    ],
                    "hasOfferCatalog": {
                      "@type": "OfferCatalog",
                      "name": "Fencing Services",
                      "itemListElement": [
                        {
                          "@type": "Offer",
                          "itemOffered": {
                            "@type": "Service",
                            "name": "Wood Fence Installation"
                          }
                        },
                        {
                          "@type": "Offer",
                          "itemOffered": {
                            "@type": "Service",
                            "name": "Vinyl Fence Installation"
                          }
                        },
                        {
                          "@type": "Offer",
                          "itemOffered": {
                            "@type": "Service",
                            "name": "Chain Link Fence Installation"
                          }
                        }
                      ]
                    }
                  }
                ]
              })
            }}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "item": {
                      "@id": "https://greenviewsolutions.net/",
                      "name": "Home"
                    }
                  },
                  {
                    "@type": "ListItem",
                    "position": 2,
                    "item": {
                      "@id": "https://greenviewsolutions.net/wood-fences/",
                      "name": "Wood Fences"
                    }
                  },
                  {
                    "@type": "ListItem",
                    "position": 3,
                    "item": {
                      "@id": "https://greenviewsolutions.net/vinyl-fences/",
                      "name": "Vinyl Fences"
                    }
                  },
                  {
                    "@type": "ListItem",
                    "position": 4,
                    "item": {
                      "@id": "https://greenviewsolutions.net/chain-link-fences/",
                      "name": "Chain Link Fences"
                    }
                  },
                  {
                    "@type": "ListItem",
                    "position": 5,
                    "item": {
                      "@id": "https://greenviewsolutions.net/ornamental-iron-fences/",
                      "name": "Ornamental Iron Fences"
                    }
                  },
                  {
                    "@type": "ListItem",
                    "position": 6,
                    "item": {
                      "@id": "https://greenviewsolutions.net/portfolio/",
                      "name": "Portfolio"
                    }
                  },
                  {
                    "@type": "ListItem",
                    "position": 7,
                    "item": {
                      "@id": "https://greenviewsolutions.net/contact/",
                      "name": "Contact"
                    }
                  }
                ]
              })
            }}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "name": "GreenView Solutions",
                "image": "https://greenviewsolutions.net/gvsLogoGreen.png",
                "url": "https://greenviewsolutions.net",
                "review": testimonials.map(testimonial => ({
                  "@type": "Review",
                  "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": testimonial.rating.toString()
                  },
                  "name": testimonial.review.substring(0, 50) + "...",
                  "author": {
                    "@type": "Person",
                    "name": testimonial.author
                  },
                  "reviewBody": testimonial.review,
                  "datePublished": testimonial.date
                })),
                "aggregateRating": {
                  "@type": "AggregateRating",
                  "ratingValue": (testimonials.reduce((sum, t) => sum + t.rating, 0) / testimonials.length).toFixed(1),
                  "reviewCount": testimonials.length.toString()
                }
              })
            }} />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org/",
                "@graph": [
                  {
                    "@type": "Product",
                    "name": "Wood Privacy Fence",
                    "image": "https://greenviewsolutions.net/images/wood-privacy-fence.jpg",
                    "description": "High-quality wood privacy fence for residential and commercial properties",
                    "brand": {
                      "@type": "Brand",
                      "name": "GreenView Solutions"
                    },
                    "offers": {
                      "@type": "Offer",
                      "url": "https://greenviewsolutions.net/wood-fences",
                      "priceCurrency": "USD",
                      "price": "55.00",
                      "priceValidUntil": "2024-12-31",
                      "availability": "https://schema.org/InStock",
                      "unitCode": "LNF",
                      "unitText": "per linear foot"
                    },
                    "aggregateRating": {
                      "@type": "AggregateRating",
                      "ratingValue": "4.8",
                      "reviewCount": "47"
                    }
                  },
                  {
                    "@type": "Product",
                    "name": "Vinyl Fence",
                    "image": "https://greenviewsolutions.net/images/vinyl-fence.jpg",
                    "description": "Durable and low-maintenance vinyl fencing for long-lasting beauty",
                    "brand": {
                      "@type": "Brand",
                      "name": "GreenView Solutions"
                    },
                    "offers": {
                      "@type": "Offer",
                      "url": "https://greenviewsolutions.net/vinyl-fences",
                      "priceCurrency": "USD",
                      "price": "48.00",
                      "priceValidUntil": "2024-12-31",
                      "availability": "https://schema.org/InStock",
                      "unitCode": "LNF",
                      "unitText": "per linear foot"
                    },
                    "aggregateRating": {
                      "@type": "AggregateRating",
                      "ratingValue": "4.9",
                      "reviewCount": "38"
                    }
                  },
                  {
                    "@type": "Product",
                    "name": "Chain Link Fence",
                    "image": "https://greenviewsolutions.net/images/chain-link-fence.jpg",
                    "description": "Affordable and versatile chain link fencing for security and boundary definition",
                    "brand": {
                      "@type": "Brand",
                      "name": "GreenView Solutions"
                    },
                    "offers": {
                      "@type": "Offer",
                      "url": "https://greenviewsolutions.net/chain-link-fences",
                      "priceCurrency": "USD",
                      "price": "48.00",
                      "priceValidUntil": "2024-12-31",
                      "availability": "https://schema.org/InStock",
                      "unitCode": "LNF",
                      "unitText": "per linear foot"
                    },
                    "aggregateRating": {
                      "@type": "AggregateRating",
                      "ratingValue": "4.7",
                      "reviewCount": "52"
                    }
                  },
                  {
                    "@type": "Product",
                    "name": "Ornamental Iron Fence",
                    "image": "https://greenviewsolutions.net/images/ornamental-iron-fence.jpg",
                    "description": "Elegant and sturdy ornamental iron fencing for enhanced curb appeal and security",
                    "brand": {
                      "@type": "Brand",
                      "name": "GreenView Solutions"
                    },
                    "offers": {
                      "@type": "Offer",
                      "url": "https://greenviewsolutions.net/ornamental-iron-fences",
                      "priceCurrency": "USD",
                      "price": "52.00",
                      "priceValidUntil": "2024-12-31",
                      "availability": "https://schema.org/InStock",
                      "unitCode": "LNF",
                      "unitText": "per linear foot"
                    },
                    "aggregateRating": {
                      "@type": "AggregateRating",
                      "ratingValue": "4.9",
                      "reviewCount": "31"
                    }
                  }
                ]
              })
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;