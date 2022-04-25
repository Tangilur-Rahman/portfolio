import "./App.css";
import Profile from "./components/Profile/Profile";
import Navbar from "./components/Navbar/Navbar";
import Aboutme from "./components/AboutMe/Aboutme";
import Resume from "./components/Resume/Resume";
import Testimonial from "./components/Testimonial/Testimonial";
import ContractMe from "./components/ContractMe/ContractMe";
import Copyright from "./components/Copyright/Copyright";
import BackToTop from "./components/BackToTop/BackToTop";

import {BrowserRouter,Routes,Route} from "react-router-dom"

const App = () => {
	return (
		<>
			<BrowserRouter >
				<Routes>
					<Route path="/" element={<ParentContainer/>} />
				</Routes>
			</BrowserRouter>
		</>
	);
};


const ParentContainer = ()=>{
	return(
		<>
			<Navbar />
			<Profile />
			<Aboutme />
			<Resume />
			<Testimonial />
			<ContractMe />
			<Copyright />
			<BackToTop />
		</>
	)
}

export default App;
