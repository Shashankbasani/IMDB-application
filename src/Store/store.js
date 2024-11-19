import { createStore } from "redux";

let watchlist = JSON.parse(localStorage.getItem('movies')) ? JSON.parse(localStorage.getItem('movies')) : [];

function WatchListReducer(state={watchlist:watchlist},action){
    switch(action.type){
        case 'SET_TO_WATCHLIST' :{
            return {...state,watchlist:[...action.payload]}
        }
        case 'ADD_TO_WATCHLIST' :{
            console.log(state);
            let newState = {...state, watchlist: [...state.watchlist,action.payload]};
            //watchlist: [...state.watchlist,action.payload]
            // this is same like if an array have array =[1,2];
            //array = [...array,3]
            //array = [1,2,3]
            //this is amazing isn't it right
            //Now I got it

            localStorage.setItem('movies', JSON.stringify(newState.watchlist))
            return newState;
        }
        case 'REMOVE_FROM_WATCHLIST' :{
          const filterMovies = state.watchlist.filter(movie => movie.id !== action.payload.id);
          localStorage.setItem('movies',JSON.stringify(filterMovies))
          return {...state,watchlist:[...filterMovies]};

        }
        default: return state
    }

}

const Store = createStore(WatchListReducer);
export default Store