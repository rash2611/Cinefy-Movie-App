export default function movies(state = [], action){
    if(action.movies === 'ADD_MOVIES'){
        return action.movies;
    }
    return state;
}