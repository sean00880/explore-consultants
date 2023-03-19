import Link from 'next/link';
import React from 'react';
import Accordion from '../elements/Accordion';

const serviceListData = [
	{
		title: "Geotechnical Investigation",
		linkurl: "geotechnical-surveying"
	},
	{
		title: "Topographical Land Surveying",
		linkurl: "topographical-surveying"
	},
	{
		title: "Laboratory Testing of Soil & Rock",
		linkurl: "lab-test-soil-and-rock"
	},
];

const Serviceone = ({ alternate }) => {
	return (
		<>

			<section className="services-details">
				<div className="container">
					<div className="row">
						<div className="col-xl-4 col-lg-4">
							<div className="service-sidebar">
								<div className="sidebar-widget service-sidebar-single">
									<div className="service-sidebar wow fadeInUp"
										data-wow-delay="0.1s" data-wow-duration="1200m">
										<div className="service-list">
										<ul>
											{serviceListData.map((eachitem, index) => (
												<li><Link className={(index === 2) ? 'current': ''} href={eachitem.linkurl}><i className="fas fa-angle-right"></i><span>{eachitem.title}</span></Link></li>
											))}
										</ul>
										</div>
									</div>
								</div>

								

							</div>
						</div>

						<div className="col-xl-8 col-lg-8">
							<div className="services-details__content">
								<img src="/images/resource/service-details4.jpg" title='Explore Consultants' />
								<h2 className="mt-4">Topographical Surveying</h2>
				
<p>The physical and mechanical characteristics of soil and rock samples will be accurately and thoroughly analyzed by our lab testing service for soil and rock. Our skilled team of geotechnical engineers and technicians uses cutting-edge tools and methods to offer thorough testing and analysis services for a variety of projects, from mining and environmental assessments to construction and infrastructure.</p>
								<div className="content mt-40">
									<div className="text">
										<h3>Here is a list of Topographical Surveying services we offer for to our clients:</h3>
									</div>
									<div className="feature-list">
										<div className="row clearfix">
											<div className="col-lg-6 col-md-6 col-sm-12 column">
												<div className="single-item">
													<div className="icon-box"><i className="fas fa-check-circle"></i></div>
													<h6 className="title">Sieve Analysis</h6>
												</div>
											</div>
											<div className="col-lg-6 col-md-6 col-sm-12 column">
												<div className="single-item">
													<div className="icon-box"><i className="fas fa-check-circle"></i></div>
													<h6 className="title">Hydrometer Analysis</h6>
												</div>
											</div>
											<div className="col-lg-6 col-md-6 col-sm-12 column">
												<div className="single-item">
													<div className="icon-box"><i className="fas fa-check-circle"></i></div>
													<h6 className="title">Atterberg Limits</h6>
												</div>
											</div>
											<div className="col-lg-6 col-md-6 col-sm-12 column">
												<div className="single-item">
													<div className="icon-box"><i className="fas fa-check-circle"></i></div>
													<h6 className="title">Triaxial Limits</h6>
												</div>
											</div>
											<div className="col-lg-6 col-md-6 col-sm-12 column">
												<div className="single-item">
													<div className="icon-box"><i className="fas fa-check-circle"></i></div>
													<h6 className="title">Direct Shear Test</h6>
												</div>
											</div>
											<div className="col-lg-6 col-md-6 col-sm-12 column">
												<div className="single-item">
													<div className="icon-box"><i className="fas fa-check-circle"></i></div>
													<h6 className="title">Consolidation</h6>
												</div>
											</div>
											<div className="col-lg-6 col-md-6 col-sm-12 column">
												<div className="single-item">
													<div className="icon-box"><i className="fas fa-check-circle"></i></div>
													<h6 className="title">Proctor Compaction Test</h6>
												</div>
											</div>
											<div className="col-lg-6 col-md-6 col-sm-12 column">
												<div className="single-item">
													<div className="icon-box"><i className="fas fa-check-circle"></i></div>
													<h6 className="title">CBR</h6>
												</div>
											</div>
											<div className="col-lg-6 col-md-6 col-sm-12 column">
												<div className="single-item">
													<div className="icon-box"><i className="fas fa-check-circle"></i></div>
													<h6 className="title">UCS</h6>
												</div>
											</div>
											<div className="col-lg-6 col-md-6 col-sm-12 column">
												<div className="single-item">
													<div className="icon-box"><i className="fas fa-check-circle"></i></div>
													<h6 className="title">Density</h6>
												</div>
											</div>
											<div className="col-lg-6 col-md-6 col-sm-12 column">
												<div className="single-item">
													<div className="icon-box"><i className="fas fa-check-circle"></i></div>
													<h6 className="title">Water Absorption</h6>
												</div>
											</div>
											<div className="col-lg-6 col-md-6 col-sm-12 column">
												<div className="single-item">
													<div className="icon-box"><i className="fas fa-check-circle"></i></div>
													<h6 className="title">Porosity</h6>
												</div>
											</div>
											<div className="col-lg-6 col-md-6 col-sm-12 column">
												<div className="single-item">
													<div className="icon-box"><i className="fas fa-check-circle"></i></div>
													<h6 className="title">Point Load Index</h6>
												</div>
											</div>
											<div className="col-lg-6 col-md-6 col-sm-12 column">
												<div className="single-item">
													<div className="icon-box"><i className="fas fa-check-circle"></i></div>
													<h6 className="title">Uniaxial Compressive</h6>
												</div>
											</div>
											<div className="col-lg-6 col-md-6 col-sm-12 column">
												<div className="single-item">
													<div className="icon-box"><i className="fas fa-check-circle"></i></div>
													<h6 className="title">Specific Gravity</h6>
												</div>
											</div>
											<h4 className="mt-4">Preparation of Geotechnical Investigation</h4>
											<p>After getting the field bore-logs and laboratory test results, our geotechnical engineers technically analyze all the parameters and now analysis for the recommendations is started. As per the requirement of the project as well as client, we make all the analysis and final geotechnical recommendations are prepared for the proposed foundation. Bearing capacity for all possible types, sizes and shapes of open foundation is calculated and tabulated in the recommendations. Modulus of sub-grade reaction is also estimated for the design of raft. For the pile foundation system, horizontal and vertical pile capacity is calculated and values for different lengths and diameters are tabulated. Analysis for well foundation is provided, wherever it is requiremed for the project. For the purpose of earthquake studies, Liquefaction analysis of each bore-hole at every depth is also carried out by using the latest available research studies.</p>
											<p>We also provide all of the supporting calculations as well as a graphical presentation in our final report.</p>
										</div>
									</div>
									
								</div>
								<div className=" mt-25">
									<h3>Frequently Asked Question</h3>
									<p>Lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui dolorem ipsum quia quaed inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
									<Accordion />
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Serviceone;