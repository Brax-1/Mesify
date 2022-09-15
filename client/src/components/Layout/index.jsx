import React from "react";
import { Link } from "react-router-dom";
import classes from "./index.module.css";
import Logo from "../../assets/logo.svg";

export const Layout = (props) => {
	return (
		<div className={classes.layout_wrapper}>
			<div className={classes.layout_content}>
				<div className={classes.layout_navbar}>
					<div className={classes.layout_navbar_left}>
						<div>
							<img src={Logo} />
							<div>Mesify</div>
						</div>
					</div>
					<div className={classes.layout_navbar_right}>
						<Link style={{textDecoration: "none"}} to={"/chat"}>
							<span>Chat</span>
						</Link>
						<Link style={{textDecoration: "none"}} to={"/chat"}>
							<span>Store</span>
						</Link>
						<Link style={{textDecoration: "none"}} to={"/chat"}>
							<span>Shared</span>
						</Link>
						<Link style={{textDecoration: "none"}} to={"/login"}>
							<span>Login</span>
						</Link>
						<Link style={{textDecoration: "none"}} to={"/register"}>
							<span>Register</span>
						</Link>
						<Link style={{textDecoration: "none"}} to={"/chat"}>
							<span>Logout</span>
						</Link>
					</div>
				</div>
				<div style={{height:"100%"}}>
                    {props.children}
                </div>
			</div>
		</div>
	);
};
