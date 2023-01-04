import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';
const OfferThree = () => {
    const [isOpen, setOpen] = useState(false)
    return (
        <>
            <section className="offer-section-three pt-0">
                <div className="auto-container">
                    <div className="row">
                        {/* Content Column */}
                        <div className="content-column col-lg-6 col-md-12 order-2">
                            <div className="inner-column wow fadeInRight">
                                <div className="sec-title">
                                    <span className="sub-title">company benefits</span>
                                    <h2>Always Deliver More than you Expected</h2>
                                </div>
                                <div className="info-box">
                                    <span className="count">01</span>
                                    <h5 className="title">End to End Developement</h5>
                                    <div className="text">Sed non odio non elit porttitor tincidunt. Donec fermentum tendency elit sit amet</div>
                                </div>
                                <div className="info-box">
                                    <span className="count">02</span>
                                    <h5 className="title">Software IT Outsource</h5>
                                    <div className="text">Sed non odio non elit porttitor tincidunt. Donec fermentum tendency elit sit amet</div>
                                </div>
                                <div className="info-box">
                                    <span className="count">03</span>
                                    <h5 className="title">Digital Marketing</h5>
                                    <div className="text">Sed non odio non elit porttitor tincidunt. Donec fermentum tendency elit sit amet</div>
                                </div>
                            </div>
                        </div>
                        {/* Content Column */}
                        <div className="image-column col-lg-6 col-md-12 col-sm-12">
                            <div className="inner-column wow fadeInLeft">
                                <div className="image-box">
                                    <figure className="image"><img src="/images/resource/benefits.jpg" alt /></figure>
                                    <div className="video-box">
                                        <a onClick={() => setOpen(true)} className="play-btn lightbox-image"><i className="icon fa fa-play" /></a>
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

export default OfferThree;