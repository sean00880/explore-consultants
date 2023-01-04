import Link from 'next/link';
import React from 'react';

const Footer = () => {
    return (
        <>

            <footer className="main-footer">
                <div className="bg-image" style={{ backgroundImage: 'url(./images/background/2.jpg)' }} />
                {/*Widgets Section*/}
                <div className="widgets-section">
                    <div className="auto-container">
                        <div className="row">
                            {/*Footer Column*/}
                            <div className="footer-column col-xl-3 col-lg-12 col-md-6 col-sm-12">
                                <div className="footer-widget about-widget">
                                    <div className="logo"><a href="index.html"><img src="/images/logo.png" alt /></a></div>
                                    <div className="text">Desires to obtain pain of itself, because it is pain, but occasionally circumstances.</div>
                                    <ul className="social-icon-two">
                                        <li><a href="#"><i className="fab fa-twitter" /></a></li>
                                        <li><a href="#"><i className="fab fa-facebook" /></a></li>
                                        <li><a href="#"><i className="fab fa-pinterest" /></a></li>
                                        <li><a href="#"><i className="fab fa-instagram" /></a></li>
                                    </ul>
                                </div>
                            </div>
                            {/*Footer Column*/}
                            <div className="footer-column col-xl-3 col-lg-4 col-md-6 col-sm-12">
                                <div className="footer-widget">
                                    <h3 className="widget-title">Explore</h3>
                                    <ul className="user-links">
                                        <li><a href="#">About Company</a></li>
                                        <li><a href="#">Meet the Team</a></li>
                                        <li><a href="#">News &amp; Media</a></li>
                                        <li><a href="#">Our Projects</a></li>
                                        <li><a href="#">Contact</a></li>
                                    </ul>
                                </div>
                            </div>
                            {/*Footer Column*/}
                            <div className="footer-column col-xl-3 col-lg-4 col-md-6 col-sm-12">
                                <div className="footer-widget contact-widget">
                                    <h3 className="widget-title">Contact</h3>
                                    <div className="widget-content">
                                        <div className="text">66 Road Broklyn Street, 600 New York, USA</div>
                                        <ul className="contact-info">
                                            <li><i className="fa fa-envelope" /> <a href="mailto:needhelp@potisen.com">needhelp@company.com</a><br /></li>
                                            <li><i className="fa fa-phone-square" /> <a href="tel:+926668880000">+92 666 888 0000</a><br /></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/*Footer Column*/}
                            <div className="footer-column col-xl-3 col-lg-4 col-md-6 col-sm-12">
                                <div className="footer-widget gallery-widget">
                                    <h3 className="widget-title">Gallery</h3>
                                    <div className="widget-content">
                                        <div className="outer clearfix">
                                            <figure className="image">
                                                <a href="#"><img src="/images/resource/project-thumb-1.jpg" alt /></a>
                                            </figure>
                                            <figure className="image">
                                                <a href="#"><img src="/images/resource/project-thumb-2.jpg" alt /></a>
                                            </figure>
                                            <figure className="image">
                                                <a href="#"><img src="/images/resource/project-thumb-3.jpg" alt /></a>
                                            </figure>
                                            <figure className="image">
                                                <a href="#"><img src="/images/resource/project-thumb-4.jpg" alt /></a>
                                            </figure>
                                            <figure className="image">
                                                <a href="#"><img src="/images/resource/project-thumb-5.jpg" alt /></a>
                                            </figure>
                                            <figure className="image">
                                                <a href="#"><img src="/images/resource/project-thumb-6.jpg" alt /></a>
                                            </figure>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*Footer Bottom*/}
                <div className="footer-bottom">
                    <div className="auto-container">
                        <div className="inner-container">
                            <div className="copyright-text">© Copyright 2022 by  <a href="index.html">Company.com</a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>


        </>
    );
};

export default Footer;