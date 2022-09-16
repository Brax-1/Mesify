import React, { useEffect, useState } from "react";
import classes from "./index.module.css";

const Contacts = ({ contacts, currentUser }) => {
	const [currentUserName, setCurrentUserName] = useState("");
	const [currentUserImage, setCurrentUserImage] = useState(undefined);
	const [currentSelected, setCurrentSelected] = useState(undefined);

	useEffect(() => {
		if (currentUser) {
			console.log(currentUser);
			setCurrentUserImage(currentUser.avatarImage);
			setCurrentUserName(currentUser.username);
		}
	}, [currentUser]);
	function changeCurrentChat(idx, contact) {}

	return (
		<div className={classes.contact_container}>
			<div className={classes.contacts_contacts}>
				<div className={classes.contacts_label}>Contacts</div>
				{contacts.map((contact, idx) => {
					return (
						<div
							className={`${classes.contacts_contact} ${
								idx === currentSelected ? classes.selected_contact : ""
							}`}
							key={idx}
						>
							<div className={classes.contacts_avatar}>
								<img src={`data:image/svg+xml;base64,${contact.avatarImage}`} />
							</div>
							<div className={classes.contacts_username}>
								<h4>{contact.username}</h4>
							</div>
						</div>
					);
				})}
			</div>
			<div className={classes.contacts_current_user}>
				<div className={classes.contacts_label}>Personal Info</div>
				<div className={classes.contacts_personal}>
					<div className={classes.contacts_avatar}>
						<img src={`data:image/svg+xml;base64,${currentUserImage}`} />
					</div>
					<div className={classes.contacts_username}>
						<h4>{currentUserName}</h4>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contacts;
