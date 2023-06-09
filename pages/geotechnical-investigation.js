import React from 'react';
import Layout from "../components/layout/Layout";
import PageTitle from "../components/sections/PageTitle1";
import ServiceDetails from "../components/sections/ServiceDetails2";

export default function Home() {

    return (
        <>
            <Layout HeaderStyle="one">
                <PageTitle pageName="Geotechnical Investigation" />
                <ServiceDetails />
            </Layout>
        </>
    )
}
