import React from 'react';
import Layout from "../components/layout/Layout";
import PageTitle from "../components/sections/PageTitle3";
import ServiceDetails from "../components/sections/ServiceDetails3";
import ServiceDetails2 from "../components/sections/ServiceDetails";

export default function Home() {

    return (
        <>
            <Layout HeaderStyle="one">
                <PageTitle pageName="Topographical Surveying" />
                <ServiceDetails />
            </Layout>
        </>
    )
}
