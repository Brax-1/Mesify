import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./index.module.css";
import axios from "axios";
import { allUsersRoute } from "../../utils/APIRoute";
import Contacts from "../../components/Contacts";

const Chat = () => {
	const [contacts, setContacts] = useState([]);
	const [currentUser, setCurrentUser] = useState(undefined);
	const navigate = useNavigate();
	async function handleCurrentUser() {
		if (!localStorage.getItem("mesify")) {
			navigate("/login");
		} else {
			setCurrentUser(await JSON.parse(localStorage.getItem("mesify")));
		}
	}
	async function handleGetAllUsers() {
		if (currentUser) {
			if (currentUser.isAvatarImageSet) {
				const data = await axios.get(`${allUsersRoute}/${currentUser._id}`);
				setContacts(data.data);
			} else {
				navigate("/setAvatar");
			}
		}
	}

	useEffect(() => {
		handleCurrentUser();
	}, []);
	useEffect(() => {
		handleGetAllUsers();
	}, [currentUser]);

	return (
		<div className={classes.chat_wrapper}>
			<Contacts contacts={contacts} currentUser={currentUser} />
		</div>
	);
};

export default Chat;
