import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
	return (
		<div className="footer-container">
			<div className="company-logo">
				<Link to="/" className="footer-logo">
					<i className="fas fa-money-check-alt"></i>
				</Link>
			</div>

			<div className="copyrights">
				<p>© Copyright 2021-2022. All rights reserved</p>
			</div>

			<div className="social-media">
				Made by Yogesh Sanjaray
				<a
					href="https://github.com/yogeshsanjaray"
					style={{ textDecoration: "none" }}
				>
					<i className="fab fa-github" to="" />
				</a>
				<a
					href="https://www.linkedin.com/in/yogesh-sanjaray-a941481b5"
					style={{ textDecoration: "none" }}
				>
					<i className="fab fa-linkedin" />
				</a>
			</div>
		</div>
	);
}
