import React from "react";
import { NavLink, Link } from "react-router-dom";

function Navigation({ active, toggle }) {
	return (
		<>
			<nav className="ease">
				<div id="nav" className={active ? "active" : ""}>
					<ul id="lst">
						<li>
							<NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")} onClick={toggle}>
								Home
							</NavLink>
						</li>
						<li>
							<NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")} onClick={toggle}>
								About us
							</NavLink>
						</li>
						<li>
							<NavLink to="/services" className={({ isActive }) => (isActive ? "active" : "")} onClick={toggle}>
								Our Services
							</NavLink>
						</li>
						<li>
							<NavLink to="/blog" className={({ isActive }) => (isActive ? "active" : "")} onClick={toggle}>
								Blog
							</NavLink>
						</li>
					</ul>
					<ul id="cta">
						<li>
							<Link to="/contact" className="site_btn long round" onClick={toggle}>
								Contact us
							</Link>
						</li>
					</ul>
				</div>
			</nav>
		</>
	);
}

export default Navigation;
