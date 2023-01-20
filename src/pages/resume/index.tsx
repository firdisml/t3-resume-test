import React, { useRef, useState } from 'react'
import ResumeLayout from '../../../layout/ResumeLayout'
import dynamic from 'next/dynamic'
import type { GetServerSidePropsContext, GetServerSideProps } from "next";
import { getSession } from 'next-auth/react';
import { api } from "../../utils/api";

const DynamicHeader = dynamic(() => import('../profile/create/viewer'), { ssr: false })

function Index(props) {
    const [characters, update_characters] = useState<any>();

    const experiences = api.experience.fetch.useQuery({ id: props?.user?.id }, {
        onSuccess: (data) => {
            update_characters(data)
        }
    });

    return (<>

        {characters ? <DynamicHeader experiences={characters}/> : null}
        
    </>
    )
}

Index.PageLayout = ResumeLayout;
export default Index

export const getServerSideProps: GetServerSideProps = async (
    ctx: GetServerSidePropsContext
) => {
    const session = await getSession(ctx);
    if (!session)
        return { redirect: { statusCode: 307, destination: "/signin" } };
    return { props: session };
};
