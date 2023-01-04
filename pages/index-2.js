import React from 'react';
import Layout from "../components/layout/Layout";
import AboutFour from "../components/sections/AboutFour";
import AboutThree from "../components/sections/AboutThree";
import BannerOne from "../components/sections/BannerOne";
import BlogOne from "../components/sections/BlogOne";
import ClientOne from "../components/sections/ClientOne";
import ContactOne from "../components/sections/ContactOne";
import CtaThree from "../components/sections/CtaThree";
import FeaturesThree from "../components/sections/FeaturesThree";
import FeaturesTwo from "../components/sections/FeaturesTwo";
import FunfactTwo from "../components/sections/FunfactTwo";
import LocationOne from "../components/sections/LocationOne";
import MapTwo from "../components/sections/MapTwo";
import OfferTwo from "../components/sections/OfferTwo";
import ProjectTwo from "../components/sections/ProjectTwo";
import ServiceTwo from "../components/sections/ServiceTwo";
import WhyChooseOne from "../components/sections/WhyChooseOne";

export default function Home2() {
    return (
        <>
            <Layout HeaderStyle="two">
                {/* Banner Section Two*/}
                <BannerOne />
                {/*END Banner Section Two */}
                {/* Features Section Two */}
                <FeaturesTwo />
                {/* End Features Section Two */}
                {/* About Section Three */}
                <AboutThree />
                {/*Emd About Section Two */}
                {/* Project Section */}
                <ProjectTwo />
                {/*End Project Section */}
                {/* Offer Section Two */}
                <OfferTwo />
                {/* End Offer Section */}
                {/* Fun Fact Section */}
                <FunfactTwo />
                {/* End Fun Fact Section */}
                {/* About Section four */}
                <AboutFour />
                {/*Emd About Section four */}
                {/* Clients Section   */}
                <ClientOne addClass={"alternate"} />
                {/*End Clients Section */}
                {/* Features Section Three */}
                <FeaturesThree />
                {/* End Features Section Two */}
                {/* Services Section Two */}
                <ServiceTwo />
                {/* End Services Section Two*/}
                {/* Locations Section */}
                <LocationOne />
                {/* End Locations Section */}
                {/* Why Choose Us */}
                <WhyChooseOne />
                {/*Emd Why Choose Us */}
                {/* Contact Section */}
                <ContactOne />
                {/*End FAQ Section */}
                {/* News Section */}
                <BlogOne />
                {/*End News Section */}
                {/* Call To Action Three */}
                <CtaThree />
                {/*End Call To Action Three */}
                {/* Map Section*/}
                <MapTwo />
                {/*End Map Section*/}

            </Layout>
        </>
    )
}
