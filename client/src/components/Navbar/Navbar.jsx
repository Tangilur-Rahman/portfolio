import { useState } from "react";
import { Link } from "react-scroll";
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
					<Link
						to="profile"
						spy={true}
						smooth={true}
						offset={-80}
						duration={500}
						className="navbar-hover-link"
						id="logo"
					>
						<span>Tangil</span>
					</Link>
				</div>
				<ul
					id="nav-links"
					className={isActive ? "nav-links nav-active" : "nav-links"}
				>
					<li className={isActive ? "ani-link-1" : null}>
						<Link
							to="profile"
							spy={true}
							smooth={true}
							offset={-80}
							duration={500}
							className="navbar-hover-link"
						>
							Profile
						</Link>
					</li>

					<li className={isActive ? "ani-link-2" : null}>
						<Link
							to="aboutme"
							spy={true}
							smooth={true}
							offset={-50}
							duration={500}
							className="navbar-hover-link"
						>
							AboutMe
						</Link>
					</li>

					<li className={isActive ? "ani-link-3" : null}>
						<Link
							to="resume"
							spy={true}
							smooth={true}
							offset={-50}
							duration={500}
							className="navbar-hover-link"
						>
							Resume
						</Link>
					</li>

					<li className={isActive ? "ani-link-4" : null}>
						<Link
							to="testimonial"
							spy={true}
							smooth={true}
							offset={-50}
							duration={500}
							className="navbar-hover-link"
						>
							Testimonial
						</Link>
					</li>

					<li className={isActive ? "ani-link-5" : null}>
						<Link
							to="contractme"
							spy={true}
							smooth={true}
							offset={0}
							duration={500}
							className="navbar-hover-link"
						>
							ContractMe
						</Link>
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
