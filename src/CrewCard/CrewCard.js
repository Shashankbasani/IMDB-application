import './CrewCard.css';


function CrewCard({item}){
    return(
        <div className='castCard'>
        <div className='castCard-img'>
        <img src={`https://image.tmdb.org/t/p/w500`+item.profile_path} />
        </div>
        <div className='char'> {item.job}</div>

        <div className='name'>{item.name}</div>
     </div>
    )
}

export default CrewCard;