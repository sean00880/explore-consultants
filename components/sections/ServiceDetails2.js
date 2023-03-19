import Link from 'next/link';
import React from 'react';
import Accordion from '../elements/Accordion';

const serviceListData = [
	{
		title: "Geotechnical Investigation",
		linkurl: "geotechnical-investigation"
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
												<li><Link className={(index === 0) ? 'current': ''} href={eachitem.linkurl}><i className="fas fa-angle-right"></i><span>{eachitem.title}</span></Link></li>
											))}
										</ul>
										</div>
									</div>
								</div>

								
								

							</div>
						</div>

						<div className="col-xl-8 col-lg-8">
							<div className="services-details__content">
								<img src="/images/resource/service-details2.jpg" title='Explore Consultants' />
								<h2 className="mt-4">Geotechnical Investigation</h2>
								<p>Geotechnical Investigation (also called as Soil Investigation) is conducted to assess various properties of sub soil strata from the point view of design of suitable and economic type of foundation system. Data obtained from the Geotechnical Investigation on a particular site provides us all the required parameters and analysis for the foundation design of the proposed structure on that site.</p>
								<p>We are experts, providing our services for all kind of Geotechnical Investigation, including all related consultancy services.</p>
								<div className="content mt-40">
									<div className="text">
										<h3>Here is a list of Geotechnical Investigation services we offer for to our clients:</h3>
									</div>
									<div className="feature-list">
										<div className="row clearfix">
											<div className="col-lg-6 col-md-6 col-sm-12 column">
												<div className="single-item">
													<div className="icon-box"><i className="fas fa-check-circle"></i></div>
													<h6 className="title">Drilling in Soil and Rock</h6>
												</div>
											</div>
											<div className="col-lg-6 col-md-6 col-sm-12 column">
												<div className="single-item">
													<div className="icon-box"><i className="fas fa-check-circle"></i></div>
													<h6 className="title">Disturbed and Undisturbed sampling</h6>
												</div>
											</div>
											<div className="col-lg-6 col-md-6 col-sm-12 column">
												<div className="single-item">
													<div className="icon-box"><i className="fas fa-check-circle"></i></div>
													<h6 className="title">Standard Penetration Test (SPT)</h6>
												</div>
											</div>
											<div className="col-lg-6 col-md-6 col-sm-12 column">
												<div className="single-item">
													<div className="icon-box"><i className="fas fa-check-circle"></i></div>
													<h6 className="title">Borehole Logging</h6>
												</div>
											</div>
											<div className="col-lg-6 col-md-6 col-sm-12 column">
												<div className="single-item">
													<div className="icon-box"><i className="fas fa-check-circle"></i></div>
													<h6 className="title">Dynamic Cone Penetration Test</h6>
												</div>
											</div>
											<div className="col-lg-6 col-md-6 col-sm-12 column">
												<div className="single-item">
													<div className="icon-box"><i className="fas fa-check-circle"></i></div>
													<h6 className="title">Plate Load Test</h6>
												</div>
											</div>
										</div>
									</div>
									
									<p>We conduct investigation on site by drilling bore-holes upto a depth of 0-80m in soil as well as rock by suitable drilling rigs. We make 150 dia bore-holes in soil and Nx bore-holes in rock. We conduct Standard Penetration Test in soil at all required intervals and disturbed soil is collected during the process. Undisturbed soil samples are collected in tubes at regular specified intervals. In rock, cores are collected throughout the drilling in single or double core-barrels. Bore-logs of all the bore-holes are prepared at the site during drilling. Disturbed samples are packed, undisturbed samples are waxed and core samples are kept in core-boxes. After completion of bore-hole, soil and rock samples are sent to our laboratory for testings.</p>
									
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