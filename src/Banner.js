import React ,{useState ,useEffect}from 'react'
import "./Banner.css"

function Banner({fecthUrl}) {
    const [movie, setMovies] = useState([]);

    useEffect(() => {
    
        const fecthingData = async () => {
            try {
              const response = await fetch(fecthUrl);
              const json = await response.json();
              setMovies(json.results[Math.floor(Math.random()*json.results.length-1)])
            //   console.log(json.results[Math.floor(Math.random()*json.results.length-1)]);
              return json;

            } catch (error) {
              console.log("error", error);
            }
          };

        fecthingData();

    }, [fecthUrl])
    

    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
      }

  return (
    <header className='banner' style={{
        backgroundSize:"cover",
        backgroundImage:`url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition:"center center", 
       }}> {/* backgroud img */}

     <div className='banner__contents'>
        <h1 className='banner__title'>{movie?.title || movie?.name || movie?.original_name}</h1>
        
        <div className='banner__buttons'>
          <button className='banner__button'>Play</button>
          <button className='banner__button'>My List</button>
        </div>

         <h1 className='banner__description'> {truncate(movie?.overview, 150)}</h1>
     </div>

     <div className='banner--fadeBottom' />
    </header>
  )
}

export default Banner