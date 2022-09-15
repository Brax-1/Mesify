import React from "react";
import { Link } from "react-router-dom";
import classes from "./index.module.css";
import helloRobot from "../../assets/robot.gif";
import logo from "../../assets/logo.svg";

const Auth = (props) => {
	function handleSubmit(pe) {}
	function handleChange(params) {}
	return (
		<div className={classes.register_wrapper}>
			<div className={classes.mainBoxLeft}></div>
			<form onSubmit={(e) => handleSubmit(e)}>
				{props.page == "register" && (
					<input
						type={"text"}
						placeholder="UserName"
						onChange={(e) => handleChange(e)}
					/>
				)}

				<input
					type={"email"}
					placeholder="Email"
					onChange={(e) => handleChange(e)}
				/>
				<input
					type={"password"}
					placeholder="Password"
					onChange={(e) => handleChange(e)}
				/>
				{props.page == "register" && (
					<input
						type={"password"}
						placeholder="Confirm Password"
						onChange={(e) => handleChange(e)}
					/>
				)}

				<button type="submit">
					{props.page == "register" ? "Create User" : "Login"}{" "}
				</button>
				{props.page == "register" ? (
					<div>
						already have an account ? <Link style={{textDecoration:"none"}} to="/login"><span>Login</span></Link>
					</div>
				) : (
					<div>
						create new account ? <Link style={{textDecoration:"none"}} to="/register"><span>Register</span></Link>
					</div>
				)}
			</form>
		</div>
	);
};

export default Auth;
