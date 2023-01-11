import Link from 'next/link';
import React from 'react';
import MobileMenu from './MobileMenu';
import NavLinks from './NavLinks';

const Header1 = ({ handleOpen, handleRemove, searchToggle, handleToggle, scroll }) => {



    return (
        <>

            <header className={`main-header header-style-one ${scroll ? "fixed-header" : ""} ${searchToggle ? "moblie-search-active" : ""}`} >
                {/* Header Top */}
                <div className="header-top">
                    <div className="inner-container">
                        <div className="top-left">
                            {/* Info List */}
                            <ul className="list-style-one">
                                <li><i className="fa fa-envelope" /> <Link href="mailto:needhelp@company.com">needhelp@company.com</Link></li>
                                <li><i className="fa fa-map-marker" /> 88 Broklyn Golden Street. New York</li>
                            </ul>
                        </div>
                        <div className="top-right">
                            <ul className="useful-links">
                                <li><Link href="#">Help</Link></li>
                                <li><Link href="#">Support</Link></li>
                                <li><Link href="#">Contact</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="outer-box">
                        <ul className="social-icon-one">
                            <li><Link href="#"><span className="fab fa-twitter" /></Link></li>
                            <li><Link href="#"><span className="fab fa-facebook-square" /></Link></li>
                            <li><Link href="#"><span className="fab fa-pinterest-p" /></Link></li>
                            <li><Link href="#"><span className="fab fa-instagram" /></Link></li>
                        </ul>
                    </div>
                </div>
                {/* Header Top */}
                {/* Header Lower */}
                <div className="header-lower">
                    {/* Main box */}
                    <div className="main-box">
                        <div className="logo-box">
                            <div className="logo"><Link href="/"><img src="/images/logo.png" alt title="Tronis" /></Link></div>
                        </div>
                        {/*Nav Box*/}
                        <div className="nav-outer">
                            <nav className="nav main-menu">
                                <NavLinks extraClassName="header1" />
                            </nav>
                            {/* Main Menu End*/}
                            <div className="outer-box">
                                <div className="ui-btn-outer">
                                    <button className="ui-btn ui-btn search-btn" onClick={handleToggle}>
                                        <span className="icon lnr lnr-icon-search" />
                                    </button>
                                    <Link href="#" className="ui-btn"><i className="lnr-icon-shopping-cart" /></Link>
                                </div>
                                <Link href="tel:+92(8800)9806" className="info-btn">
                                    <i className="icon fa fa-phone" />
                                    <small>Call Anytime</small><br /> + 88 ( 9800 ) 6802
                                </Link>
                                <Link href="/page-contact" className="theme-btn btn-style-one"><span className="btn-title">get solution</span></Link>
                                {/* Mobile Nav toggler */}
                                <div className="mobile-nav-toggler" onClick={handleOpen}><span className="icon lnr-icon-bars" /></div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Header Lower */}
                {/* Mobile Menu  */}
                <div className="mobile-menu">
                    <div className="menu-backdrop" onClick={handleRemove} />
                    {/*Here Menu Will Come Automatically ViLink Javascript / Same Menu as in Header*/}
                    <nav className="menu-box">
                        <div className="upper-box">
                            <div className="nav-logo"><Link href="/"><img src="/images/logo.png" alt title /></Link></div>
                            <div className="close-btn" onClick={handleRemove}><i className="icon fa fa-times" /></div>
                        </div>
                        <MobileMenu />
                        <ul className="contact-list-one">
                            <li>
                                {/* Contact Info Box */}
                                <div className="contact-info-box">
                                    <i className="icon lnr-icon-phone-handset" />
                                    <span className="title">Call Now</span>
                                    <Link href="tel:+92880098670">+92 (8800) - 98670</Link>
                                </div>
                            </li>
                            <li>
                                {/* Contact Info Box */}
                                <div className="contact-info-box">
                                    <span className="icon lnr-icon-envelope1" />
                                    <span className="title">Send Email</span>
                                    <Link href="mailto:help@company.com">help@company.com</Link>
                                </div>
                            </li>
                            <li>
                                {/* Contact Info Box */}
                                <div className="contact-info-box">
                                    <span className="icon lnr-icon-clock" />
                                    <span className="title">Send Email</span>
                                    Mon - Sat 8:00 - 6:30, Sunday - CLOSED
                                </div>
                            </li>
                        </ul>
                        <ul className="social-links">
                            <li><Link href="#"><i className="fab fa-twitter" /></Link></li>
                            <li><Link href="#"><i className="fab fa-facebook-f" /></Link></li>
                            <li><Link href="#"><i className="fab fa-pinterest" /></Link></li>
                            <li><Link href="#"><i className="fab fa-instagram" /></Link></li>
                        </ul>
                    </nav>
                </div>{/* End Mobile Menu */}
                {/* Header Search */}
                <div className="search-popup">
                    <span className="search-back-drop" />
                    <button className="close-search" onClick={handleToggle}><span className="fa fa-times" /></button>
                    <div className="search-inner">
                        <form method="post" action="">
                            <div className="form-group">
                                <input type="search" name="search-field" placeholder="Search..." required />
                                <button type="submit"><i className="fa fa-search" /></button>
                            </div>
                        </form>
                    </div>
                </div>
                {/* End Header Search */}
                {/* Sticky Header  */}
                <div className={`sticky-header ${scroll ? "fixed-header animated slideInDown" : ""}`}>
                    <div className="auto-container">
                        <div className="inner-container">
                            {/*Logo*/}
                            <div className="logo">
                                <Link href="/" title><img src="/images/logo-2.png" alt title /></Link>
                            </div>
                            {/*Right Col*/}
                            <div className="nav-outer">
                                {/* Main Menu */}
                                <nav className="main-menu">
                                    <div className="navbar-collapse show collapse clearfix">
                                        <ul className="navigation clearfix">
                                            <li className="current dropdown"><Link href="/">Home</Link>
                                                <ul>
                                                    <li><Link href="/">Home Layout 1</Link></li>
                                                    <li className="dropdown"><Link href="#">New Home Layouts</Link>
                                                        <ul>
                                                            <li><Link href="/index-2">Home Layout 2</Link></li>
                                                            <li><Link href="/index-3">Home Layout 3</Link></li>
                                                            <li><Link href="/index-4">Home Layout 4</Link></li>
                                                            <li><Link href="/index-5">Home Layout 5</Link></li>
                                                            <li><Link href="/index-6">Home Layout 6</Link></li>
                                                            <li><Link href="/index-7">Home Layout 7</Link></li>
                                                            <li><Link href="/index-8">Home Layout 8</Link></li>
                                                        </ul>
                                                    </li>
                                                    <li className="dropdown"><Link href="#">Dark Layout</Link>
                                                        <ul>
                                                            <li><Link href="/index-1-dark">Dark Layout 1</Link></li>
                                                            <li><Link href="/index-2-dark">Dark Layout 2</Link></li>
                                                            <li><Link href="/index-3-dark">Dark Layout 3</Link></li>
                                                            <li><Link href="/index-4-dark">Dark Layout 4</Link></li>
                                                            <li><Link href="/index-5-dark">Dark Layout 5</Link></li>
                                                            <li><Link href="/index-6-dark">Dark Layout 6</Link></li>
                                                            <li><Link href="/index-7-dark">Dark Layout 7</Link></li>
                                                            <li><Link href="/index-8-dark">Dark Layout 8</Link></li>
                                                        </ul>
                                                    </li>
                                                    <li className="dropdown"><Link href="#">Single</Link>
                                                        <ul>
                                                            <li><Link href="/index-1-single">Home Single 1</Link></li>
                                                            <li><Link href="/index-2-single">Home Single 2</Link></li>
                                                            <li><Link href="/index-3-single">Home Single 3</Link></li>
                                                            <li><Link href="/index-4-single">Home Single 4</Link></li>
                                                            <li><Link href="/index-5-single">Home Single 5</Link></li>
                                                            <li><Link href="/index-6-single">Home Single 6</Link></li>
                                                            <li><Link href="/index-7-single">Home Single 7</Link></li>
                                                            <li><Link href="/index-8-single">Home Single 8</Link></li>
                                                        </ul>
                                                    </li>
                                                    <li className="dropdown"><Link href="#">Boxed</Link>
                                                        <ul>
                                                            <li><Link href="/index-1-boxed">Home Boxed 1</Link></li>
                                                            <li><Link href="/index-2-boxed">Home Boxed 2</Link></li>
                                                            <li><Link href="/index-3-boxed">Home Boxed 3</Link></li>
                                                            <li><Link href="/index-4-boxed">Home Boxed 4</Link></li>
                                                            <li><Link href="/index-5-boxed">Home Boxed 5</Link></li>
                                                            <li><Link href="/index-6-boxed">Home Boxed 6</Link></li>
                                                            <li><Link href="/index-7-boxed">Home Boxed 7</Link></li>
                                                            <li><Link href="/index-8-boxed">Home Boxed 8</Link></li>
                                                        </ul>
                                                    </li>
                                                    <li className="dropdown"><Link href="#">Boxed + Single</Link>
                                                        <ul>
                                                            <li><Link href="/index-1-boxed-single">Home Single Boxed 1</Link></li>
                                                            <li><Link href="/index-2-boxed-single">Home Single Boxed 2</Link></li>
                                                            <li><Link href="/index-3-boxed-single">Home Single Boxed 3</Link></li>
                                                            <li><Link href="/index-4-boxed-single">Home Single Boxed 4</Link></li>
                                                            <li><Link href="/index-5-boxed-single">Home Single Boxed 5</Link></li>
                                                            <li><Link href="/index-6-boxed-single">Home Single Boxed 6</Link></li>
                                                            <li><Link href="/index-7-boxed-single">Home Single Boxed 7</Link></li>
                                                            <li><Link href="/index-8-boxed-single">Home Single Boxed 8</Link></li>
                                                        </ul>
                                                    </li>
                                                    <li className="dropdown"><Link href="#">RTL</Link>
                                                        <ul>
                                                            <li><Link href="/index1-rtl">Home RTL 1</Link></li>
                                                        </ul>
                                                    </li>
                                                    <li className="dropdown"><Link href="#">Header Styles</Link>
                                                        <ul>
                                                            <li><Link href="/">Header Style 1</Link></li>
                                                            <li><Link href="/index-2">Header Style 2</Link></li>
                                                            <li><Link href="/index-3">Header Style 3</Link></li>
                                                            <li><Link href="/index-4">Header Style 4</Link></li>
                                                            <li><Link href="/index-5">Header Style 5</Link></li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="dropdown"><Link href="#">Pages</Link>
                                                <ul>
                                                    <li><Link href="/page-about">About</Link></li>
                                                    <li className="dropdown"><Link href="#">Projects</Link>
                                                        <ul>
                                                            <li><Link href="/page-projects">Projects List</Link></li>
                                                            <li><Link href="/page-project-details">Project Details</Link></li>
                                                        </ul>
                                                    </li>
                                                    <li className="dropdown"><Link href="#">Team</Link>
                                                        <ul>
                                                            <li><Link href="/page-team">Team List</Link></li>
                                                            <li><Link href="/page-team-details">Team Details</Link></li>
                                                        </ul>
                                                    </li>
                                                    <li><Link href="/page-testimonial">Testimonial</Link></li>
                                                    <li><Link href="/page-pricing">Pricing</Link></li>
                                                    <li><Link href="/page-faq">FAQ</Link></li>
                                                    <li><Link href="/page-404">Page 404</Link></li>
                                                </ul>
                                            </li>
                                            <li className="dropdown"><Link href="#">Services</Link>
                                                <ul>
                                                    <li><Link href="/page-services">Services List</Link></li>
                                                    <li><Link href="/page-service-details">Service Details</Link></li>
                                                </ul>
                                            </li>
                                            <li className="dropdown"><Link href="#">Shop</Link>
                                                <ul>
                                                    <li><Link href="/shop-products">Products</Link></li>
                                                    <li><Link href="/shop-products-sidebar">Products with Sidebar</Link></li>
                                                    <li><Link href="/shop-product-details">Product Details</Link></li>
                                                    <li><Link href="/shop-cart">Cart</Link></li>
                                                    <li><Link href="/shop-checkout">Checkout</Link></li>
                                                </ul>
                                            </li>
                                            <li className="dropdown"><Link href="#">News</Link>
                                                <ul>
                                                    <li><Link href="/news-grid">News Grid</Link></li>
                                                    <li><Link href="/news-details">News Details</Link></li>
                                                </ul>
                                            </li>
                                            <li><Link href="/page-contact">Contact</Link></li>
                                        </ul>
                                    </div>
                                </nav>{/* Main Menu End*/}
                                {/*Mobile Navigation Toggler*/}
                                <div className="mobile-nav-toggler" onClick={handleOpen}><span className="icon lnr-icon-bars" /></div>
                            </div>
                        </div>
                    </div>
                </div>{/* End Sticky Menu */}
            </header>


        </>
    );
};

export default Header1;