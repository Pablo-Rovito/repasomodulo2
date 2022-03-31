import {
	CHARACTER_DETAILS,
	CREATE_CHARACTER,
	GET_CHARACTERS,
} from '../actions';

const initialState = {
	characters: [],
	details: [],
	charactersCreated: [],
	allCharacters: [],
};

/* en este reducer lo que tendran que hacer es definir los switchs los cuales van a tener sus respectivas case y
returns modificando el estado dependiendo de lo que se requiera en cada accion */

const reducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case CHARACTER_DETAILS:
			return { ...state, details: payload };
		case CREATE_CHARACTER:
			return {
				...state,
				charactersCreated: [...state.charactersCreated, payload],
			};
		case GET_CHARACTERS:
			return { ...state, characters: payload };
		default:
			return { ...state };
	}
};

export default reducer;
