import characters_json from '../data/characters.json';
import { ADD_CHARACTER, REMOVE_CHARACTER } from '../actions';
import { createCharacter } from './helpers';

function characters (state = characters_json, action) {
    let characters;
    switch(action.type) {
        case ADD_CHARACTER:
             characters = state.filter(item => item.id !== action.payload.characterId);
            return characters;
        

            case REMOVE_CHARACTER:
                    characters =[...state, createCharacter(action.payload.characterId)];
                    return characters;

                    default:
                        return state;
    }
}

export default characters;  