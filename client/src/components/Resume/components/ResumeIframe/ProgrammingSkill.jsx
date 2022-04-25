import "./ProgrammingSkill.css"
import ProgressBar from './components/ProgressBar/ProgressBar'

const ProgrammingSkill = () => {
  return (
    <>
       <div id="programming-skill" data-aos="fade-down">
				<div className="container-fluid">
					<div className="row">
						<div className="col">
							<ProgressBar />
						</div>
					</div>
				</div>
			</div>
    </>
  )
}

export default ProgrammingSkill