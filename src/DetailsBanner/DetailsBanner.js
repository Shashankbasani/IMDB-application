import './DetailsBanner.css'

function DetailsBanner({banner}){
    return(
        <div className='bannerCardDetails'>
         <div>
         <img className="bannerCardDetailsimg" src={`https://image.tmdb.org/t/p/w500`+banner.poster_path} />
         </div>
         {  banner.videos &&  <a className='trailer' href={`https://www.youtube.com/watch?v=`+banner.videos.results[0].key} target='_blank'>Watch Trailer</a>}         {/* <div className='bannerCardDetailstitle'>
           {banner.title}
         </div> */}
        </div>
    )
}
export default DetailsBanner;