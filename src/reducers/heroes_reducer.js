
import { ADD_CHARACTER, REMOVE_CHARACTER} from '../actions';
import { createCharacter } from './helpers';



function heroes(state = [], action){
        let heroes;
    switch(action.type) {
            
        case ADD_CHARACTER:
             heroes = [...state, createCharacter(action.payload.characterId)];
            return heroes;

            case REMOVE_CHARACTER:
                
                heroes = state.filter(item => item.id !== action.payload.characterId);
                return heroes;
            default:
                return state;
    }



}

export default heroes;