import Link from 'next/link';
import React from 'react';

const AboutOne = () => {
    return (
        <>
            <section className="about-section pt-0">
                {/* Features Section */}
                <div className="features-section pull-up pt-0">
                    <div className="auto-container">
                        <div className="outer-box">
                            <div className="row">
                                {/* Feature Block */}
                                <div className="feature-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
                                    <div className="inner-box ">
                                        <div className="title-box">
                                            <i className="icon flaticon-business-002-graph" />
                                            <h5 className="title"><Link href="/page-about">Comprehensive Geotechnical Solutions</Link></h5>
                                        </div>
                                        <div className="text">When an unknown printer took <br />a galley type book.</div>
                                    </div>
                                </div>
                                {/* Feature Block */}
                                <div className="feature-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="400ms">
                                    <div className="inner-box ">
                                        <div className="title-box">
                                            <i className="icon flaticon-business-012-startup" />
                                            <h5 className="title"><Link href="/page-about">Accurate Engineering Surveying</Link></h5>
                                        </div>
                                        <div className="text">Our engineering surveying services utilize state-of-the-art equipment and software, providing accurate mapping, topographic surveys, and construction staking services to support construction activities and project planning.</div>
                                    </div>
                                </div>
                                {/* Feature Block */}
                                <div className="feature-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="800ms">
                                    <div className="inner-box ">
                                        <div className="title-box">
                                            <i className="icon flaticon-business-046-like" />
                                            <h5 className="title"><Link href="/page-about">Personalized Services</Link></h5>
                                        </div>
                                        <div className="text">We are committed to delivering personalized services that are tailored to meet each client's unique needs, ensuring exceptional attention to detail, quality workmanship, and commitment to safety.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Features Section*/}
                <div className="auto-container">
                    <div className="row">
                        <div className="content-column col-xl-6 col-lg-7 col-md-12 col-sm-12 order-2 wow fadeInRight" data-wow-delay="600ms">
                            <div className="inner-column">
                                <div className="sec-title">
                                    <span className="sub-title">About</span>
                                    <h2>Explore Engineering Consultants PVT. LTD.</h2>
                                    <div className="text">We are a Geotechnical Engineering and Engineering Surveying organization that provides complete solutions to clients and have an impeccable track record of executing a variety of projects all across India.</div>
                                </div>
                                <div className="content-box">
                                    <div className="info-box">
                                        <h5 className="title">High Quality IT Solutions for Startup</h5>
                                        <Link href="/#" className="read-more">More <i className="fa fa-long-arrow-alt-right" /></Link>
                                    </div>
                                    <div className="about-block">
                                        <i className="icon flaticon-business-018-startup" />
                                        <h5 className="title">Expertise</h5>
                                        <div className="text">Our team of geotechnical engineers and surveying specialists has a wealth of knowledge and expertise in providing creative and useful solutions for a variety of projects across India.</div>
                                    </div>
                                    <div className="about-block">
                                        <i className="icon flaticon-business-027-world" />
                                        <h5 className="title">Quality</h5>
                                        <div className="text">We are committed to delivering exceptional quality workmanship and attention to detail in every project we undertake, ensuring that our clients receive the best possible results.</div>
                                    </div>
                                </div>
                                <div className="btm-box">
                                    <Link href="/page-about" className="theme-btn btn-style-one"><span className="btn-title">Discover more</span></Link>
                                </div>
                            </div>
                        </div>
                        {/* Image Column */}
                        <div className="image-column col-xl-6 col-lg-5 col-md-12 col-sm-12">
                            <div className="inner-column wow fadeInLeft">
                                <figure className="image-1 overlay-anim wow fadeInUp"><img src="/images/resource/about-1.jpg" title='Oitech' /></figure>
                                
                                <div className="experience bounce-y">
                                    
                                    <strong>4500+</strong> Satisfied Clients
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AboutOne;