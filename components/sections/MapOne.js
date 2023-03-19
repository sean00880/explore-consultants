import Link from 'next/link';
import React from 'react';

const MapOne = () => {
    return (
        <>
            <section className="map-section">
                <iframe className="map" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=C-273,%20C%20Block%20Road,%20C%20Block,%20Sector%2063,%20Noida,%20Uttar%20Pradesh%20201307+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                </iframe>
                <div className="branches-outer">
                    <div className="auto-container">
                        <div className="row">
                           
                            {/* Branch Block */}
                            <div className="branch-block col-lg-4 col-md-12 col-sm-12">
                                <div className="inner-box">
                                    <h5 className="title">Noida, UP</h5>
                                    <ul className="info-list">
                                        <li><i className="fa fa-phone" /> <Link href="tel:0120-4333415">0120-4333415</Link><br /></li>
                                        <li><i className="fa fa-phone" /> <Link href="tel:0120-4333416">0120-4333416</Link><br /></li>
                                        <li><i className="fa fa-envelope" /> <Link href="mailto:needhelp@company.com">info@exploreconsultants.com</Link><br /></li>
                                        <li><i className="fa fa-map-marker-alt" /> C-273, Ground Floor, Sector-63, Noida (UP) 201301</li>
                                    </ul>
                                </div>
                            </div>
                            {/* Branch Block */}
                            
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default MapOne;