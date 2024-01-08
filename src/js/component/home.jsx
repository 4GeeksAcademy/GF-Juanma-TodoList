import React from "react";


//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<h1 className="text-light fw-light fs-1 ">todos</h1>
			<div>
				<label for="exampleFormControlInput1" className="form-label">Email address</label>
				<input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Whats needs to be done"/>
			</div>
		</div>
	);
};

export default Home;
