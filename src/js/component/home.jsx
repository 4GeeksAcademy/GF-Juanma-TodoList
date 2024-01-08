import React, { useState } from "react";


//create your first component
const Home = () => {
	const [inputValue, setInputValue] = useState('');
	const [todos, setTodos] = useState([]);

	function guardarCambios(event){
		setInputValue(event.target.value)
		
	};
	return (
		<div className="text-center">
			<h1 className="text-light fw-light fs-1 ">todos</h1>
			<div>
				<form>
				<input type="text" onChange={guardarCambios}className="form-control mx-auto shadow-sm " id="exampleFormControlInput1" placeholder="Whats needs to be done"  style={{ width: '300px' ,backgroundColor: 'white', border: 'none' , }}/>
				</form>
			</div>
		</div>
	);
};

export default Home;
