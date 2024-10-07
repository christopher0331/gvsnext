import Head from 'next/head';
// ... (other imports)

const FAQ = () => {
  const faqData = [
    { question: "What types of fences do you install?", answer: "We install wood, vinyl, chain-link, and ornamental iron fences." },
    { question: "How long does a typical fence installation take?", answer: "A typical fence installation takes 1-3 days, depending on the size and complexity of the project." },
    // ... more FAQ items
  ];

  return (
    <>
      <Head>
        <title>FAQ - GreenView Solutions</title>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": faqData.map(item => ({
                "@type": "Question",
                "name": item.question,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": item.answer
                }
              }))
            })
          }}
        />
      </Head>
      {/* ... rest of the FAQ page content ... */}
    </>
  );
}

export default FAQ;