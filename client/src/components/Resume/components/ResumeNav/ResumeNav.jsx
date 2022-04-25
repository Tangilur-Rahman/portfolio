import {
	faGraduationCap,
	faLaptopCode,
	faPersonDigging,
	faPersonSkiing,
	faPersonWalkingLuggage
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-scroll";
import { Education, Interest, ProgrammingSkill, Project, WorkHistory } from "./../../../../Services/Action";
import DownArrow from "./Arrow/DownArrow";

import "./ResumeNav.css";




const ResumeNav = () => {

	const dispatch = useDispatch();

	const curr_state = useSelector((state)=> state.Reducer);

	return (
		<>
		
			<div className="container-fluid resume-nav-container">
				<div className="row">
					<div className="col">
						<div className="resume-icon-container">
							<Link to="#" onClick={()=> dispatch(Education())}>
								<FontAwesomeIcon
									icon={faGraduationCap}
									className="icon-style"
								/>
								<p id={curr_state.Education ? null : "resume-active"}>
									<span>Education </span>
									
								</p>
							</Link>

							<Link  to="#" onClick={()=> dispatch(WorkHistory())} >
								<FontAwesomeIcon icon={faLaptopCode} className="icon-style" />
								<p id={curr_state.WorkHistory ? "resume-active" : null}>
									<span>Work History </span>
								</p>
							</Link>

							<Link to="#" onClick={()=> dispatch(ProgrammingSkill())}>
								<FontAwesomeIcon icon={faPersonSkiing} className="icon-style" />
								<p id={curr_state.ProgrammingSkill ? "resume-active" : null}>
									<span>Programming Skills </span>
								</p>
							</Link>

							<Link to="#" onClick={()=> dispatch(Project())}>
								<FontAwesomeIcon
									icon={faPersonDigging}
									className="icon-style"
								/>
								<p id={curr_state.Project ? "resume-active" : null}>
									<span>Projects </span>
								</p>
							</Link>

							<Link to="#" onClick={()=> dispatch(Interest())}>
								<FontAwesomeIcon
									icon={faPersonWalkingLuggage}
									className="icon-style"
								/>
								<p id={curr_state.Interest ? "resume-active" : null}>
									<span>Interests </span>
								</p>
							</Link>
							<DownArrow/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default ResumeNav;
