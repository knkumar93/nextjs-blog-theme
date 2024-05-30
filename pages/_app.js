import '../styles/globals.css';
import 'prismjs/themes/prism-tomorrow.css';
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4284151384892090"
     crossorigin="anonymous"></script>
      <span className="theme-bejamas" />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
