import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";

const CarouselItems = ({ details, rating, image, name, title }) => {
	return (
		<>
			<div className="item carousel-items">
				<div className="container-fluid">
					<div className="row">
						<div className="col text">
							<span>
								<FontAwesomeIcon icon={faQuoteLeft} />{" "}
							</span>
							<p>{details}</p>
							<span>
								<FontAwesomeIcon icon={faQuoteRight} />
							</span>
						</div>
					</div>

					<div className="row">
						<div className="col rating">
							<span>{rating}</span>
						</div>
					</div>

					<div className="row">
						<div className="col image">
							<div className="circle">
								<img src={image} alt="CEO" className="img-fluid" />
							</div>
							<div className="title">
								<h5>{name}</h5>
								<p>{title}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default CarouselItems;
