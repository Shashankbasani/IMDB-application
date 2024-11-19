import './Crew.css';
import CrewCard from '../CrewCard/CrewCard';
function Crew({crew}){
    return(
        <div className='cast'>
        {
          crew.map(item=>{
               return (<CrewCard item={item} key={item.id}/>)
           })
        }
       </div>
    )
}

export default Crew;