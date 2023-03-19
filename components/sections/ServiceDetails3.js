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
												<li><Link className={(index === 1) ? 'current': ''} href={eachitem.linkurl}><i className="fas fa-angle-right"></i><span>{eachitem.title}</span></Link></li>
											))}
										</ul>
										</div>
									</div>
								</div>

								

							</div>
						</div>

						<div className="col-xl-8 col-lg-8">
							<div className="services-details__content">
								<img src="/images/resource/service-details3.jpg" title='Explore Consultants' />
								<h2 className="mt-4">Topographical Surveying</h2>
				
<p>A topographical survey can provide information that can be utilized for a number of things, such as land planning, building, and development. Any potential problems that could need to be resolved, such uneven terrain, drainage issues, or environmental concerns, can be found with the help of the survey. Also, it can provide information on how much earthwork could be necessary and the ideal placement for a new building or infrastructure project.</p>
<p>Any engineering or construction project must utilize topographical surveying to be effective, efficient, and long-lasting. It offers vital details that enable engineers and architects to create structures that are environmentally friendly and visually beautiful, as well as useful.</p>
<p>In conclusion, a topographical survey is an essential service for everyone engaged in building or land development. It offers precise and thorough details about a piece of land's topography and features, which can be used to guide design choices, solve potential problems, and guarantee that any project is secure, effective, and sustainable.</p>
								<div className="content mt-40">
									<div className="text">
										<h3>Here is a list of Topographical Surveying services we offer for to our clients:</h3>
									</div>
									<div className="feature-list">
										<div className="row clearfix">
											<div className="col-lg-6 col-md-6 col-sm-12 column">
												<div className="single-item">
													<div className="icon-box"><i className="fas fa-check-circle"></i></div>
													<h6 className="title">Topographic Survey</h6>
												</div>
											</div>
											<div className="col-lg-6 col-md-6 col-sm-12 column">
												<div className="single-item">
													<div className="icon-box"><i className="fas fa-check-circle"></i></div>
													<h6 className="title">Land Contour Survey</h6>
												</div>
											</div>
											<div className="col-lg-6 col-md-6 col-sm-12 column">
												<div className="single-item">
													<div className="icon-box"><i className="fas fa-check-circle"></i></div>
													<h6 className="title">Propoerty Survey</h6>
												</div>
											</div>
											<div className="col-lg-6 col-md-6 col-sm-12 column">
												<div className="single-item">
													<div className="icon-box"><i className="fas fa-check-circle"></i></div>
													<h6 className="title">Route Alignment Surveys</h6>
												</div>
											</div>
											
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