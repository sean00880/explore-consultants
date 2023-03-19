import Link from 'next/link';
import React, { useState } from 'react'
import ModalVideo from 'react-modal-video';
import SwiperCore, { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Autoplay, Navigation]);
const IntroSlider1 = () => {

    const [isOpen, setOpen] = useState(false)


    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false
                }}
                navigation={{
                    prevEl: ".swiper-button-prev-style-3",
                    nextEl: ".swiper-button-next-style-3",
                }}
                // breakpoints={{
                //     320: {
                //         slidesPerView: 1,
                //         spaceBetween: 30,
                //     },
                //     575: {
                //         slidesPerView: 1,
                //         spaceBetween: 30,
                //     },
                //     767: {
                //         slidesPerView: 1,
                //         spaceBetween: 30,
                //     },
                //     991: {
                //         slidesPerView: 2,
                //         spaceBetween: 30,
                //     },
                //     1199: {
                //         slidesPerView: 4,
                //         spaceBetween: 30,
                //     },
                //     1350: {
                //         slidesPerView: 5,
                //         spaceBetween: 30,
                //     },
                // }}
                className="project-carousel"
            >
                {/* {data.map((item, i) => ( */}
                <SwiperSlide>
                    <div className="slide-item">
                        <div className="bg-image" style={{ backgroundImage: 'url(images/main-slider/2.jpg)' }} />
                        <div className="auto-container">
                            <div className="content-box">
                                <h1 className="title animate-2">Geotechnical <br />Investigation</h1>
                                <span className="sub-title animate-1">Geotechnical Investigation (Soil Investigation) is the very first step undertaken for construction or consolidation of a site and is essential for making recommendations for technical projects after the assessment of sub-soil strata.</span>
                                <div className="btn-box animate-3">
                                    <Link href="/#about" className="theme-btn btn-style-one"><span className="btn-title">Explore</span></Link>
                                    <a onClick={() => setOpen(true)} className="play-btn lightbox-image"><i className="icon fa fa-play" /> watch video</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            
                <SwiperSlide>
                    <div className="slide-item">
                        <div className="bg-image" style={{ backgroundImage: 'url(images/main-slider/1.jpg)' }} />
                        <div className="auto-container">
                            <div className="content-box">
                                <h1 className="title animate-2">Topographical<br />Surveying</h1>
                            <span className="sub-title animate-1">Topographical surveying helps in mapping the contours and existing features on the surface of the ground or slightly below it and serves as a base map for construction of a structure.</span>
                                <div className="btn-box animate-3">
                                    <Link href="/#about" className="theme-btn btn-style-one"><span className="btn-title">Explore</span></Link>
                                    <a onClick={() => setOpen(true)} className="play-btn lightbox-image"><i className="icon fa fa-play" /> watch video</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide-item">
                        <div className="bg-image" style={{ backgroundImage: 'url(images/main-slider/3.jpg)' }} />
                        <div className="auto-container">
                            <div className="content-box">
                                <h1 className="title animate-2">Laboratory Testing<br />of Rock & Soil</h1>
                                <span className="sub-title animate-1">Laboratory testing of the soil and rock is conducted to infer the loading and bearing capacity of the soil of the site by analysing its physical, mechanical and hydraulic parameters.</span>
                                <div className="btn-box animate-3">
                                    <Link href="/#about" className="theme-btn btn-style-one"><span className="btn-title">Explore</span></Link>
                                    <a onClick={() => setOpen(true)} className="play-btn lightbox-image"><i className="icon fa fa-play" /> watch video</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                {/* ))} */}
            </Swiper>


            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="L61p2uyiMSo" onClose={() => setOpen(false)} />
        </>
    );
};

export default IntroSlider1;

