import "./ContractMe.css";
import {
	Facebook,
	Github,
	Twitter,
	Whatsapp,
	EnvelopeHeart
} from "react-bootstrap-icons";
import contractBG from "./../assets/contractBG.jpeg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContractMe = () => {
	
	const form = useRef();
	const [user, setUser] = useState({
		name: "",
		email: "",
		message: ""
	});

	const { name, email, message } = user;

	const handleChange = (input) => {
		setUser({ ...user, [input.target.name]: input.target.value });
	};

	const clickHandle = async (input) => {
		input.preventDefault();

		const userObject = {
			name,
			email,
			message
		};

		try {
			const response = await fetch("/user", {
				method: "POST",
				body: JSON.stringify(userObject),
				headers: { "Content-Type": "application/json" }
			});

			const result = await response.json();

			if (response.status === 200) {
				toast(result.message, {
					position: "top-right",
					autoClose: 5000,
					theme: "dark"
				});

				await emailjs.sendForm(
					"service_e4iawkh",
					"template_q7fq2cw",
					form.current,
					"A44qtkXfKHhh85d4C"
				);

				setUser({ name: "", email: "", message: "" });
			} else {
				toast(result.error, {
					position: "top-right",
					autoClose: 5000,
					theme: "dark"
				});
			}
		} catch (error) {
			toast("Sry, Try Again Later 🙏", {
				position: "top-right",
				autoClose: 5000,
				theme: "dark"
			});
		}
	};

	return (
		<>
			<div id="contractme">
				<div className="container-fluid contract-container">
					<div className="row">
						<div className="col-12">
							<div className="contract-heading">
								<h2>Contract Me</h2>
								<p>Let's Keep In Touch</p>
								<span className=" rounded-pill"></span>
								<hr />
							</div>
						</div>
					</div>

					<div className="row contract-section-2" data-aos="fade-up">
						<div
							className="col-md-10 shadow-lg rounded"
							id="section-2-container"
						>
							<div className="row">
								<div className="col">
									<h2>
										Get In Touch <EnvelopeHeart className="icon" />{" "}
										<span className="blinking-cursor">|</span>{" "}
									</h2>
									<div className="contract-icon-container">
										<Facebook className="icon" />
										<Whatsapp className="icon" />
										<Twitter className="icon" />
										<Github className="icon" />
									</div>
								</div>
							</div>

							<div className="row">
								<div className="col-lg-6 contract-img">
									<p>Send Your Email Here !</p>
									<img src={contractBG} alt="contractBG" />
								</div>

								<div className="col-lg-6 contract-form">
									<form
										method="POST"
										encType="application/x-www-form-urlencoded"
										ref={form}
									>
										<div className="card">
											<div className="row">
												<div className="col">
													<div className="form-group">
														<label htmlFor="name">Name</label>
														<input
															type="text"
															id="name"
															name="name"
															value={name}
															required
															autoComplete="off"
															onChange={handleChange}
														/>
													</div>
												</div>

												<div className="col">
													<div className="form-group">
														<label htmlFor="email">Email</label>
														<input
															type="email"
															id="email"
															name="email"
															value={email}
															required
															autoComplete="off"
															onChange={handleChange}
														/>
													</div>
												</div>

												<div className="col">
													<div className="form-group">
														<label htmlFor="message-textarea">Message</label>
														<textarea
															id="message-textarea"
															name="message"
															value={message}
															placeholder="Message..."
															onChange={handleChange}
														></textarea>
													</div>
												</div>

												<div className="col">
													<button type="submit" onClick={clickHandle}>
														Sent
														<FontAwesomeIcon
															icon={faPaperPlane}
															id="plane-icon"
														/>
													</button>
												</div>
											</div>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
					<ToastContainer />
				</div>
			</div>
		</>
	);
};

export default ContractMe;
