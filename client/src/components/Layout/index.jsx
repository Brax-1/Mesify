import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import classes from "./index.module.css";
import Logo from "../../assets/logo.svg";
import { ToastContainer } from "react-toastify";

export const Layout = (props) => {
	const [isLogin, setIsLogin] = useState(false);
	const navigate = useNavigate();
	function handleLogout() {
		localStorage.removeItem("mesify");
	}
	useEffect(() => {
		setIsLogin(localStorage.getItem("mesify") ? true:false);
	}, [localStorage.getItem("mesify")]);
	return (
		<>
			<div className={classes.layout_content}>
				<div className={classes.layout_navbar}>
					<div className={classes.layout_navbar_left}>
						<div>
							<img src={Logo} />
							<div>Mesify</div>
						</div>
					</div>
					<div className={classes.layout_navbar_right}>
						{isLogin && (
							<>
								<Link style={{ textDecoration: "none" }} to={"/chat"}>
									<span>Chat</span>
								</Link>
								<Link style={{ textDecoration: "none" }} to={"/chat"}>
									<span>Store</span>
								</Link>
								<Link style={{ textDecoration: "none" }} to={"/setAvatar"}>
									<span>Avatars</span>
								</Link>
								<Link
									style={{ textDecoration: "none" }}
									to={"/login"}
									onClick={() => handleLogout()}
								>
									<span>Logout</span>
								</Link>
							</>
						)}
						{!isLogin && (
							<>
								<Link style={{ textDecoration: "none" }} to={"/login"}>
									<span>Login</span>
								</Link>
								<Link style={{ textDecoration: "none" }} to={"/register"}>
									<span>Register</span>
								</Link>
							</>
						)}
					</div>
				</div>
				<div
					style={{
						height: "100%",
						background: "rgb(19, 19, 19)",
						display: "flex",
						alignItems: "center",
					}}
				>
					{props.children}
				</div>
			</div>
			<ToastContainer />
		</>
	);
};
