import Link from 'next/link';
import React from 'react';
import Accordion from '../elements/Accordion';

const TeamDetails = ({ alternate }) => {
	return (
		<>

			<section className="team-details">
				<div className="container" style={{paddingBottom:"0"}}>
					<div className="team-details__top team-details__top2">
						<div className="row">
							<div className="col-xl-6 col-lg-6">
								<div className="team-details__top-left">
									<div className="team-details__top-img"> <img src="/images/resource/team-details.jpg" title='Oitech' />
										<div className="team-details__big-text"></div>
									</div>
								</div>
							</div>
							<div className="col-xl-6 col-lg-6">
								<div className="team-details__top-right">
									<div className="team-details__top-content">
										<h3 className="team-details__top-name">Dr. A.K. Singh</h3>
										<p className="team-details__top-title">Managing Director & CEO</p>
										<h4>B.TECH, M.TECH. (CIVIL ENGINEERING), PHD</h4>
										<p className="team-details__top-text-1">Dr. A. K. Singh graduated in Civil Engineering from N I T Calicut. After B.Tech, he persuaded his post graduation in Urban Planning from
S P A New Delhi and has been awarded PhD from AUS.</p>
										<p className="team-details__top-text-2">Phone: +91 9810263821<br />Email: exploreconsultants@gmail.com</p>
									</div>
								</div>
							</div>
							<hr />
						</div>
					</div>

				</div>
			</section>

		</>
	);
};

export default TeamDetails;