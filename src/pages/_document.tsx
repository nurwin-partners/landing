import { Html, Head, Main, NextScript } from "next/document";
import { NextSeo } from "next-seo";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <link rel="icon" href="/assets/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Unbounded:wght@200..900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <NextSeo
        title={"Nurwin Partners"}
        description={"Nurwin Partners"}
        canonical={"https://nurwin.partners"}
        openGraph={{
          title: "Nurwin Partners",
          description: "Nurwin Partners",
          url: "https://nurwin.partners",
          locale: "en_US",
          site_name: "Nurwin Partners",
        }}
      />
      <body className="antialiased bg-linear-(--color-gradient)">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
