import Link from 'next/link';
import React from 'react';
import Image from 'next/image'
import LogoWhite from './../../public/images/logo.png';
import LogoDark from './../../public/images/logo-2.png';

const Footer = () => {
    return (
        <>

            <footer className="main-footer">
                <div className="bg-image" style={{ backgroundImage: 'url(./images/background/2.jpg)' }} />
                <div className="widgets-section">
                    <div className="auto-container">
                        <div className="row">
                            <div className="footer-column col-xl-3 col-lg-12 col-md-6 col-sm-12">
                                <div className="footer-widget about-widget">
                                    <div className="logo"><a href="/"><Image src={LogoWhite} title='Explore Consultants' /></a></div>
                                    <div className="text">We are a Geotechnical Engineering and Engineering Surveying organization that provides complete solutions to clients and have an impeccable track record of executing a variety of projects all across India.</div>
                                
                                </div>
                            </div>
                            <div className="footer-column col-xl-3 col-lg-4 col-md-6 col-sm-12">
                                <div className="footer-widget">
                                    <h3 className="widget-title">Explore</h3>
                                    <ul className="user-links">
                                        <li><a href="/#about">About Company</a></li>
                                        <li><a href="/#services">Our Services</a></li>
                                        <li><a href="/#projects">Our Projects</a></li>
                                        <li><a href="/#whyus">Why Choose Us</a></li>
                                        <li><a href="/#contact">Contact</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="footer-column col-xl-3 col-lg-4 col-md-6 col-sm-12">
                                <div className="footer-widget contact-widget">
                                    <h3 className="widget-title">Contact</h3>
                                    <div className="widget-content">
                                        <div className="text">C-273, Ground Floor, Sector-63, Noida (UP)</div>
                                        <ul className="contact-info">
                                            <li><i className="fa fa-envelope" /> <a href="mailto:info@exploreconsultants.com">
info@exploreconsultants.com</a><br /></li>
                                            <li><i className="fa fa-phone-square" /> <a href="tel:01204333415">0 120 4333415</a><br /></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="footer-column col-xl-3 col-lg-4 col-md-6 col-sm-12">
                                <div className="footer-widget gallery-widget">
                                    <h3 className="widget-title">Gallery</h3>
                                    <div className="widget-content">
                                        <div className="outer clearfix">
                                            <figure className="image">
                                                <a href="#"><img src="/images/resource/project-thumb-1.jpg" title='Explore Consultants' /></a>
                                            </figure>
                                            <figure className="image">
                                                <a href="#"><img src="/images/resource/project-thumb-2.jpg" title='Explore Consultants' /></a>
                                            </figure>
                                            <figure className="image">
                                                <a href="#"><img src="/images/resource/project-thumb-3.jpg" title='Explore Consultants' /></a>
                                            </figure>
                                            <figure className="image">
                                                <a href="#"><img src="/images/resource/project-thumb-4.jpg" title='Explore Consultants' /></a>
                                            </figure>
                                            <figure className="image">
                                                <a href="#"><img src="/images/resource/project-thumb-5.jpg" title='Explore Consultants' /></a>
                                            </figure>
                                            <figure className="image">
                                                <a href="#"><img src="/images/resource/project-thumb-6.jpg" title='Explore Consultants' /></a>
                                            </figure>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="auto-container">
                        <div className="inner-container">
                            <div className="copyright-text">© Copyright 2023<a href="https://www.exploreconsultants.com"> Explore Consultants</a>
                            </div>
                            <div className="copyright-text">Website by <a href="https://www.sitedominion.com">Site Dominion</a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>


        </>
    );
};

export default Footer;