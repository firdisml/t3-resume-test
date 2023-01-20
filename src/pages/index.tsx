import MainLayout from "../../layout/MainLayout";
import { signIn, signOut, useSession, getSession } from "next-auth/react";
import { api } from "../utils/api";
import { GetServerSidePropsContext, GetServerSideProps } from "next";
import { useEffect } from "react";

function Index(props) {
  return (
    <>
    Home
    </>
  );
}

Index.PageLayout = MainLayout;


export default Index;

// eslint-disable-next-line @typescript-eslint/require-await
export const getServerSideProps: GetServerSideProps = async (
  ctx: GetServerSidePropsContext
) => {

  const session = await getSession(ctx)
  if (!session) return { redirect: { statusCode: 307, destination: "/signin" } };
  return { props: session }
}