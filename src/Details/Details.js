import { useState,useEffect } from "react";
import Cast from "../Cast/Cast";
import React from "react";
import './Details.css'
import DetailsBanner from "../DetailsBanner/DetailsBanner";
import { useParams } from "react-router-dom";
import Crew from "../Crew/Crew";
function Details(){
    let [details,setDetails] = useState([]);
    const {id} = useParams();
    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/movie/`+id+`?api_key=694e973db7c9b4f008cb3146fe715e53&language=en-US&append_to_response=credits,videos`).then((res)=>{
            return res.json();
        }).then((response)=>{
          // let id = Math.floor(Math.random() * response.results.length)
            setDetails(response);
            console.log(details);
        })
       
        
    },[]);
    return(
        <div>
            <DetailsBanner banner={details}/>
            <h1 className="castt">Cast</h1>
            {console.log(details)}
        {details.credits ? <Cast className="castMembers" cast={details.credits.cast.slice(0,20)} /> : null}
        <h1 className="creww">Crew</h1>
            {console.log(details)}
        {details.credits ? <Crew className="castMembers" crew={details.credits.crew.slice(0,20)} /> : null}
        </div>
    )
}

export default Details;