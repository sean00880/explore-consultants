import Link from "next/link";
import React, { useState } from "react";
import Layout from '../components/layout/Layout';
import AboutSix from "../components/sections/AboutSix";
import BannerFour from "../components/sections/BannerFour";
import BlogTwo from "../components/sections/BlogTwo";
import ClientOne from "../components/sections/ClientOne";
import ContactThree from "../components/sections/ContactThree";
import CtaFive from "../components/sections/CtaFive";
import CtaTwo from "../components/sections/CtaTwo";
import FeaturesFive from "../components/sections/FeaturesFive";
import Industries from "../components/sections/Industries";
import ProjectOne from "../components/sections/ProjectOne";
import ServiceFour from "../components/sections/ServiceFour";
import TeamTwo from "../components/sections/TeamTwo";
import TestimonialThree from "../components/sections/TestimonialThree";
import WhyChooseThree from "../components/sections/WhyChooseThree";
import WorkSection from "../components/sections/WorkSection";
import BlogSlider from '../components/slider/BlogSlider';
import Brand from '../components/slider/Brand';
import IntroSlider4 from '../components/slider/IntroSlider4';
import ProjectSlider from '../components/slider/ProjectSlider';
import Testimonial3 from '../components/slider/Testimonial3';

const Home4 = () => {

    return (
        <>
            <Layout HeaderStyle="four">
                {/* Banner Section Three*/}
                <BannerFour />
                {/*END Banner Section Three */}
                {/* Call To Action Two */}
                <CtaTwo />
                {/*End Call To Action Two */}
                {/* Services Section Four */}
                <ServiceFour />
                {/* End Services Section Four*/}
                {/* About Section Six*/}
                <AboutSix />
                {/*Emd About Section Six*/}
                {/* Project Section */}
                <ProjectOne addClass={"style-two"} />
                {/*End Project Section */}
                {/* Work Section */}
                <WorkSection />
                {/* End Work Section */}
                {/* Testimonial Section Three */}
                <TestimonialThree />
                {/* End Testimonial Section Three */}
                {/* Features Section Five */}
                <FeaturesFive />
                {/* End Features Section Five */}
                {/* Why Choose Us Three*/}
                <WhyChooseThree />
                {/*Emd Why Choose Us Three */}
                {/* Industries Section */}
                <Industries />
                {/* End Industries Section */}
                {/* Team Section */}
                <TeamTwo />
                {/* End Team Section */}
                {/* Clients Section   */}
                <ClientOne addClass={"alternate"} />
                {/*End Clients Section */}
                {/* News Section Two */}
                <BlogTwo />
                {/*End News Section Two */}
                {/* Contact Section Three */}
                <ContactThree />
                {/*End Contact Section Three */}
                {/* Call To Action Five */}
                <CtaFive />
                {/*End Call To Action Five */}

            </Layout>
        </>
    );
};

export default Home4;