import Banner from "../../Banner/Banner";
import Movies from "../../Movie/Movies";
function HomePage(){
    return(
        <>
         <Banner/>
            <h1>Trending Movies</h1>
            <Movies/>
        </>
    )
}
export default HomePage;