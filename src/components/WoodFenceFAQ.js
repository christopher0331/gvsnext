import { useState } from 'react'
import Head from 'next/head'
import styles from './WoodFenceFAQ.module.css'

const faqData = {
  Denver: [
    {
      question: "What are the benefits of wood fencing in Denver's climate?",
      answer: "Wood fencing in Denver offers natural beauty, durability, and adaptability to the local climate. Properly treated wood can withstand Denver's sunny and dry weather, with occasional snow in winter."
    },
    {
      question: "How long does a wood fence typically last in Denver?",
      answer: "With proper maintenance, a wood fence in Denver can last 20-30 years or more. Regular sealing and staining can help protect the wood from sun damage and extend its lifespan."
    },
    {
      question: "What type of wood is best for fences in Denver?",
      answer: "Cedar and redwood are excellent choices for Denver due to their natural resistance to decay and insects. Pressure-treated pine is also a good, more affordable option that handles the local climate well."
    },
    {
      question: "How often should I maintain my wood fence in Denver?",
      answer: "In Denver's climate, it's recommended to clean and inspect your wood fence annually, and apply a new coat of sealant or stain every 2-3 years to protect it from sun damage and moisture."
    },
    {
      question: "How does Denver's weather affect wood fencing?",
      answer: "Denver's dry climate and high altitude can cause wood to dry out and crack. The intense sun exposure can also lead to fading. Regular maintenance and proper sealing are crucial to combat these effects."
    },
    {
      question: "Are there any local regulations for wood fences in Denver?",
      answer: "Yes, Denver has specific regulations for fences. Generally, residential fences can be up to 4 feet high in front yards and 6 feet high in side and back yards. Always check with local authorities before installing a fence."
    },
    {
      question: "How do I protect my wood fence from snow damage in Denver?",
      answer: "To protect your fence from snow, ensure it's properly sealed, clear snow from the base of the fence promptly, and avoid piling snow against it when shoveling. Consider installing a snow fence to redirect drifting snow."
    },
    {
      question: "Can I install a wood fence myself in Denver?",
      answer: "While it's possible to install a wood fence yourself, it's often recommended to hire professionals, especially considering Denver's specific climate challenges and local regulations. Professional installation ensures proper techniques are used for longevity."
    },
    {
      question: "How do I choose between a wood fence and other materials in Denver?",
      answer: "Consider factors like budget, maintenance willingness, desired lifespan, and aesthetic preferences. Wood offers a natural look and is generally more affordable upfront, but may require more maintenance than materials like vinyl or metal in Denver's climate."
    }
  ],
  Boulder: [
    {
      question: "What types of wood are best for fences in Boulder?",
      answer: "Cedar and redwood are highly recommended for Boulder due to their natural resistance to decay and insects. Pressure-treated pine is also a good option that handles the local climate well."
    },
    {
      question: "How does Boulder's elevation affect wood fencing?",
      answer: "Boulder's higher elevation means more intense UV exposure. This can cause wood to dry out and crack faster, so using UV-resistant stains and sealants is crucial for fence longevity."
    },
    {
      question: "How often should I maintain my wood fence in Boulder?",
      answer: "In Boulder's climate, it's recommended to inspect and clean your fence annually, and apply a new coat of sealant or stain every 2-3 years to protect against UV damage and moisture fluctuations."
    },
    {
      question: "Are there any local regulations for wood fences in Boulder?",
      answer: "Yes, Boulder has specific fence regulations. Generally, fences in front yards can be up to 4 feet high, while side and rear yard fences can be up to 6 feet. Always check with Boulder's Planning and Development Services before installation."
    },
    {
      question: "How do I protect my wood fence from Boulder's winter conditions?",
      answer: "To protect your fence from Boulder's winter, ensure it's properly sealed, clear snow from the base promptly, and avoid piling snow against it. Consider using a water-repellent sealant to prevent moisture damage from snow melt."
    },
<<<<<<< HEAD
    {
=======
    {  
>>>>>>> 07cd882f2a2d68ce314eb40e875da34d74f8700f
      question: "How do Boulder's soil conditions affect wood fence installation?",
      answer: "Boulder's soil can be rocky and clay-heavy in some areas. This may require special techniques for post installation, such as using concrete footings or deeper post holes to ensure stability and longevity of the fence."
    },
    {
      question: "Can I stain my wood fence to match Boulder's natural aesthetic?",
      answer: "Absolutely! Many Boulder homeowners choose natural wood stains that complement the area's scenic beauty. Earth tones and transparent stains that showcase the wood grain are popular choices that align with Boulder's aesthetic."
    },
    {
      question: "How do I choose between a wood fence and other materials in Boulder?",
      answer: "Consider factors like budget, maintenance, lifespan, and aesthetics. Wood offers a natural look that fits well with Boulder's environment but may require more upkeep. Compare this with low-maintenance options like vinyl or metal, weighing their appearance and long-term costs."
    },
    {
      question: "Are there any eco-friendly wood fencing options suitable for Boulder?",
      answer: "Yes, Boulder residents often prioritize sustainability. Consider using locally sourced wood, reclaimed lumber, or wood certified by the Forest Stewardship Council (FSC). These options reduce environmental impact while still providing durable fencing."
    }
  ],
  Arvada: [
    {
      question: "What are the best wood types for fences in Arvada?",
      answer: "Cedar, redwood, and pressure-treated pine are excellent choices for Arvada's climate. These woods offer good durability and resistance to local weather conditions."
    },
    {
      question: "How does Arvada's climate affect wood fencing?",
      answer: "Arvada's semi-arid climate with hot summers and cold winters can cause wood to expand and contract. Regular sealing and staining are important to protect against moisture damage and UV radiation."
    },
    {
      question: "What are Arvada's fence regulations?",
      answer: "In Arvada, residential fences generally can be up to 4 feet high in front yards and 6 feet high in side and back yards. Always check with Arvada's Community Development Department for specific regulations before installation."
    },
    {
      question: "How often should I maintain my wood fence in Arvada?",
      answer: "In Arvada's climate, it's recommended to clean and inspect your fence annually, and apply a new coat of sealant or stain every 2-3 years to protect against weather damage and UV radiation."
    },
    {
      question: "How do I protect my wood fence from Arvada's winter conditions?",
      answer: "To protect your fence from Arvada's winter, ensure it's properly sealed, clear snow from the base promptly, and avoid piling snow against it. Consider using a water-repellent sealant to prevent moisture damage from snow melt."
    },
    {
      question: "Are there eco-friendly wood fencing options suitable for Arvada?",
      answer: "Yes, consider using locally sourced wood, reclaimed lumber, or wood certified by the Forest Stewardship Council (FSC). These options reduce environmental impact while still providing durable fencing that suits Arvada's climate."
    },
    {
      question: "How long does a wood fence typically last in Arvada?",
      answer: "With proper maintenance, a wood fence in Arvada can last 15-25 years or more. Regular sealing, staining, and prompt repairs can help extend its lifespan in the local climate."
    },
    {
      question: "Can I install a wood fence myself in Arvada?",
      answer: "While DIY installation is possible, it's often recommended to hire professionals, especially considering Arvada's specific climate challenges and local regulations. Professional installation ensures proper techniques are used for longevity and compliance."
    },
    {
      question: "How do I choose between different wood fence styles for my Arvada home?",
      answer: "Consider your privacy needs, budget, and home's architectural style. Popular options in Arvada include privacy fences, picket fences, and split-rail fences. Also, think about how the fence will complement your landscaping and neighborhood aesthetic."
    }
  ],
  Louisville: [
    {
      question: "What wood types are recommended for fences in Louisville?",
      answer: "Cedar and redwood are popular choices in Louisville due to their natural resistance to decay. Pressure-treated pine is also a good, cost-effective option that handles the local climate well."
    },
    {
      question: "How often should I maintain my wood fence in Louisville?",
      answer: "In Louisville's climate, it's recommended to clean and inspect your fence annually, and apply a new coat of sealant or stain every 2-3 years to protect against weather damage."
    },
    {
      question: "Are there specific fence regulations in Louisville?",
      answer: "Yes, Louisville has specific fence regulations. Generally, fences in front yards can be up to 4 feet high, while side and rear yard fences can be up to 6 feet. Always check with Louisville's Planning Department before installation."
    },
    {
      question: "How does Louisville's climate affect wood fencing?",
      answer: "Louisville experiences hot summers and cold winters with occasional heavy snowfall. This can cause wood to expand and contract, potentially leading to warping or cracking. Proper sealing and regular maintenance are crucial to combat these effects."
    },
    {
      question: "How long does a wood fence typically last in Louisville?",
      answer: "With proper maintenance, a wood fence in Louisville can last 15-25 years or more. Regular sealing, staining, and prompt repairs can help extend its lifespan in the local climate."
    },
    {
      question: "Are there eco-friendly wood fencing options suitable for Louisville?",
      answer: "Yes, consider using locally sourced wood, reclaimed lumber, or wood certified by the Forest Stewardship Council (FSC). These options reduce environmental impact while still providing durable fencing that suits Louisville's climate and aesthetic."
    },
    {
      question: "How do I protect my wood fence from Louisville's winter conditions?",
      answer: "To protect your fence from Louisville's winters, ensure it's properly sealed, clear snow from the base promptly, and avoid piling snow against it. Consider using a water-repellent sealant to prevent moisture damage from snow melt."
    },
    {
      question: "Can I install a wood fence myself in Louisville?",
      answer: "While DIY installation is possible, it's often recommended to hire professionals, especially considering Louisville's specific climate challenges and local regulations. Professional installation ensures proper techniques are used for longevity and compliance."
    },
    {
      question: "How do I choose between different wood fence styles for my Louisville home?",
      answer: "Consider your privacy needs, budget, and home's architectural style. Popular options in Louisville include privacy fences, picket fences, and split-rail fences. Also, think about how the fence will complement your landscaping and neighborhood aesthetic."
    }
  ],
  Westminster: [
    {
      question: "What are the benefits of wood fencing in Westminster?",
      answer: "Wood fencing in Westminster offers natural beauty, privacy, and good durability when properly maintained. It also provides flexibility in design and can be customized to match various home styles."
    },
    {
      question: "How does Westminster's weather impact wood fences?",
      answer: "Westminster's climate, with its hot summers and cold winters, can cause wood to expand and contract. Regular maintenance, including sealing and staining, is crucial to protect against weather-related damage."
    },
    {
      question: "What are Westminster's fence height restrictions?",
      answer: "In Westminster, residential fences are typically limited to 4 feet in height for front yards and 6 feet for side and rear yards. Always verify current regulations with Westminster's Planning Division before installation."
    },
    {
      question: "What types of wood are best for fences in Westminster?",
      answer: "Cedar and redwood are excellent choices for Westminster due to their natural resistance to decay and insects. Pressure-treated pine is also a good, more affordable option that handles the local climate well."
    },
    {
      question: "How often should I maintain my wood fence in Westminster?",
      answer: "In Westminster's climate, it's recommended to clean and inspect your fence annually, and apply a new coat of sealant or stain every 2-3 years to protect it from sun damage and moisture."
    },
    {
      question: "How long does a wood fence typically last in Westminster?",
      answer: "With proper maintenance, a wood fence in Westminster can last 15-25 years or more. Regular sealing, staining, and prompt repairs can help extend its lifespan in the local climate."
    },
    {
      question: "Are there any local regulations for wood fence installation in Westminster?",
      answer: "Yes, Westminster has specific regulations for fence installation. You may need to obtain a permit for certain types of fences. It's best to check with the Westminster Building Division before starting your project."
    },
    {
      question: "How do I protect my wood fence from Westminster's winter conditions?",
      answer: "To protect your fence from Westminster's winters, ensure it's properly sealed, clear snow from the base promptly, and avoid piling snow against it. Consider using a water-repellent sealant to prevent moisture damage from snow melt."
    },
    {
      question: "Can I stain my wood fence to match Westminster's neighborhood aesthetics?",
      answer: "Absolutely! Many Westminster homeowners choose wood stains that complement their home's exterior and the neighborhood aesthetic. Natural tones and semi-transparent stains that showcase the wood grain are popular choices."
    }
  ],
  "Fort Collins": [
    {
      question: "What wood types work best for fences in Fort Collins?",
      answer: "Cedar, redwood, and pressure-treated pine are excellent choices for Fort Collins. These woods offer good resistance to the local climate and pests common in the area."
    },
    {
      question: "How does Fort Collins' climate affect wood fencing?",
      answer: "Fort Collins' semi-arid climate with cold winters and hot summers can cause wood to dry out and crack. Regular sealing and staining are important to protect against moisture fluctuations and UV damage."
    },
    {
      question: "What are Fort Collins' fence regulations?",
      answer: "In Fort Collins, residential fences in front yards are generally limited to 4 feet in height, while side and rear yard fences can be up to 6 feet. Always check with Fort Collins' Zoning Department for specific regulations before installation."
    },
    {
      question: "How often should I maintain my wood fence in Fort Collins?",
      answer: "In Fort Collins' climate, it's recommended to clean and inspect your fence annually, and apply a new coat of sealant or stain every 2-3 years to protect against weather damage and UV radiation."
    },
    {
      question: "How do I protect my wood fence from Fort Collins' winter conditions?",
      answer: "To protect your fence from Fort Collins' winters, ensure it's properly sealed, clear snow from the base promptly, and avoid piling snow against it. Consider using a water-repellent sealant to prevent moisture damage from freeze-thaw cycles."
    },
    {
      question: "Are there eco-friendly wood fencing options suitable for Fort Collins?",
      answer: "Yes, consider using locally sourced wood, reclaimed lumber, or wood certified by the Forest Stewardship Council (FSC). These options reduce environmental impact while still providing durable fencing that suits Fort Collins' climate."
    },
    {
      question: "How long does a wood fence typically last in Fort Collins?",
      answer: "With proper maintenance, a wood fence in Fort Collins can last 15-25 years or more. Regular sealing, staining, and prompt repairs can help extend its lifespan in the local climate."
    },
    {
      question: "Can I install a wood fence myself in Fort Collins?",
      answer: "While DIY installation is possible, it's often recommended to hire professionals, especially considering Fort Collins' specific climate challenges and local regulations. Professional installation ensures proper techniques are used for longevity and compliance."
    },
    {
      question: "How do I choose between different wood fence styles for my Fort Collins home?",
      answer: "Consider your privacy needs, budget, and home's architectural style. Popular options in Fort Collins include privacy fences, picket fences, and split-rail fences. Also, think about how the fence will complement your landscaping and neighborhood aesthetic."
    }
  ],
  "Wheat Ridge": [
    {
      question: "What are the advantages of wood fencing in Wheat Ridge?",
      answer: "Wood fencing in Wheat Ridge offers natural aesthetics, good privacy, and the ability to customize designs. When properly maintained, it can withstand local weather conditions and complement various architectural styles."
    },
    {
      question: "How often should I maintain my wood fence in Wheat Ridge?",
      answer: "In Wheat Ridge's climate, it's recommended to clean and inspect your fence annually, and apply a new coat of sealant or stain every 2-3 years to protect against weather damage and extend its lifespan."
    },
    {
      question: "What are Wheat Ridge's fence height restrictions?",
      answer: "Wheat Ridge typically allows fences up to 4 feet high in front yards and up to 6 feet high in side and rear yards. Always verify current regulations with Wheat Ridge's Community Development Department before installation."
    },
    {
      question: "What types of wood are best for fences in Wheat Ridge?",
      answer: "Cedar and redwood are excellent choices for Wheat Ridge due to their natural resistance to decay and insects. Pressure-treated pine is also a good, more affordable option that handles the local climate well."
    },
    {
      question: "How does Wheat Ridge's climate affect wood fencing?",
      answer: "Wheat Ridge experiences hot summers and cold winters with occasional heavy snowfall. This can cause wood to expand and contract, potentially leading to warping or cracking. Proper sealing and regular maintenance are crucial to combat these effects."
    },
    {
      question: "How long does a wood fence typically last in Wheat Ridge?",
      answer: "With proper maintenance, a wood fence in Wheat Ridge can last 15-25 years or more. Regular sealing, staining, and prompt repairs can help extend its lifespan in the local climate."
    },
    {
      question: "Are there any local regulations for wood fence installation in Wheat Ridge?",
      answer: "Yes, Wheat Ridge has specific regulations for fence installation. You may need to obtain a permit for certain types of fences. It's best to check with the Wheat Ridge Building Division before starting your project."
    },
    {
      question: "How do I protect my wood fence from Wheat Ridge's winter conditions?",
      answer: "To protect your fence from Wheat Ridge's winters, ensure it's properly sealed, clear snow from the base promptly, and avoid piling snow against it. Consider using a water-repellent sealant to prevent moisture damage from snow melt."
    },
    {
      question: "Can I stain my wood fence to match Wheat Ridge's neighborhood aesthetics?",
      answer: "Absolutely! Many Wheat Ridge homeowners choose wood stains that complement their home's exterior and the neighborhood aesthetic. Natural tones and semi-transparent stains that showcase the wood grain are popular choices."
    }
  ],
};

export default function WoodFenceFAQ() {
    const [activeIndex, setActiveIndex] = useState(null)
    const [activeRegion, setActiveRegion] = useState('Denver')

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index)
    }

    const changeRegion = (region) => {
        setActiveRegion(region)
        setActiveIndex(null)
    }

    const schemaData = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqData[activeRegion].map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    }

    return (
        <>
            <Head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
                />
            </Head>
            <section className={styles.faqSection}>
                <h2 className={styles.faqTitle}>Frequently Asked Questions About Wood Fencing</h2>
                <div className={styles.regionTabs}>
                    {Object.keys(faqData).map(region => (
                        <button
                            key={region}
                            className={`${styles.regionTab} ${activeRegion === region ? styles.activeTab : ''}`}
                            onClick={() => changeRegion(region)}
                        >
                            {region}
                        </button>
                    ))}
                </div>
                <div className={styles.faqList}>
                    {faqData[activeRegion].map((faq, index) => (
                        <div key={index} className={styles.faqItem}>
                            <button
                                className={`${styles.faqQuestion} ${activeIndex === index ? styles.active : ''}`}
                                onClick={() => toggleFAQ(index)}
                                aria-expanded={activeIndex === index}
                            >
                                {faq.question}
                                <span className={styles.faqIcon} aria-hidden="true">{activeIndex === index ? '−' : '+'}</span>
                            </button>
                            {activeIndex === index && (
                                <div className={styles.faqAnswer}>
                                    <p>{faq.answer}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}
