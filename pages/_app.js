import '../styles/globals.css';
import 'prismjs/themes/prism-tomorrow.css';
import { GoogleAdSense } from "nextjs-google-adsense"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <span className="theme-bejamas" />
      <GoogleAdSense publisherId="ca-pub-4284151384892090" />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
