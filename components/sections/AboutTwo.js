import Link from 'next/link';
import React from 'react';

const AboutFive = () => {
    return (
        <>
            <section className="about-section-five style-two pt-0">
                <div className="auto-container" style={{paddingTop:"120px"}}>
                    <div className="row">
                        <div className="content-column col-xl-6 col-lg-6 col-md-12 order-2 wow fadeInRight" data-wow-delay="600ms">
                            <div className="inner-column">
                                <div className="sec-title">
                                    <span className="sub-title">Who We Are</span>
                                    <h2>Founded in 1999</h2>
                                    <div className="text">‘Explore Engineering Consultants Pvt. Ltd.‘, was established in the year 1999 by two civil engineering professionals, Dr. A. K. Singh and Dr, A. P. Singh. They were batchmates at NIT Calicut, where they both graduated in Civil Engineering. After B. Tech, Dr. A. K. Singh pursued his post-graduation in Urban Planning from SPA New Delhi, whereas Dr. A. P. Singh completed his M.E. in Geotechnical Engineering from IIT Roorkee.</div>
                                </div>
                                <div className="btn-box d-flex align-items-center">
                                    <Link href="/page-about" className="theme-btn btn-style-one"><span className="btn-title">Discover more</span></Link>
                                    <Link href="tel:+92(8800)9806" className="info-btn">
                                        <i className="icon fa fa-phone" />
                                        <small>Call Anytime</small><br /> + 88 ( 9800 ) 6802
                                    </Link>
                                </div>
                                
                            </div>
                            
                        </div>
                        
                        <div className="image-column col-xl-6 col-lg-6 col-md-12 ">
                            <div className="inner-column">
                                <div className="image-box">
                                    <figure className="image overlay-anim wow fadeInUp"><img src="/images/resource/about-11.jpg" title='Oitech' /></figure>
                                    <div className="experience">
                                        <strong>23</strong>
                                        <div className="text">Years<br />in Business</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <div className="text">For many years, we have provided consultancy services for various kinds of civil engineering projects. These projects include highways, bridges, railways, buildings, etc. Our clientele includes the Ministry of Highways, NHAI, the Ministry of Railways, PWD, RITES, DRMC, GAIL, BSNL, Noida, HCL, Tata Motors, JCB, Oxame, DLF, Span Consultants, PPC, Mehro, CPK, Vintech, 3C, SAI Consultants, Parsvnath, Bharti Foundation, Spazio, Jaipuria, Shipra, Educomp, TS Kisan, Fortis Hospitals, DB, Prateek, Shapoorji, Rich Graviss, Silver Resorts, Pathways, Crossing, Assotech, Indo Gulf, Havells, Amrapali, BPTP, Ajnara, Central Park, Stellar, Shri Group, Gaursons, Mahagun, Supertech, IMT Ghaziabad, Paramount, Nimbus and many more. We are impaneled consultants for RITES Ltd., Gurgaon (a Government of India Enterprise under the Ministry of Railways), Ministry of Road Transport and Highways, Govt. of India, Delhi Development Authority, and MCD, Delhi.
</div>
                                
                </div>
            </section>
        </>
    );
};

export default AboutFive;