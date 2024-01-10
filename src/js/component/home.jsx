import React, { useState } from 'react';

const Home = () => {
	const [inputValue, setInputValue] = useState("");
	const [lista, setLista] = useState([]);

	function guardarCambios(event) {
		setInputValue(event.target.value);

	}

	function handleKeyPress(e) {
		if (e.key == "Enter") {
			setLista(prev => prev.concat([inputValue]))
			setInputValue("")
		}

	}

	function eliminarTarea(event) {
		setLista(prev => prev.filter((x,i) => i !== event));
		}

	return (
		<div className="text-center">
			<h1 className="text-light-emphasis fw-light fs-1">Todo List  </h1>
			<input
				type="text"
				value={inputValue}
				onChange={guardarCambios}
				onKeyDown={handleKeyPress}
				className="form-control mx-auto shadow-sm"
				id="exampleFormControlInput1"
				placeholder="What needs to be done"
				style={{ width: '300px', backgroundColor: 'white', border: 'none' }}
			/>
			<ul className='list-group' style={{marginTop: '2px'}}>
				{lista.map((nombre, i) => (
					<li key={i} style={{ width: '300px', textAlign: 'left'}} className="list-group-item d-flex justify-content-start align-items-center mx-auto shadow-sm" >{nombre}
						<span onClick={() => eliminarTarea(i)} style={{ cursor: 'pointer', marginLeft: 'auto'}}>
							<i className="fas fa-times "></i>
						</span></li>
				))}
			</ul>

		</div>

	);
};

export default Home;