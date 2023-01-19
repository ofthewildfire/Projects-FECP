import React from "react";
import data from "./data.js";
import Post from "./components/Post.js";
import Navbar from "./components/Navbar.js";

export default function App() {
	const Posts = data.map(function (item) {
		return (
			<Post
				key={item.location}
				item={item}
			/>
		);
	});

	return (
		<div className="main-content-page">
			<Navbar />
			{Posts}
		</div>
	);
}
