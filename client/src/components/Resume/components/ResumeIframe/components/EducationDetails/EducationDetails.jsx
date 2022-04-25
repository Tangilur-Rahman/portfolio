import "./EducationDetails.css";

const EducationDetails = ({ school, year, depart }) => {
	return (
		<>
			<div className="container-fluid">
				<div className="row">
					<div className="col">
						<div className="education-heading">
							<span>🟠</span>
							<h6>{school}</h6>

							<div className="year">
								<strong>{year}</strong>
							</div>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col">
						<div className="education-details">
							<p>{depart}</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default EducationDetails;
