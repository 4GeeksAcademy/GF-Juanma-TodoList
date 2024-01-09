import React, { useState } from 'react';

const Home = () => {
	const [inputValue, setInputValue] = useState('');
	const [todos, setTodos] = useState([]);
	const [selectedTodo, setSelectedTodo] = useState(null);

	function guardarCambios(event) {
		setInputValue(event.target.value);
	}

	function agregarTarea(event) {
		event.preventDefault();
		if (inputValue === '') return;
		setTodos([...todos, inputValue]);
		setInputValue('');
	}

	function handleDelete(index) {
		const newTodos = [...todos];
		newTodos.splice(index, 1);
		setTodos(newTodos);
		setSelectedTodo(null);
	}

	return (
		<div className="text-center">
			<h1 className="text-light fw-light fs-1">todos</h1>

			<form onSubmit={agregarTarea}>
				<input
					type="text"
					value={inputValue}
					onChange={guardarCambios}
					className="form-control mx-auto shadow-sm"
					id="exampleFormControlInput1"
					placeholder="What needs to be done"
					style={{ width: '300px', backgroundColor: 'white', border: 'none' }}
				/>
			</form>
			<div className="text-center list-container">
				<ul className="list">
					{todos.length === 0 ? <p>No hay tareas, añadir tareas</p> :
						todos.map((todo, index) => (
							<li className='list-item' key={index}>
								<span>{todo}</span>
								{selectedTodo === index && (
									<button onClick={() => handleDelete(index)} >
										<i className="fas fa-times"></i>
									</button>
								)}
							</li>
						))
					}
				</ul>
			</div>
		</div>

	);
};

export default Home;