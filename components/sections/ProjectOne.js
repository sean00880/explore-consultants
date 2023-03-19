import React from 'react';
import ProjectSlider from '../slider/ProjectSlider';

const ProjectOne = ({ addClass }) => {
    return (
        <>
            <section className={`project-section pb-0 ${addClass}`} id="projects">
                <div className="auto-container">
                    <div className="sec-title">
                        <div className="row">
                            <div className="col-lg-7">
                                <span className="sub-title">recently Completed projects</span>
                                <h2>Engineering Innovation & <br /> Expertise in Action</h2>
                            </div>
                            <div className="col-lg-5">
                                <div className="text"> Discover Our Impressive Portfolio of Geotechnical and Surveying Projects Across India.</div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-outer">
                        <ProjectSlider />
                    </div>
                </div>
            </section>
        </>
    );
};

export default ProjectOne;