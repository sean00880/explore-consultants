import React from 'react';
import Layout from "../components/layout/Layout";
import PageTitle2 from "../components/sections/PageTitle";
import PageTitle from "../components/sections/PageTitle2";
import ServiceDetails from "../components/sections/ServiceDetails4";
import ServiceDetails2 from "../components/sections/ServiceDetails3";

export default function Home() {

    return (
        <>
            <Layout HeaderStyle="one">
                <PageTitle pageName="Laboratory Testing of Rock & Soil" />
                <ServiceDetails />
            </Layout>
        </>
    )
}
