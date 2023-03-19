import Link from 'next/link';
import React from 'react';

const CtaOne = ({addClass}) => {
    return (
        <>
            <section className={`call-to-action ${addClass}`} style={{ backgroundImage: 'url(./images/background/1.jpg)' }}>
                <div className="auto-container">
                    <div className="title-box">
                        <div className="icon bounce-y"><img src="/images/resource/icon-logo.png" title='Explore Consultants' /></div>
                        <h1 className="title">Building a Strong Foundation for India's Future  <br></br> - Geotechnical Engineering and Surveying Solutions for Every Project</h1>
                        <Link href="/#projects" className="theme-btn btn-style-one"><span className="btn-title">Explore Our Work</span></Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default CtaOne;