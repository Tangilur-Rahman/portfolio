import { faCircleChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-scroll";
import "./BackToTop.css";


const BackToTop = () => {
	return (
		<>
			<div className="container-fluid back-to-to-container">
				<div className="row">
					<div className="col icon-container">

					<Link to="profile" spy={true} smooth={true} offset={-80} duration={500}>
						<span className="circle">
						
                     <FontAwesomeIcon icon={faCircleChevronUp} className="up-arrow"/>
						</span>
						<span className="pulse"></span>
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};

export default BackToTop;
