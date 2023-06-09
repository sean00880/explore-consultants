import Link from 'next/link';
import React from 'react';
import Accordion from '../elements/Accordion';

const TeamDetails = ({ alternate }) => {
	return (
		<>

			<section className="team-details">
				<div className="container" style={{paddingBottom:"0"}}>
					<div className="team-details__top">
						<div className="row">
							<div className="col-xl-6 col-lg-6">
								<div className="team-details__top-left">
									<div className="team-details__top-img"> <img src="/images/resource/team-details2.jpg" title='Oitech' />
										<div className="team-details__big-text"></div>
									</div>
								</div>
							</div>
							<div className="col-xl-6 col-lg-6">
								<div className="team-details__top-right">
									<div className="team-details__top-content">
										<h3 className="team-details__top-name">Dr. A.P. Singh</h3>
										<p className="team-details__top-title">Managing Director & CEO</p>
										<h4>B.TECH. (CIVIL ENGINEERING), M.E. (GEOTECH), PHD</h4>
										<p className="team-details__top-text-1">Dr. A. P. Singh graduated in Civil Engineering from N I T Calicut, did his M.E. in Geotechnical Engineering from IIT Roorkee and has been awarded PhD from IIT Delhi.</p>
										<p className="team-details__top-text-2">Phone: +91 9899787317 <br />Email: exploreconsultants@gmail.com</p>
									</div>
								</div>
							</div>
						</div>
					</div>

				</div>
			</section>

		</>
	);
};

export default TeamDetails;