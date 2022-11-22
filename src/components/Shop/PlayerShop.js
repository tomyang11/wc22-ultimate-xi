import React, { useState } from "react";

import TeamFilter from "./TeamFilter";
import PositionFilter from "./PositionFilter";
import Sort from "./Sort";
import PlayerList from "./PlayerList";

function PlayerShop(props) {
	const [filteredTeam, setFilteredTeam] = useState("All");
	const [filteredPosition, setFilteredPosition] = useState("All");
	const [sortOrder, setSortOrder] = useState("HL");

	const teamFilterHandler = (filteredTeam) => {
		setFilteredTeam(filteredTeam);
	};

	const positionFilterHandler = (filteredPosition) => {
		setFilteredPosition(filteredPosition);
	};

	const sortHandler = (selectedSortOrder) => {
		setSortOrder(selectedSortOrder);
	};

	// Handle Filters and Sorting
	let filteredPlayers = props.players;
	if (filteredTeam !== "All") {
		filteredPlayers = filteredPlayers.filter((player) => {
			return player.nationality === filteredTeam;
		});
	}
	if (filteredPosition !== "All") {
		filteredPlayers = filteredPlayers.filter((player) => {
			return player.position === filteredPosition;
		});
	}
	if (sortOrder === "LH") {
		filteredPlayers.sort((a, b) => a.price - b.price);
	} else if (sortOrder === "HL") {
		filteredPlayers.sort((a, b) => b.price - a.price);
	}

	// build title for when no players have been added
	let titleForRender = "";
	switch(filteredPosition) {
		case "F":
			titleForRender = "forwards";
			break;
		case "M":
			titleForRender = "midfielders";
			break;
		case "D":
			titleForRender = "defenders";
			break;
		case "All":
			titleForRender = "players";
	}

	return (
		<div>
			<div className="flex flex-col md:flex-row justify-evenly items-center my-2 w-full">
				<TeamFilter
					selected={filteredTeam}
					onChangeFilter={teamFilterHandler}
				/>
				<PositionFilter
					selected={filteredPosition}
					onChangeFilter={positionFilterHandler}
				/>
				<Sort selected={sortOrder} onChangeSort={sortHandler} />
			</div>
			{filteredPlayers.length === 0 ? (
				<p className="flex justify-center items-center my-3 text-lg font-semibold">
					Have yet to add any {titleForRender} on Team {filteredTeam}
				</p>
			) : (
				<PlayerList
					addPlayer={props.addPlayer}
					players={filteredPlayers}
				/>
			)}
		</div>
	);
}

export default PlayerShop;
