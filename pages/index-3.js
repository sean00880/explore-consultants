import Link from "next/link";
import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import AboutFive from "../components/sections/AboutFive";
import BannerTwo from "../components/sections/BannerTwo";
import BlogOne from "../components/sections/BlogOne";
import ClientOne from "../components/sections/ClientOne";
import ContactTwo from "../components/sections/ContactTwo";
import CtaFour from "../components/sections/CtaFour";
import CtaOne from "../components/sections/CtaOne";
import FeaturesFour from "../components/sections/FeaturesFour";
import LocationTwo from "../components/sections/LocationTwo";
import OfferThree from "../components/sections/OfferThree";
import ProjectThree from "../components/sections/ProjectThree";
import ServiceThree from "../components/sections/ServiceThree";
import TestimonialTwo from "../components/sections/TestimonialTwo";
import VideoOne from "../components/sections/VideoOne";
import WhyChooseTwo from "../components/sections/WhyChooseTwo";

const Home3 = () => {
    const [isOpen, setOpen] = useState(false)
    return (
        <>
            <Layout HeaderStyle="three">
                {/* Banner Section Two*/}
                <BannerTwo />
                {/*END Banner Section Two */}
                {/* Clients Section   */}
                <ClientOne addClass={"border-bottom"} />
                {/*End Clients Section */}
                {/* Services Section Three */}
                <ServiceThree />
                {/* End Services Section Three */}
                {/* About Section Five */}
                <AboutFive />
                {/*Emd About Section Five */}
                {/* Video Section */}
                <VideoOne />
                {/*End Video Section */}
                {/* Offer Section Three */}
                <OfferThree />
                {/* End Offer Section */}
                {/* Project Section Three*/}
                <ProjectThree />
                {/*End Project Section Three*/}
                {/* Why Choose Us Two*/}
                <WhyChooseTwo />
                {/*Emd Why Choose Us */}
                {/* Call To Action */}
                <CtaOne addClass={"alternate"} />
                {/*End Call To Action */}
                {/* Testimonial Section Two */}
                <TestimonialTwo />
                {/* End Testimonial Section */}
                {/* Contact Section */}
                <ContactTwo />
                {/*End FAQ Section */}
                {/* Features Section Four */}
                <FeaturesFour />
                {/* Features Section Four */}
                {/* News Section */}
                <BlogOne addClass={"alternate"} />
                {/*End News Section */}
                {/* Locations Section */}
                <LocationTwo />
                {/* End Locations Section */}
                {/* Call To Action Four */}
                <CtaFour />
                {/*End Call To Action Four */}

            </Layout>
        </>
    );
};

export default Home3;