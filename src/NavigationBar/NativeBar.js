import './NativeBar.css';
import { Link } from 'react-router-dom';

function NativeBar(){
    return(
        <div className='Navigation'>
            <Link to="/" className='icon'><i className="fas fa-clapperboard" style={{ color: '#74C0FC', fontSize: '50px' }}></i>
            <i className="fas fa-play" style={{ position: 'absolute',color: 'white',left: '15px',top: '22px',fontSize: '18px' }}></i> </Link>
            <Link to={`/`} className='iMovies'>
                
                Movies
            </Link>
            <Link to={`/watchlist`} className='iWatchlist'>
                WatchList
            </Link>
        </div>
    )
}

export default NativeBar