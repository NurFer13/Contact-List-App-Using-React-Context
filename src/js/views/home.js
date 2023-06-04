import React from "react";
import { ContactCard } from "../component/ContactCard.jsx";
import "../../styles/home.css";

export const Home = () => (
	<div className="text-center mt-5">
		<h1 className="text-white">Contact List App Using React & Context
</h1>
		<ContactCard/>
	</div>
);
