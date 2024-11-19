import './MovieCard.css';
import { useState,useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import Context from '../Context/Context';
import { useDispatch, useSelector } from 'react-redux';

function MovieCard({movie}){
    let dispatch = useDispatch();
    //let {watchList,handleToAddWatchlist,deleteFromWatchlist} = useContext(Context);
    //console.log(watchList)
    //console.log(movie.imdb_url);
 
    const watchList = useSelector(state=>{
        return state.watchlist;
    })

    function addtoWatchList(){
        // handleToAddWatchlist(movie)
        dispatch({type:'ADD_TO_WATCHLIST', payload:movie})
    }

    function removeFromWatchlist(){
        //deleteFromWatchlist(movie)
        dispatch({type:'REMOVE_FROM_WATCHLIST', payload:movie})
    }

    function doesContain(){
        if(watchList===null) return false
        for (let i = 0; i < watchList.length; i++) {
            if (watchList[i].id === movie.id) {
              return true;
            }
          }
        return false;
    }
return(
    <div className='movieCard'>
      
       <img src={`https://image.tmdb.org/t/p/w500`+movie.backdrop_path} />
       <span className='titlecard'>{movie.title}</span>
       <Link className='todetails' to={`/details/`+movie.id}><span>i</span></Link>
       {doesContain()? <span className='addrremove' onClick={removeFromWatchlist} ><i class="fa-solid fa-heart" style={{ color: '#e8215d' }}></i></span> : <span className='addrremove' onClick={addtoWatchList}><i class="fa-sharp-duotone fa-solid fa-heart iconx"></i></span>}
        
        

    </div>

    
)
}

export default MovieCard;