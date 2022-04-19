import { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
	const [isActive, setActive] = useState(false);

	const addActiveClass = () => {
		setActive(!isActive);
	};

	return (
		<>
			<nav id="nav">
				<div className="logo">
					<span>Tangil</span>
				</div>
				<ul
					id="nav-links"
					className={isActive ? "nav-links nav-active" : "nav-links"}
				>
					<li className={isActive ? "ani-link-1" : null}>
						<a href="#profile">Profile</a>
					</li>

					<li className={isActive ? "ani-link-2" : null}>
						<a href="#aboutme">AboutMe</a>
					</li>

					<li className={isActive ? "ani-link-3" : null}>
						<a href="#resume">Resume</a>
					</li>

					<li className={isActive ? "ani-link-4" : null}>
						<a href="#testimonial">Testimonial</a>
					</li>

					<li className={isActive ? "ani-link-5" : null}>
						<a href="#contractme">ContractMe</a>
					</li>
				</ul>

				<div className="burger" onClick={addActiveClass}>
					<div className={isActive ? "line-1" : null}></div>
					<div className={isActive ? "line-2" : null}></div>
					<div className={isActive ? "line-3" : null}></div>
				</div>
			</nav>
		</>
	);
};

export default Navbar;
