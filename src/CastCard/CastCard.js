import './CastCard.css';
import { useState,useEffect } from 'react';

function CastCard({item}){
return (
    <div className='castCard'>
       <div className='castCard-img'>
       <img src={`https://image.tmdb.org/t/p/w500`+item.profile_path} />
       </div>
       <div className='name'>{item.name}</div>
       <div className='char'>as {item.character}</div>
    </div>
)
}

export default CastCard