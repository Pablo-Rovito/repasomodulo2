import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Cards from './Cards';
import { getCharacters } from '../actions';

/* Dentro de este componente tendran que crear y renderizar un titulo que indique donde estas (en este caso seria en home),
un Link el cual deberia redirigir a la ruta '/create' con un texto que diga su accion y el componente Cards pasandole por props el estado global hecho en el reducer. */

/* recuerda que ni bien se renderiza el componente necesitara que se ejecute una accion para obtener los personajes.
Lo cual puedes realizarlo mas adelante */

export function Home({ characters, getCharacters }) {
	useEffect(() => getCharacters(), [getCharacters]);

	return (
		<div>
			<div>
				<h1>Holi desde Home 🙋🏿‍♂️</h1>
			</div>

			<div
				style={{
					display: 'flex',
					justifyContent: 'center',
					alignContent: 'center',
				}}>
				<Link to='/create'>Create character</Link>
			</div>
			<div
				style={{
					display: 'flex',
					justifyContent: 'center',
					alignContent: 'center',
				}}>
				<Cards characters={characters} />
			</div>
		</div>
	);
}

function mapStateToProps(state) {
	return {
		characters: state.characters,
	};
}

function mapDispatchToProps(dispatch) {
	return {
		getCharacters: () => dispatch(getCharacters()),
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
