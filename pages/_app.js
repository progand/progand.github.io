import { ThemeProvider } from "next-themes";
import Script from "next/script";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <Script id="matomo-vitalsigns">{`
            var _paq = window._paq = window._paq || [];
            /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
            _paq.push(['trackPageView']);
            _paq.push(['enableLinkTracking']);
            (function() {
              var u="https://analytics.vitalsignstracker.com/";
              _paq.push(['setTrackerUrl', u+'js/tracker.php']);
              _paq.push(['setSiteId', '21']);
              var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
              g.async=true; g.src=u+'js/tracker.php'; s.parentNode.insertBefore(g,s);
            })();
        `}</Script>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
