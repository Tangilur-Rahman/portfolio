import "./Interests.css"

const Interests = ({topic,details}) => {
  return (
    <>
       <div className="container-fluid">
					<div className="row">
						<div className="col">
							<div className="interests-heading">
								<span>🟠</span>
								<h6>{topic}</h6>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col">
							<div className="interests-details">
								<p>{details}</p>
							</div>
						</div>
					</div>
				</div>
    </>
  )
}

export default Interests