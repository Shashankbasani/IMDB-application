import './WatchListCard.css';
import { useContext } from 'react';
import Context from '../Context/Context';
import { useDispatch,useSelector } from 'react-redux';

function WatchListCard({item}){
    const watchList = useSelector(state=>{
        return state.watchlist;
    })

    let dispatch = useDispatch();

    function deleteFromWatchlist(){
     dispatch({type:'REMOVE_FROM_WATCHLIST',payload:item})
    }

    //let {watchList,setWatchList,handleToAddWatchlist,deleteFromWatchlist} = useContext(Context);
    return(
        
        <div className='mainCard'>
        <div className='wCardimg'>
           <img src={`https://image.tmdb.org/t/p/w500`+item.backdrop_path} />
        </div>
        <div className='wCardtitle'>
            {item.title}
        </div>
        <div className='wCardvote'>
            {item.vote_average}
        </div>
        <div className='wgonere'>
            {item.popularity}
        </div>
        <div className='wdeleted' onClick={deleteFromWatchlist}>
            Delete
        </div>
        </div>
       
    )
}

export default WatchListCard