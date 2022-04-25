import EducationDetails from "./components/EducationDetails/EducationDetails";

import "./Education.css"
const Education = () => {
  return (
    <>
       <div id="resume-education" data-aos="fade-up"
     data-aos-duration="2000">
				<EducationDetails
					school="Yunnan Technology And Business University, China"
					year="2018-2022"
					depart="Bachelor Of Computer Science"
				/>

				<EducationDetails
					school="Ideal College Dhanmondi, Dhaka"
					year="2015-2017"
					depart="Science"
				/>

				<EducationDetails
					school="R.B Government High School, Joypurhat"
					year="2010-2015"
					depart="Science"
				/>
			</div>
    </>
  )
}

export default Education