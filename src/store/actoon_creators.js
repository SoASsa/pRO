import * as Ations from "./actions";
import { routerActions } from "connected-react-router";

export function updateMovies (payload) {
    const realReduxAction = {
        type: routerActions.UPDATE_MOOVIE_LIST,
        payload, //payload:payload,
    }
    return ealReduxAction
}

export function getMovies(payload) {
    return async (dispatcher) => {
        dispatcher(updateLoadingState(true));
        
        const movies = fetch( 'https://api.tvmaze.com/search/shows?q=batman');
        movies.
        then((data) => { // async (data) => { ...
            return data.json();
        }).then( (data) => {
            //this
            dispatcher (updateMovies(data));
            dispatcher (updateLoadingState(false));
        }). 
        catch((e) => {
            console.log("ERROR whileloading data from url", e);
        });
    }
}

export function updateWatched(payload) {
    return {
        type: routerActions.UPDATE_WATCHED,
        payload,
    }
}

export function getMovies(payload){

}