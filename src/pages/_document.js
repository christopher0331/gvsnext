import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Preconnect to Google domains for performance */}
          <link rel="preconnect" href="https://googleads.g.doubleclick.net" />
          <link rel="preconnect" href="https://www.google-analytics.com" />
          <link rel="preconnect" href="https://www.gstatic.com" />
          
          {/* Google Tag Manager - Global site tag (gtag.js) for Google Analytics and Ads */}
          <script async src="https://www.googletagmanager.com/gtag/js?id=UA-131443458-1"></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                // Configure both UA and AW tags
                gtag('config', 'UA-131443458-1');
                gtag('config', 'AW-699335145', {
                  'phone_conversion_number': '3033588168'
                });
              `,
            }}
          />

          {/* Alternate link for language */}
          <link rel="alternate" hrefLang="en" href="https://greenviewsolutions.net" />

          {/* Other tags like favicons, apple-touch-icons, etc. can also go here */}
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
