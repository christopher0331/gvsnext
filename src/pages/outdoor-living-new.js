import Head from 'next/head'
import HeroSection from '../components/outdoor-living/HeroSection'
import ServicesOverview from '../components/outdoor-living/ServicesOverview'
import ImageGallery from '../components/outdoor-living/ImageGallery'
import CredibilitySection from '../components/outdoor-living/CredibilitySection'
import FeaturedProjects from '../components/outdoor-living/FeaturedProjects'
import CallToActionSection from '../components/CallToActionSection'
import Header from '../components/Header';
import Footer from '../components/Footer';
import SvgComponent from '../components/SvgComponent';
import Reviews from '../components/Reviews';
import AreasServed from '../components/AreasServed';
import FAQSection from '../components/outdoor-living/FAQSection';
import { testimonialsData } from '../components/TestimonialsData';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from '../components/OutdoorLiving.module.scss';


export default function OutdoorLivingNew({heroContent}) {
  // FAQ data for the FAQ section and schema markup
  const faqCategories = [
    {
      name: "Design & Planning",
      icon: "🏡",
      faqs: [
        {
          question: "What outdoor living structures are best for Colorado's climate?",
          answer: "For Colorado's varied climate, we recommend mineral-based composite decking, pergolas with adjustable louvers for sun control, and covered structures that can withstand snow loads while providing year-round enjoyment. Our designs account for Colorado's unique weather patterns, including intense sun exposure, heavy snow loads, and dramatic temperature fluctuations."
        },
        {
          question: "How do I decide what features to include in my outdoor living space?",
          answer: "Our design process begins with understanding how you want to use your space. We consider your lifestyle, entertainment needs, family size, and budget. Popular features include outdoor kitchens, fire pits, pergolas, built-in seating, and water features. We'll work with you to prioritize elements that match your vision while maximizing your investment."
        },
        {
          question: "Can you design an outdoor living space that complements my home's architecture?",
          answer: "Absolutely! We specialize in creating outdoor living spaces that feel like natural extensions of your home. Our designers carefully analyze your home's architectural style, color palette, and existing landscaping to ensure a cohesive look. We can match materials, colors, and design elements to create a seamless transition between indoor and outdoor spaces."
        },
        {
          question: "What's the difference between a pergola, gazebo, and pavilion?",
          answer: "A pergola is an open-roof structure with columns supporting crossbeams and rafters, providing filtered shade. A gazebo is typically octagonal or round with a solid roof and open sides, offering full shade. A pavilion is a rectangular structure with a solid roof and open sides, providing maximum shade while maintaining airflow. Each serves different purposes in outdoor living design."
        }
      ]
    },
    {
      name: "Materials & Durability",
      icon: "🛠️",
      faqs: [
        {
          question: "What materials do you recommend for long-lasting outdoor structures in Colorado?",
          answer: "We recommend composite decking (like Trex or TimberTech), cedar or redwood for pergolas, and powder-coated aluminum for structural components. For outdoor kitchens, we use weather-resistant stainless steel appliances and natural stone countertops. These materials withstand Colorado's intense sun, seasonal temperature changes, heavy snow, and precipitation while requiring minimal maintenance."
        },
        {
          question: "How do composite decking materials compare to natural wood?",
          answer: "Composite decking offers superior durability, requiring virtually no maintenance beyond occasional cleaning. Unlike wood, it won't splinter, warp, rot, or need staining/sealing. While the upfront cost is higher than pressure-treated wood, the long-term value is greater due to minimal maintenance and a typical lifespan of 25-30 years. Composite also offers consistent coloring and texture options not available with natural wood."
        },
        {
          question: "What type of foundation is needed for an outdoor kitchen or pergola?",
          answer: "The foundation requirements depend on the structure's size, weight, and your soil conditions. Pergolas typically require concrete footings that extend below the frost line (30-36 inches in Colorado). Outdoor kitchens need a reinforced concrete pad that can support the weight of appliances, countertops, and cabinetry. We handle all structural engineering to ensure your outdoor structures are properly supported and built to last."
        },
        {
          question: "How do you ensure outdoor structures can handle Colorado's snow loads?",
          answer: "We design all structures according to local building codes that specify minimum snow load requirements (typically 30-40 psf in the Denver area, higher in mountain communities). For covered structures, we use appropriate roof pitches, strong supporting beams, and proper drainage systems. Our structural calculations account for the heaviest expected snow accumulation in your specific area."
        }
      ]
    },
    {
      name: "Construction & Timeline",
      icon: "⏱️",
      faqs: [
        {
          question: "How long does it take to build a custom outdoor living space?",
          answer: "The timeline varies based on project scope and complexity. Simple pergolas or patios may take 2-3 weeks from start to finish. Comprehensive outdoor living spaces with multiple features (kitchen, fireplace, custom lighting) typically take 4-8 weeks. This includes design finalization (1-2 weeks), permitting (1-3 weeks), and construction (2-6 weeks). We provide detailed timelines during the proposal phase."
        },
        {
          question: "What's the best time of year to build an outdoor living space in Colorado?",
          answer: "While we build year-round, the optimal construction window is March through October when weather conditions are most favorable. Starting in early spring ensures your space is ready for summer enjoyment. Winter construction is possible for certain projects but may take longer due to weather delays. Many clients begin the design process in winter to be first in line for spring construction."
        },
        {
          question: "Do I need to be home during the construction process?",
          answer: "You don't need to be present throughout the construction process. After the initial consultation and design approval, our team can work independently with minimal disruption to your daily routine. We'll schedule check-in meetings at key milestones and communicate regularly about progress. We only need access to your property and utilities as specified in the project plan."
        },
        {
          question: "How disruptive is the construction process to my yard and existing landscaping?",
          answer: "We take extensive precautions to minimize impact on your property. Before construction begins, we establish clear access routes and protection for existing landscaping, irrigation systems, and hardscapes. Our team uses specialized equipment and techniques to reduce soil compaction and damage. After completion, we perform thorough cleanup and can assist with landscape restoration if needed."
        }
      ]
    },
    {
      name: "Permits & Regulations",
      icon: "📋",
      faqs: [
        {
          question: "Do I need a permit for building a deck or pergola in Denver?",
          answer: "Yes, most outdoor structures require permits in Denver and surrounding areas. Generally, structures larger than 120 square feet, attached to your home, or including electrical/plumbing components require permits. Our team handles the entire permitting process for you, including documentation preparation, submission, fee payment, and coordination with inspectors, ensuring all structures meet local building codes and regulations."
        },
        {
          question: "How do HOA regulations affect my outdoor living project?",
          answer: "HOA regulations can impact design elements like material types, colors, dimensions, and placement of structures. We're experienced in working with HOAs throughout Colorado and can help navigate their approval process. We'll review your HOA guidelines during the design phase and prepare all necessary documentation for architectural review committees, often attending meetings on your behalf if needed."
        },
        {
          question: "Are there restrictions on outdoor kitchens or fire features in Colorado?",
          answer: "Yes, there are specific regulations for outdoor kitchens and fire features that vary by municipality. Gas lines require permits and professional installation. Wood-burning fire pits must comply with local fire codes and may have seasonal usage restrictions during high fire danger periods. We design all features to meet current codes and can advise on the best options for your area's specific regulations."
        },
        {
          question: "What setback requirements should I be aware of for outdoor structures?",
          answer: "Setback requirements specify the minimum distance structures must be from property lines, and they vary by municipality and zoning classification. Typically, structures must be at least 5-7.5 feet from side property lines and 7.5-10 feet from rear property lines. Additional restrictions may apply for corner lots or properties near waterways. We verify all setback requirements during the design phase to ensure compliance."
        }
      ]
    },
    {
      name: "Usage & Maintenance",
      icon: "🧹",
      faqs: [
        {
          question: "Can outdoor living spaces be used year-round in Colorado?",
          answer: "Absolutely! We design outdoor living spaces specifically for year-round use in Colorado. Features like overhead infrared heaters, built-in fire pits or fireplaces, wind barriers, adjustable louvered pergolas for sun control, and outdoor-rated ceiling fans make your outdoor space comfortable in all seasons. Strategic placement of structures to maximize sun exposure in winter and provide shade in summer further enhances year-round usability."
        },
        {
          question: "How much maintenance do outdoor living spaces require?",
          answer: "Our designs prioritize low-maintenance materials. Composite decking needs only occasional cleaning with soap and water. Natural stone patios require annual sealing. Pergolas may need staining every 3-5 years if made of wood (none if aluminum). Outdoor appliances should be winterized annually. We provide a comprehensive maintenance guide with your project and offer annual maintenance services to keep your outdoor space looking its best."
        },
        {
          question: "What lighting options work best for outdoor living spaces in Colorado?",
          answer: "We recommend a layered lighting approach: ambient lighting (string lights, recessed pergola lights), task lighting (cooking/dining areas), accent lighting (highlighting landscaping or architectural features), and safety lighting (steps, pathways). LED fixtures offer energy efficiency and longevity. Solar options work well in sunny Colorado. All electrical work is permitted and installed by licensed electricians with outdoor-rated, weather-resistant components."
        },
        {
          question: "How can I extend the outdoor living season in Colorado?",
          answer: "To maximize your outdoor living season, we incorporate heating elements (fire pits, patio heaters, built-in fireplaces), wind barriers (glass panels, retractable screens), shade solutions (adjustable pergolas, retractable awnings), and proper drainage systems. Strategic landscaping with evergreens can create natural windbreaks. For maximum comfort, consider enclosed or semi-enclosed spaces with proper ventilation that retain heat while maintaining an outdoor feel."
        }
      ]
    },
    {
      name: "Cost & Value",
      icon: "💰",
      faqs: [
        {
          question: "What's the typical investment range for outdoor living projects?",
          answer: "Basic patios or decks typically range from $15,000-$30,000. Mid-range projects with multiple features (pergola, fire pit, basic outdoor kitchen) range from $30,000-$75,000. Premium outdoor living spaces with high-end materials, custom outdoor kitchens, water features, and extensive lighting systems range from $75,000-$150,000+. We work with you to phase construction if needed to accommodate your budget while achieving your long-term vision."
        },
        {
          question: "Do outdoor living spaces increase home value?",
          answer: "Yes, well-designed outdoor living spaces typically return 60-80% of their cost in home value appreciation. In Colorado's outdoor-oriented market, this return can be even higher. Beyond immediate financial return, these spaces expand your usable living area and enhance quality of life. Real estate data shows homes with quality outdoor living spaces sell faster and command higher prices, especially in Colorado's competitive market."
        },
        {
          question: "How do you handle project budgeting and potential cost overruns?",
          answer: "We provide detailed, transparent proposals that outline all costs before construction begins. Our contracts include allowances for materials and specific provisions for how changes are handled. We maintain a continuous budget tracking system throughout your project and communicate proactively about any potential variances. For most projects, we recommend including a 5-10% contingency to accommodate unforeseen conditions or desired changes during construction."
        }
      ]
    }
  ];
  
  // Flatten the FAQ data for schema markup
  const faqData = faqCategories.flatMap(category => category.faqs);

useEffect(() => {
    const script = document.createElement('script');
    script.innerHTML = `
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-59K2K2F');
    `;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

    return (
        <div>
            <Head>
                <title>Custom Outdoor Living Spaces & Pergolas | GreenView Solutions Denver</title>
                <meta name="description" content="Transform your backyard into a year-round retreat with GreenView Solutions' custom outdoor living spaces. Expert design and installation of decks, pergolas, and outdoor structures in Denver, CO." />
                <link rel="canonical" href="https://greenviewsolutions.net/outdoor-living-new" />
                <meta name="robots" content="index, follow" />
                <meta property="og:title" content="Custom Outdoor Living Spaces & Pergolas | GreenView Solutions Denver" />
                <meta property="og:description" content="Transform your backyard into a year-round retreat with GreenView Solutions' custom outdoor living spaces. Expert design and installation of decks, pergolas, and outdoor structures in Denver, CO." />
                <meta property="og:image" content="https://greenviewsolutionsimages.s3.us-west-1.amazonaws.com/gvsnextimages/globalimages/outdoorLivingPergolaStucture.JPG" />
                <meta property="og:url" content="https://greenviewsolutions.net/outdoor-living-new" />
                <meta property="og:type" content="website" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Custom Outdoor Living Spaces & Pergolas | GreenView Solutions Denver" />
                <meta name="twitter:description" content="Transform your backyard into a year-round retreat with GreenView Solutions' custom outdoor living spaces. Expert design and installation in Denver, CO." />
                <meta name="twitter:image" content="https://greenviewsolutionsimages.s3.us-west-1.amazonaws.com/gvsnextimages/globalimages/outdoorLivingPergolaStucture.JPG" />
                <meta name="keywords" content="outdoor living spaces, custom decks, pergolas, Denver outdoor structures, backyard retreats, outdoor living Colorado" />
                
                {/* Schema.org structured data for outdoor living services */}
                <script
                  type="application/ld+json"
                  dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                      "@context": "https://schema.org",
                      "@type": "Service",
                      "serviceType": "Outdoor Living Space Construction",
                      "provider": {
                        "@type": "LocalBusiness",
                        "name": "GreenView Solutions",
                        "image": "https://greenviewsolutions.net/gvsLogoGreen.png",
                        "address": {
                          "@type": "PostalAddress",
                          "streetAddress": "6525 Gunpark Dr Ste 370-110",
                          "addressLocality": "Boulder",
                          "addressRegion": "CO",
                          "postalCode": "80301",
                          "addressCountry": "US"
                        },
                        "telephone": "+303-358-8168",
                        "priceRange": "$$"
                      },
                      "areaServed": [
                        "Denver", "Boulder", "Arvada", "Westminster", "Longmont", "Erie", "Broomfield", "Golden", "Aurora"
                      ],
                      "description": "Custom outdoor living spaces including decks, pergolas, and outdoor structures designed for year-round enjoyment in Colorado.",
                      "offers": {
                        "@type": "Offer",
                        "priceCurrency": "USD"
                      }
                    })
                  }}
                />
            </Head>

            <Header heroContent={heroContent} />
            
            {/* Breadcrumb Navigation */}
            <div className={styles.breadcrumb}>
              <nav aria-label="breadcrumb">
                <ol>
                  <li>
                    <Link href="/">Home</Link>
                    <span> / </span>
                  </li>
                  <li aria-current="page">Outdoor Living</li>
                </ol>
              </nav>
            </div>

            <main>
                <ServicesOverview />
                <ImageGallery />
                <CallToActionSection
                    title="Ready to Transform Your Outdoor Living Space?"
                    description="Schedule a consultation with our expert team to explore the perfect outdoor living solution for your property."
                    buttonText="Request a Free Consultation"
                    buttonLink="/contact"
                />
                <CredibilitySection />
                <AreasServed />
                <FeaturedProjects />
                <Reviews testimonials={testimonialsData} />
                <CallToActionSection
                    title="Ready to Transform Your Outdoor Living Space?"
                    description="Schedule a consultation with our expert team to explore the perfect outdoor living solution for your property."
                    buttonText="Request a Free Consultation"
                    buttonLink="/contact"
                />
                {/* New FAQ Section Component */}
                <FAQSection faqCategories={faqCategories} />

                <div style={{ marginTop: '4rem', textAlign: 'center' }}>
                    <h2 style={{ fontSize: '2.5rem', color: '#333' }}>Our Simple Process</h2>
                    <p  style={{ fontSize: '1.5rem', color: '#333'}}>Transforming your outdoor space is easy with our straightforward approach</p>
                    <p  style={{ fontSize: '1.1rem', color: 'gray', marginBottom: '2rem' }}>Image is clickable and interactive</p>

                    <SvgComponent />   
                </div>
            </main>
            <Footer />
        </div>
    )
}

export async function getStaticProps() {
    return {
      props: {
        heroContent: {
          title: 'Outdoor Living Year Round',
          description: 'Explore our comprehensive outdoor living solutions, featuring custom designs, durable materials, and expert installation. Transform your backyard into a stunning oasis with our pergola and concrete services, tailored to meet your unique needs and preferences.',
          features: ['Custom designs', 'Durable materials', 'Expert installation'],
        },
      },
    };
  }
  