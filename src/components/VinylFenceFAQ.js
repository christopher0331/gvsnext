import { useState } from 'react'
import Head from 'next/head'
import styles from './WoodFenceFAQ.module.css'

const faqData = {
  Denver: [
    {
      question: "What are the benefits of vinyl fencing in Denver's climate?",
      answer: "Vinyl fencing in Denver offers durability, low maintenance, and resistance to extreme weather conditions. It doesn't warp, rot, or fade, making it ideal for Denver's sunny and sometimes harsh climate."
    },
    {
      question: "How long does a vinyl fence typically last in Denver?",
      answer: "With proper installation and minimal maintenance, a vinyl fence in Denver can last 20-30 years or more. It's highly resistant to the local weather conditions, ensuring long-term value for homeowners."
    },
    {
      question: "What colors are available for vinyl fences in Denver?",
      answer: "Vinyl fences in Denver come in a variety of colors, including white, tan, gray, and wood-grain textures. These options allow homeowners to match their fence to their property's aesthetic."
    },
    {
      question: "How often should I maintain my vinyl fence in Denver?",
      answer: "One of the main advantages of vinyl fencing in Denver is its low maintenance. Generally, an annual cleaning with soap and water is sufficient to keep it looking new. No painting or staining is required."
    },
    {
      question: "How does Denver's weather affect vinyl fencing?",
      answer: "Vinyl fencing holds up exceptionally well to Denver's climate. It's resistant to UV rays, preventing fading, and can withstand temperature fluctuations without warping or cracking."
    },
    {
      question: "Are there any local regulations for vinyl fences in Denver?",
      answer: "Yes, Denver has specific regulations for fences. Generally, residential fences can be up to 4 feet high in front yards and 6 feet high in side and back yards. Always check with local authorities before installing a fence."
    },
    {
      question: "How do I protect my vinyl fence from snow damage in Denver?",
      answer: "Vinyl fences are naturally resistant to snow damage. However, avoid piling snow against the fence when shoveling, as the weight of the snow could potentially cause damage over time."
    },
    {
      question: "Can I install a vinyl fence myself in Denver?",
      answer: "While DIY installation is possible, professional installation is recommended to ensure proper setting and alignment, especially considering Denver's specific climate challenges and local regulations."
    },
    {
      question: "How do I choose between a vinyl fence and other materials in Denver?",
      answer: "Consider factors like budget, maintenance willingness, desired lifespan, and aesthetic preferences. Vinyl offers low maintenance and longevity but may have a higher upfront cost than some materials like wood."
    }
  ],
  Boulder: [
    {
      question: "How does Boulder's climate affect vinyl fencing?",
      answer: "Boulder's climate, with its high altitude and varying temperatures, is well-suited for vinyl fencing. Vinyl resists UV damage, doesn't warp in heat, and withstands cold winters without cracking or splitting."
    },
    {
      question: "Are there any specific regulations for vinyl fences in Boulder?",
      answer: "Yes, Boulder has fence regulations. Generally, residential fences can be up to 4 feet high in front yards and 6 feet high in side and back yards. Always check with Boulder's Planning and Development Services before installation."
    },
    {
      question: "What are the environmental considerations for vinyl fencing in Boulder?",
      answer: "While vinyl is not biodegradable, it's recyclable and has a long lifespan, reducing the need for replacement. Many manufacturers use recycled materials in production, aligning with Boulder's eco-friendly values."
    },
    {
      question: "How does the cost of vinyl fencing compare to other materials in Boulder?",
      answer: "In Boulder, vinyl fencing typically has a higher upfront cost than wood but lower long-term expenses due to minimal maintenance. Expect to pay between $30 to $45 per linear foot for installation."
    },
    {
      question: "Can vinyl fencing withstand Boulder's occasional high winds?",
      answer: "Yes, when properly installed, vinyl fencing can withstand Boulder's high winds. The flexibility of vinyl allows it to bend without breaking, and reinforced posts provide additional stability."
    },
    {
      question: "What styles of vinyl fencing are popular in Boulder?",
      answer: "In Boulder, popular vinyl fence styles include privacy fences, picket fences, and ranch-style fences. Many homeowners opt for natural colors or wood-grain textures to blend with Boulder's scenic environment."
    },
    {
      question: "How does vinyl fencing perform in Boulder's snowy winters?",
      answer: "Vinyl fencing performs well in Boulder's snowy conditions. It doesn't absorb moisture, preventing warping or rotting. However, avoid piling heavy snow against the fence to prevent potential damage."
    },
    {
      question: "What maintenance is required for vinyl fencing in Boulder?",
      answer: "Vinyl fencing in Boulder requires minimal maintenance. An annual cleaning with mild soap and water is usually sufficient. No painting or staining is needed, and the fence won't splinter or rot."
    },
    {
      question: "How long can I expect a vinyl fence to last in Boulder?",
      answer: "With proper installation and care, a vinyl fence in Boulder can last 20-30 years or more. The material's resistance to UV rays, moisture, and temperature fluctuations contributes to its longevity."
    },
    {
      question: "Are there local Boulder companies specializing in vinyl fence installation?",
      answer: "Yes, several fence companies in Boulder specialize in vinyl fence installation. It's recommended to choose a local company familiar with Boulder's climate and regulations for the best results."
    }
  ],
  Arvada: [
    {
      question: "How does Arvada's climate affect vinyl fencing?",
      answer: "Arvada's semi-arid climate with hot summers and cold winters is well-suited for vinyl fencing. Vinyl resists UV damage, doesn't warp in heat, and withstands cold temperatures without cracking or splitting."
    },
    {
      question: "What are the local regulations for vinyl fences in Arvada?",
      answer: "Arvada has specific fence regulations. Generally, residential fences can be up to 4 feet high in front yards and 6 feet high in side and back yards. Always check with Arvada's Community Development Department before installation."
    },
    {
      question: "How long does a vinyl fence typically last in Arvada?",
      answer: "With proper installation and minimal maintenance, a vinyl fence in Arvada can last 20-30 years or more. Its resistance to local weather conditions contributes to its longevity."
    },
    {
      question: "What colors are available for vinyl fences in Arvada?",
      answer: "Vinyl fences in Arvada come in various colors, including white, tan, gray, and wood-grain textures. These options allow homeowners to match their fence to their property's aesthetic and neighborhood style."
    },
    {
      question: "How often should I maintain my vinyl fence in Arvada?",
      answer: "Vinyl fencing in Arvada requires minimal maintenance. An annual cleaning with mild soap and water is usually sufficient. No painting or staining is needed, making it a low-maintenance option for homeowners."
    },
    {
      question: "Can vinyl fencing withstand Arvada's occasional severe weather?",
      answer: "Yes, when properly installed, vinyl fencing can withstand Arvada's severe weather, including high winds and hailstorms. The flexibility of vinyl allows it to bend without breaking, and reinforced posts provide additional stability."
    },
    {
      question: "Are there environmental considerations for vinyl fencing in Arvada?",
      answer: "While vinyl is not biodegradable, it's recyclable and has a long lifespan, reducing the need for replacement. Many manufacturers use recycled materials in production, aligning with environmental consciousness."
    },
    {
      question: "How does vinyl fencing compare to other materials in terms of noise reduction in Arvada?",
      answer: "Vinyl fencing can provide moderate noise reduction, which can be beneficial in Arvada's residential areas. While not as effective as specialized sound barriers, solid vinyl fences can help reduce street noise and increase privacy."
    },
    {
      question: "Can I install a vinyl fence myself in Arvada?",
      answer: "While DIY installation is possible, professional installation is recommended to ensure proper setting and alignment, especially considering Arvada's specific climate challenges and local regulations. This also helps maintain warranty validity."
    }
  ],
  Louisville: [
    {
      question: "How does Louisville's climate impact vinyl fencing?",
      answer: "Louisville's climate, with its mix of hot summers and cold winters, is well-suited for vinyl fencing. Vinyl resists UV damage, doesn't warp in heat, and withstands cold temperatures without cracking or splitting."
    },
    {
      question: "What are the local regulations for vinyl fences in Louisville?",
      answer: "Louisville has specific fence regulations. Generally, residential fences can be up to 4 feet high in front yards and 6 feet high in side and back yards. Always check with Louisville's Planning and Building Safety Department before installation."
    },
    {
      question: "How long can I expect a vinyl fence to last in Louisville?",
      answer: "With proper installation and care, a vinyl fence in Louisville can last 20-30 years or more. The material's resistance to UV rays, moisture, and temperature fluctuations contributes to its longevity."
    },
    {
      question: "What colors are available for vinyl fences in Louisville?",
      answer: "Vinyl fences in Louisville come in various colors, including white, tan, gray, and wood-grain textures. These options allow homeowners to match their fence to their property's aesthetic and neighborhood style."
    },
    {
      question: "How often should I maintain my vinyl fence in Louisville?",
      answer: "Vinyl fencing in Louisville requires minimal maintenance. An annual cleaning with mild soap and water is usually sufficient. No painting or staining is needed, making it a low-maintenance option for homeowners."
    },
    {
      question: "Can vinyl fencing withstand Louisville's occasional severe weather?",
      answer: "Yes, when properly installed, vinyl fencing can withstand Louisville's severe weather, including high winds and heavy rain. The flexibility of vinyl allows it to bend without breaking, and reinforced posts provide additional stability."
    },
    {
      question: "Are there environmental considerations for vinyl fencing in Louisville?",
      answer: "While vinyl is not biodegradable, it's recyclable and has a long lifespan, reducing the need for replacement. Many manufacturers use recycled materials in production, aligning with environmental consciousness."
    },
    {
      question: "How does vinyl fencing compare to wood fencing in Louisville?",
      answer: "Vinyl fencing in Louisville offers several advantages over wood: it's more durable, requires less maintenance, doesn't rot or attract pests, and maintains its appearance longer. However, wood may be less expensive initially and offers a more natural look."
    },
    {
      question: "Can I install a vinyl fence myself in Louisville?",
      answer: "While DIY installation is possible, professional installation is recommended to ensure proper setting and alignment, especially considering Louisville's specific climate challenges and local regulations. This also helps maintain warranty validity."
    }
  ],
  Westminster: [
    {
      question: "How does Westminster's climate affect vinyl fencing?",
      answer: "Westminster's semi-arid climate with hot summers and cold winters is ideal for vinyl fencing. The material resists UV damage, doesn't warp in heat, and withstands cold temperatures without cracking or splitting."
    },
    {
      question: "What are the local regulations for vinyl fences in Westminster?",
      answer: "Westminster has specific fence regulations. Generally, residential fences can be up to 4 feet high in front yards and 6 feet high in side and back yards. Always check with Westminster's Community Development Department before installation."
    },
    {
      question: "How long does a vinyl fence typically last in Westminster?",
      answer: "With proper installation and minimal maintenance, a vinyl fence in Westminster can last 20-30 years or more. Its resistance to local weather conditions contributes to its longevity."
    },
    {
      question: "What colors are available for vinyl fences in Westminster?",
      answer: "Vinyl fences in Westminster come in various colors, including white, tan, gray, and wood-grain textures. These options allow homeowners to match their fence to their property's aesthetic and neighborhood style."
    },
    {
      question: "How often should I maintain my vinyl fence in Westminster?",
      answer: "Vinyl fencing in Westminster requires minimal maintenance. An annual cleaning with mild soap and water is usually sufficient. No painting or staining is needed, making it a low-maintenance option for homeowners."
    },
    {
      question: "Can vinyl fencing withstand Westminster's occasional severe weather?",
      answer: "Yes, when properly installed, vinyl fencing can withstand Westminster's severe weather, including high winds and hailstorms. The flexibility of vinyl allows it to bend without breaking, and reinforced posts provide additional stability."
    },
    {
      question: "Are there environmental considerations for vinyl fencing in Westminster?",
      answer: "While vinyl is not biodegradable, it's recyclable and has a long lifespan, reducing the need for replacement. Many manufacturers use recycled materials in production, aligning with environmental consciousness."
    },
    {
      question: "How does vinyl fencing compare to other materials in terms of privacy in Westminster?",
      answer: "Vinyl fencing offers excellent privacy options in Westminster. Solid panel designs provide complete visual blocking, while the material's durability ensures long-lasting privacy without the need for frequent repairs or replacements."
    },
    {
      question: "Can I install a vinyl fence myself in Westminster?",
      answer: "While DIY installation is possible, professional installation is recommended to ensure proper setting and alignment, especially considering Westminster's specific climate challenges and local regulations. This also helps maintain warranty validity."
    }
  ],
  "Fort Collins": [
    {
      question: "How does Fort Collins' climate impact vinyl fencing?",
      answer: "Fort Collins' semi-arid climate with hot summers and cold winters is well-suited for vinyl fencing. Vinyl resists UV damage, doesn't warp in heat, and withstands cold temperatures without cracking or splitting."
    },
    {
      question: "What are the local regulations for vinyl fences in Fort Collins?",
      answer: "Fort Collins has specific fence regulations. Generally, residential fences can be up to 4 feet high in front yards and 6 feet high in side and back yards. Always check with Fort Collins' Zoning Department before installation."
    },
    {
      question: "How long can I expect a vinyl fence to last in Fort Collins?",
      answer: "With proper installation and care, a vinyl fence in Fort Collins can last 20-30 years or more. The material's resistance to UV rays, moisture, and temperature fluctuations contributes to its longevity."
    },
    {
      question: "What colors are available for vinyl fences in Fort Collins?",
      answer: "Vinyl fences in Fort Collins come in various colors, including white, tan, gray, and wood-grain textures. These options allow homeowners to match their fence to their property's aesthetic and neighborhood style."
    },
    {
      question: "How often should I maintain my vinyl fence in Fort Collins?",
      answer: "Vinyl fencing in Fort Collins requires minimal maintenance. An annual cleaning with mild soap and water is usually sufficient. No painting or staining is needed, making it a low-maintenance option for homeowners."
    },
    {
      question: "Can vinyl fencing withstand Fort Collins' occasional severe weather?",
      answer: "Yes, when properly installed, vinyl fencing can withstand Fort Collins' severe weather, including high winds and hailstorms. The flexibility of vinyl allows it to bend without breaking, and reinforced posts provide additional stability."
    },
    {
      question: "How does vinyl fencing compare to wood fencing in Fort Collins?",
      answer: "Vinyl fencing in Fort Collins offers several advantages over wood: it's more durable, requires less maintenance, doesn't rot or attract pests, and maintains its appearance longer. However, wood may be less expensive initially and offers a more natural look."
    },
    {
      question: "Are there environmental considerations for vinyl fencing in Fort Collins?",
      answer: "While vinyl is not biodegradable, it's recyclable and has a long lifespan, reducing the need for replacement. Many manufacturers use recycled materials in production, aligning with Fort Collins' focus on sustainability."
    },
    {
      question: "How does vinyl fencing perform in Fort Collins' snowy winters?",
      answer: "Vinyl fencing performs well in Fort Collins' snowy conditions. It doesn't absorb moisture, preventing warping or rotting. However, avoid piling heavy snow against the fence to prevent potential damage."
    }
  ],
  "Wheat Ridge": [
    {
      question: "How does Wheat Ridge's climate affect vinyl fencing?",
      answer: "Wheat Ridge's climate, with its mix of sunny days and occasional severe weather, is well-suited for vinyl fencing. Vinyl resists UV damage, doesn't warp in heat, and withstands cold temperatures without cracking or splitting."
    },
    {
      question: "What are the local regulations for vinyl fences in Wheat Ridge?",
      answer: "Wheat Ridge has specific fence regulations. Generally, residential fences can be up to 4 feet high in front yards and 6 feet high in side and back yards. Always check with Wheat Ridge's Community Development Department before installation."
    },
    {
      question: "How long can I expect a vinyl fence to last in Wheat Ridge?",
      answer: "With proper installation and care, a vinyl fence in Wheat Ridge can last 20-30 years or more. The material's resistance to UV rays, moisture, and temperature fluctuations contributes to its longevity."
    },
    {
      question: "What colors are available for vinyl fences in Wheat Ridge?",
      answer: "Vinyl fences in Wheat Ridge come in various colors, including white, tan, gray, and wood-grain textures. These options allow homeowners to match their fence to their property's aesthetic and neighborhood style."
    },
    {
      question: "How often should I maintain my vinyl fence in Wheat Ridge?",
      answer: "Vinyl fencing in Wheat Ridge requires minimal maintenance. An annual cleaning with mild soap and water is usually sufficient. No painting or staining is needed, making it a low-maintenance option for homeowners."
    },
    {
      question: "Can vinyl fencing withstand Wheat Ridge's occasional severe weather?",
      answer: "Yes, when properly installed, vinyl fencing can withstand Wheat Ridge's severe weather, including high winds and hailstorms. The flexibility of vinyl allows it to bend without breaking, and reinforced posts provide additional stability."
    },
    {
      question: "How does vinyl fencing compare to wood fencing in Wheat Ridge?",
      answer: "Vinyl fencing in Wheat Ridge offers several advantages over wood: it's more durable, requires less maintenance, doesn't rot or attract pests, and maintains its appearance longer. However, wood may be less expensive initially and offers a more natural look."
    },
    {
      question: "Are there environmental considerations for vinyl fencing in Wheat Ridge?",
      answer: "While vinyl is not biodegradable, it's recyclable and has a long lifespan, reducing the need for replacement. Many manufacturers use recycled materials in production, aligning with environmental consciousness."
    },
    {
      question: "Can I install a vinyl fence myself in Wheat Ridge?",
      answer: "While DIY installation is possible, professional installation is recommended to ensure proper setting and alignment, especially considering Wheat Ridge's specific climate challenges and local regulations. This also helps maintain warranty validity."
    }
  ],
};

export default function VinylFenceFAQ() {
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
                <h2 className={styles.faqTitle}>Frequently Asked Questions About Vinyl Fencing</h2>
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
