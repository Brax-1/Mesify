import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import classes from "./index.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import {
	loginRoute,
	registerRoute,
	setAvatarRoute,
} from "../../utils/APIRoute";
import loader from "../../assets/loader.gif";
import { Buffer } from "buffer";

const SetAvatar = () => {
	const api = `https://api.multiavatar.com/4645646`;

	const navigate = useNavigate();
	const [avatars, setAvatars] = useState([]);
	const [selected_avatars, setSelectedAvatars] = useState(undefined);
	const [loading, setLoading] = useState(true);

	const toastOption = {
		position: "bottom-right",
		autoClose: 4000,
		pauseOnHover: true,
		draggable: true,
		theme: "colored",
	};

	async function setProfilePicture() {
		if (selected_avatars === undefined) {
			toast.error("Pls select an Avatar", toastOption);
		} else {
			const user = await JSON.parse(localStorage.getItem("mesify"));
			const dataPromise = new Promise(function (resolve, reject) {
				axios
					.post(`${setAvatarRoute}/${user._id}`, {
						image: avatars[selected_avatars],
					})
					.then((data) => {
						if (data.data.isSet) {
							user.isAvatarImageSet = true;
							user.avatarImage = data.image;
							localStorage.setItem("mesify", JSON.stringify(user));
							resolve("changed Avatar");
							navigate("/");
						} else {
							reject(new Error("Error1 setting avatar. Pls try again"));
						}
					})
					.catch((err) => {
						reject(new Error("Error setting avatar. Pls try again"));
					});
			});
			toast.promise(
				dataPromise,
				{
					pending: {
						render() {
							return "Processing Request";
						},
					},
					success: {
						render({ data }) {
							return `Successfully ${data} 👌`;
						},
					},
					error: {
						render({ data }) {
							return `${data}`;
						},
					},
				},
				toastOption
			);
		}
	}
	useEffect(() => {
		async function getAvatars() {
			const data = [];
			var cntAvatar = avatars.length;
			for (let i = 0; cntAvatar < 4; i++) {
				await axios
					.get(`${api}/${Math.round(Math.random() * 1000)}`)
					.then((image) => {
						const buffer = new Buffer(image.data);
						data.push(buffer.toString("base64"));
						cntAvatar = cntAvatar + 1;
					})
					.catch((err) => {
						console.log(err, cntAvatar);
					});
			}
			setAvatars(data);
			setLoading(false);
		}
		getAvatars();
	}, []);
	return (
		<div className={classes.avatar_wrapper}>
			{loading ? (
				<img src={loader} alt="loader" className={classes.loader} />
			) : (
				<div className={classes.title_container}>
					<h1>Pick an avatar as your profile picture</h1>
					<div className={classes.avatars}>
						{avatars.map((avatar, idx) => {
							return (
								<div
									key={idx}
									className={`${classes.avatar} ${
										selected_avatars === idx ? classes.selected_avatar : ""
									}`}
								>
									<img
										src={`data:image/svg+xml;base64,${avatar}`}
										onClick={() => setSelectedAvatars(idx)}
									/>
								</div>
							);
						})}
					</div>
					<button onClick={setProfilePicture} className={classes.submit_btn}>
						Set as Profile Picture
					</button>
				</div>
			)}
		</div>
	);
};

export default SetAvatar;
