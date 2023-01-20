import type { NextPage } from "next";
import { Html, Head, Main, NextScript } from "next/document";
import Script from 'next/script'

const Document: NextPage = () => {
  return (
    <Html className="h-screen bg-gray-100">
      <Head>
        <script defer src="../path/to/flowbite/dist/flowbite.js"></script>
      </Head>
      <body className="h-screen">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default Document;