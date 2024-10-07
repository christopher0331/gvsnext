import Document, { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

class MyDocument extends Document {
  render() {
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
          // You can also add attributes like crossorigin if needed
          />
          {/* Google Tag Manager - Global site tag (gtag.js) for Google Analytics and Ads */}
          {/* Google Analytics */}
          <script async src={`https://www.googletagmanager.com/gtag/js?id=G-3GLE2W6L18`}></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'G-3GLE2W6L18');
              `,
            }}
          />
          {/* End Google Analytics */}

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
                "@type": "Review",
                "itemReviewed": {
                  "@type": "LocalBusiness",
                  "name": "GreenView Solutions",
                  "image": "https://greenviewsolutions.net/gvsLogoGreen.png",
                  "url": "https://greenviewsolutions.net"
                },
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": "5"
                },
                "name": "Excellent service and quality",
                "author": {
                  "@type": "Person",
                  "name": "John Doe"
                },
                "reviewBody": "GreenView Solutions provided excellent service. The fence they installed is of high quality and looks great. Highly recommended!",
                "publisher": {
                  "@type": "Organization",
                  "name": "GreenView Solutions"
                }
              })
            }}
          />
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
                      "priceValidUntil": "2024-12-31",
                      "availability": "https://schema.org/InStock"
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
                      "priceValidUntil": "2024-12-31",
                      "availability": "https://schema.org/InStock"
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
                      "priceValidUntil": "2024-12-31",
                      "availability": "https://schema.org/InStock"
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
                      "priceValidUntil": "2024-12-31",
                      "availability": "https://schema.org/InStock"
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