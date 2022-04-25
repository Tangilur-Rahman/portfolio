import "./Aboutme.css";
import myResume from "./../assets/Tangilur_Rahman.pdf";
import { Link } from "react-scroll";

const Aboutme = () => {
	return (
		<>
			<div id="aboutme">
				<div className="container-fluid aboutme-container">
					<div className="row">
						<div className="col-12">
							<div className="aboutme-heading">
								<h2>About Me</h2>
								<p>Why Choose Me?</p>
								<span className=" rounded-pill"></span>
								<hr />
							</div>
						</div>
					</div>

					<div className="row aboutme-section-2" data-aos="fade-up">
						<div className="col-md-10 shadow-lg bg-body rounded">
							<div className="row">
								<div className="col-lg-6 col-md-5 aboutme-pic "></div>
								<div className="col-lg-6 col-md-7 aboutme-details">
									<p>
										I am a full stack software developer. I can adapt onto any
										technology rapidly making myself flexible upon any tech
										stack. A passionate, diligent person who wants to learn
										continuously. I am self learner and the main thing, I love
										coding.
									</p>

									<h4>Here are a Few Highlights</h4>

									<ul>
										<li>Full Stack Web Developer</li>
										<li>Interactive Front-end design</li>
										<li>Redux for store management</li>
										<li>Building REST API</li>
										<li>Managing Database</li>
									</ul>

									<div className="aboutme-btn-container">
										<button className="btn border rounded-pill" id="btn-1">
											<Link
												to="contractme"
												spy={true}
												smooth={true}
												offset={0}
												duration={500}
												className="aboutme-btn"
											>
												Hire Me
											</Link>
										</button>

										<button className="btn border rounded-pill" id="btn-2">
											<a
												href={myResume}
												download="Tangilur_Rahman"
												className="aboutme-btn"
											>
												Get Resume
											</a>
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Aboutme;
