import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getCharacter } from '../actions';
import {Link} from "react-router-dom"
/* Commponente de detalles, en el cual renderizaran los datos del personaje que se desee, se toma el
id del personaje el cual viene por url y a partir de una action pasandole como parametro el id del personaje
se deberia poder ver en la pagina un h1 con el nombre, un img con la imagen y dos p con el nickname y las occupations */

export function Details({
	match,
	name,
	img,
	nickname,
	occupation,
	getCharacter,
}) {
	let id = match.params.id;

	useEffect(() => getCharacter(id), [getCharacter, id]);

	return (
		<div>
			{'holi desde Details 🙋🏿‍♂️'}
			<Link to="/">Return to Home</Link>
			<h1>{name}</h1>
			<img
				src={img}
				alt=''
				style={{ maxWidth: '250px', maxHeight: '250px' }}
			/>
			<p>{nickname}</p>
			<p>
				{occupation?.map((o) => {
					return <div>{o}</div>;
				})}
			</p>
		</div>
	);
}

function mapStateToProps(state) {
	return {
		name: state?.details[0]?.name,
		img: state?.details[0]?.img,
		nickname: state?.details[0]?.nickname,
		occupation: state?.details[0]?.occupation,
	};
}

function mapDispatchToProps(dispatch) {
	return {
		getCharacter: (id) => dispatch(getCharacter(id)),
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Details);
