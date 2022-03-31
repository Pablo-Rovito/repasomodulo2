import React from 'react';
import CharacterCard from './CharacterCard';

/* En este componente lo que tendran que hacer es mapear todas las CharacterCard pasandole por props la data que necesita
(vayan al componente para ver que necesita) */

export default function Cards({ characters }) {
	return (
		<div>
			<h3>Holi, soy Cards!</h3>
			<div
				style={{
					display: 'flex',
					flexWrap: 'wrap',
				}}>
				{characters?.map(({ id, name, img, nickname }) => {
					return (
						<CharacterCard
							key={id}
							id={id}
							name={name}
							img={img}
							nickname={nickname}
						/>
					);
				})}
			</div>
		</div>
	);
}
