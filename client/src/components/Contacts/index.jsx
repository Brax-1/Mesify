import React, { useEffect, useState } from "react";
import classes from "./index.module.css";

const Contacts = ({ contacts, currentUser,changeChat }) => {
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
	function changeCurrentChat(idx, contact) {
		setCurrentSelected(idx)
		changeChat(contact)
	}

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
							onClick={()=>changeCurrentChat(idx,contact)}
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
				<div className={classes.contacts_personal}>
					<div className={classes.contacts_avatar}>
						<img src={`data:image/svg+xml;base64,${currentUserImage}`} />
					</div>
					<div className={classes.contacts_username}>
						<h4>{currentUserName.slice(0,16)}{currentUserName.length>=16?"..":""}</h4>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contacts;
