import './Cast.css';
import CastCard from '../CastCard/CastCard';
function Cast({cast}){
    return(
        <div className='cast'>
         {
           cast.map(item=>{
                return (<CastCard item={item} key={item.id}/>)
            })
         }
        </div>
    )
}
export default Cast;