import characters_json from '../data/characters.json';
import { ADD_CHARACTER} from '../actions';


function createCharacter(id) {
    let character = characters_json.find(c => c.id === id);
    return character;
}

function heroes(state = [], action){
    switch(action.type) {
        case ADD_CHARACTER:
            let heroes = [...state, createCharacter(action.payload.characterId)];
            return heroes;
            default:
                return state;
    }



}

export default heroes;