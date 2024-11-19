import React from "react";
import { useState,useEffect } from "react";
import './Banner.css';

function Banner(){
    let [random,setRandom] = useState([]);

    
        useEffect(()=>{
            fetch('https://api.themoviedb.org/3/trending/movie/day?api_key=694e973db7c9b4f008cb3146fe715e53').then((res)=>{
                return res.json();
            }).then((response)=>{
               let id = Math.floor(Math.random() * response.results.length)
                setRandom(response.results[id]);
                console.log(random);
            })
           
            
        },[]);
    
    return(
     <div className="banner">
        <img className="bannerCard" src={`https://image.tmdb.org/t/p/w500`+random.backdrop_path} />
        <div className="bannertitle">
            {random.title}
        </div>
     </div>
     
    )
}
export default Banner;