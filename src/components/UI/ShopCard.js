import React from "react";

import defaultProfile from "../../assets/default.jpg";

function ShopCard(props) {
	const { name, position, price, nationality, image } = props.player;

	const onClickHandler = () => {
		props.addPlayer(props.player);
	};

	let positionFull = "";
	switch (position) {
		case "F":
			positionFull = "Forward";
			break;
		case "M":
			positionFull = "Midfielder";
			break;
		case "D":
			positionFull = "Defender";
			break;
		case "G":
			positionFull = "Goalkeeper";
	}

	const flagPath =
		"flags4836/" + nationality.replace(" ", "-").toLowerCase() + ".png";

	return (
		<div className="flex flex-col justify-center items-center p-4 rounded-md w-2/5 md:w-1/4 lg:w-1/5 m-3 shadow-xl shadow-slate-200">
			<img
				src={image}
				onError={({ currentTarget }) => {
					currentTarget.onerror = null;
					currentTarget.src = defaultProfile;
				}}
				alt={`Photo of ${name}`}
				className="rounded-md w-full h-32"
			/>
			<div className="flex flex-row justify-center items-center w-full mt-2">
				<p className="font-bold text-xs md:text-base lg:text-lg">
					{name}
				</p>
			</div>
			<div className="flex flex-row-reverse justify-between items-center font-semibold text-xs md:text-base w-full mb-2 px-2">
				<p>${price}</p>
				<p>{positionFull}</p>
			</div>
			<div className="flex flex-row justify-between items-center font-bold text-xs md:text-base w-full px-2">
				<img src={flagPath} className="h-5 md:h-6" />
				<button
					onClick={onClickHandler}
					className="rounded-md py-1 px-3 bg-[#891638] hover:bg-[#b3687e] text-white"
				>
					Add <span className="hidden lg:inline">to Team</span>
				</button>
			</div>
		</div>
	);
}

export default ShopCard;
