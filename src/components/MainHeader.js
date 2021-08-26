import React from "react";
// use NavLink instead of Link to show link as active using activeClassName prop
import { NavLink } from "react-router-dom";
import classes from "./MainHeader.module.css";

export default function MainHeader() {
	return (
		<header className={classes.header}>
			<nav>
				<ul>
					<li>
						<NavLink activeClassName={classes.active} to="/welcome">
							welcome
						</NavLink>
					</li>
					<li>
						<NavLink activeClassName={classes.active} to="/products">
							products
						</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
}
