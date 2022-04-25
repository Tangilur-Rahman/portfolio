import "./Carousel.css";
import CarouselItems from "./CarouselItems";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import myImage from "./../../assets/Tangil.jpg";

import avatar1 from "./../../assets/avatar-1.png";
import avatar2 from "./../../assets/avatar-2.png";
import avatar3 from "./../../assets/avatar-3.png";
import avatar4 from "./../../assets/avatar-4.png";
import avatar5 from "./../../assets/avatar-5.png";
import avatar6 from "./../../assets/avatar-6.png";

const Carousel = () => {
	const fiveStar = (
		<span>
			<FontAwesomeIcon icon={faStar} />
			<FontAwesomeIcon icon={faStar} />
			<FontAwesomeIcon icon={faStar} />
			<FontAwesomeIcon icon={faStar} />
			<FontAwesomeIcon icon={faStar} />
		</span>
	);

	const fourHalfStar = (
		<span>
			<FontAwesomeIcon icon={faStar} />
			<FontAwesomeIcon icon={faStar} />
			<FontAwesomeIcon icon={faStar} />
			<FontAwesomeIcon icon={faStar} />
			<FontAwesomeIcon icon={faStarHalfStroke} />
		</span>
	);
	const fourStar = (
		<span>
			<FontAwesomeIcon icon={faStar} />
			<FontAwesomeIcon icon={faStar} />
			<FontAwesomeIcon icon={faStar} />
			<FontAwesomeIcon icon={faStar} />
		</span>
	);

	const responsive = {
		0: {
			items: 1
		},

		660: {
			items: 2
		},
		1200: {
			items: 3
		}
	};

	return (
		<>
			<OwlCarousel
				className="owl-theme"
				loop={true}
				items={3}
				autoplay={true}
				autoplayTimeout={2000}
				autoplayHoverPause={true}
				dots={false}
				rewind={true}
				responsive={responsive}
			>
				<CarouselItems
					details="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore aliquam consequatur dolores commodi"
					rating={fiveStar}
					image={avatar6}
					name="Munna"
					title="CEO MunnaTech"
				/>

				<CarouselItems
					details="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore aliquam consequatur dolores commodi"
					rating={fourHalfStar}
					image={avatar4}
					name="Munir"
					title="CEO MunTech"
				/>

				<CarouselItems
					details="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore aliquam consequatur dolores commodi"
					rating={fiveStar}
					image={avatar3}
					name="Shakil"
					title="CEO ShaTech"
				/>

				<CarouselItems
					details="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore aliquam consequatur dolores commodi"
					rating={fourHalfStar}
					image={avatar5}
					name="Tamim"
					title="CEO TamTech"
				/>

				<CarouselItems
					details="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore aliquam consequatur dolores commodi"
					rating={fourHalfStar}
					image={avatar1}
					name="Mim"
					title="CEO MimTech"
				/>

				<CarouselItems
					details="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore aliquam consequatur dolores commodi"
					rating={fiveStar}
					image={myImage}
					name="Tangil"
					title="CEO TanTech"
				/>

				<CarouselItems
					details="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore aliquam consequatur dolores commodi"
					rating={fourStar}
					image={avatar2}
					name="Munika"
					title="CEO MunTech"
				/>

				<CarouselItems
					details="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore aliquam consequatur dolores commodi"
					rating={fourStar}
					image={avatar1}
					name="Misu"
					title="CEO MisuTech"
				/>

			</OwlCarousel>
		</>
	);
};

export default Carousel;
