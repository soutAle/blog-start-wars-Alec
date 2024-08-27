import React from "react";
import "../../styles/home.css";
import { ListCards } from "../component/ListCards.jsx";

export const Home = () => (
	<div className="container text-center mt-5">
		<div className="row">
			<div className="col-12">
				<ListCards/>
			</div>
		</div>
	</div>
);
