import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';
import styles from './AccordionDropDown.module.scss';

const faqs = [
  {
    question: "What types of fencing do you offer in Downtown Denver@@@@?",
    answer: "We offer a wide range of fencing options suitable for Downtown Denver's urban environment, including modern steel fences, classic wrought iron, and low-maintenance vinyl fencing. Our designs can complement both residential and commercial properties in the city center.",
    theme: "Fence Regulations"
  },
  {
    question: "Are there any specific fencing regulations in Boulder?",
    answer: "Yes, Boulder has specific fencing regulations. Generally, fences in front yards can't exceed 4 feet in height, while side and back yard fences can be up to 6 feet. We're familiar with local codes and can ensure your fence is compliant while meeting your needs.",
    theme: "Fence Regulations"
  },
  {
    question: "How do you handle the mountainous terrain in Golden for fence installation?",
    answer: "Our experienced team is well-versed in installing fences on Golden's mountainous terrain. We use specialized techniques such as stepped fencing and custom-cut panels to ensure a level, secure fence that follows the contour of your property.",
    theme: "Fence Regulations"
  },
  {
    question: "What are the best fencing options for properties near Denver International Airport?",
    answer: "For properties near Denver International Airport, we recommend fences that offer both security and noise reduction. Our acoustic fencing options, including solid vinyl or composite fences, can help mitigate airport noise while securing your property.",
    theme: "Fence Regulations"
  },
  {
    question: "How long does it typically take to install a fence in the Cherry Creek area?",
    answer: "The timeline for fence installation in Cherry Creek typically ranges from 1-3 days, depending on the size and complexity of the project. We work efficiently to minimize disruption to your property and neighborhood.",
    theme: "Fence Regulations"
  },
  {
    question: "Do you offer eco-friendly fencing options for environmentally conscious homeowners in Boulder?",
    answer: "Absolutely! For our Boulder clients, we offer several eco-friendly options including reclaimed wood fencing, bamboo fences, and composite fencing made from recycled materials. These options are both sustainable and durable.",
    theme: "Fence Regulations"
  },
  {
    question: "How do your fences hold up against Colorado's extreme weather conditions?",
    answer: "Our fences are designed to withstand Colorado's extreme weather conditions. We use weather-resistant materials and treatments, such as pressure-treated wood, rust-resistant metal fixtures, and UV-resistant stains and sealants to ensure longevity and minimal maintenance.",
    theme: "Fence Regulations"
  },
  {
    question: "What are the benefits of wood fencing in Denver?",
    answer: "Wood fencing in Denver offers natural beauty, versatility, and cost-effectiveness. It's ideal for creating privacy and can be customized to match various architectural styles. Our pressure-treated wood options are resistant to Colorado's dry climate and temperature fluctuations.",
    theme: "Wood Fencing Denver"
  },
  {
    question: "How long does a wood fence typically last in Colorado's climate?",
    answer: "With proper maintenance, a wood fence in Colorado can last 15-20 years. We use high-quality, weather-resistant woods and protective treatments to maximize longevity in our dry, sunny climate.",
    theme: "Wood Fencing Denver"
  },
  {
    question: "What types of wood do you recommend for fencing in Boulder?",
    answer: "We recommend cedar and redwood for Boulder fences. Both types naturally resist decay and insects, and hold up well to Colorado's intense sun and occasional heavy snows.",
    theme: "Wood Fencing Denver"
  },
  {
    question: "What are steel fence posts, and why are they good for Colorado?",
    answer: "Steel fence posts are a durable, low-maintenance alternative to traditional wood posts. They're galvanized and powder-coated for rust resistance, perfect for Colorado's climate with its freeze-thaw cycles and intense sun.",
    theme: "Steel Posts"
  },
  {
    question: "How do steel posts compare to wood posts in terms of longevity in Denver?",
    answer: "Steel posts significantly outlast wood posts in Denver, often lasting 20+ years without rotting or warping. This makes them an excellent long-term investment for Colorado homeowners, especially given our climate extremes.",
    theme: "Steel Posts"
  },
  {
    question: "Can steel posts be used with wood fencing in Boulder?",
    answer: "Yes, steel posts are versatile and can be used with wood fencing in Boulder. They provide the strength of steel while allowing you to maintain the natural look of a wood fence, which is popular in our area.",
    theme: "Steel Posts"
  },
  {
    question: "What are the advantages of composite fencing in Denver?",
    answer: "Composite fencing offers the look of wood with enhanced durability and lower maintenance. It resists moisture, doesn't rot or splinter, and stands up well to Denver's intense sun and occasional heavy snows.",
    theme: "Composite Fences"
  },
  {
    question: "How long do composite fences last in Colorado's climate?",
    answer: "Composite fences can last 20-30 years or more in Colorado's climate. They're highly resistant to UV rays, temperature fluctuations, and our region's freeze-thaw cycles, making them a long-lasting choice.",
    theme: "Composite Fences"
  },
  {
    question: "Are composite fences eco-friendly for Boulder homeowners?",
    answer: "Yes, many composite fences are made from recycled materials, making them an eco-friendly choice for Boulder homeowners. They also don't require the regular staining or sealing that wood fences do, reducing chemical use over time.",
    theme: "Composite Fences"
  },
  {
    question: "What are the maintenance requirements for a wood fence in Denver?",
    answer: "Wood fences in Denver require regular maintenance to ensure longevity. This includes annual inspections, cleaning, and sealing to protect against sun damage, moisture from snow, and our dry climate.",
    theme: "Maintenance"
  },
  {
    question: "How often should I clean and seal my composite fence in Boulder?",
    answer: "Composite fences in Boulder should be cleaned annually and sealed every 3-5 years to maintain their appearance and protect against UV rays and moisture from snow.",
    theme: "Maintenance"
  },
  {
    question: "What should I do if my fence is damaged by a hailstorm in Denver?",
    answer: "If your fence is damaged by a hailstorm in Denver, it's important to address the issue promptly to prevent further damage. Contact us immediately for assistance with repairs or replacement.",
    theme: "Maintenance"
  },
  {
    question: "Can I paint my fence to change its color or style in Colorado?",
    answer: "Yes, you can paint your fence to change its color or style. However, we recommend using a high-quality exterior paint that is suitable for the material of your fence and Colorado's climate, with its intense sun and temperature fluctuations.",
    theme: "Maintenance"
  },
  {
    question: "What should I do if my fence is damaged by heavy snow in Boulder?",
    answer: "If your fence is damaged by heavy snow in Boulder, it may be due to structural issues or the weight of the snow. Contact us immediately for assistance with repairs or replacement to prevent further damage.",
    theme: "Maintenance"
  }
];

const themes = ["All", "Wood Fencing Denver", "Steel Posts", "Composite Fences", "Fence Regulations", "Maintenance"];

export default function FencingFAQ() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [isClient, setIsClient] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedTheme, setSelectedTheme] = useState("All");

  const faqsPerPage = 5;

  useEffect(() => {
    setIsClient(true);
  }, []);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const filteredFaqs = selectedTheme === "All" 
    ? faqs 
    : faqs.filter(faq => faq.theme === selectedTheme);

  const totalPages = Math.ceil(filteredFaqs.length / faqsPerPage);
  const startIndex = (currentPage - 1) * faqsPerPage;
  const endIndex = startIndex + faqsPerPage;
  const currentFaqs = filteredFaqs.slice(startIndex, endIndex);

  const handleThemeChange = (theme) => {
    setSelectedTheme(theme);
    setCurrentPage(1);
  };

  return (
    <div className={styles.faqWrapper}>
      <section className={styles.faqSection}>
        <div className={styles.container}>
          <h2 className={styles.title}>Frequently Asked Questions About Fencing in Denver and Boulder</h2>

          <div className={styles.themeSelector}>
            {themes.map(theme => (
              <button 
                key={theme} 
                onClick={() => handleThemeChange(theme)}
                className={`${styles.themeButton} ${selectedTheme === theme ? styles.activeTheme : ''}`}
              >
                {theme}
              </button>
            ))}
          </div>

          <div className={styles.faqContainer}>
            {currentFaqs.map((faq, index) => (
              <div key={index} className={styles.faqItem}>
                <button
                  className={`${styles.faqQuestion} ${activeIndex === index ? styles.active : ''}`}
                  onClick={() => toggleFAQ(index)}
                >
                  {faq.question}
                  <span className={styles.icon}>
                    <FaChevronDown />
                  </span>
                </button>
                {activeIndex === index && (
                  <div className={styles.faqAnswer}>
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className={styles.paginationContainer}>
            <div className={styles.pagination}>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`${styles.pageButton} ${currentPage === page ? styles.activePage : ''}`}
                >
                  {page}
                </button>
              ))}
            </div>
          </div>

          {isClient && (
            <script type="application/ld+json">
              {JSON.stringify({
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
              })}
            </script>
          )}
        </div>
      </section>
    </div>
  );
}