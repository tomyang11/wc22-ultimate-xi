import React from "react";

const Alert = ({ text, type }) => {
	return (
		<div
			className={`rounded-md font-lg text-center py-2 font-medium text-white fixed w-3/4 top-4 mx-auto inset-x-0 ${
				type === "success" ? "bg-emerald-400" : "bg-red-400"
			}`}
		>
			{text}
		</div>
	);
};

export default Alert;
