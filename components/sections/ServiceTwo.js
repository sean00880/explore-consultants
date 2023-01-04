import Link from 'next/link';
import React from 'react';

const ServiceTwo = () => {
    return (
        <>
            <section className="services-section-two">
                <div className="auto-container">
                    <div className="row">
                        <div className="title-column col-lg-5 col-md-12">
                            <div className="sec-title light">
                                <span className="sub-title">What we offer</span>
                                <h2>Help you Overcome your Technology Challenges</h2>
                                <Link href="page-services.html" className="theme-btn btn-style-one"><span className="btn-title">Discover more</span></Link>
                            </div>
                        </div>
                        <div className="services-column col-lg-7 col-md-12">
                            <div className="inner-column">
                                {/* Services Carousel Two */}
                                <div className="swiper-container services-carousel-two">
                                    <div className="swiper-wrapper">
                                        {/* Service Block Two */}
                                        <div className="swiper-slide service-block-two">
                                            <div className="inner-box">
                                                <div className="icon fa fa-globe" />
                                                <h6 className="title"><Link href="page-service-details.html">Website</Link></h6>
                                            </div>
                                        </div>
                                        {/* Service Block Two */}
                                        <div className="swiper-slide service-block-two">
                                            <div className="inner-box">
                                                <div className="icon fab fa-apple" />
                                                <h6 className="title"><Link href="page-service-details.html">IOS</Link></h6>
                                            </div>
                                        </div>
                                        {/* Service Block Two */}
                                        <div className="swiper-slide service-block-two">
                                            <div className="inner-box">
                                                <div className="icon fab fa-android" />
                                                <h6 className="title"><Link href="page-service-details.html">Android</Link></h6>
                                            </div>
                                        </div>
                                        {/* Service Block Two */}
                                        <div className="swiper-slide service-block-two">
                                            <div className="inner-box">
                                                <div className="icon fab fa-ioxhost" />
                                                <h6 className="title"><Link href="page-service-details.html">IOT</Link></h6>
                                            </div>
                                        </div>
                                        {/* Service Block Two */}
                                        <div className="swiper-slide service-block-two">
                                            <div className="inner-box">
                                                <div className="icon fa fa-tv" />
                                                <h6 className="title"><Link href="page-service-details.html">Television</Link></h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ServiceTwo;