import React from 'react';
import Layout from "../components/layout/Layout";
import PageTitle from "../components/sections/PageTitle";
import TeamDetails from "../components/sections/TeamDetails";
import TeamDetails2 from "../components/sections/TeamDetails2";
import AboutTwo from "../components/sections/AboutTwo";

export default function Home() {

    return (
        <>
            <Layout HeaderStyle="one">
                <PageTitle pageName="Team Details" />
                <AboutTwo/>
                <TeamDetails2 />
                <TeamDetails />
            </Layout>
        </>
    )
}
