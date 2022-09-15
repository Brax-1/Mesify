import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import classes from "./index.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { registerRoute } from "../../utils/APIRoute";

const Auth = (props) => {
	const [formData, setFormdata] = useState({
		email: "",
		username: "",
		password: "",
		confirmPassword: "",
	});
	const toastOption = {
		position: "bottom-right",
		autoClose: 4000,
		pauseOnHover: true,
		draggable: true,
		theme: "dark",
	};
	const navigate = useNavigate();
	function handleValidation() {
		const { email, username, password, confirmPassword } = formData;
		if (password !== confirmPassword) {
			toast.error("Password and Confirm password should be same", toastOption);
			return false;
		} else if (username.length < 3) {
			toast.error("Username should be greater than 3", toastOption);
			return false;
		} else if (password.length < 8) {
			toast.error("Password should be greater than 8", toastOption);
			return false;
		} else if (email.length === 0) {
			toast.error("Email is required", toastOption);
			return false;
		}
		return true;
	}

	async function handleSubmit(e) {
		e.preventDefault();
		const { email, username, password } = formData;
		if (props.page === "register") {
			if (handleValidation()) {
				console.log("stared");
				let dataPromise = new Promise(function (resolve, reject) {
					axios
						.post(registerRoute, {
							username,
							email,
							password,
						})
						.then((res) => {
							console.log(res);
							if (res.data.status === false) {
								console.log("error");
								reject(new Error(res.data.msg));
							} else {
								localStorage.setItem("mesify", JSON.stringify(res.user));
								navigate("/");
								resolve("I am surely going to get resolved!");
							}
						})
						.catch((err) => {
							reject(new Error("Will this be ignored?"));
						});
				});
				toast.promise(dataPromise, {
					pending: {
					  render(){
						return "Pls Wait Registering you"
					  },
					},
					success: {
					  render(){
						return "Successfully Registered 👌"
					  },
					},
					error: {
					  render({data}){
						return `${data}`
					  }
					}
				  },toastOption
			  );
				console.log("data getting");
			}
		}
	}
	function handleChange(e) {
		setFormdata({ ...formData, [e.target.name]: e.target.value });
	}
	return (
		<>
			<div className={classes.register_wrapper}>
				<div className={classes.mainBoxLeft}></div>
				<form onSubmit={(e) => handleSubmit(e)}>
					{props.page == "register" && (
						<input
							type={"text"}
							placeholder="UserName"
							name="username"
							onChange={(e) => handleChange(e)}
						/>
					)}

					<input
						type={"email"}
						placeholder="Email"
						name="email"
						onChange={(e) => handleChange(e)}
					/>
					<input
						type={"password"}
						placeholder="Password"
						name="password"
						onChange={(e) => handleChange(e)}
					/>
					{props.page == "register" && (
						<input
							type={"password"}
							placeholder="Confirm Password"
							name="confirmPassword"
							onChange={(e) => handleChange(e)}
						/>
					)}

					<button type="submit">
						{props.page == "register" ? "Create User" : "Login"}{" "}
					</button>
					{props.page == "register" ? (
						<div>
							already have an account ?{" "}
							<Link style={{ textDecoration: "none" }} to="/login">
								<span>Login</span>
							</Link>
						</div>
					) : (
						<div>
							create new account ?{" "}
							<Link style={{ textDecoration: "none" }} to="/register">
								<span>Register</span>
							</Link>
						</div>
					)}
				</form>
			</div>
		</>
	);
};

export default Auth;
