import React, {useState}  from "react";
import Light from "./Light"; 

const Home = () => {
	const colors = ["red", "yellow", "green"]
	const [lit, setLit] = useState("red");
	
	return (
		<div className="pageBody">
			<div className="trafficLight mx-auto">
              {colors.map((color) => {
				return <Light color={color} lit={lit} setLit={setLit} />;
			  } )}
			</div>
		</div>
	);
};

export default Home;
