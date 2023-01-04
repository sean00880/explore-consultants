import React from 'react';
import Testimonial from '../slider/Testimonial';

const TestimonialOne = () => {
    return (
        <>
            <section className="testimonial-section">
                <div className="auto-container">
                    <div className="sec-title">
                        <span className="sub-title">Our feedbakcs</span>
                        <h2>What They’re Talking<br /> About Company</h2>
                    </div>
                    <div className="testimonials">
                        {/* Swiper */}
                        <Testimonial />
                    </div>
                </div>
            </section>
        </>
    );
};

export default TestimonialOne;