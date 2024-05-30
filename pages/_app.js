import '../styles/globals.css';
import 'prismjs/themes/prism-tomorrow.css';
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <span className="theme-bejamas" />
      
      <Script 
        id="Adsense-id" 
          data-ad-client="ca-pub-4284151384892090"
            async strategy="afterInteractive"
              onError={ (e) => { console.error('Script failed to load', e) }}
                src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4284151384892090"
                  />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
