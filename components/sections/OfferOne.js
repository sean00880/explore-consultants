import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';
const OfferOne = () => {
    const [isOpen, setOpen] = useState(false)
    return (
        <>
            <section className="offer-section" id="whyus">
                <div className="auto-container">
                    <div className="row">
                        <div className="content-column col-lg-6 col-md-12">
                            <div className="inner-column">
                                <div className="sec-title light">
                                    <span className="sub-title">Why Choose Us?</span>
                                    <h2>The Best In Our Industry</h2>
                                    <div className="text">We understand that every project is unique, and we provide tailored solutions to meet your specific needs.</div>
                                </div>
                                <div className="info-box">
                                    <i className="icon flaticon-business-036-idea" />
                                    <h5 className="title">Here are some compelling reasons to choose us as your trusted partner:</h5>
                                </div>
                                <ul className="list-style-two">
                                    <li><i className="fa fa-check-circle" /> 23 Years of Experience</li>
                                    <li><i className="fa fa-check-circle" /> 4500+ Projects Completed</li>
                                    <li><i className="fa fa-check-circle" /> ISO Certified 9001:2015</li>
                                </ul>
                            </div>
                        </div>
                        <div className="image-column col-lg-6 col-md-12 col-sm-12">
                            <div className="inner-column">
                                <div className="image-box">
                                    <figure className="image"><img src="/images/resource/image-3.jpg" title='Explore Consultants' /></figure>
                                    <div className="caption-box wow slideInRight">
                                        <div className="icon-box">
                                            <a onClick={() => setOpen(true)} className="play-now-two lightbox-image"><i className="icon fa fa-play" /></a>
                                        </div>
                                        <div className="title-box">
                                            <h5 className="title">We work closely with our clients to understand their requirements, and we provide personalized services to ensure that your project is successful.</h5>
                                        </div>
                                    </div>
                                    <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="L61p2uyiMSo" onClose={() => setOpen(false)} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default OfferOne;