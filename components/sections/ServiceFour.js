import Link from 'next/link';
import React from 'react';

const ServiceFour = () => {
    return (
        <>
            <section className="services-section-four">
                <div className="auto-container">
                    
                    <div className="row">
                    
                        {/* Service Block Four */}
                        <div className="service-block-four col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="400ms">
                            <div className="inner-box ">
                                <div className="icon-box">
                                    <i className="icon flaticon-business-012-startup" />
                                </div>
                                <h5 className="title"><Link href="/page-service-details">Our <br />Mission</Link></h5>
                                <div className="text">Our mission is to deliver high-quality geotechnical engineering and engineering surveying solutions that meet our clients' needs while prioritizing safety, sustainability, and efficiency.</div>
                            </div>
                        </div>
                        {/* Service Block Four */}
                        <div className="service-block-four col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="800ms">
                            <div className="inner-box ">
                                <div className="icon-box">
                                    <i className="icon flaticon-business-046-like" />
                                </div>
                                <h5 className="title"><Link href="/page-service-details">Our <br />Values</Link></h5>
                                <div className="text">Our mission is to deliver high-quality geotechnical engineering and engineering surveying solutions that meet our clients' needs while prioritizing safety, sustainability, and efficiency.</div>
                            </div>
                        </div>
                        {/* Service Block Four */}
                        <div className="service-block-four col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="1200ms">
                            <div className="inner-box ">
                                <div className="icon-box">
                                    <i className="icon flaticon-business-006-target" />
                                </div>
                                <h5 className="title"><Link href="/page-service-details">Our<br />Vision</Link></h5>
                                <div className="text"> Our vision is to be the leading geotechnical engineering and engineering surveying organization in India, recognized for our expertise, reliability, and customer-centric approach.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ServiceFour;