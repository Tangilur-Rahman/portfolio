import AOS from "aos";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import Education from "./components/ResumeIframe/Education";
import Interest from "./components/ResumeIframe/Interest";
import ProgrammingSkill from "./components/ResumeIframe/ProgrammingSkill";
import Project from "./components/ResumeIframe/Project";
import WorkHistory from "./components/ResumeIframe/WorkHistory";
import ResumeNav from "./components/ResumeNav/ResumeNav";
import "./Resume.css";



const Resume = () => {
	const curr_state = useSelector((state) => state.Reducer);

	useEffect(() => {
		AOS.init({
			duration: 2000
		});
		AOS.refresh();
	}, []);

	return (
		<>

		<div id="resume">
			<div className="container-fluid resume-container">
				<div className="row">
					<div className="col-12">
						<div className="aboutme-heading">
							<h2>Resume</h2>
							<p>My formal bio details</p>
							<span className=" rounded-pill"></span>
							<hr />
						</div>
					</div>
				</div>

				<div className="row resume-section-2" data-aos="fade-up">
					<div className="col-md-10 shadow-lg bg-body rounded">
						<div className="row">
							<div className=" col-lg-4 resume-nav ">
								<ResumeNav />
							</div>
							<div className=" col-lg-8 resume-details" >
								{curr_state.Education ? null : <Education />}
							{curr_state.WorkHistory ? <WorkHistory /> : null }
							{curr_state.ProgrammingSkill ? <ProgrammingSkill /> : null }
							{curr_state.Project ? <Project /> : null }
							{curr_state.Interest ? <Interest /> : null }


								
							</div>
						</div>
					</div>
				</div>
			</div>
			</div>
		</>
	);
};

export default Resume;
