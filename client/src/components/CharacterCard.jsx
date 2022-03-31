import React from 'react';
import { Link } from 'react-router-dom';

/* Aqui van a tomar cada una de la data que se envio desde Cards y van a mostrarla como si fuese una tarjeta
en el orden que les guste */

export default function CharacterCard({ id, name, img, nickname }) {
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				flexWrap: 'wrap',
				justifyContent: 'center',
				alignItems: 'center',
				textAlign: 'center',
				backgroundColor: 'gray',
				margin: '1rem 1rem',
			}}>
			<h4>
				<Link to={`/details/${id}`}>{name}</Link>
			</h4>
			<img
				src={img}
				alt=''
				style={{ maxHeight: '100px', maxWidth: '100px' }}
			/>
			<h5>{nickname}</h5>
		</div>
	);
}
