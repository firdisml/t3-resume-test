import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { api } from "../utils/api";
import "../styles/globals.css";
import Script from 'next/script'


const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}: any) => {
  return (
    <SessionProvider session={session}>
      { Component.PageLayout ? (
        <Component.PageLayout>
          <Component {...pageProps} />
        </Component.PageLayout>
      ) : (
        <Component {...pageProps} />
      )}
    <Script src="../path/to/flowbite/dist/flowbite.min.js" async/>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
