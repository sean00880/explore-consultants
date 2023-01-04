import React from 'react';
import Layout from "../components/layout/Layout";
import AboutOne from "../components/sections/AboutOne";
import BannerOne from "../components/sections/BannerOne";
import BlogOne from "../components/sections/BlogOne";
import ClientOne from "../components/sections/ClientOne";
import CtaOne from "../components/sections/CtaOne";
import CtaTwo from "../components/sections/CtaTwo";
import FaqOne from "../components/sections/FaqOne";
import FunfactOne from "../components/sections/FunfactOne";
import MapOne from "../components/sections/MapOne";
import OfferOne from "../components/sections/OfferOne";
import ProjectOne from "../components/sections/ProjectOne";
import ServiceOne from "../components/sections/ServiceOne";
import TeamOne from "../components/sections/TeamOne";
import TestimonialOne from "../components/sections/TestimonialOne";

export default function Home() {

    return (
        <>
            <Layout HeaderStyle="one">
                {/* Banner Section One*/}
                <BannerOne />
                {/*END Banner Section One */}
                {/* About Section */}
                <AboutOne />
                {/*Emd About Section */}
                {/* Services Section */}
                <ServiceOne />
                {/* End Services Section*/}
                {/* Offer Section */}
                <OfferOne />
                {/* End Offer Section */}
                {/* Call To Action Two */}
                <CtaOne />
                {/*End Call To Action Two */}
                {/* Project Section */}
                <ProjectOne />
                {/*End Project Section */}
                {/* Testimonial Section */}
                <TestimonialOne />
                {/* End Testimonial Section */}
                {/* Fun Fact Section */}
                <FunfactOne />
                {/* End Fun Fact Section */}
                {/* Team Section */}
                <TeamOne />
                {/* End Team Section */}
                {/* Clients Section   */}
                <ClientOne />
                {/*End Clients Section */}
                {/* FAQ Section */}
                <FaqOne />
                {/*End FAQ Section */}
                {/* News Section */}
                <BlogOne />
                {/*End News Section */}
                {/* Call To Action Two */}
                <CtaTwo />
                {/*End Call To Action Two */}
                {/* Map Section*/}
                <MapOne />
                {/*End Map Section*/}
            </Layout>
        </>
    )
}
