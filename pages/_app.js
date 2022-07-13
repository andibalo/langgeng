import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import { DefaultSeo } from "next-seo";
import { theme } from "../theme";
import SEOConfig from "../next-seo.config";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <DefaultSeo
        title="Platform untuk ngobrol langsung dengan calon soulmate kamu | Soulmeet"
        description="Soulmeet adalah platform bagi kamu yang serius mencari pasangan untuk bertemu dan ngobrol langunsg dengan future soulmate kamu."
        {...SEOConfig}
      />
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-2SMTRDQC47"
        strategy="afterInteractive"
      ></Script>
      <Script id="google-analytics" strategy="afterInteractive">
        {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
            
              gtag('config', 'G-2SMTRDQC47');
          `}
      </Script>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
