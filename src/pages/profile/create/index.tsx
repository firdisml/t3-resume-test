import dynamic from 'next/dynamic'
import { getSession } from "next-auth/react";
import MainLayout from "../../../../layout/MainLayout";
import type { GetServerSidePropsContext, GetServerSideProps } from "next";

const DynamicHeader = dynamic(() => import('./viewer'), {ssr: false})

export default function Index(props) {
  console.log(props)
  return <DynamicHeader />
}

Index.PageLayout = MainLayout;

// eslint-disable-next-line @typescript-eslint/require-await
export const getServerSideProps: GetServerSideProps = async (
    ctx: GetServerSidePropsContext
  ) => {
    const session = await getSession(ctx);
    if (!session)
      return { redirect: { statusCode: 307, destination: "/signin" } };
    return { props: session };
  };
  