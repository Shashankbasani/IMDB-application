import { useContext,useState } from "react";
import Context from "../Context/Context";
import WatchListCard from "../WatchListCard/WatchListCard";
import './WatchList.css';
import { useDispatch,useSelector } from "react-redux";

function WatchList(){
    let watchList = useSelector(s=>{
        return s.watchlist;
    })
    
    let dispatch = useDispatch();

    //let {watchList,setWatchlist,handleToAddWatchlist,deleteFromWatchlist} = useContext(Context);
    let [search,setSearch] = useState("");

    function handleitSearch(e){
        setSearch(e.target.value);
    }
     

    function sorting(x){
        let sortedArray = [];
        if(x){
            sortedArray = watchList.sort((obj1,obj2)=>{
                return obj1.vote_average - obj2.vote_average
            })
        }else{
            sortedArray = watchList.sort((obj1,obj2)=>{
                return obj2.vote_average - obj1.vote_average
            })
        }
        //setWatchlist([...sortedArray]);
        dispatch({type:'SET_TO_WATCHLIST',payload:sortedArray})
    }

    return(
        <>
        {watchList.length>0 &&
        <div className="search-container">
            <input 
                type="text" 
                className="search-input" 
                placeholder="Search Movies..."
                value={search} 
                onChange={handleitSearch} 
            />
            <i className="search-icon fas fa-search"></i>
        </div>
}
        {/* <input type="text" value={search} onChange={handleitSearch}/> */}
        {watchList.length>0 &&
        <div className="headerbar">
            <span className="name">Name</span>
            <span onClick={()=>sorting(false)} ><i className="aup arrow up fas fa-arrow-up"></i></span>
            <span onClick={()=>sorting(true)}><i className="adp arrow down fas fa-arrow-down"></i></span>
            <span className="rate">ratings</span>
            <span className="pop">Popularity</span>
            <span className="del">Delete</span>
        
        </div>
        }
        {watchList.length>0 ? (watchList.filter(item=>{
            return item.title.toLowerCase().includes(search.toLowerCase())
        }).map(item=>{
            return (<WatchListCard item={item}/>)
        })) : <div className="noshow">No movies to show in watchlist 🙂</div>}
        </>
    )
}

export default WatchList;