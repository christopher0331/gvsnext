import { useState, useEffect, useRef } from 'react';
import styles from './FAQSection.module.scss';

const FAQSection = ({ faqCategories }) => {
  const [activeCategory, setActiveCategory] = useState(faqCategories[0]?.name || '');
  const [expandedFaqs, setExpandedFaqs] = useState({});
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const searchInputRef = useRef(null);

  const toggleFaq = (categoryName, questionIndex) => {
    setExpandedFaqs(prev => {
      const key = `${categoryName}-${questionIndex}`;
      return {
        ...prev,
        [key]: !prev[key]
      };
    });
  };

  const isFaqExpanded = (categoryName, questionIndex) => {
    const key = `${categoryName}-${questionIndex}`;
    return expandedFaqs[key] || false;
  };

  // Search functionality
  useEffect(() => {
    if (searchQuery.trim() === '') {
      setIsSearching(false);
      setSearchResults([]);
      return;
    }

    setIsSearching(true);
    const query = searchQuery.toLowerCase();
    
    const results = faqCategories.flatMap(category => 
      category.faqs
        .map((faq, index) => ({
          ...faq,
          categoryName: category.name,
          categoryIcon: category.icon,
          questionIndex: index,
          matches: {
            question: faq.question.toLowerCase().includes(query),
            answer: faq.answer.toLowerCase().includes(query)
          }
        }))
        .filter(faq => faq.matches.question || faq.matches.answer)
    );

    setSearchResults(results);

    // Auto-expand search results
    const newExpandedState = {};
    results.forEach(result => {
      const key = `${result.categoryName}-${result.questionIndex}`;
      newExpandedState[key] = true;
    });
    setExpandedFaqs(prev => ({ ...prev, ...newExpandedState }));
  }, [searchQuery, faqCategories]);

  const clearSearch = () => {
    setSearchQuery('');
    setIsSearching(false);
    setSearchResults([]);
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  };

  const highlightText = (text, query) => {
    if (!query.trim() || !text.includes(query.toLowerCase())) {
      return text;
    }

    const parts = text.split(new RegExp(`(${query})`, 'gi'));
    return parts.map((part, index) => 
      part.toLowerCase() === query.toLowerCase() 
        ? <mark key={index} className={styles.highlight}>{part}</mark> 
        : part
    );
  };

  return (
    <section className={styles.faqSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
        <p className={styles.sectionSubtitle}>
          Everything you need to know about outdoor living spaces in Colorado
        </p>

        {/* Search Box */}
        <div className={styles.searchContainer}>
          <div className={styles.searchInputWrapper}>
            <input
              ref={searchInputRef}
              type="text"
              className={styles.searchInput}
              placeholder="Search for answers..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Search FAQs"
            />
            {searchQuery && (
              <button 
                className={styles.clearSearch} 
                onClick={clearSearch}
                aria-label="Clear search"
              >
                ×
              </button>
            )}
          </div>
          {isSearching && (
            <div className={styles.searchStatus}>
              Found {searchResults.length} result{searchResults.length !== 1 ? 's' : ''}
              {searchResults.length > 0 && <button onClick={clearSearch}>Clear</button>}
            </div>
          )}
        </div>

        <div className={styles.faqContent}>
          {!isSearching && (
            <>
              {/* Category Navigation */}
              <div className={styles.categoryNav}>
                {faqCategories.map((category) => (
                  <button
                    key={category.name}
                    className={`${styles.categoryButton} ${activeCategory === category.name ? styles.active : ''}`}
                    onClick={() => setActiveCategory(category.name)}
                  >
                    <span className={styles.categoryIcon}>{category.icon}</span>
                    <span className={styles.categoryName}>{category.name}</span>
                  </button>
                ))}
              </div>

              {/* FAQ Accordion - Normal View */}
              <div className={styles.faqAccordion}>
                {faqCategories
                  .filter(category => activeCategory === category.name)
                  .map((category) => (
                    <div key={category.name} className={styles.faqCategory}>
                      <h3 className={styles.categoryTitle}>
                        <span className={styles.categoryIcon}>{category.icon}</span>
                        {category.name}
                      </h3>
                      <div className={styles.faqList}>
                        {category.faqs.map((faq, index) => (
                          <div 
                            key={index} 
                            className={`${styles.faqItem} ${isFaqExpanded(category.name, index) ? styles.expanded : ''}`}
                          >
                            <button 
                              className={styles.faqQuestion}
                              onClick={() => toggleFaq(category.name, index)}
                              aria-expanded={isFaqExpanded(category.name, index)}
                            >
                              {faq.question}
                              <span className={styles.toggleIcon}>
                                {isFaqExpanded(category.name, index) ? '−' : '+'}
                              </span>
                            </button>
                            <div className={styles.faqAnswer}>
                              <p>{faq.answer}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
              </div>
            </>
          )}

          {/* Search Results */}
          {isSearching && (
            <div className={styles.searchResults}>
              {searchResults.length > 0 ? (
                <div className={styles.faqList}>
                  {searchResults.map((result, index) => (
                    <div 
                      key={index} 
                      className={`${styles.faqItem} ${styles.searchResultItem} ${styles.expanded}`}
                    >
                      <div className={styles.searchResultCategory}>
                        <span className={styles.categoryIcon}>{result.categoryIcon}</span>
                        {result.categoryName}
                      </div>
                      <button 
                        className={styles.faqQuestion}
                        onClick={() => toggleFaq(result.categoryName, result.questionIndex)}
                        aria-expanded={true}
                      >
                        {highlightText(result.question, searchQuery)}
                        <span className={styles.toggleIcon}>−</span>
                      </button>
                      <div className={styles.faqAnswer}>
                        <p>{highlightText(result.answer, searchQuery)}</p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className={styles.noResults}>
                  <p>No results found for &quot;{searchQuery}&quot;</p>
                  <p>Try a different search term or browse by category</p>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Mobile Category Dropdown - Only show when not searching */}
        {!isSearching && (
          <div className={styles.mobileCategorySelect}>
            <select 
              value={activeCategory} 
              onChange={(e) => setActiveCategory(e.target.value)}
              aria-label="Select FAQ category"
            >
              {faqCategories.map((category) => (
                <option key={category.name} value={category.name}>
                  {category.icon} {category.name}
                </option>
              ))}
            </select>
          </div>
        )}
      </div>

      {/* Hidden FAQ Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqCategories.flatMap(category => 
              category.faqs.map(faq => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": faq.answer
                }
              }))
            )
          })
        }}
      />
    </section>
  );
};

export default FAQSection;
