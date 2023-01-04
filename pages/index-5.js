import React from 'react';
import Layout from '../components/layout/Layout';
import AboutTwo from '../components/sections/AboutTwo';
import BannerFive from '../components/sections/BannerFive';
import BlogOne from '../components/sections/BlogOne';
import ClientOne from '../components/sections/ClientOne';
import ContactFour from "../components/sections/ContactFour";
import Faq from "../components/sections/Faq";
import FeaturesSix from "../components/sections/FeaturesSix";
import IndustriesTwo from "../components/sections/IndustriesTwo";
import OfferFour from "../components/sections/OfferFour";
import Pricing from "../components/sections/Pricing";
import ProjectOne from "../components/sections/ProjectOne";
import ServiceFive from "../components/sections/ServiceFive";
import TestimonialFour from '../components/sections/TestimonialFour';

const Home5 = () => {
    return (
        <>
            <Layout HeaderStyle="five">
                {/* Banner Section Four*/}
                <BannerFive />
                {/*END Banner Section Four */}
                {/* Features Section Six */}
                <FeaturesSix />
                {/* End Features Section four */}
                {/* About Section Five */}
                <AboutTwo />
                {/*Emd About Section Five */}
                {/* Offer Section Four */}
                <OfferFour />
                {/* End Offer Section Four */}
                {/* Industries Section */}
                <IndustriesTwo />
                {/* End Industries Section */}
                {/* Project Section */}
                <ProjectOne addClass={" alternate pb-0"} />
                {/*End Project Section */}
                {/* Pricing Section */}
                <Pricing />
                {/* End Offer Section Four */}
                {/* Services Section Four */}
                <ServiceFive />
                {/* End Services Section Four*/}
                {/* FAQ Section */}
                <Faq />
                {/*End FAQ Section */}
                {/* Testimonial Section Three */}
                <TestimonialFour />
                {/* End Testimonial Section Three */}
                {/* Contact Section */}
                <ContactFour />
                {/*End Contact Section */}
                {/* News Section */}
                <BlogOne />
                {/*End News Section */}
                {/* Clients Section   */}
                <ClientOne />
                {/*End Clients Section */}

            </Layout>
        </>
    );
};

export default Home5;