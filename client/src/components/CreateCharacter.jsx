import React, { useState } from 'react';
import { createCharacter } from '../actions';
import { connect } from 'react-redux';

/* En este componente tendran que hacer un formulario controlado en el cual tendra que validarse
que todos los inputs tengan algo dentro. Es opcional mostrar un mensaje de error */

export function CreateCharacter({ createCharacter }) {
	let [char, setChar] = useState({ name: '', img: '', nickname: '' });
	let [disable, setDisable] = useState(true);

	function handleOnChange(e) {
		e.preventDefault();
		setChar({ ...char, [e.target.name]: e.target.value });
		char.name.length && char.img.length && char.nickname.length
			? setDisable(false)
			: setDisable(true);
	}

	function handleSubmit(e) {
		e.preventDefault();
		createCharacter(char);
		setChar({ name: '', img: '', nickname: '' });
		setDisable(true);
	}

	return (
		<div>
			<h4>holi desde CreateChar 🙋🏿‍♂️</h4>
			<div>
				<form onSubmit={handleSubmit}>
					<label>Name</label>
					<input
						name='name'
						value={char.name}
						onChange={handleOnChange}
					/>

					<label>Image</label>
					<input
						name='img'
						value={char.img}
						onChange={handleOnChange}
					/>

					<label>Nickname</label>
					<input
						name='nickname'
						value={char.nickname}
						onChange={handleOnChange}
					/>
					<button type='submit' disabled={disable}>
						Submit
					</button>
				</form>
			</div>
		</div>
	);
}

function mapDispatchToProps(dispatch) {
	return {
		createCharacter: (char) => dispatch(createCharacter(char)),
	};
}

export default connect(null, mapDispatchToProps)(CreateCharacter);
