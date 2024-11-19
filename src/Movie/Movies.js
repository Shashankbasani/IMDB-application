import React from "react";
import ReactDom from "react";
import { useState,useEffect } from "react";
import App from "../App";
import './Movies.css';
import MovieCard from "../MovieCard/MovieCard";
import { listMovies } from "../ListFile";
import Pagination from "../Pagination/Pagination";

function Movies({watchList,handleToAddWatchlist,deleteFromWatchlist}){
    let [movies, setMovies] = useState([]);
    let [pageNo, setPageNo] = useState(1);

    function handleNext(){
        if(pageNo===50) return;
        setPageNo(pageNo+1);
    }

    function handlePrev(){
        if(pageNo===1) return;
        setPageNo(pageNo-1);
    }
   
    //https://api.themoviedb.org/3/trending/movie/day?api_key=694e973db7c9b4f008cb3146fe715e53

   // https://api.themoviedb.org/3/trending/movie/day?api_key=694e973db7c9b4f008cb3146fe715e53&language=en-US&page=2

    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=694e973db7c9b4f008cb3146fe715e53&language=en-US&page=`+pageNo).then((res)=>{
            return res.json();
        }).then((response)=>{
            setMovies(response.results);
        })
        console.log(movies);
        
    },[pageNo]);
    

return(
    <div className="movieMain">
    <div id="movieS" className="movieList">
        
       {
        movies.map((M)=>{
           return  (<MovieCard movie={M} key={M.id}/>)
        })
       }
    </div>
    <Pagination pageNo={pageNo} handleNext={handleNext} handlePrev={handlePrev}/>
    </div>
)
}

export default Movies