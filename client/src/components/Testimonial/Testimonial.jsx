import shape from "./../assets/shape-bg.png";
import Carousel from "./Carousel/Carousel";
import "./Testimonial.css";

const Testimonial = () => {
	return (
		<>

		<div id="testimonial">
			<div className="container-fluid testy-container">
				<div className="row">
					<div className="col-12">
						<div className="testy-heading">
							<h2>Testimonial</h2>
							<p>What My Client Say About Me</p>
							<span className=" rounded-pill"></span>
							<hr />
						</div>
					</div>
				</div>

				<div className="row">
					<div className="col testy-container-2">
						<div className="testy-bg">
							<div className="row carousel-container">
								<div className="col-md-10 ">
									<div className="row">
										<div className="col carousel-items-container">
											<Carousel />
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div>
					<img src={shape} alt="shape" className="img-fluid testy-shape" />
				</div>
			</div>
			</div>
		</>
	);
};

export default Testimonial;
