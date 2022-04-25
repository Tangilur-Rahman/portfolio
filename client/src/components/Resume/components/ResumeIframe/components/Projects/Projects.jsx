import "./Projects.css"

const Projects = ({name,year,tech, details}) => {
  return (
    <>
       <div className="container-fluid ">
					<div className="row">
						<div className="col">
							<div className="projects-heading">
								<span >🟠</span>
								<h6>{name}</h6>

								<div className="year">
									<strong>{year}</strong>
								</div>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col">
							<div className="projects-details">

                        <h4><span>Technology Used: </span> {tech}</h4>
								<p>-{details}</p>
							</div>
						</div>
					</div>
				</div>
    </>
  )
}

export default Projects;