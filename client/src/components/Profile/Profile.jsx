import { Facebook, Github, Twitter, Whatsapp } from "react-bootstrap-icons";
import shape from "./../assets/shape-bg.png";
import myPic from "./../assets/Tangil.jpg";
import myResume from "./../assets/Tangilur_Rahman.pdf";
import TypingAnimation from "./TypingAnimation/TypingAnimation";
import "./Profile.css";

const Profile = () => {
	return (
		<>
			<div id="profile">
				<div className="container-fluid profile-container">
					<div className="row flex-row-reverse">
						<div className="col-lg-6 profile-1-container">
							<div id="profile-1">
								<img className="img-fluid" src={myPic} alt="profile" />
							</div>
						</div>

						<div className="col-lg-6 profile-2-container">
							<div id="profile-2">
								<div className="profile-icon-container">
									<Facebook className="icon" />
									<Whatsapp className="icon" />
									<Twitter className="icon" />
									<Github className="icon" />
								</div>
								<div className="profile-details">
									<h2>
										Hello, I'M <span>Tangil</span>
									</h2>
									<div>
										<TypingAnimation />
									</div>
									<p>
										Knock me for building front-end & back-end applications.
									</p>

									<div className="profile-btn-container">
										<button className="btn border rounded-pill" id="btn-1">
											<a href="#contractme">Hire Me</a>
										</button>

										<button className="btn border rounded-pill" id="btn-2">
											<a href={myResume} download="Tangilur_Rahman">
												Get Resume
											</a>
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div >
						<img src={shape} alt="shape" className="img-fluid profile-shape" />
					</div>
				</div>
			</div>
		</>
	);
};

export default Profile;
