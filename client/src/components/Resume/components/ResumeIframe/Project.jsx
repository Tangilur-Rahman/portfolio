import Projects from './components/Projects/Projects';
import "./Project.css";

const Project = () => {
  return (
    <>
       <div id="projects"  data-aos="fade-up"
     data-aos-anchor-placement="top-bottom">
				<Projects
					name="Portfolio Website"
					year="Apr-2022"
					tech="React JS, Bootstrap, Express JS, Mongoose Redux"
					details="That website to showcase all my details and projects.  "
				/>

				<Projects
					name="E-commerce Website"
					year="Apr-2022"
					tech="React JS, Bootstrap, Express JS, Mongoose, Redux, Router-Dom, JWT"
					details="Designed to sell products online with payment system integration "
				/>

				<Projects
					name="Whatsapp Clone"
					year="Apr-2022"
					tech="Next JS, Bootstrap, Express JS, Mongoose, Redux, JWT"
					details="For Practice"
				/>
			</div>
    </>
  )
}

export default Project;