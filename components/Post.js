import React from "react";

function Post(props) {
	const { img, title, location, mapURL, startDate, endDate, description } =
		props;
	return (
		<div className="post-card">
			<div className="image-container">
				<img
					className="image"
					src={img}
				/>
				<div>
					<div className="location-bar">
						<span className="location-country">
							<img src="../images/location.png" /> {location}
						</span>
						<span className="maps-url">
							{" "}
							<a href={`${mapURL}`}> View on Google Maps </a>{" "}
						</span>
					</div>
					<h2 className="location-title"> {title} </h2>
					<p>
						<span className="dates"> {startDate} - </span>
						<span className="dates"> {endDate} </span>
					</p>
					<p className="description"> {description} </p>
				</div>
			</div>
		</div>
	);
}

export default Post;
