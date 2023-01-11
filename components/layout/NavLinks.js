import Link from 'next/link';
import React from 'react';

const NavLinks = ({ extraClassName }) => {
    return (
        <ul className="navigation ${extraClassName}">
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
    );
};

export default NavLinks;