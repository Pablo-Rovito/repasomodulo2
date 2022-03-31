/* En actions vas a tener que crear las acciones que se despacharan en el reducer acompañadas
de las constantes ya exportadas */
import axios from 'axios';

var id = 10001;

export const GET_CHARACTERS = 'GET_CHARACTERS';
export const CHARACTER_DETAILS = 'CHARACTER_DETAILS';
export const CREATE_CHARACTER = 'CREATE_CHARACTER';

export function getCharacters() {
	return async function (dispatch) {
		const response = await axios.get('http://localhost:3001/characters');
		return dispatch({ type: GET_CHARACTERS, payload: response.data });
	};
}

export function getCharacter(id) {
	return async function (dispatch) {
		const response = await axios.get(
			`http://localhost:3001/characters/${id}`
		);
		return dispatch({ type: CHARACTER_DETAILS, payload: response.data });
	};
}

export function createCharacter({ name, img, nickname }) {
	id++;
	return { type: CREATE_CHARACTER, payload: { id, name, img, nickname } };
}
