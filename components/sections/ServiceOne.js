import Link from 'next/link';
import React from 'react';

const ServiceOne = () => {
    return (
        <>
            <section className="services-section">
                <div className="auto-container">
                    <div className="sec-title text-center">
                        <span className="sub-title">Services we’re offering</span>
                        <h2>We offer realistic and long-lasting solutions to the most difficult geotechnical problems</h2>
                    </div>
                    <div className="row">
                        {/* Service Block */}
                        <div className="service-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><Link href="/page-service-details"><img src="/images/resource/service-1.jpg" title='Oitech' /></Link></figure>
                                    <div className="icon-box"><img src="/images/resource/icon-1.png" title='Oitech' /></div>
                                </div>
                                <div className="content-box">
                                    <h5 className="title"><Link href="/page-service-details">Geotechnical Investigation</Link></h5>
                                    <div className="text">We provide a range of Geotechnical Investigation services to our clients.</div>
                                    <Link href="/page-service-details" className="read-more">read More <i className="fa fa-long-arrow-alt-right" /></Link>
                                </div>
                            </div>
                        </div>
                        {/* Service Block */}
                        <div className="service-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="300ms">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><Link href="/page-service-details"><img src="/images/resource/service-2.jpg" title='Oitech' /></Link></figure>
                                    <div className="icon-box"><img src="/images/resource/icon-2.png" title='Oitech' /></div>
                                </div>
                                <div className="content-box">
                                    <h5 className="title"><Link href="/page-service-details">Topographical Surveying</Link></h5>
                                    <div className="text">We conduct all types of Topographical Surveying using Total Station and DGPS.</div>
                                    <Link href="/page-service-details" className="read-more">read More <i className="fa fa-long-arrow-alt-right" /></Link>
                                </div>
                            </div>
                        </div>
                        {/* Service Block */}
                        <div className="service-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="600ms">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><Link href="/page-service-details"><img src="/images/resource/service-3.jpg" title='Oitech' /></Link></figure>
                                    <div className="icon-box"><img src="/images/resource/icon-3.png" title='Oitech' /></div>
                                </div>
                                <div className="content-box">
                                    <h5 className="title"><Link href="/page-service-details">Laboratory Testing of Soil & Rock</Link></h5>
                                    <div className="text">We conduct Geotechnical Tests on all samples in our in-house soil and rock testing lab. </div>
                                    <Link href="/page-service-details" className="read-more">read More <i className="fa fa-long-arrow-alt-right" /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ServiceOne;