import { useState } from 'react';
import styles from './FAQSection.module.scss';

export default function FAQSection({ faqCategories }) {
  const [activeCategory, setActiveCategory] = useState(0);
  const [activeQuestions, setActiveQuestions] = useState({});

  const toggleQuestion = (categoryIndex, questionIndex) => {
    setActiveQuestions(prev => {
      const key = `${categoryIndex}-${questionIndex}`;
      return {
        ...prev,
        [key]: !prev[key]
      };
    });
  };

  return (
    <section className={styles.faqSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
        <p className={styles.sectionSubtitle}>Find answers to common questions about backflow testing and our services</p>
        
        <div className={styles.faqContainer}>
          <div className={styles.categoryTabs}>
            {faqCategories.map((category, categoryIndex) => (
              <button
                key={categoryIndex}
                className={`${styles.categoryTab} ${activeCategory === categoryIndex ? styles.active : ''}`}
                onClick={() => setActiveCategory(categoryIndex)}
              >
                <span className={styles.categoryIcon}>{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>
          
          <div className={styles.faqContent}>
            {faqCategories[activeCategory].faqs.map((faq, questionIndex) => (
              <div 
                key={questionIndex} 
                className={styles.faqItem}
              >
                <button 
                  className={styles.question}
                  onClick={() => toggleQuestion(activeCategory, questionIndex)}
                  aria-expanded={activeQuestions[`${activeCategory}-${questionIndex}`]}
                >
                  {faq.question}
                  <span className={styles.arrow}>
                    {activeQuestions[`${activeCategory}-${questionIndex}`] ? '−' : '+'}
                  </span>
                </button>
                <div 
                  className={`${styles.answer} ${activeQuestions[`${activeCategory}-${questionIndex}`] ? styles.open : ''}`}
                >
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
