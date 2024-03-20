// pages/_document.js
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* Global site tag (gtag.js) - Google Analytics */}

          <script async src="https://www.googletagmanager.com/gtag/js?id=UA-131443458-1"></script>
          
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'UA-131443458-1');
              `,
            }}
          />

          {/* Additional Google tag (gtag.js) */}
          
          <script async src="https://www.googletagmanager.com/gtag/js?id=AW-699335145"></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'AW-699335145');
                gtag('config', 'AW-699335145/nRGHCKbB1OoDEOmDvM0C', {
                  'phone_conversion_number': '3033588168'
                });
              `,
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
